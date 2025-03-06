import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Import Firestore
import { Feather } from "react-native-vector-icons";
import ImageBg from "../../components/background/CreateBudget/imageBg";
import styles from "./createbudget.styles";

const CreateBudget = ({ navigation, route }) => {
  const { budgetType } = route.params;
  const { selectedHabit } = route.params;
  const [userId, setUserId] = useState(null);

  const [step, setStep] = useState(1);
  const [budgetData, setBudgetData] = useState({
    userId: "",
    budgetTitle: "",
    totalBudget: "",
    startBudgetDuration: "",
    endBudgetDuration: "",
    food: "",
    transport: "",
    wants: "",
    savings: "",
    note: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserId(user.uid);
      setBudgetData((prev) => ({ ...prev, userId: user.uid }));
    }
  }, []);

  const handleSaveBudget = async () => {
    try {
      if (!userId) {
        alert("User not found. Please log in again.");
        return;
      }
      const newBudget = {
        ...budgetData,
        budgetType,
        selectedHabit,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "budgets"), newBudget);
      alert("Budget Saved Successfully!");
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Error saving budget:", error);
      alert("Failed to save budget. Please try again.");
    }
  };

  const handleNext = () => {
    if (selectedHabit === "Saver") {
      if (step === 1) setStep(2); // Go to "Savings" first
      else if (step === 2) setStep(3); // Then "Food"
      else if (step === 3) setStep(4); // Then "Transport"
      else if (step === 4) setStep(5); // Then "Wants"
    } else {
      if (step === 1) setStep(2); // Go to "Food" first
      else if (step === 2) setStep(3); // Then "Transport"
      else if (step === 3) setStep(4); // Then "Wants"
      else if (step === 4) setStep(5); // Then "Savings" last
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const budgetColor = budgetType === "Month" ? "#03AED2" : "#F65C78";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -99}
          style={styles.container}
        >
          <ScrollView
            style={[styles.scrollViewContaner, { zIndex: 1 }]}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity>
              <Feather
                style={styles.leftChevron}
                name="chevron-left"
                size={32}
              />
            </TouchableOpacity>
            <Image
              source={require("../../assets/logo_word.png")}
              style={styles.logoImg}
              resizeMode="contain"
            />
            <View
              style={{
                flex: 1,
                zIndex: 1,
                paddingTop: 20,
                marginTop: 120,
                justifyContent: "center",
              }}
            >
              {step === 1 ? (
                <>
                  <Text style={[styles.header]}>Create Budget for a</Text>
                  <Text style={[styles.subHeader, { color: budgetColor }]}>
                    {budgetType}
                  </Text>
                  <Text style={styles.label}>Budget Title</Text>

                  <TextInput
                    placeholder="Enter Budget Title"
                    style={styles.input}
                    value={budgetData.budgetTitle}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, budgetTitle: text })
                    }
                  />
                  <Text style={styles.label}>Total allowance</Text>
                  <TextInput
                    placeholder="Enter Total Budget"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.totalBudget}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, totalBudget: text })
                    }
                  />
                  <Text style={styles.label}>Budget Duration</Text>
                  <View style={styles.budgetDurationWrapper}>
                    <TextInput
                      placeholder="mm/dd/yyyy"
                      style={styles.inputDuration}
                      value={budgetData.startBudgetDuration}
                      onChangeText={(text) =>
                        setBudgetData({
                          ...budgetData,
                          startBudgetDuration: text,
                        })
                      }
                    />
                    <Text
                      style={[
                        styles.label,
                        {
                          textAlignVertical: "center",
                          marginTop: -10,
                          marginHorizontal: 3,
                        },
                      ]}
                    >
                      {" "}
                      until{" "}
                    </Text>

                    <TextInput
                      placeholder="mm/dd/yyyy"
                      style={styles.inputDuration}
                      value={budgetData.endBudgetDuration}
                      onChangeText={(text) =>
                        setBudgetData({
                          ...budgetData,
                          endBudgetDuration: text,
                        })
                      }
                    />
                    <Image
                      source={require("../../assets/icons/calendar.jpg")}
                      style={[
                        styles.bottomImage,
                        {
                          width: 400,
                          height: 200,
                          zIndex: -1,
                          opacity: 0.4,
                        },
                      ]}
                    />
                  </View>
                </>
              ) : (
                <>
                  {/* Display Budget Title & Total Budget */}
                  <View style={styles.labelContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={[styles.labelValue, { textAlign: "center" }]}
                        >
                          {budgetData.budgetTitle}
                        </Text>
                        <Text
                          style={[styles.labelTop, { textAlign: "center" }]}
                        >
                          Budget Title
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[styles.labelValue, { textAlign: "center" }]}
                        >
                          {new Intl.NumberFormat("en-PH", {
                            style: "currency",
                            currency: "PHP",
                          }).format(budgetData.totalBudget || 0)}
                        </Text>

                        <Text
                          style={[styles.labelTop, { textAlign: "center" }]}
                        >
                          {" "}
                          Total Budget
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.labelValue,
                            { textAlign: "right", fontSize: 12 },
                          ]}
                        >
                          {budgetData.startBudgetDuration}
                        </Text>
                        <Text
                          style={[
                            styles.labelValue,
                            { textAlign: "right", fontSize: 12 },
                          ]}
                        >
                          to {budgetData.endBudgetDuration}
                        </Text>
                        <Text
                          style={[styles.labelTop, { textAlign: "center" }]}
                        >
                          Budget Duration
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}

              {step === 2 && selectedHabit === "Saver" && (
                <>
                  <Text style={styles.label}>Savings</Text>
                  <TextInput
                    placeholder="Amount to save"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.savings}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, savings: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/save.png")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 200,
                        left: -10,
                        bottom: -20,
                        zIndex: -1,
                        opacity: 0.3,
                      },
                    ]}
                  />
                </>
              )}

              {/* Step-by-Step Inputs */}
              {step === 2 && selectedHabit !== "Saver" && (
                <View>
                  <Text style={styles.label}>Food</Text>
                  <TextInput
                    placeholder="Food Budget"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.food}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, food: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/food.jpg")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 400,
                        left: -20,
                        bottom: -260,
                        zIndex: -1,
                        opacity: 0.4,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 3 && selectedHabit === "Saver" && (
                <View>
                  <Text style={styles.label}>Food</Text>
                  <TextInput
                    placeholder="Food Budget"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.food}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, food: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/food.jpg")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 400,
                        left: -20,
                        bottom: -260,
                        zIndex: -1,
                        opacity: 0.4,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 3 && selectedHabit !== "Saver" && (
                <View>
                  <Text style={styles.label}>Transportation</Text>
                  <TextInput
                    placeholder="Transport Budget"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.transport}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, transport: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/transpo.jpg")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 260,
                        left: -15,
                        bottom: -290,
                        zIndex: -1,
                        opacity: 0.4,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 4 && selectedHabit === "Saver" && (
                <View>
                  <Text style={styles.label}>Transportation</Text>
                  <TextInput
                    placeholder="Transport Budget"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.transport}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, transport: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/transpo.jpg")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 260,
                        left: -15,
                        bottom: -290,
                        zIndex: -1,
                        opacity: 0.4,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 4 && selectedHabit !== "Saver" && (
                <View style={{ marginTop: 0 }}>
                  <Text style={styles.label}>Wants & Needs (Optional) </Text>
                  <TextInput
                    placeholder="Wants & Needs"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.wants}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, wants: text })
                    }
                  />
                  <Text style={styles.label}>Notes (Optional)</Text>
                  <TextInput
                    placeholder="Additional Notes"
                    style={[styles.input, { height: 80 }]}
                    value={budgetData.note}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, note: text })
                    }
                    multiline
                  />
                  <Image
                    source={require("../../assets/icons/needs.png")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 390,
                        left: -20,
                        bottom: -270,
                        zIndex: -1,
                        opacity: 0.3,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 5 && selectedHabit === "Saver" && (
                <View style={{ marginTop: 0 }}>
                  <Text style={styles.label}>Wants & Needs (Optional) </Text>
                  <TextInput
                    placeholder="Wants & Needs"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.wants}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, wants: text })
                    }
                  />
                  <Text style={styles.label}>Notes (Optional)</Text>
                  <TextInput
                    placeholder="Additional Notes"
                    style={[styles.input, { height: 80 }]}
                    value={budgetData.note}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, note: text })
                    }
                    multiline
                  />
                  <Image
                    source={require("../../assets/icons/needs.png")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 390,
                        left: -20,
                        bottom: -270,
                        zIndex: -1,
                        opacity: 0.3,
                      },
                    ]}
                  />
                </View>
              )}

              {step === 5 && selectedHabit !== "Saver" && (
                <>
                  <Text style={styles.label}>Savings</Text>
                  <TextInput
                    placeholder="Amount to save"
                    keyboardType="numeric"
                    style={styles.input}
                    value={budgetData.savings}
                    onChangeText={(text) =>
                      setBudgetData({ ...budgetData, savings: text })
                    }
                  />
                  <Image
                    source={require("../../assets/icons/save.png")}
                    style={[
                      {
                        position: "absolute",
                        width: "110%",
                        height: 200,
                        left: -10,
                        bottom: -20,
                        zIndex: -1,
                        opacity: 0.3,
                      },
                    ]}
                  />
                </>
              )}

              {/* Navigation Buttons */}
              <View style={styles.buttonWrapper}>
                {step > 1 && (
                  <TouchableOpacity
                    style={styles.prevButton}
                    onPress={handleBack}
                  >
                    <Text style={styles.nextButtonText}>Back</Text>
                  </TouchableOpacity>
                )}

                {step < 5 ? (
                  <TouchableOpacity
                    style={[styles.nextButton]}
                    onPress={handleNext}
                  >
                    <Text style={styles.nextButtonText}>Next</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={handleSaveBudget}
                  >
                    <Text style={styles.nextButtonText}>Submit</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
          {/* <ImageBg style={{ zIndex: -1 }} /> */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreateBudget;

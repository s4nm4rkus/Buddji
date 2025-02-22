import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./createbudget.styles";

const CreateBudget = ({ navigation, route }) => {
  const { budgetType } = route.params; // Get Week/Month selection

  const [step, setStep] = useState(1);
  const [budgetData, setBudgetData] = useState({
    title: "",
    totalBudget: "",
    startBudgetDuration: "",
    endBudgetDuration: "",
    food: "",
    transport: "",
    necessities: "",
    wants: "",
    savings: "",
    note: "",
  });

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Budget Created Successfully!");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Budget Title & Total Budget (Only input on Step 1, Display in Steps 2-5) */}
      {step === 1 ? (
        <>
          <Text style={styles.header}>Create Budget ({budgetType})</Text>
          <Text>Budget Title</Text>

          <TextInput
            placeholder="Enter Budget Title"
            style={styles.input}
            value={budgetData.title}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, title: text })
            }
          />
          <Text>Total allowance</Text>
          <TextInput
            placeholder="Enter Total Budget"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.totalBudget}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, totalBudget: text })
            }
          />
          <Text>Budget Duration</Text>
          <View style={styles.budgetDurationWrapper}>
            <TextInput
              placeholder="month/day/year"
              style={styles.inputDuration}
              value={budgetData.startBudgetDuration}
              onChangeText={(text) =>
                setBudgetData({ ...budgetData, startBudgetDuration: text })
              }
            />
            <Text style={{ textAlignVertical: "center", marginTop: -10 }}>
              {" "}
              until{" "}
            </Text>

            <TextInput
              placeholder="month/day/year"
              style={styles.inputDuration}
              value={budgetData.endBudgetDuration}
              onChangeText={(text) =>
                setBudgetData({ ...budgetData, endBudgetDuration: text })
              }
            />
          </View>
        </>
      ) : (
        <>
          {/* Display Budget Title & Total Budget */}
          <Text style={styles.label}>Budget Title: {budgetData.title}</Text>
          <Text style={styles.label}>
            Total Budget: {budgetData.totalBudget}
          </Text>
          <Text style={styles.label}>
            Budget Duration: {budgetData.startBudgetDuration} to{" "}
            {budgetData.endBudgetDuration}
          </Text>
        </>
      )}

      {/* Step-by-Step Inputs */}
      {step === 2 && (
        <View>
          <Text>Food</Text>
          <TextInput
            placeholder="Food Budget"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.food}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, food: text })
            }
          />
        </View>
      )}

      {step === 3 && (
        <View>
          <Text>Transportation</Text>
          <TextInput
            placeholder="Transport Budget"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.transport}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, transport: text })
            }
          />
        </View>
      )}

      {step === 4 && (
        <View>
          <Text>Necessities</Text>
          <TextInput
            placeholder="Other Necessities"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.necessities}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, necessities: text })
            }
          />
        </View>
      )}

      {step === 5 && (
        <>
          <Text>Savings</Text>
          <TextInput
            placeholder="Amount to save"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.savings}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, savings: text })
            }
          />
          <Text>Wants & Needs (Optional) </Text>
          <TextInput
            placeholder="Wants & Needs"
            keyboardType="numeric"
            style={styles.input}
            value={budgetData.wants}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, wants: text })
            }
          />
          <Text>Notes (Optional)</Text>
          <TextInput
            placeholder="Additional Notes"
            style={[styles.input, { height: 80 }]}
            value={budgetData.note}
            onChangeText={(text) =>
              setBudgetData({ ...budgetData, note: text })
            }
            multiline
          />
        </>
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonWrapper}>
        {step > 1 && (
          <TouchableOpacity style={styles.prevButton} onPress={handleBack}>
            <Text>Back</Text>
          </TouchableOpacity>
        )}

        {step < 5 ? (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateBudget;

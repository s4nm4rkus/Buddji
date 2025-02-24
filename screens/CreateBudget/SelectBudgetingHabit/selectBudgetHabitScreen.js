import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ImageBg from "../../../components/background/Welcome/imageBg";
import styles from "./selectbudgeting.style";

const SelectBudgetingHabitScreen = ({ navigation, route }) => {
  const { budgetType } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleBudgetCreation = (habit) => {
    setModalVisible(false);
    navigation.navigate("CreateBudgetScreen", {
      budgetType,
      selectedHabit: habit,
    });
  };

  const openModal = (habit) => {
    setSelectedHabit(habit);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
    setSelectedHabit(null);
  };

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.directionContainer}>
          <Text style={styles.directionTitle}>
            How do you handle your money?
          </Text>
          <Text style={styles.directionText}>
            Choose the style that fits your budgeting habits to continue.
          </Text>
        </View>
        <View style={styles.habitContainer}>
          <TouchableOpacity
            onPress={() => openModal("Saver")}
            style={styles.saverContainer}
          >
            <View style={{ width: 170, height: 100, marginLeft: 10 }}>
              <Text style={styles.habitTitle}>Saver</Text>
              <Text style={styles.habitDescription}>
                Prioritize saving first, then manage expenses with what’s left.
              </Text>
            </View>
            <Image
              source={require("../../../assets/icons/saver.png")}
              style={{ width: 130, height: 110 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.spenderContainer}
            onPress={() => openModal("Spender")}
          >
            <View style={{ width: 170, height: 100, marginLeft: 10 }}>
              <Text style={styles.habitTitle}>Spender</Text>
              <Text style={styles.habitDescription}>
                Focus on spending first, and save whatever remains.
              </Text>
            </View>
            <Image
              source={require("../../../assets/icons/spender.png")}
              style={{ width: 130, height: 110, transform: [{ scaleX: -1 }] }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.strategistContainer}
            onPress={() => openModal("Strategist")}
          >
            <View style={{ width: 170, height: 100, marginLeft: 10 }}>
              <Text style={styles.habitTitle}>Strategist</Text>
              <Text style={styles.habitDescription}>
                Focus on saving a lot and keeping spending to a minimum.
              </Text>
            </View>
            <Image
              source={require("../../../assets/icons/strategist.png")}
              style={{ width: 130, height: 110 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Cancel create</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {selectedHabit === "Saver" && (
                  <>
                    <TouchableOpacity onPress={closeModal}>
                      <Feather
                        style={styles.leftChevron}
                        name="chevron-left"
                        size={28}
                        color="black"
                      />
                    </TouchableOpacity>
                    <View style={styles.modalTextContainer}>
                      <Text style={styles.modalTextHeader}>Saver</Text>
                      <Text style={styles.modalText}>
                        Focus on saving a lot and keeping spending to a minimum.
                      </Text>
                      {/* <Text style={styles.modalText}>
                        Selected Habit: {selectedHabit}
                        Selected BudgetType: {budgetType}
                      </Text> */}
                    </View>
                    <ScrollView>
                      <View style={styles.tipsContainer}>
                        <Text style={styles.tipsdHeader}>Tips:</Text>

                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          1. Save a Fixed Percentage
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Set aside at least 20% of your income or allowance
                          before spending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          2. Create a Spending Plan
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Budget based on what remains after saving, covering
                          essentials first.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          3. Track and Adjust
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Keep a record of expenses to avoid overspending and
                          adjust as needed.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          4. Avoid Unnecessary Purchases
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Differentiate between wants and needs to prevent
                          impulse spending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          5. Set Savings Goals
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Whether short-term (emergencies) or long-term
                          (investments), have clear financial targets.
                        </Text>
                      </View>
                    </ScrollView>
                    <Image
                      source={require("../../../assets/icons/saver.png")}
                      style={[
                        styles.bottomImage,
                        {
                          width: 380,
                          height: 300,
                          right: -50,
                          zIndex: -1,
                          opacity: 0.5,
                        },
                      ]}
                    />
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#17975C", bottom: 25 },
                      ]}
                      onPress={() => handleBudgetCreation(selectedHabit)}
                    >
                      <Text style={styles.textBudgetOption}>
                        Select this Habit
                      </Text>
                    </TouchableOpacity>
                  </>
                )}

                {selectedHabit === "Spender" && (
                  <>
                    <TouchableOpacity onPress={closeModal}>
                      <Feather
                        style={styles.leftChevron}
                        name="chevron-left"
                        size={28}
                        color="black"
                      />
                    </TouchableOpacity>
                    <View style={styles.modalTextContainer}>
                      <Text style={styles.modalTextHeader}>Spender</Text>
                      <Text style={styles.modalText}>
                        Focus on saving a lot and keeping spending to a minimum.
                      </Text>
                      {/* <Text style={styles.modalText}>
                        Selected Habit: {selectedHabit}
                        Selected BudgetType: {budgetType}
                      </Text> */}
                    </View>
                    <ScrollView>
                      <View style={styles.tipsContainer}>
                        <Text style={styles.tipsdHeader}>Tips:</Text>

                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          1. Set a Spending Limit
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Decide how much you can realistically spend each month
                          without overspending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          2. Track Expenses
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Monitor where your money goes to avoid unnecessary
                          spending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          3. Use the 80/20 Rule
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Spend up to 80% of your income/allowance and save at
                          least 20%.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          4. Prioritize Needs Over Wants
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Cover essentials first (bills, food, transportation)
                          before spending on luxuries.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          5. Automate Savings
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Set up an automatic transfer to savings so you’re not
                          tempted to spend everything.
                        </Text>
                      </View>
                    </ScrollView>
                    <Image
                      source={require("../../../assets/icons/spender.png")}
                      style={[
                        styles.bottomImage,
                        {
                          width: 340,
                          height: 280,
                          right: -35,
                          zIndex: -1,
                          opacity: 0.4,
                          transform: [{ scaleX: -1 }],
                        },
                      ]}
                    />
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#17975C", bottom: 25 },
                      ]}
                      onPress={() => handleBudgetCreation(selectedHabit)}
                    >
                      <Text style={styles.textBudgetOption}>
                        Select this Habit
                      </Text>
                    </TouchableOpacity>
                  </>
                )}

                {selectedHabit === "Strategist" && (
                  <>
                    <TouchableOpacity onPress={closeModal}>
                      <Feather
                        style={styles.leftChevron}
                        name="chevron-left"
                        size={28}
                        color="black"
                      />
                    </TouchableOpacity>
                    <View style={styles.modalTextContainer}>
                      <Text style={styles.modalTextHeader}>Strategist</Text>
                      <Text style={styles.modalText}>
                        Focus on saving a lot and keeping spending to a minimum.
                      </Text>
                      {/* <Text style={styles.modalText}>
                        Selected Habit: {selectedHabit}
                        Selected BudgetType: {budgetType}
                      </Text> */}
                    </View>
                    <ScrollView>
                      <View style={styles.tipsContainer}>
                        <Text style={styles.tipsdHeader}>Tips:</Text>

                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          1. Save First, Spend Later
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Automatically set aside money for savings before
                          spending on anything else.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          2. Stick to a Strict Budget
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Plan your expenses and track every peso to avoid
                          unnecessary spending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          3. Cut Unnecessary Costs
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Plan your expenses and track every peso to avoid
                          unnecessary spending.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          4. Avoid Impulse Buying
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Wait before making non-essential purchases to see if
                          you really need them.
                        </Text>
                        <Text
                          style={[styles.modalText, { fontFamily: "InBold" }]}
                        >
                          5. Invest for Growth
                        </Text>
                        <Text style={[styles.modalText, { marginBottom: 10 }]}>
                          Put savings into investments that generate passive
                          income instead of letting money sit idle.
                        </Text>
                      </View>
                    </ScrollView>
                    <Image
                      source={require("../../../assets/icons/strategist.png")}
                      style={[
                        styles.bottomImage,
                        {
                          width: 330,
                          height: 290,
                          right: -30,
                          zIndex: -1,
                          opacity: 0.3,
                        },
                      ]}
                    />
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#17975C" },
                      ]}
                      onPress={() => handleBudgetCreation(selectedHabit)}
                    >
                      <Text style={styles.textBudgetOption}>
                        Select this Habit
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <ImageBg style={{ zIndex: -1 }} />
    </SafeAreaView>
  );
};

export default SelectBudgetingHabitScreen;

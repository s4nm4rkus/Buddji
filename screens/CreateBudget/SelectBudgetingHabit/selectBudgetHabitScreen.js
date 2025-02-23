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
} from "react-native";
import ImageBg from "../../../components/background/Welcome/imageBg";
import styles from "./selectbudgeting.style";

const SelectBudgetingHabitScreen = ({ navigation, route }) => {
  const { budgetType } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleBudgetCreation = () => {
    setModalVisible(false);
    navigation.navigate("CreateBudgetScreen", { budgetType, selectedHabit });
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
              style={{ width: 130, height: 110 }}
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
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {selectedHabit === "Saver" && (
                  <>
                    <Text style={styles.modalTextHeader}>Saver Habit</Text>
                    <Text style={styles.modalText}>
                      As a saver, you prioritize saving before spending.
                    </Text>
                    <Text style={styles.modalText}>
                      Selected Habit: {selectedHabit}
                      Selected BudgetType: {budgetType}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#F65C78" },
                      ]}
                      onPress={closeModal}
                    >
                      <Text style={styles.textBudgetOption}>Got it!</Text>
                    </TouchableOpacity>
                  </>
                )}

                {selectedHabit === "Spender" && (
                  <>
                    <Text style={styles.modalTextHeader}>Spender Habit</Text>
                    <Text style={styles.modalText}>
                      As a spender, you enjoy spending first and saving later.
                    </Text>
                    <Text style={styles.modalText}>
                      Selected Habit: {selectedHabit}
                      Selected BudgetType: {budgetType}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#03AED2" },
                      ]}
                      onPress={closeModal}
                    >
                      <Text style={styles.textBudgetOption}>Understood</Text>
                    </TouchableOpacity>
                  </>
                )}

                {selectedHabit === "Strategist" && (
                  <>
                    <Text style={styles.modalTextHeader}>Strategist Habit</Text>
                    <Text style={styles.modalText}>
                      As a strategist, you manage both saving and spending
                      wisely.
                    </Text>
                    <Text style={styles.modalText}>
                      Selected Habit: {selectedHabit}
                      Selected BudgetType: {budgetType}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.budgetOption,
                        { backgroundColor: "#FFD700" },
                      ]}
                      onPress={closeModal}
                    >
                      <Text style={styles.textBudgetOption}>Proceed</Text>
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

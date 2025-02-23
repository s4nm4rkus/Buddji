import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { CommonActions } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./header/header";
import styles from "./home.style";
import { Feather } from "@expo/vector-icons";

// import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const [data, setData] = useState([
    { id: "1", title: "Week" },
    { id: "2", title: "Week" },
    { id: "3", title: "Week" },
    { id: "4", title: "Week" },
    { id: "5", title: "Week" },
    { id: "6", title: "Week" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.cardContainerBudget}>
      <TouchableOpacity style={[styles.budgetCard]}>
        <View style={styles.cardContainer}>
          <Feather
            style={styles.rightChevron}
            name="chevron-right"
            size={24}
            color="black"
          />
          <View style={styles.budgetNameWrapper}>
            <Text style={styles.budgetCattegory}>{item.title}</Text>
            <Text style={styles.budgetText}> | For </Text>
            <Text style={styles.budgetDate}>January 1</Text>
            <Text style={styles.budgetText}> to </Text>
            <Text style={styles.budgetDate}>January 7</Text>
          </View>
          <Text style={styles.budgetName}>Budget Sample Name</Text>
          <Text style={styles.budgetTotal}>P 2,980.00</Text>
          <Text style={styles.budgetTotalSub}>- total allowance</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const handleBudgetCreation = (type) => {
    setModalVisible(false);
    navigation.navigate("SelectBudgetingHabitScreen", { budgetType: type });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "WelcomeScreen" }],
        })
      );
    });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.dashboardContainer}>
        <View style={styles.dashboardContainer}>
          <StatusBar style="auto" />
          <Header />
          <View style={styles.budgetListContainer}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "InSemiBold",
                marginBottom: 5,
              }}
            >
              My budget list
            </Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              onEndReached={() => console.log("Load more items")}
              onEndReachedThreshold={0.5}
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={styles.budgetList}
              ListEmptyComponent={
                <Text style={styles.emptyListText}>No items available</Text>
              }
            />
          </View>
          <TouchableOpacity
            style={styles.addBudgetButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.modalContainer}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTextHeader}>
                    Create new budget for...
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.budgetOption,
                      { backgroundColor: "#F65C78" },
                    ]}
                    onPress={() => handleBudgetCreation("Week")}
                  >
                    <Text style={styles.textBudgetOption}>Week</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.budgetOption,
                      { backgroundColor: "#03AED2" },
                    ]}
                    // onPress={handleLogout}
                    onPress={() => handleBudgetCreation("Month")}
                  >
                    <Text style={styles.textBudgetOption}>Month</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

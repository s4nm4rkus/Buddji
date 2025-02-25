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
  ActivityIndicator,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { fetchUserBudgets } from "../../../services/firestoreServices";
import { CommonActions } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./header/header";
import styles from "./home.style";
import { Feather } from "@expo/vector-icons";

// import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBudgets = async () => {
      setLoading(true);
      try {
        const budgets = await fetchUserBudgets();
        setData(budgets);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      } finally {
        setLoading(false);
      }
    };

    getBudgets();
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const budgets = await fetchUserBudgets();
    setData(budgets);
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    const budgetColor = item.budgetType === "Month" ? "#03AED2" : "#F65C78";
    return (
      <View style={styles.cardContainerBudget}>
        <TouchableOpacity style={[styles.budgetCard]}>
          <View
            style={[styles.cardContainer, { borderRightColor: budgetColor }]}
          >
            <Feather
              style={styles.rightChevron}
              name="chevron-right"
              size={24}
              color="black"
            />
            <View style={styles.budgetNameWrapper}>
              <Text
                style={[
                  styles.budgetCattegory,
                  {
                    color: item.budgetType === "Month" ? "#03AED2" : "#F65C78",
                  },
                ]}
              >
                {item.budgetType}
              </Text>
              <Text style={styles.budgetText}> | For </Text>
              <Text style={styles.budgetDate}>{item.startBudgetDuration}</Text>
              <Text style={styles.budgetText}> to </Text>
              <Text style={styles.budgetDate}>{item.endBudgetDuration}</Text>
            </View>
            <Text style={styles.budgetName}>{item.budgetTitle}</Text>
            <Text style={styles.budgetTotal}>P {item.totalBudget}.00</Text>
            <Text style={styles.budgetTotalSub}>- total allowance</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
                position: "absolute",
                fontSize: 16,
                fontFamily: "InSemiBold",
                top: 10,
                left: 20,
              }}
            >
              My budget list
            </Text>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#17975C"
                style={{ marginTop: 20 }}
              />
            ) : (
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
            )}
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

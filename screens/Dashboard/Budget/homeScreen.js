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
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.budgetCard]}>
      <View style={styles.rightArrow}></View>
      <View style={styles.cardContainer}>
        <View style={styles.budgetNameWrapper}>
          <Text>{item.title}</Text>
          <Text style={styles.budgetName}></Text>
          <Text style={styles.budgetCattegory}></Text>
        </View>
        <View style={styles.budgetTotalWrapper}>
          <Text style={styles.budgetTotal}></Text>
          <Text style={styles.budgetTotalSub}>| total allowance</Text>
        </View>
        <View style={styles.budgetDurationWrapper}>
          <Text style={styles.budgetText}> For </Text>
          <Text style={styles.budgetDate}></Text>
          <Text style={styles.budgetText}> - </Text>
          <Text style={styles.budgetDate}></Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
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
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              onEndReached={() => console.log("Load more items")}
              onEndReachedThreshold={0.5}
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={styles.budgetList}
              ListHeaderComponent={
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Header</Text>
              }
              ListEmptyComponent={
                <Text style={styles.emptyListText}>No items available</Text>
              }
              ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: "#ccc" }} />
              )}
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
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textBudgetOption}>Week</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.budgetOption,
                      { backgroundColor: "#03AED2" },
                    ]}
                    onPress={() => setModalVisible(!modalVisible)}
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

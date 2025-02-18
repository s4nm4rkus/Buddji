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
    <TouchableOpacity style={{ padding: 20, borderBottomWidth: 1 }}>
      <Text>{item.title}</Text>
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
          <View style={styles.modalContainer}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTextHeader}>
                  Create new budget for...
                </Text>
                <TouchableOpacity
                  style={[styles.budgetOption]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Week</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.budgetOption]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Month</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

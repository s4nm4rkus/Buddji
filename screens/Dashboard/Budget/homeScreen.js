import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { CommonActions } from "@react-navigation/native";
import Header from "./header/header";
import styles from "./home.style";
// import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Disable the back button when this screen is focused
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Prevent going back
        return true; // Returning true prevents the default back action
      }
    );

    // Clean up the event listener when leaving the screen
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
          routes: [{ name: "WelcomeScreen" }], // Set this to your initial screen in `AuthStack`
        })
      );
    });
  };
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <View style={styles.dashboardContainer}>
        <StatusBar style="auto" />
        <Header />
        <View style={styles.budgetListContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem} // ✅ Ensure this is properly used
            onEndReached={() => console.log("Load more items")}
            onEndReachedThreshold={0.5}
            refreshing={refreshing} // ✅ Only needed if `onRefresh` is present
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
        <TouchableOpacity style={styles.addBudgetButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

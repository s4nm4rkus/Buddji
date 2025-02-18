import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { CommonActions } from "@react-navigation/native";
import Header from "./header/header";
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
    <View>
      <StatusBar style="auto" />
      <Header />

      {/* <TouchableOpacity
        onPress={handleLogout}
        style={{ marginTop: 20, backgroundColor: "red", padding: 10 }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;

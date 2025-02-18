import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome/welcomeScreen";
import HomeScreen from "../screens/Dashboard/Budget/homeScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUp/signUpScreen";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Stack = createStackNavigator();

import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage.getAllKeys().then((keys) => {
  console.log("Stored keys:", keys);
});

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
//   </Stack.Navigator>
// );

// const AppStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: true }}>
//     <Stack.Screen name="HomeScreen" component={HomeScreen} />
//   </Stack.Navigator>
// );

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user ? "Logged In" : "Logged Out");
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    // <NavigationContainer>
    //   {isLoggedIn ? <AuthStack /> : <AppStack />}
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "HomeScreen" : "WelcomeScreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          headerShown={false}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          headerShown={false}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          headerShown={false}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerLeft: null,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

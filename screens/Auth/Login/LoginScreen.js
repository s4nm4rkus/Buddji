import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ImageBg from "../../../components/background/Login/imageBg";
import styles from "./login.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleLogin = async () => {
  //   if (email && password) {
  //     setLoading(true);
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password);
  //       setLoading(false);
  //       navigation.replace("HomeScreen");
  //     } catch (error) {
  //       setLoading(false);
  //       Alert.alert("Login Failed", error.message);
  //     }
  //   } else {
  //     Alert.alert("Input Error", "Please fill in both fields");
  //   }
  // };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Input Error", "Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigation.replace("HomeScreen");
    } catch (error) {
      let errorMessage = "Login Failed. Please try again.";

      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }

      Alert.alert("Login Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -90} // Adjust as needed
          style={styles.container}
        >
          {/* <View>
            <Image
              style={styles.logoImage}
              source={require("../../../assets/backgrounds/buddji_dark.png")}
            ></Image>
          </View> */}
          <Text style={[styles.logoText, { zIndex: 1 }]}>LOGO</Text>
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { zIndex: 1 }]}>Login</Text>
            </View>
            <View style={styles.textInputsContainer}>
              <View style={styles.emailInputContainer}>
                <Text style={styles.textLabel}>Email</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Enter your email"
                      style={styles.inInput}
                      onChangeText={(text) => setEmail(text)}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.passwordInputContainer}>
                <Text style={styles.textLabel}>Password</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Enter your password"
                      style={styles.inInput}
                      secureTextEntry={!passwordVisible}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                      style={styles.eyeButtonContainer}
                      onPress={togglePasswordVisibility}
                    >
                      <Feather
                        style={styles.passwordEye}
                        name={passwordVisible ? "eye" : "eye-off"}
                        size={19}
                        color={"#000"}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgotYourPasswordText}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
                <View style={styles.dontHaveanAccountContainer}>
                  <Text style={styles.dontHaveanAccount}>
                    Don't have an account yet?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                  >
                    <Text style={styles.dontHaveanAccountSignUp}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <StatusBar style="auto" />

            {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
          </View>

          <View style={styles.loginButtonContainer}>
            <TouchableOpacity
              style={[styles.loginButton, { zIndex: 2 }]}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? "Logging in..." : "Login"}
              </Text>
            </TouchableOpacity>
          </View>
          <ImageBg style={{ zIndex: -1 }} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ImageBg from "../../../components/background/SignUp/imageBg";
import styles from "./signup.style";
import { auth, createUserWithEmailAndPassword } from "../../../firebaseConfig";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Password do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Alert.alert("Success", `Welcome, ${firstName}!`);
      navigation.navigate("LoginScreen");
    } catch (error) {
      Alert.alert("Sign Up Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -99}
          style={styles.container}
        >
          <ScrollView
            style={[styles.scrollViewContaner, { zIndex: 1 }]}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/logo_word.png")}
                style={{
                  width: 200,
                  height: 200,

                  zIndex: 1,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.container}>
              <View style={styles.loginContainer}>
                <Text style={[styles.loginText, { zIndex: 1 }]}>Sign Up</Text>
              </View>
              <View style={styles.textInputsContainer}>
                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>First Name</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="Enter your first name"
                        style={styles.inInput}
                        value={firstName}
                        onChangeText={setFirstName}
                        autoCapitalize="words"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>Last Name</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="Enter your last name"
                        style={styles.inInput}
                        value={lastName}
                        onChangeText={setLastName}
                        autoCapitalize="words"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>Enter your Email</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="e.g (myemail@gmail.com)"
                        style={styles.inInputEmail}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>Create Password</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="Create your password"
                        style={styles.inInputPassword}
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
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
                </View>

                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>Confirm Password</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="Confirm your password"
                        style={styles.inInputPassword}
                        secureTextEntry={!passwordVisible}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        autoCapitalize="none"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.dontHaveanAccountContainer}>
                  <Text style={styles.dontHaveanAccount}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text style={styles.dontHaveanAccountSignUp}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <StatusBar style="auto" />
            </View>

            <View style={styles.loginButtonContainer}>
              <TouchableOpacity
                style={[styles.loginButton, { zIndex: 2 }]}
                onPress={handleSignUp}
              >
                <Text style={styles.loginButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ImageBg style={{ zIndex: -1 }} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;

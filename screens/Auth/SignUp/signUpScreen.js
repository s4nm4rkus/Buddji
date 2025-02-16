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
import ImageBg from "../../../components/background/SignUp/imageBg";
import styles from "./signup.style";

const SignUpScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -99} // Adjust as needed
          style={styles.container}
        >
          <ScrollView
            style={[styles.scrollViewContaner, { zIndex: 1 }]}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* <View>
            <Image
              style={styles.logoImage}
              source={require("../../../assets/backgrounds/buddji_dark.png")}
            ></Image>
          </View> */}
            <View style={styles.logoContainer}>
              <Text style={[styles.logoText, { zIndex: 1 }]}>LOGO</Text>
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
                        // onChangeText={(text) => setEmailOrMobile(text)}
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
                        // onChangeText={(text) => setEmailOrMobile(text)}
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
                        style={styles.inInput}
                        // onChangeText={(text) => setEmailOrMobile(text)}
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
                        style={styles.inInput}
                        // onChangeText={(text) => setEmailOrMobile(text)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.emailInputContainer}>
                  <Text style={styles.textLabel}>Confirm Password</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="Confirm your password"
                        style={styles.inInput}
                        // onChangeText={(text) => setEmailOrMobile(text)}
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
                onPress={() => navigation.navigate("LoginScreen")}
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

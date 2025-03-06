import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import ImageBg from "../../components/background/Welcome/imageBg";
import styles from "./welcome.style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Image
        source={require("../../assets/logo_word.png")}
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          top: "5%",
          zIndex: 1,
        }}
        resizeMode="contain"
      />

      <View style={styles.container}>
        <Text style={[styles.welcomeText, { zIndex: 1 }]}>Welcome!</Text>
        <Text style={[styles.welcomeGreet, { zIndex: 1 }]}>
          Your money, your rules! Take charge of your budget and achieve your
          financial goals with ease.
        </Text>
        <StatusBar style="auto" />
        <View style={styles.welcomeButtonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBg style={{ zIndex: -1 }} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

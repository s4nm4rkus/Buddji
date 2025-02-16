import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import ImageBg from "../../components/background/Welcome/imageBg";
import styles from "./welcome.style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={[styles.logoText, { zIndex: 1 }]}>LOGO</Text>
      <View style={styles.container}>
        <Text style={[styles.welcomeText, { zIndex: 1 }]}>Welcome!</Text>
        <Text style={[styles.welcomeGreet, { zIndex: 1 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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

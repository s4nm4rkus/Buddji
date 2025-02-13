import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import ImageBg from "../../components/background/imageBg";
import styles from "./welcome.style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={[styles.welcomeText, { zIndex: 1 }]}>Welcome!</Text>
        <Text style={[styles.welcomeGreet, { zIndex: 1 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        {/* <StatusBar style="auto" /> */}
      </View>
      <ImageBg style={{ zIndex: -1 }} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

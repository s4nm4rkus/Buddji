import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from "./header.style";
import { Feather } from "@expo/vector-icons";
import { auth } from "../../../../firebaseConfig";

const Header = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            auth.signOut().then(() => {
              navigation.replace("WelcomeScreen");
              navigation.reset({
                index: 0,
                routes: [{ name: "WelcomeScreen" }],
              });
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.arrowLeftContainer}>
          <Text style={styles.titleHeader}>Budget</Text>
        </View>
        <View style={styles.arrowLeftContainer}>
          <TouchableOpacity style={styles.logoutHeader} onPress={handleLogout}>
            <Feather name="log-out" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

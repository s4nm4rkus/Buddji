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
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrowLeftContainer}
          >
            <Feather name="chevron-left" size={30} color="white" />
            <Text style={styles.titleHeader}>Budget list</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.logoutHeader} onPress={handleLogout}>
            <Feather name="log-out" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

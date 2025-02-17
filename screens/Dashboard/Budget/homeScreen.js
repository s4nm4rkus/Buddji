import { View, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace("LoginScreen");
  };

  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{ marginTop: 20, backgroundColor: "red", padding: 10 }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

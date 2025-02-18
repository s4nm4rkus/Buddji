import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./header.style";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.arrowLeftContainer}>
          <Text style={styles.titleHeader}>My Budget</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

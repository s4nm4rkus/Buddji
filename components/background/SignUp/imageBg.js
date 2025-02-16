import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./imageBg.style";

const imageBg = () => {
  return (
    <View style={styles.viewBg}>
      <ImageBackground
        source={require("../../../assets/backgrounds/Vector_4.png")}
        style={styles.imageBg2}
      ></ImageBackground>
      <ImageBackground
        source={require("../../../assets/backgrounds/Vector_3.png")}
        style={styles.imageBg}
      ></ImageBackground>
    </View>
  );
};

export default imageBg;

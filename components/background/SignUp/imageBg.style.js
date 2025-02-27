import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewBg: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "100%",
    height: "150%",
    zIndex: 0,
  },
  imageBg: {
    position: "absolute", // Position the background image at the bottom
    top: -170,
    right: 0,
    width: "100%",
    height: 500,
    zIndex: 0,
  },
  imageBg2: {
    position: "absolute", // Position the background image at the bottom
    top: -50,
    left: 0,
    width: "100%",
    height: 500,
    zIndex: 0,
  },
});
export default styles;

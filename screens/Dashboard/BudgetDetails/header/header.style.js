import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},

  headerContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0A4B2D",
  },

  titleHeader: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "InSemiBold",
  },

  logoutHeader: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "InSemiBold",
    marginRight: 20,
  },

  arrowLeftContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
});

export default styles;

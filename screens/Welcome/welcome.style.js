import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    marginTop: 100,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  welcomeText: {
    paddingTop: 300,
    fontFamily: "InSemiBold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
    zIndex: 1,
    elevation: 2,
  },

  welcomeGreet: {
    marginTop: 20,
    width: 250,
    textAlign: "center",
    fontFamily: "InLight",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "#fff",
    elevation: 2,
  },
});

export default styles;

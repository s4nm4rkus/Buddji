import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    padding: 20,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  logoText: {
    position: "absolute",
    top: 120,
    fontFamily: "InBlack",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    color: "#0A4B2D",
    zIndex: 1,
    elevation: 2,
  },

  welcomeText: {
    marginTop: 30,
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

  welcomeButtonContainer: {
    position: "absolute",
    bottom: 60,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
  },

  signUpButtonText: {
    fontSize: 16,
    fontFamily: "InBold",
    textAlign: "center",
    color: "#0A4B2D",
  },

  signUpButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 4,
  },

  loginButtonText: {
    fontSize: 16,
    fontFamily: "InBold",
    textAlign: "center",
    color: "#fff",
  },

  loginButton: {
    borderWidth: 0.8,
    borderColor: "#fff",
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default styles;

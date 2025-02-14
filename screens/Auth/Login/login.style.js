import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  keyBoardAvoidingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  logoText: {
    marginTop: 150,
    fontFamily: "InBlack",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    color: "#fff",
    zIndex: 1,
    elevation: 2,
  },

  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  loginText: {
    fontFamily: "InBold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: "#0A4B2D",
    zIndex: 1,
    elevation: 2,
  },

  textInputsContainer: {
    width: "80%",

    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },

  emailInputContainer: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },

  passwordInputContainer: {
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
    alignContent: "center",
  },

  inputContainer: {
    justifyContent: "center",
    alignContent: "center",
  },

  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },

  textLabel: {
    fontFamily: "InRegular",
    fontSize: 14,
  },

  inInput: {
    width: "100%",
    paddingHorizontal: 8,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#DFDFDF",
    borderRadius: 8,
    elevation: 4,
  },

  forgotYourPasswordText: {
    fontFamily: "InRegular",
    fontSize: 14,
  },

  loginButtonContainer: {
    position: "absolute",
    bottom: 50,
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
  },

  loginButtonText: {
    fontSize: 16,
    fontFamily: "InBold",
    textAlign: "center",
    color: "#fff",
  },

  loginButton: {
    backgroundColor: "#0A4B2D",
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 4,
  },
});

export default styles;

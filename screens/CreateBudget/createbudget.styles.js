import { reloadAppAsync } from "expo";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  scrollViewContaner: {
    width: "100%",

    padding: 20,
  },

  logoImg: {
    width: 180,
    height: 75,
    left: "22%",
    top: "15%",
    position: "absolute",
  },

  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    zIndex: 1,
  },
  leftChevron: {
    color: "green",
    position: "absolute",
    padding: 2,
    top: 30,
    left: -5,
    zIndex: 1,
  },
  header: {
    color: "#000",
    fontSize: 16,
    fontFamily: "InRegular",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "InBold",
    textAlign: "center",
    marginBottom: 40,
  },

  labelValue: {
    fontFamily: "InBold",
    fontSize: 14,
  },

  label: {
    fontFamily: "InRegular",
    fontSize: 14,
    marginBottom: 5,
  },

  labelTop: {
    fontFamily: "InRegular",
    fontSize: 10,
    marginBottom: 2,
  },

  labelContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: -50,
    elevation: 1,
  },

  input: {
    height: 45,
    fontFamily: "InRegular",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  inputDuration: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  prevButton: {
    justifyContent: "center",
    backgroundColor: "#FF5555",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    elevation: 2,
  },

  nextButton: {
    justifyContent: "center",
    backgroundColor: "#17975C",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    elevation: 2,
  },

  nextButtonText: {
    color: "white",
    fontFamily: "InSemiBold",
    fontSize: 16,
  },

  submitButton: {
    justifyContent: "center",
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  budgetDurationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },

  bottomImage: {
    position: "absolute",
    bottom: -200,
    left: -10,
  },
});
export default styles;

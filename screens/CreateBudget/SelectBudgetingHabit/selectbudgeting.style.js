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
    zIndex: 1,
  },

  directionContainer: {
    marginTop: 50,
    marginBottom: 40,
  },

  directionTitle: {
    textAlign: "left",
    fontFamily: "InBold",
    fontSize: 18,
  },

  directionText: {
    fontFamily: "InRegular",
    fontSize: 16,
  },

  habitContainer: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },

  saverContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    height: 130,
    width: "100%",
    marginBottom: 30,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#1D1D1D",
    elevation: 4,
    flexDirection: "row",
  },
  spenderContainer: {
    backgroundColor: "#fff",
    height: 130,
    width: "100%",
    marginBottom: 30,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#1D1D1D",
    elevation: 4,
    flexDirection: "row",
  },
  strategistContainer: {
    backgroundColor: "#fff",
    height: 130,
    width: "100%",
    marginBottom: 30,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#1D1D1D",
    elevation: 4,
    flexDirection: "row",
  },

  habitTitle: {
    fontFamily: "InExtraBold",
    fontSize: 18,
    color: "#0A4B2D",
  },
  habitDescription: {
    fontFamily: "InRegular",
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: "#FF5555",
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 5,
    elevation: 2,
  },

  buttonText: {
    fontSize: 14,
    fontFamily: "InSemiBold",
    textAlign: "center",
    color: "#fff",
  },

  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    width: "100%",
    flex: 1,
  },
  modalView: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTextHeader: {
    fontFamily: "InSemiBold",
    fontSize: 18,
    marginBottom: 10,
  },

  budgetOption: {
    width: "100%",
    borderRadius: 10,
    marginVertical: 7,
    paddingVertical: 10,
    elevation: 2,
  },

  textBudgetOption: {
    color: "white",
    fontFamily: "InMedium",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;

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
    backgroundColor: "rgba(255, 255, 255, 0.92)",
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
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    elevation: 2,
  },

  leftChevron: {
    marginLeft: -10,
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "InMedium",
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
    fontFamily: "InExtraBold",
    fontSize: 24,
    marginBottom: 5,
    marginTop: 10,
    color: "#17975C",
  },

  budgetOption: {
    width: "100%",
    borderRadius: 10,
    position: "absolute",
    left: 20,
    bottom: 20,
    shadowColor: "#1D1D1D",
    paddingVertical: 10,
    elevation: 3,
  },

  textBudgetOption: {
    color: "white",
    fontFamily: "InMedium",
    fontSize: 16,
    textAlign: "center",
  },
  bottomImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  modalText: {
    fontFamily: "InRegular",
    fontSize: 15,
  },
  modalTextContainer: {
    marginBottom: 10,
    alignContent: "center",
    justifyContent: "center",
  },

  tipsContainer: {
    width: "100%",
    height: 480,
    padding: 10,
    borderWidth: 1,
    borderRadius: 9,
    // backgroundColor: "#EDEDED99",
  },

  tipsdHeader: {
    fontFamily: "InMedium",
    fontSize: 16,
    paddingBottom: 5,
  },
});

export default styles;

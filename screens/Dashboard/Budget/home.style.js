import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: "center",
  },

  addBudgetButton: {
    position: "absolute",
    bottom: 20,
    left: "43%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#0A4B2D",
    borderRadius: "100%",
    width: 60,
    height: 60,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    elevation: 2,
  },

  budgetListContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginBottom: 50,
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignContent: "center",
  },

  budgetList: {
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignContent: "center",
  },

  emptyListText: {
    paddingVertical: "60%",
    textAlign: "center",
  },

  addText: {
    marginTop: -7,
    fontFamily: "InSemiBold",
    fontSize: 45,
    color: "#fff",
    textAlign: "center",
  },

  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  centeredView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flex: 1,
  },
  modalView: {
    width: "100%",
    height: 200,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

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

  budgetCard: {
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  },
});

export default styles;

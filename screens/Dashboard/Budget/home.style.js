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
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: "center",
  },

  addBudgetButton: {
    position: "absolute",
    bottom: 10,
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
    paddingTop: 10,
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
    flex: 1,
    backgroundColor: "transparent",
  },
  cardContainer: {
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 8,
    borderRightWidth: 15,
    borderRightColor: "#F65C78",
  },

  cardColorTheme: {
    flexDirection: "row",
  },

  budgetNameWrapper: {
    flexDirection: "row",
  },

  budgetDate: {
    fontFamily: "InMedium",
    fontSize: 12,
  },

  budgetText: {
    fontFamily: "InMedium",
    fontSize: 12,
  },

  budgetCattegory: {
    fontFamily: "InBold",
    fontSize: 12,
    color: "#F65C78",
  },
  cardContainerBudget: {
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 0,
    borderRadius: 8,
    elevation: 1.8,
  },

  budgetName: {
    fontFamily: "InSemiBold",
    fontSize: 14,
  },
  budgetTotal: {
    fontFamily: "InExtraBold",
    fontSize: 20,
    color: "#17975C",
  },
  rightChevron: {
    position: "absolute",
    right: 5,
    top: 39,
  },

  budgetTotalSub: { fontFamily: "InMedium", fontSize: 10, marginTop: -2 },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10,
  },

  graphContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    elevation: 5,
  },

  budgetListContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },

  budgetDate: {
    fontFamily: "InMedium",
    fontSize: 12,
    color: "#6C6B6B",
  },

  budgetText: {
    fontFamily: "InMedium",
    fontSize: 12,
    color: "#6C6B6B",
  },

  budgetCattegory: {
    fontFamily: "InBold",
    fontSize: 12,
    color: "#F65C78",
  },

  budgetName: {
    fontFamily: "InBold",
    fontSize: 15,
    color: "#17975C",
  },
  budgetTotal: {
    fontFamily: "InExtraBold",
    fontSize: 20,
    color: "#101010",
  },
  rightChevron: {
    position: "absolute",
    right: 5,
    top: 39,
  },

  budgetTotalSub: { fontFamily: "InMedium", fontSize: 10, marginTop: -2 },

  title: {
    marginTop: 20,
    paddingBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: "InSemiBold",
  },

  budgeTitlePie: {
    fontSize: 12,
    fontFamily: "InBold",
    textAlign: "center",
  },

  detail: {
    textAlign: "justify",
    fontSize: 14,
    marginVertical: 5,
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "InMedium",
    textAlign: "center",
    color: "#fff",
  },

  cancelButton: {
    backgroundColor: "#FF5555",
    width: "100%",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 10,
    elevation: 2,
  },
});

export default styles;

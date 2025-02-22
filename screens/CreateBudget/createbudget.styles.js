import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  inputDuration: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  prevButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#03AED2",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  submitButton: {
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
});
export default styles;

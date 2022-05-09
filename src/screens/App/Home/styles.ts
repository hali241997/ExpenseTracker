import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  pieChartContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  totalBudget: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryOne: {
    flex: 1,
    marginLeft: 20,
  },
  category: {
    marginRight: 30,
    marginBottom: 20,
  },
  ball: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    width: Dimensions.get("window").width / 2 - 50,
  },
  name: {
    flex: 0.8,
  },
  amount: {
    flex: 0.2,
  },
  emptyTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import AppColors from "@constants/colors";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: AppColors.white,
    alignItems: "center",
    flexDirection: "row",
    height: Platform.OS === "android" ? 50 : 90,
    paddingBottom: Platform.OS === "android" ? 0 : 20,
  },
});

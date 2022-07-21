import AppColors from "constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: AppColors.theme.background,
    alignSelf: "center",
    borderRadius: 8,
    justifyContent: "flex-start",
  },
  headerContainer: {
    backgroundColor: AppColors.theme.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
  },
  flex: {
    flex: 1,
  },
  centerAlign: {
    alignSelf: "center",
  },
  closeIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

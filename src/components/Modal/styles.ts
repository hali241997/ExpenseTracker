import AppColors from "constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  childrenContainer: {
    backgroundColor: AppColors.white,
    borderRadius: 8,
  },
  headerContainer: {
    backgroundColor: AppColors.header,
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
    top: 10,
    right: 5,
  },
});

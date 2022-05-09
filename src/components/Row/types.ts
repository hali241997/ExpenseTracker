import { ReactNode } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface RowProps extends Omit<ViewProps, "style"> {
  children?: ReactNode;
  spaceBetween?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

import { ReactNode } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface ColProps extends Omit<ViewProps, "style"> {
  children?: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

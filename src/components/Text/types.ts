import { ReactNode } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";

export interface iTextProps extends Omit<TextProps, "style"> {
  weight?: "Light" | "Regular" | "Medium" | "Bold" | "Black";
  color?: string;
  style?: StyleProp<TextStyle> | undefined;
  children?: ReactNode;
}

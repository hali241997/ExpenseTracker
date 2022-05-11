import AppColors from "@constants/colors";
import React, { FC } from "react";
import { Text } from "react-native";
import { iTextProps } from "./types";

const Index: FC<iTextProps> = ({ weight, style, color, children, ...props }) => {
  const fontWeight = React.useMemo(() => {
    switch (weight) {
      case "Black":
        return "900";
      case "Bold":
        return "700";
      case "Medium":
        return "500";
      case "Light":
        return "300";
      default:
        return "400";
    }
  }, [weight]);

  const fontSize = React.useMemo(() => {
    switch (weight) {
      case "Black":
        return 50;
      case "Bold":
        return 40;
      case "Medium":
        return 30;
      case "Regular":
        return 20;
      case "Light":
        return 14;
      default:
        return 14;
    }
  }, [weight]);

  return (
    <Text
      style={[
        {
          fontFamily: `Roboto-${weight ?? "Regular"}`,
          fontWeight,
          fontSize,
          color: color || AppColors.black,
        },
        style,
      ]}
      adjustsFontSizeToFit
      numberOfLines={1}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Index;

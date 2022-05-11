import React, { FC } from "react";
import { View } from "react-native";
import { ColProps } from "./types";

const Col: FC<ColProps> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "column" }, style]} {...props}>
      {children}
    </View>
  );
};

export default Col;

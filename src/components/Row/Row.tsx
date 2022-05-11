import React, { FC } from "react";
import { View } from "react-native";
import { RowProps } from "./types";

const Row: FC<RowProps> = ({ style, spaceBetween, children, ...props }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: spaceBetween ? "space-between" : "flex-start",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Row;

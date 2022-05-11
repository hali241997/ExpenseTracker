import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { iIconProps } from "./types";

const Index: FC<iIconProps> = ({ isTouchable, onPress, ...props }) => {
  if (isTouchable) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <Icon {...props} />
      </TouchableOpacity>
    );
  }

  return <Icon {...props} />;
};

export default Index;

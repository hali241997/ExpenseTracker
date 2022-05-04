import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { AppNavigator } from "./screenStacks";

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

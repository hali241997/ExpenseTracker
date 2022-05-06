import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { AppNavigator, AuthNavigator } from "./screenStacks";
import useNavigation from "./useNavigation";

const Navigation: FC = () => {
  const currentUser = useNavigation();

  return (
    <NavigationContainer>
      {currentUser.userId ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

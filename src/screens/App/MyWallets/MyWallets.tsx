import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { MyWalletsProps } from "./types";

const MyWalletsScreen: FC<MyWalletsProps> = ({ navigation }) => {
  const handleWalletA = () => {
    navigation.push(routeNames.CurrentWalletScreen);
  };

  return (
    <SafeAreaView>
      <Text>MyWalletsScreen</Text>
      <Button title="Go to Wallet A" onPress={handleWalletA} />
    </SafeAreaView>
  );
};

export default MyWalletsScreen;

import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { OthersPendingTransactionsScreenProps } from "./types";

const OthersPendingTransactionsScreen: FC<OthersPendingTransactionsScreenProps> = ({
  navigation,
}) => {
  const handleOthersPendingTransactionDetails = () => {
    navigation.push(routeNames.OthersPendingTransactionDetailScreen);
  };
  return (
    <SafeAreaView>
      <Text>OthersPendingTransactionsScreen</Text>
      <Button
        title="Go to Others Pending Transaction Details Screen"
        onPress={handleOthersPendingTransactionDetails}
      />
    </SafeAreaView>
  );
};

export default OthersPendingTransactionsScreen;

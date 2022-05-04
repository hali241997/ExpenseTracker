import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { CurrentWalletScreenProps } from "./types";

const CurrentWalletScreen: FC<CurrentWalletScreenProps> = ({ navigation }) => {
  const handleAddBudget = () => {
    navigation.push(routeNames.AddBudgetScreen);
  };

  const handleTransactions = () => {
    navigation.push(routeNames.TransactionsScreen);
  };

  const handlePendingTransactions = () => {
    navigation.push(routeNames.PendingTransactionsTabs);
  };

  return (
    <SafeAreaView>
      <Text>CurrentWalletScreen</Text>
      <Button title="Go to Add Budget" onPress={handleAddBudget} />
      <Button title="Go to Transactions" onPress={handleTransactions} />
      <Button title="Go to Pending Transactions" onPress={handlePendingTransactions} />
    </SafeAreaView>
  );
};

export default CurrentWalletScreen;

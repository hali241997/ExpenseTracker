import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { MyPendingTransactionsScreenProps } from "./types";

const MyPendingTransactionsScreen: FC<MyPendingTransactionsScreenProps> = ({ navigation }) => {
  const handleTransactionDetails = () => {
    navigation.push(routeNames.MyPendingTransactionDetailsScreen);
  };

  const handleEditExpense = () => {
    navigation.push(routeNames.MyPendingTransactionsEditExpenseScreen);
  };

  return (
    <SafeAreaView>
      <Text>MyPendingTransactionsScreen</Text>
      <Button title="Go to Transaction Details" onPress={handleTransactionDetails} />
      <Button title="Go to Edit Expense" onPress={handleEditExpense} />
    </SafeAreaView>
  );
};

export default MyPendingTransactionsScreen;

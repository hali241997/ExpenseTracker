import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { TransactionScreenProps } from "./types";

const TransactionsScreen: FC<TransactionScreenProps> = ({ navigation }) => {
  const handleAddExpense = () => {
    navigation.push(routeNames.TransactionAddExpenseScreen);
  };

  const handleEditExpense = () => {
    navigation.push(routeNames.TransactionEditExpenseScreen);
  };

  return (
    <SafeAreaView>
      <Text>Transactions</Text>
      <Button title="Go to Add Expense" onPress={handleAddExpense} />
      <Button title="Go to Edit Expense" onPress={handleEditExpense} />
    </SafeAreaView>
  );
};

export default TransactionsScreen;

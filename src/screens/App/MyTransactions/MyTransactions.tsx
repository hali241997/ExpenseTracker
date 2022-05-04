import routeNames from "@navigation/routeNames";
import React, { FC } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { MyTransactionsScreenProps } from "./types";

const MyTransactionsScreen: FC<MyTransactionsScreenProps> = ({ navigation }) => {
  const handleAddExpense = () => {
    navigation.push(routeNames.AddExpenseScreen);
  };

  const handleEditExpense = () => {
    navigation.push(routeNames.EditExpenseScreen);
  };

  return (
    <SafeAreaView>
      <Text>MyTransactionsScreen</Text>
      <Button title="Go to Add Expense Screen" onPress={handleAddExpense} />
      <Button title="Go to Edit Expense Screen" onPress={handleEditExpense} />
    </SafeAreaView>
  );
};

export default MyTransactionsScreen;

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddBudgetScreen,
  AddExpenseScreen,
  CurrentWalletScreen,
  EditExpenseScreen,
  HomeScreen,
  MyPendingTransactionDetailsScreen,
  MyPendingTransactionsEditExpenseScreen,
  MyPendingTransactionsScreen,
  MyTransactionsScreen,
  MyWalletsScreen,
  OthersPendingTransactionDetailScreen,
  OthersPendingTransactionsScreen,
  ProfileScreen,
  TransactionAddExpenseScreen,
  TransactionEditExpenseScreen,
  TransactionsScreen,
} from "@screens/App";
import { GoogleAuthScreen } from "@screens/Auth";
import React from "react";
import routeNames from "./routeNames";
import {
  AppParamList,
  AuthParamList,
  MyPendingTransactionsParamList,
  MyTransactionsParamList,
  MyWalletsParamList,
  OthersPendingTransactionsParamList,
  PendingTransactionsParamList,
} from "./types";

// Auth
const AuthStack = createNativeStackNavigator<AuthParamList>();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={routeNames.GoogleAuthStack} component={GoogleAuthScreen} />
    </AuthStack.Navigator>
  );
};

// App
const App = createDrawerNavigator<AppParamList>();
export const AppNavigator = () => {
  return (
    <App.Navigator initialRouteName={routeNames.HomeScreen}>
      <App.Screen name={routeNames.HomeScreen} component={HomeScreen} />
      <App.Screen name={routeNames.MyTransactionsStack} component={MyTransactionsNavigator} />
      <App.Screen name={routeNames.MyWalletsStack} component={MyWalletsNavigator} />
      <App.Screen name={routeNames.ProfileStack} component={ProfileScreen} />
    </App.Navigator>
  );
};

// My Transactions
const MyTransactions = createNativeStackNavigator<MyTransactionsParamList>();
export const MyTransactionsNavigator = () => {
  return (
    <MyTransactions.Navigator initialRouteName={routeNames.MyTransactionsScreen}>
      <MyTransactions.Screen
        name={routeNames.MyTransactionsScreen}
        component={MyTransactionsScreen}
      />
      <MyTransactions.Screen name={routeNames.AddExpenseScreen} component={AddExpenseScreen} />
      <MyTransactions.Screen name={routeNames.EditExpenseScreen} component={EditExpenseScreen} />
    </MyTransactions.Navigator>
  );
};

// My Wallets
const MyWallets = createNativeStackNavigator<MyWalletsParamList>();
export const MyWalletsNavigator = () => {
  return (
    <MyWallets.Navigator initialRouteName={routeNames.MyWalletsScreen}>
      <MyWallets.Screen name={routeNames.MyWalletsScreen} component={MyWalletsScreen} />
      <MyWallets.Screen name={routeNames.CurrentWalletScreen} component={CurrentWalletScreen} />
      <MyWallets.Screen name={routeNames.AddBudgetScreen} component={AddBudgetScreen} />
      <MyWallets.Screen name={routeNames.TransactionsScreen} component={TransactionsScreen} />
      <MyWallets.Screen
        name={routeNames.TransactionAddExpenseScreen}
        component={TransactionAddExpenseScreen}
      />
      <MyWallets.Screen
        name={routeNames.TransactionEditExpenseScreen}
        component={TransactionEditExpenseScreen}
      />
      <MyWallets.Screen
        name={routeNames.PendingTransactionsTabs}
        component={PendingTransactionsTabsNavigator}
      />
    </MyWallets.Navigator>
  );
};

// Pending Transactions Tabs
const PendingTransactionsTabs = createMaterialTopTabNavigator<PendingTransactionsParamList>();
export const PendingTransactionsTabsNavigator = () => {
  return (
    <PendingTransactionsTabs.Navigator initialRouteName={routeNames.MyPendingTransactionsStack}>
      <PendingTransactionsTabs.Screen
        name={routeNames.MyPendingTransactionsStack}
        component={MyPendingTransactionsNavigator}
      />
      <PendingTransactionsTabs.Screen
        name={routeNames.OthersPendingTransactionsStack}
        component={OthersPendingTransactionsNavigator}
      />
    </PendingTransactionsTabs.Navigator>
  );
};

// My Pending Transactions
const MyPendingTransactions = createNativeStackNavigator<MyPendingTransactionsParamList>();
export const MyPendingTransactionsNavigator = () => {
  return (
    <MyPendingTransactions.Navigator initialRouteName={routeNames.MyPendingTransactionsScreen}>
      <MyPendingTransactions.Screen
        name={routeNames.MyPendingTransactionsScreen}
        component={MyPendingTransactionsScreen}
      />
      <MyPendingTransactions.Screen
        name={routeNames.MyPendingTransactionDetailsScreen}
        component={MyPendingTransactionDetailsScreen}
      />
      <MyPendingTransactions.Screen
        name={routeNames.MyPendingTransactionsEditExpenseScreen}
        component={MyPendingTransactionsEditExpenseScreen}
      />
    </MyPendingTransactions.Navigator>
  );
};

const OthersPendingTransactions = createNativeStackNavigator<OthersPendingTransactionsParamList>();
export const OthersPendingTransactionsNavigator = () => {
  return (
    <OthersPendingTransactions.Navigator
      initialRouteName={routeNames.OthersPendingTransactionsScreen}
    >
      <OthersPendingTransactions.Screen
        name={routeNames.OthersPendingTransactionsScreen}
        component={OthersPendingTransactionsScreen}
      />
      <OthersPendingTransactions.Screen
        name={routeNames.OthersPendingTransactionDetailScreen}
        component={OthersPendingTransactionDetailScreen}
      />
    </OthersPendingTransactions.Navigator>
  );
};

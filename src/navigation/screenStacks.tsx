import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddBudgetScreen,
  AddExpenseScreen,
  CreateWalletScreen,
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
import React, { FC } from "react";
import routeNames from "./routeNames";
import {
  AppParamList,
  AuthParamList,
  HomeParamList,
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
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={routeNames.GoogleAuthStack} component={GoogleAuthScreen} />
    </AuthStack.Navigator>
  );
};

// App
const App = createDrawerNavigator<AppParamList>();
export const AppNavigator: FC = () => {
  return (
    <App.Navigator initialRouteName={routeNames.HomeStack} screenOptions={{ headerShown: false }}>
      <App.Screen
        name={routeNames.HomeStack}
        component={HomeNavigator}
        options={{ title: "Home" }}
      />
      <App.Screen
        name={routeNames.MyTransactionsStack}
        component={MyTransactionsNavigator}
        options={{ title: "My Transactions" }}
      />
      <App.Screen
        name={routeNames.MyWalletsStack}
        component={MyWalletsNavigator}
        options={{ title: "My Wallets" }}
      />
      <App.Screen
        name={routeNames.ProfileStack}
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </App.Navigator>
  );
};

// Home
const Home = createNativeStackNavigator<HomeParamList>();
export const HomeNavigator: FC = () => {
  return (
    <Home.Navigator initialRouteName={routeNames.HomeScreen} screenOptions={{ headerShown: false }}>
      <Home.Screen name={routeNames.HomeScreen} component={HomeScreen} />
      <Home.Screen name={routeNames.CreateWalletScreen} component={CreateWalletScreen} />
    </Home.Navigator>
  );
};

// My Transactions
const MyTransactions = createNativeStackNavigator<MyTransactionsParamList>();
export const MyTransactionsNavigator: FC = () => {
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
export const MyWalletsNavigator: FC = () => {
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
export const PendingTransactionsTabsNavigator: FC = () => {
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
export const MyPendingTransactionsNavigator: FC = () => {
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
export const OthersPendingTransactionsNavigator: FC = () => {
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

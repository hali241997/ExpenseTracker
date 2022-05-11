import routeNames from "./routeNames";

export type RootParamList = {
  [routeNames.AuthStack]: undefined;
  [routeNames.AppDrawer]: undefined;
};

export type AuthParamList = {
  [routeNames.GoogleAuthStack]: undefined;
};

export type AppParamList = {
  [routeNames.HomeStack]: undefined;
  [routeNames.MyTransactionsStack]: undefined;
  [routeNames.MyWalletsStack]: undefined;
  [routeNames.ProfileStack]: undefined;
};

export type HomeParamList = {
  [routeNames.HomeScreen]: undefined;
  [routeNames.CreateWalletScreen]: undefined;
};

export type MyTransactionsParamList = {
  [routeNames.MyTransactionsScreen]: undefined;
  [routeNames.AddExpenseScreen]: undefined;
  [routeNames.EditExpenseScreen]: undefined;
};

export type MyWalletsParamList = {
  [routeNames.MyWalletsScreen]: undefined;
  [routeNames.CurrentWalletScreen]: undefined;
  [routeNames.AddBudgetScreen]: undefined;
  [routeNames.TransactionsScreen]: undefined;
  [routeNames.TransactionAddExpenseScreen]: undefined;
  [routeNames.TransactionEditExpenseScreen]: undefined;
  [routeNames.PendingTransactionsTabs]: undefined;
};

export type PendingTransactionsParamList = {
  [routeNames.MyPendingTransactionsStack]: undefined;
  [routeNames.OthersPendingTransactionsStack]: undefined;
};

export type MyPendingTransactionsParamList = {
  [routeNames.MyPendingTransactionsScreen]: undefined;
  [routeNames.MyPendingTransactionDetailsScreen]: undefined;
  [routeNames.MyPendingTransactionsEditExpenseScreen]: undefined;
};

export type OthersPendingTransactionsParamList = {
  [routeNames.OthersPendingTransactionsScreen]: undefined;
  [routeNames.OthersPendingTransactionDetailScreen]: undefined;
};

export type CombinedParamList = RootParamList &
  AuthParamList &
  AppParamList &
  HomeParamList &
  MyTransactionsParamList &
  MyWalletsParamList &
  PendingTransactionsParamList &
  MyPendingTransactionsParamList &
  OthersPendingTransactionsParamList;

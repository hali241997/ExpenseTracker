export interface Expense {
  name: string;
  amount: number;
  color: string;
}

export interface Wallet {
  userId: string;
  wallet: Array<Expense>;
}

export enum WalletType {
  PERSONAL = "PERSONAL",
  JOINT = "JOINT",
}

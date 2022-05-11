import { Expense } from "../../../../../types";

export interface HasWalletProps {
  wallet: Array<Expense>;
  total: number;
}

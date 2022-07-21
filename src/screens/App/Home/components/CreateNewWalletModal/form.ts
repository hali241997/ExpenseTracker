import * as Yup from "yup";
import { WalletType } from "../../../../../types";

export const formInitialValues = {
  walletType: WalletType.PERSONAL,
};

export const validationSchema = Yup.object().shape({
  walletType: Yup.string().required(),
});

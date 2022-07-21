import * as Yup from "yup";

export const formInitialValues = {
  walletName: "",
  budget: "",
};

export const validationSchema = Yup.object().shape({
  walletName: Yup.string().required(),
  budget: Yup.string().required(),
});

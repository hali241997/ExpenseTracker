import { HomeParamList } from "@navigation/index";
import routeNames from "@navigation/routeNames";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import { formInitialValues, validationSchema } from "./form";

const useCreateNewWalletModal = (onDismiss: () => void) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();

  const handleSubmit = (values: typeof formInitialValues) => {
    onDismiss();
    navigation.push(routeNames.CreateWalletScreen, { walletType: values.walletType });
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
  };
};

export default useCreateNewWalletModal;

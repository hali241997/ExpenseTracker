import { TextField, Button, Text } from "@components/index";
import AppColors from "constants/colors";
import { useFormik } from "formik";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import { formInitialValues, validationSchema } from "./form";

const PersonalWallet: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSubmit = () => {};

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { values, handleChange } = formik;

  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 20 }}>
      <TextField
        label="Wallet Name"
        value={values.walletName}
        onChangeText={handleChange("walletName")}
      />

      <TextField label="Budget" value={values.budget} onChangeText={handleChange("budget")} />

      <Button
        title={
          <Text weight="Regular" color={AppColors.theme.background}>
            Create
          </Text>
        }
        style={{ marginTop: 20 }}
      />
    </ScrollView>
  );
};

export default PersonalWallet;

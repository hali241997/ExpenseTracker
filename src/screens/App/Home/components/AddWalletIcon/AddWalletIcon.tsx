import { Icon } from "@components/index";
import AppColors from "@constants/colors";
import React, { FC } from "react";

const AddWalletIcon: FC = () => {
  return <Icon name="wallet-plus-outline" color={AppColors.black} size={30} isTouchable />;
};

export default AddWalletIcon;

import { Icon } from "@components/index";
import AppColors from "@constants/colors";
import auth from "@react-native-firebase/auth";
import { logout } from "@redux/index";
import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

const LogOutIcon: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    await auth().signOut();
    dispatch(logout());
  }, [dispatch]);

  return (
    <Icon
      name="log-out-outline"
      size={30}
      color={AppColors.black}
      isTouchable
      onPress={handleLogout}
    />
  );
};

export default LogOutIcon;

import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";
import { Header } from "@components/index";
import { LogoutIcon } from "./components";

const ProfileScreen: FC = () => {
  return (
    <SafeAreaView>
      <Header title="Profile" withDrawerButton rightComponent={<LogoutIcon />} />
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

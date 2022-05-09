import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import AppColors from "@constants/colors";
import { AppParamList } from "navigation";
import React, { FC, useCallback } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ title, withBackButton, withDrawerButton, rightComponent }) => {
  const navigation = useNavigation();
  const drawerNavigation = useNavigation<DrawerNavigationProp<AppParamList>>();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleToggleDrawer = useCallback(() => {
    drawerNavigation.toggleDrawer();
  }, [drawerNavigation]);

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.header, { justifyContent: withBackButton ? "flex-start" : "center" }]}
    >
      <View style={{ flex: 0.1, marginLeft: 10 }}>
        {withBackButton && (
          <Icon
            isTouchable
            name="arrow-back"
            size={30}
            color={AppColors.black}
            onPress={handleGoBack}
          />
        )}
        {withDrawerButton && (
          <Icon
            isTouchable
            name="menu"
            size={30}
            color={AppColors.black}
            onPress={handleToggleDrawer}
          />
        )}
      </View>

      <View style={{ flex: 0.8, alignItems: "center" }}>
        <Text weight="Regular">{title}</Text>
      </View>

      <View style={{ flex: 0.1 }}>{rightComponent}</View>
    </SafeAreaView>
  );
};

export default Header;

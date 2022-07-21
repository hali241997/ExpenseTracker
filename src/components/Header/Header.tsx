import { Col } from "@components/Col";
import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import AppColors from "@constants/colors";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { AppParamList } from "navigation";
import React, { FC, useCallback } from "react";
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
      <Col style={{ flex: 0.1, marginLeft: 10 }}>
        {withBackButton && (
          <Icon
            isTouchable
            name="arrow-left"
            size={30}
            color={AppColors.theme.background}
            onPress={handleGoBack}
          />
        )}
        {withDrawerButton && (
          <Icon
            isTouchable
            name="menu"
            size={30}
            color={AppColors.theme.background}
            onPress={handleToggleDrawer}
          />
        )}
      </Col>

      <Col style={{ flex: 0.8, alignItems: "center" }}>
        <Text weight="Regular" color={AppColors.theme.background}>
          {title}
        </Text>
      </Col>

      <Col style={{ flex: 0.1 }}>{rightComponent}</Col>
    </SafeAreaView>
  );
};

export default Header;

import { Col, Text } from "@components/index";
import AppColors from "@constants/colors";
import routeNames from "@navigation/routeNames";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeParamList } from "navigation";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const NoWallet: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();

  const handleCreateWallet = () => {
    navigation.push(routeNames.CreateWalletScreen);
  };

  return (
    <Col style={styles.container}>
      <Text weight="Regular">{`You don't have a wallet yet`}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={handleCreateWallet}>
        <Text weight="Regular" color={AppColors.hyperLink}>
          Create One
        </Text>
      </TouchableOpacity>
    </Col>
  );
};

export default NoWallet;

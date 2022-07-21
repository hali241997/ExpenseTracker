import { Col, Text } from "@components/index";
import AppColors from "@constants/colors";
import { useModalState } from "hooks";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { CreateNewWalletModal } from "../CreateNewWalletModal";
import styles from "./styles";

const NoWallet: FC = () => {
  const [openCreateNewWalletModal, toggleCreateNewWalletModal] = useModalState();

  const handleCreateWallet = () => {
    toggleCreateNewWalletModal();
  };

  return (
    <Col style={styles.container}>
      <Text weight="Regular">{`You don't have a wallet yet`}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={handleCreateWallet}>
        <Text weight="Regular" color={AppColors.hyperLink}>
          Create One
        </Text>
      </TouchableOpacity>

      <CreateNewWalletModal
        visible={openCreateNewWalletModal}
        onDismiss={toggleCreateNewWalletModal}
      />
    </Col>
  );
};

export default NoWallet;

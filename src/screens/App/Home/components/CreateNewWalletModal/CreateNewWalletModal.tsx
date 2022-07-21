import { Button, Col, Modal, Row, Text } from "@components/index";
import AppColors from "constants/colors";
import React, { FC } from "react";
import { RadioButton } from "react-native-paper";
import { WalletType } from "../../../../../types";
import styles from "./styles";
import { CreateNewWalletModalProps } from "./types";
import useCreateNewWalletModal from "./useCreateNewWalletModal";

const CreateNewWalletModal: FC<CreateNewWalletModalProps> = ({ visible, onDismiss }) => {
  const { values, handleChange, handleSubmit } = useCreateNewWalletModal(onDismiss);

  return (
    <Modal title="Create New Wallet" visible={visible} onDismiss={onDismiss}>
      <Col style={styles.content}>
        <RadioButton.Group value={values.walletType} onValueChange={handleChange("walletType")}>
          <Row style={styles.center}>
            <RadioButton value={WalletType.PERSONAL} />
            <Text weight="Regular">Personal</Text>
          </Row>

          <Row style={styles.center}>
            <RadioButton value={WalletType.JOINT} />
            <Text weight="Regular">Joint</Text>
          </Row>
        </RadioButton.Group>
      </Col>

      <Col style={styles.button}>
        <Button
          title={
            <Text weight="Regular" color={AppColors.theme.background}>
              Create
            </Text>
          }
          onPress={handleSubmit}
        />
      </Col>
    </Modal>
  );
};

export default CreateNewWalletModal;

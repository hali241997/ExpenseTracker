import { Col } from "@components/Col";
import { Icon } from "@components/Icon";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import AppColors from "@constants/colors";
import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { Modal, Portal } from "react-native-paper";
import styles from "./styles";
import { iModalProps } from "./types";

const Index: FC<iModalProps> = ({
  visible,
  onDismiss,
  title,
  titleProps,
  closeIconContainerProps,
  width,
  height,
  children,
}) => {
  const dimensions = useWindowDimensions();

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { width: width ?? dimensions.width - 40, height: height ?? dimensions.height - 300 },
        ]}
      >
        <Row style={styles.headerContainer}>
          <Col style={styles.flex}>
            <Text
              weight="Regular"
              color={AppColors.theme.background}
              style={styles.centerAlign}
              {...titleProps}
            >
              {title}
            </Text>
          </Col>

          <Col style={styles.closeIconContainer} {...closeIconContainerProps}>
            <Icon
              name="close-circle-outline"
              color={AppColors.theme.background}
              size={30}
              isTouchable
              onPress={onDismiss}
            />
          </Col>
        </Row>
        {children}
      </Modal>
    </Portal>
  );
};

export default Index;

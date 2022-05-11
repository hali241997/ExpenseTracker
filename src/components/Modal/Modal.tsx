import { Col } from "@components/Col";
import { Icon } from "@components/Icon";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import AppColors from "@constants/colors";
import React, { FC } from "react";
import { Modal } from "react-native";
import styles from "./styles";
import { iModalProps } from "./types";

const Index: FC<iModalProps> = ({
  title,
  titleProps,
  closeIconContainerProps,
  visible,
  setVisible,
  width,
  height,
  direction = "center",
  children,
  ...props
}) => {
  return (
    <Modal animationType="fade" transparent visible={visible} {...props}>
      <Col
        style={[
          styles.backdrop,
          {
            alignItems: direction === "top" || direction === "bottom" ? "flex-start" : "center",
            justifyContent:
              direction === "top" ? "flex-start" : direction === "bottom" ? "flex-end" : "center",
          },
        ]}
      >
        <Col
          style={[
            styles.childrenContainer,
            {
              width,
              height,
            },
          ]}
        >
          <Row style={styles.headerContainer}>
            <Col style={styles.flex}>
              <Text
                weight="Medium"
                color={AppColors.white}
                style={styles.centerAlign}
                {...titleProps}
              >
                {title}
              </Text>
            </Col>

            <Col style={styles.closeIconContainer} {...closeIconContainerProps}>
              <Icon
                name="close-circle-outline"
                color={AppColors.white}
                size={30}
                isTouchable
                onPress={setVisible}
              />
            </Col>
          </Row>
          {children}
        </Col>
      </Col>
    </Modal>
  );
};

export default Index;

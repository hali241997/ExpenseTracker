import { Col } from "@components/Col";
import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import styles from "./styles";

const LoadingScreen: FC = () => {
  return (
    <Col style={styles.container}>
      <ActivityIndicator size="large" />
    </Col>
  );
};

export default LoadingScreen;

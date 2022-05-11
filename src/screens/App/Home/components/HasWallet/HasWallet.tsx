import { Col, Row, Text } from "@components/index";
import React, { FC } from "react";
import Pie from "react-native-pie";
import styles from "./styles";
import { HasWalletProps } from "./types";

const HasWallet: FC<HasWalletProps> = ({ wallet, total }) => {
  return (
    <Col style={styles.flex}>
      <Col style={styles.pieContainer}>
        <Col>
          <Pie
            radius={80}
            innerRadius={60}
            sections={wallet.map((item) => {
              return {
                percentage: (item.amount / total) * 100,
                color: item.color,
              };
            })}
          />
          <Col style={styles.totalBudget}>
            <Text weight="Medium">{total}</Text>
          </Col>
        </Col>
      </Col>

      <Row style={styles.categoriesContainer}>
        <Col style={styles.rowOne}>
          {wallet.map((item, index) => {
            if (index < 4) {
              return (
                <Row key={item.name} style={styles.contentContainer}>
                  <Col style={[styles.ball, { backgroundColor: item.color }]} />
                  <Row style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                  </Row>
                </Row>
              );
            }
            return null;
          })}
        </Col>

        <Col style={styles.flex}>
          {wallet.map((item, index) => {
            if (index >= 4) {
              return (
                <Row key={item.name} style={styles.contentContainer}>
                  <Col style={[styles.ball, { backgroundColor: item.color }]} />
                  <Row style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                  </Row>
                </Row>
              );
            }
            return null;
          })}
        </Col>
      </Row>
    </Col>
  );
};

export default HasWallet;

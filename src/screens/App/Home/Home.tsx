import { Col, Header, Row, Text } from "@components/index";
import AppColors from "constants/colors";
import routeNames from "navigation/routeNames";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import Pie from "react-native-pie";
import styles from "./styles";
import { HomeScreenProps } from "./types";

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const wallet = React.useMemo(() => {
    return [
      {
        name: "Utility Bills",
        amount: 50,
        color: AppColors.yellow,
      },
      {
        name: "Feul",
        amount: 50,
        color: AppColors.green,
      },
      {
        name: "Health",
        amount: 50,
        color: AppColors.blue,
      },
      {
        name: "Footwear",
        amount: 50,
        color: AppColors.red,
      },
      {
        name: "Food",
        amount: 50,
        color: AppColors.pink,
      },
      {
        name: "Entertainment",
        amount: 50,
        color: AppColors.voilet,
      },
      {
        name: "Gifts",
        amount: 50,
        color: AppColors.rose,
      },
      {
        name: "General",
        amount: 50,
        color: AppColors.orange,
      },
    ];
  }, []);

  const total = React.useMemo(() => {
    return wallet.reduce((partialSum, a) => partialSum + a.amount, 0);
  }, [wallet]);

  const handleCreateWallet = () => {
    navigation.push(routeNames.CreateWalletScreen);
  };

  if (wallet.length > 0) {
    return (
      <Col style={styles.flex}>
        <Header title="Welcome to Expense Tracker" withDrawerButton />

        <Col style={styles.pieChartContainer}>
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
          <Col style={styles.categoryOne}>
            {wallet.map((item, index) => {
              if (index < 4) {
                return (
                  <Row key={item.name} style={styles.category}>
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
                  <Row key={item.name} style={styles.category}>
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
  }

  return (
    <Col style={styles.flex}>
      <Header title="Welcome to Expense Tracker" withDrawerButton />
      <Col style={styles.emptyTextContainer}>
        <Text weight="Regular">{`You don't have a wallet yet`}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleCreateWallet}>
          <Text weight="Regular" color={AppColors.hyperLink}>
            Create One
          </Text>
        </TouchableOpacity>
      </Col>
    </Col>
  );
};

export default HomeScreen;

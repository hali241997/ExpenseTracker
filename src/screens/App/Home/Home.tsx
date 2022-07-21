import { Col, Header, LoadingScreen } from "@components/index";
import React, { FC } from "react";
import { AddWalletIcon, HasWallet, NoWallet } from "./components";
import useHome from "./useHome";

const HomeScreen: FC = () => {
  const { isLoading, wallet, total } = useHome();

  return (
    <Col style={{ flex: 1 }}>
      <Header
        title="Expense Tracker"
        withDrawerButton
        rightComponent={wallet?.wallet && wallet.wallet.length > 0 ? <AddWalletIcon /> : null}
      />

      {isLoading ? (
        <LoadingScreen />
      ) : wallet?.wallet && wallet.wallet.length > 0 ? (
        <HasWallet wallet={wallet.wallet} total={total} />
      ) : (
        <NoWallet />
      )}
    </Col>
  );
};

export default HomeScreen;

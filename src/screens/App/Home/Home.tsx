import { Col, Header, LoadingScreen } from "@components/index";
import useFirestore from "@hooks/useFirestore";
import { useUserState } from "@redux/index";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Expense, Wallet } from "../../../types";
import { HasWallet, NoWallet } from "./components";

const HomeScreen: FC = () => {
  const { wallets } = useFirestore();
  const { userId } = useUserState();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wallet, setWallet] = useState<Wallet | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);

  const getUserWallet = useCallback(async () => {
    setIsLoading(true);
    const response = await wallets.where("userId", "==", userId).get();
    const data = response.docs[0].data() as Wallet | undefined;
    setWallet(data);
    setTotal(
      data?.wallet.reduce(
        (partialSum: number, currentSum: Expense) => partialSum + currentSum.amount,
        0
      ) || 0
    );
    setIsLoading(false);
  }, [userId, wallets]);

  useEffect(() => {
    getUserWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col style={{ flex: 1 }}>
      <Header title="Welcome to Expense Tracker" withDrawerButton />

      {isLoading ? (
        <LoadingScreen />
      ) : wallet?.wallet && wallet.wallet?.length > 0 ? (
        <HasWallet wallet={wallet.wallet} total={total} />
      ) : (
        <NoWallet />
      )}
    </Col>
  );
};

export default HomeScreen;

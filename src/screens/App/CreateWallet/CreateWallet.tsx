import { Col, Header } from "@components/index";
import { lowerCase, startCase } from "lodash";
import React, { FC } from "react";
import { WalletType } from "../../../types";
import { JointWallet, PersonalWallet } from "./components";
import { CreateWalletScreenProps } from "./types";

const CreateWalletScreen: FC<CreateWalletScreenProps> = ({ route }) => {
  const { walletType } = route.params;

  return (
    <Col>
      <Header title={`Create ${startCase(lowerCase(walletType))} Wallet`} withBackButton />

      {walletType === WalletType.PERSONAL ? <PersonalWallet /> : <JointWallet />}
    </Col>
  );
};

export default CreateWalletScreen;

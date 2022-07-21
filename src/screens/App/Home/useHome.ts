import { useFirestore } from "@hooks/index";
import { useUserState } from "@redux/index";
import { useCallback, useEffect, useState } from "react";
import { Wallet } from "../../../types";

const useHome = () => {
  const { wallets } = useFirestore();
  const { userId } = useUserState();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wallet, setWallet] = useState<Wallet>();
  const [total, setTotal] = useState<number>(0);

  const getUserWallet = useCallback(async () => {
    setIsLoading(true);
    const response = await wallets.where("userId", "==", userId).get();
    if (response.docs.length > 0) {
      const data = response.docs[0].data() as Wallet;
      setWallet(data);
      setTotal(data.wallet.reduce((partialSum, currentSum) => partialSum + currentSum.amount, 0));
    }
    setIsLoading(false);
  }, [userId, wallets]);

  useEffect(() => {
    getUserWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, wallet, total };
};

export default useHome;

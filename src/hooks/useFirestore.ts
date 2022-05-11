import firestore from "@react-native-firebase/firestore";

const useFirestore = () => {
  const wallets = firestore().collection("wallets");

  return { wallets };
};

export default useFirestore;

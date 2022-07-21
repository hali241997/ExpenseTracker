import { RouteProp } from "@react-navigation/native";
import { CombinedParamList } from "@navigation/types";
import routeNames from "navigation/routeNames";

export interface CreateWalletScreenProps {
  route: RouteProp<CombinedParamList, routeNames.CreateWalletScreen>;
}

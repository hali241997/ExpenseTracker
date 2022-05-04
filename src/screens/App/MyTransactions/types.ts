import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CombinedParamList } from "@navigation/types";
import routeNames from "@navigation/routeNames";

export interface MyTransactionsScreenProps {
  navigation: NativeStackNavigationProp<CombinedParamList, routeNames.MyTransactionsScreen>;
}

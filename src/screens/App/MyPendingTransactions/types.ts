import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CombinedParamList } from "@navigation/types";
import routeNames from "@navigation/routeNames";

export interface MyPendingTransactionsScreenProps {
  navigation: NativeStackNavigationProp<CombinedParamList, routeNames.MyPendingTransactionsScreen>;
}

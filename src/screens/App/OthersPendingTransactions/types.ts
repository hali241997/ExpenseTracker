import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CombinedParamList } from "@navigation/types";
import routeNames from "@navigation/routeNames";

export interface OthersPendingTransactionsScreenProps {
  navigation: NativeStackNavigationProp<
    CombinedParamList,
    routeNames.OthersPendingTransactionsScreen
  >;
}

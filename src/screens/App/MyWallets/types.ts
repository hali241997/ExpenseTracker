import routeNames from "@navigation/routeNames";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CombinedParamList } from "@navigation/types";

export interface MyWalletsProps {
  navigation: NativeStackNavigationProp<CombinedParamList, routeNames.MyWalletsScreen>;
}

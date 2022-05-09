/* eslint-disable import/no-unresolved */
import { IconProps } from "react-native-vector-icons/Icon";

export interface iIconProps extends IconProps {
  isTouchable?: boolean;
  onPress?: () => void;
}

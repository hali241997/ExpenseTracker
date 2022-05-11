import { VoidFunctionComponent } from "react";

export interface HeaderProps {
  title: string;
  withBackButton?: boolean;
  withDrawerButton?: boolean;
  rightComponent?: VoidFunctionComponent;
}

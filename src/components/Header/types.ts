import { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  withBackButton?: boolean;
  withDrawerButton?: boolean;
  rightComponent?: ReactNode;
}

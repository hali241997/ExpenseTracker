import { ColProps } from "@components/Col";
import { iTextProps } from "@components/Text";
import { ReactNode } from "react";
import { ModalProps } from "react-native";

export interface iModalProps extends Omit<ModalProps, "visible"> {
  title: string;
  titleProps?: iTextProps;
  closeIconContainerProps?: ColProps;
  visible: boolean;
  setVisible: () => void;
  width: number;
  height: number;
  direction?: "top" | "bottom" | "center";
  children: ReactNode;
}

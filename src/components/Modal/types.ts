import { ColProps } from "@components/Col";
import { iTextProps } from "@components/Text";
import { ComponentProps } from "react";
import { Modal } from "react-native-paper";

export type iModalProps = {
  title: string;
  titleProps?: iTextProps;
  closeIconContainerProps?: ColProps;
  width?: number;
  height?: number;
} & ComponentProps<typeof Modal>;

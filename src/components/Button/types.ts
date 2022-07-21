import { ComponentProps, ReactElement } from "react";
import { Button } from "react-native-paper";

export type iButtonProps = {
  title: string | ReactElement;
  isLoading?: boolean;
} & Omit<ComponentProps<typeof Button>, "mode" | "children">;

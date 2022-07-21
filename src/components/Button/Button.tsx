import React, { FC } from "react";
import { Button } from "react-native-paper";
import { iButtonProps } from "./types";

const Index: FC<iButtonProps> = ({ title, isLoading, ...props }) => {
  return (
    <Button loading={isLoading} disabled={isLoading || props.disabled} mode="contained" {...props}>
      {title}
    </Button>
  );
};

export default Index;

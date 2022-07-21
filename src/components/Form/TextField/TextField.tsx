import { Col } from "components/Col";
import React, { FC } from "react";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = (props) => {
  return (
    <Col style={styles.container}>
      <TextInput mode="outlined" {...props} />
    </Col>
  );
};

export default TextField;

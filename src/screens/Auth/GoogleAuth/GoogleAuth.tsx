import { Col, Header } from "@components/index";
import auth from "@react-native-firebase/auth";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React, { FC } from "react";

const GoogleAuthScreen: FC = () => {
  const handleGoogleLogin = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <Col style={{ flex: 1 }}>
      <Header title="Login" />
      <Col
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoogleSigninButton onPress={handleGoogleLogin} />
      </Col>
    </Col>
  );
};

export default GoogleAuthScreen;

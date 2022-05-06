import auth from "@react-native-firebase/auth";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

const GoogleAuthScreen: FC = () => {
  const handleGoogleLogin = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <SafeAreaView>
      <GoogleSigninButton onPress={handleGoogleLogin} />
    </SafeAreaView>
  );
};

export default GoogleAuthScreen;

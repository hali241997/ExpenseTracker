import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, UserInitialState, useUserState } from "state";

const useNavigation = () => {
  const dispatch = useDispatch();

  const currentUser = useUserState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "492987757133-99dmp24p6g6483cu0n8s1n95n7d74svo.apps.googleusercontent.com",
    });
  }, []);

  const handleAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      const currentUser: UserInitialState = {
        userId: user?.uid ?? null,
        name: user?.displayName ?? null,
        email: user?.email ?? null,
        photo: user?.photoURL ?? null,
      };
      dispatch(login(currentUser));
    },
    [dispatch]
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);

    return subscriber;
  }, [handleAuthStateChanged]);

  return currentUser;
};

export default useNavigation;

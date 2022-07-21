import AppColors from "@constants/colors";
import Navigation from "@navigation/index";
import { persistor, store } from "@redux/index";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const theme: Theme = {
    ...DefaultTheme,
    dark: false,
    mode: "exact",
    roundness: 8,
    colors: { ...AppColors.theme },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

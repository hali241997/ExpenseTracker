import { AnyAction, CombinedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createSensitiveStorage from "redux-persist-sensitive-storage";
import { UserInitialState } from "../reducers/user/types";
import userReducer from "../reducers/user/slice";

const storage = createSensitiveStorage({
  keychainService: "myKeychain",
  sharedPreferencesName: "mySharedPrefs",
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    // UserApi.reducerPath,
    // CarsApi.reducerPath,
    // DriversApi.reducerPath,
    // ContactUsApi.reducerPath,
    // PaymentsApi.reducerPath,
    // 'demo',
    // 'profileLoadingOverlay',
    // 'socketLoadingOverlay',
    // 'car',
  ],
};

const combinedReducers = combineReducers({
  // [UserApi.reducerPath]: UserApi.reducer,
  // [CarsApi.reducerPath]: CarsApi.reducer,
  // [DriversApi.reducerPath]: DriversApi.reducer,
  // [ContactUsApi.reducerPath]: ContactUsApi.reducer,
  // [PaymentsApi.reducerPath]: PaymentsApi.reducer,
  // language: languageReducer,
  user: userReducer,
  // car: carReducer,
  // alerts: alertsReducer,
  // demo: demoReducer,
  // profileLoadingOverlay: profileLoadingReducer,
  // socketLoadingOverlay: socketLoadingReducer,
});

type StateType = CombinedState<{ user: UserInitialState }> | undefined;

const rootReducer = (state: StateType, action: AnyAction) => {
  if (action.type === "user/logout") {
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      // UserApi.middleware,
      // CarsApi.middleware,
      // DriversApi.middleware,
      // ContactUsApi.middleware,
      // PaymentsApi.middleware,
    ]),
});

export type AppStateType = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);

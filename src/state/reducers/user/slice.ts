import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState } from "./types";

const initialState: UserInitialState = {
  userId: null,
  name: null,
  email: null,
  photo: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login(state: UserInitialState, { payload }: PayloadAction<UserInitialState>) {
      state.userId = payload.userId;
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
    },
    logout(state: UserInitialState) {
      state.userId = null;
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  accessToken: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.currentUser = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },
    loginFail(state) {
      state.loading = false;
      state.error = true;
    },
    logOut(state) {
      state.currentUser = null;
      state.accessToken = null;
    },
    accessTokenReset(state, action) {
      state.accessToken = action.payload;
    },
    userChange(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;

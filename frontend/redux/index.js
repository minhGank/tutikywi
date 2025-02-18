import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import onboardingSlice from "./onboardingSlice";
import sellerSlice from "./sellerSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  onboarding: onboardingSlice.reducer,
  seller: sellerSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

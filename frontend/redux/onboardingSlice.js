import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  professionalInfo: {},
  accountSecurity: {},
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    updatePersonalInfo(state, action) {
      state.personalInfo = action.payload;
    },
    updateProfessionalInfo(state, action) {
      state.professionalInfo = action.payload;
    },
    updateAccountSecurity(state, action) {
      state.accountSecurity = action.payload;
    },
    resetOnboarding: (state) => {
      state.personalInfo = {};
      state.professionalInfo = {};
      state.accountSecurity = {};
    },
  },
});

export default onboardingSlice;
export const onboardingAction = onboardingSlice.actions;

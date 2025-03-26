import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSeller: "",
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    sellerChange(state, action) {
      state.currentSeller = action.payload;
    },
  },
});

export default sellerSlice;
export const sellerAction = sellerSlice.actions;

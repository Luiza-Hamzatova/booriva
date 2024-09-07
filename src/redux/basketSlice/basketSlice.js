import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    isBasketOpen: false,
  },
  reducers: {
    setIsBasketOpen: (state, action) => {
      state.isBasketOpen = action.payload;
    },
  },
});

export const { setIsBasketOpen } = basketSlice.actions;

export default basketSlice.reducer;

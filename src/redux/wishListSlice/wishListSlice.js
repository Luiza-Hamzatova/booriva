import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    isFavorite: false,
  },
  reducers: {
    setIsFavorite: (state, action) => {
      state.isFavorite = action.payload;
    },
  },
});

export const { setIsFavorite } = wishListSlice.actions;

export default wishListSlice.reducer;
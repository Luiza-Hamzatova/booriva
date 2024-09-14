import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    cardWish: localStorage.getItem("cardWish")
      ? JSON.parse(localStorage.getItem("cardWish"))
      : [],

  },
  reducers: {
    setCardWish: (state, action) => {
      state.cardWish = action.payload;
      localStorage.setItem("cardWish", JSON.stringify(state.cardWish));
    },
  },
});

export const { setCardWish } = wishListSlice.actions;

export default wishListSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    isBasketOpen: false,
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    setIsBasketOpen: (state, action) => {
      state.isBasketOpen = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setIsBasketOpen, setCart } = basketSlice.actions;

export default basketSlice.reducer;

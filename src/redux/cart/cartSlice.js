import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartBasket",
  initialState: {
    cartBasket: localStorage.getItem("arrOfCartProducts")
      ? JSON.parse(localStorage.getItem("arrOfCartProducts"))
      : [],
  },
  reducers: {
    setCartBasket(state, { payload }) {
      state.cartBasket = payload;
      localStorage.setItem("arrOfCartProducts", JSON.stringify(state.cartBasket));
      console.log("Updated Cart:", state.cartBasket);
    },
  },
});

export const { setCartBasket } = cartSlice.actions;

export default cartSlice.reducer;

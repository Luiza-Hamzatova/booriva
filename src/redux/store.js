import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice/counterSlice";
import basket from "./basketSlice/basketSlice";
import cart from "./cart/cartSlice"

export const store = configureStore({
  reducer: {
    counter,
    basket,
    cart,
  },
});

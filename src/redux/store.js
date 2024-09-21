import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice/counterSlice";
import basket from "./basketSlice/basketSlice";
import wishList from "./wishListSlice/wishListSlice";
import cart from "./cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    counter,
    basket,
    wishList,
    cart,
  },
});

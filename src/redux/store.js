import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice/counterSlice";
import basket from "./basketSlice/basketSlice";
import wishList from "./wishListSlice/wishListSlice";
import cart from "./cartSlice/cartSlice";
import orderGet from "./orderGetSlice/orderGetSlice";
export const store = configureStore({
  reducer: {
    orderGet,
    counter,
    basket,
    wishList,
    cart,
  },
});

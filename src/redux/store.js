import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice/basketSlice";
import wishList from "./wishListSlice/wishListSlice";
import searchBarSlice from "./searchBarSlice/searchBarSlice";

export const store = configureStore({
  reducer: {
    basket,
    wishList,
    searchBarSlice
  },
});

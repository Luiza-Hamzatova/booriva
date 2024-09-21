import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice/basketSlice";
import wishList from "./wishListSlice/wishListSlice";
import searchBar from "./searchBarSlice/searchBarSlice";
export const store = configureStore({
  reducer: {
    basket,
    wishList,
    searchBar,
  },
});

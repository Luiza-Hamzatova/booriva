import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice/counterSlice";
import basket from "./basketSlice/basketSlice";

export const store = configureStore({
  reducer: {
    counter,
    basket,
  },
});

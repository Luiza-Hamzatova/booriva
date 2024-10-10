import { createSlice } from "@reduxjs/toolkit";

export const orderGetSlice = createSlice({
  name: "orderGet",
  initialState: {
    isOrderGetOpen: false,
    
  },
  reducers: {
    setIsorderGetOpen: (state, action) => {
      state.isOrderGetOpen = action.payload;
    },
  },
});

export const { setIsOrderGetOpen} = orderGetSlice.actions;

export default orderGetSlice.reducer;

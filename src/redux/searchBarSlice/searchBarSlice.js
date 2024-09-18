import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    isSearchBarOpen: false,
  },
  reducers: {
    setIsSearchBarOpen: (state, action) => {
      state.isSearchBarOpen = action.payload;
    },
  },
});

export const { setIsSearchBarOpen } = searchBarSlice.actions;

export default searchBarSlice.reducer;

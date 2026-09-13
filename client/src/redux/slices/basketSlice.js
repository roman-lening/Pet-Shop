import { createSlice } from "@reduxjs/toolkit";

const savedCount = localStorage.getItem("countitems");

const basketSlice = createSlice({
  name: "items",
  initialState: {
    countitems: savedCount ? Number(savedCount) : 0,
  },
  reducers: {
    addItem: (state, action) => {
      const quantity = action.payload ?? 1;
      state.countitems += quantity;
      localStorage.setItem("countitems", state.countitems);
    },
    deleteItem: (state, action) => {
      const quantity = action.payload ?? 1;
      state.countitems = Math.max(0, state.countitems - quantity);
      localStorage.setItem("countitems", state.countitems);
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;

export default basketSlice.reducer;

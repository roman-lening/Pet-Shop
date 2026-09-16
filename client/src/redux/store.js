import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice.js";
import salesSlice from "./slices/salesSlice.js";
import bagSlice from "./slices/bagSlice.js";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sales: salesSlice,
    items: bagSlice,
  },
});

export default store;

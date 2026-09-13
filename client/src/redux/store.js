import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice.js";
import salesSlice from "./slices/salesSlice.js";
import basketSlice from "./slices/basketSlice.js";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sales: salesSlice,
    items: basketSlice,
  },
});

export default store;

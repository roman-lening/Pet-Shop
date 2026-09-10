import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice.js";
import salesSlice from "./slices/salesSlice.js";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sales: salesSlice,
  },
});

export default store;

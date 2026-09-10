import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSales = createAsyncThunk("sales/getSales", async () => {
  const response = await axios.get("http://localhost:3333/products/all");
  return response.data;
});

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    sales: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSales.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getSales.fulfilled, (state, action) => {
        state.loading = false;
        state.sales = action.payload;
        state.error = null;
      })
      .addCase(getSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default salesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const savedProducts = localStorage.getItem("bagProducts");

const bagSlice = createSlice({
  name: "bagProducts",

  initialState: {
    products: savedProducts ? JSON.parse(savedProducts) : [],
  },

  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }

      localStorage.setItem("bagProducts", JSON.stringify(state.products));
    },

    addOneProduct: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === productId,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }

      localStorage.setItem("bagProducts", JSON.stringify(state.products));
    },

    deleteOneProduct: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === productId,
      );

      if (existingProduct) {
        existingProduct.quantity -= 1;

        if (existingProduct.quantity <= 0) {
          state.products = state.products.filter(
            (item) => item.id !== productId,
          );
        }
      }

      localStorage.setItem("bagProducts", JSON.stringify(state.products));
    },

    deleteProduct: (state, action) => {
      const productId = action.payload;

      state.products = state.products.filter((item) => item.id !== productId);

      localStorage.setItem("bagProducts", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, addOneProduct, deleteOneProduct, deleteProduct } =
  bagSlice.actions;

export default bagSlice.reducer;

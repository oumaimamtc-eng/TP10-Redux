import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  selectedCategory: "all",
  maxPrice: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = action.payload === "all"
          ? state.products
          : state.products.filter(
              p => p.category?.name === action.payload
            );
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
      state.filteredProducts = state.products.filter(
        p => p.price <= action.payload
      );
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
  setCategory,
  setMaxPrice,
} = productsSlice.actions;

export default productsSlice.reducer;

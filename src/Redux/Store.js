import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Reducers/authSlice'
import productsReducer from "./Reducers/productslice";
import cartSlice from "./Reducers/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsReducer,
    cart: cartSlice,
  },
});

export default store;

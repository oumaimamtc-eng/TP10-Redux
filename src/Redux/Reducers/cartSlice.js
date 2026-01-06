import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = state.items.find(
        i => i.product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },

    quantityPlus: (state, action) => {
      const item = state.items.find(
        i => i.product.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    quantityMoin: (state, action) => {
      const item = state.items.find(
        i => i.product.id === action.payload
      );
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            i => i.product.id !== action.payload
          );
        }
      }
    },

    deleteFromCart: (state, action) => {
      state.items = state.items.filter(
        i => i.product.id !== action.payload
      );
    },
  },
});

export const {
  addCart,
  quantityPlus,
  quantityMoin,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

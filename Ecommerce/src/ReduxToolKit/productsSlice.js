import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage if available
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const products = createSlice({
  name: "productsSlice",
  initialState: { cart: initialCart },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter(i => i.id !== item.id);
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = products.actions;

export default products.reducer;

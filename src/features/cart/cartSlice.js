import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.filter((item) => item.id === action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

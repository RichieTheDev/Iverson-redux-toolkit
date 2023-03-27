import { createSlice } from "@reduxjs/toolkit";
import Items from "../../../Items";

const initialState = {
  Items: Items,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.Items = [];
    },
    remove: (state, action) => {
      const itemId = action.payload;
      state.Items = state.Items.filter((item) => item.id !== itemId);
    },

    increase: (state, { payload }) => {
      const Item = state.Items.find((item) => item.id === payload.id);

      Item.amount = Item.amount + 1;
    },

    reduce: (state, { payload }) => {
      const Item = state.Items.find((item) => item.id === payload.id);
      Item.amount = Item.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.Items.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        state.amount = amount;
        state.total = total;
      });
    },
  },
});

export const { clearCart, remove, increase, reduce, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;

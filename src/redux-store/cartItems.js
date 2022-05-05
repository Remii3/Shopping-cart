import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { quantity: [], totalAmount: 0, changed: false };

const cartItems = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.quantity = action.payload.quantity;
    },
    increment(state, action) {
      const newItem = action.payload;
      const existingItem = state.quantity.find((item) => {
        return item.itemId === newItem.id;
      });
      state.changed = true;
      if (!existingItem) {
        state.quantity.push({
          itemId: newItem.id,
          price: newItem.price,
          amount: 1,
          title: newItem.title,
          totalPrice: newItem.price,
        });
        state.totalAmount++;
      } else {
        existingItem.amount++;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount++;
      }
    },
    decrement(state, action) {
      const id = action.payload;
      const existingItem = state.quantity.find((item) => item.itemId === id.id);
      state.changed = true;
      if (existingItem.amount === 1) {
        state.quantity = state.quantity.filter((item) => item.itemId !== id.id);
        state.totalAmount--;
      } else {
        existingItem.amount--;
        existingItem.totalPrice -= existingItem.price;
        state.totalAmount--;
      }
    },
  },
});

export const cartItemsActions = cartItems.actions;
export default cartItems.reducer;

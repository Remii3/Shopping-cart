import { createSlice } from "@reduxjs/toolkit";

const initialToggleUI = { showCart: true, notification: null };

const toggleUISlice = createSlice({
  name: "toggleUI",
  initialState: initialToggleUI,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const toggleUIActions = toggleUISlice.actions;
export default toggleUISlice.reducer;

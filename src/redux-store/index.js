import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./cartItems";
import cartUI from "./cartUI";

const store = configureStore({
  reducer: { items: cartItems, toggleUI: cartUI },
});
export default store;

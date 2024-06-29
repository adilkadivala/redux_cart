// this is redux store

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/addToCart/productSlice";
import cartReducer from "./slices/addToCart/cart";

export const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default Store;

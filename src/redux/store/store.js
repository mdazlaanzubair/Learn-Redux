import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart-slice";
import productsReducer from "../slices/product-slice";
import categoryReducer from "../slices/category-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    category: categoryReducer,
  },
});

export default store;

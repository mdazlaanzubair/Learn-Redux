import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    cartSummary: {
      productsPurchased: 0,
      totalItems: 0,
      totalCost: 0,
      discountTotal: 0,
      saving: {
        percentage: 0,
        amount: 0,
      },
    },
  },
  reducers: {
    // update cart summary
    updateCartSummary: (state) => {
      // reset initial state every time this reducer runs
      state.cartSummary = {
        productsPurchased: 0,
        totalItems: 0,
        totalCost: 0,
        discountTotal: 0,
        saving: {
          percentage: 0,
          amount: 0,
        },
      };

      // calculating total products purchased
      state.cartSummary.productsPurchased = state.cartProducts.length;

      state.cartProducts.forEach((item) => {
        // calculating total items purchased
        state.cartSummary.totalItems += item.qty;

        // calculating total price
        state.cartSummary.totalCost = item.originalPrice * item.qty;

        // calculating discounted total price
        state.cartSummary.discountTotal = item.price * item.qty;
      });

      // calculating savings
      // percentage
      state.cartSummary.saving.percentage = Math.round(
        ((state.cartSummary.totalCost - state.cartSummary.discountTotal) /
          state.cartSummary.totalCost) *
          100
      );
      // amount
      state.cartSummary.saving.amount = Math.round(
        state.cartSummary.totalCost - state.cartSummary.discountTotal
      );
    },

    // add item to cart
    addToCart: (state, action) => {
      // checking if product is already added in the cart
      const index = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );

      if (index !== -1) state.cartProducts[index].qty += 1;
      if (index === -1) state.cartProducts.push(action.payload);
    },

    // remove item from cart
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter((product) => {
        // returning all products whose id doesn't matches the action.payload
        return product.id !== action.payload;
      });
    },

    // increment quantity of product item
    increaseQty: (state, action) => {
      // checking if product is already added in the cart
      const index = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload
      );

      // if product is in the cart - increase quantity
      if (
        index !== -1 &&
        state.cartProducts[index].qty < state.cartProducts[index].stock
      )
        state.cartProducts[index].qty += 1;
    },

    // decrement quantity of product item
    decreaseQty: (state, action) => {
      // checking if product is already added in the cart
      const index = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload
      );

      // if product is in the cart - decrease quantity
      if (index !== -1 && state.cartProducts[index].qty > 1)
        state.cartProducts[index].qty -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  updateCartSummary,
  removeFromCart,
  decreaseQty,
  increaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;

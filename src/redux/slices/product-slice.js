import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { products: [{}], totalItems: 0 },
  reducers: {
    storeProductsToState: (state, action) => {
      state.products = action.payload;
    },
    storeTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeProductsToState, storeTotalItems } = productSlice.actions;

export default productSlice.reducer;

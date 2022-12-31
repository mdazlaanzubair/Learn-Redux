import { createSlice } from "@reduxjs/toolkit";
import { categories_list as categories } from "../../constants/CategoryConstant";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: categories,
    activeCategory: {
      cate_title: "",
      cate_slug: "",
    },
  },
  reducers: {
    storeCategoryToState: (state, action) => {
      console.log(`State: ${state} | Action: ${action.payload}`);
    },
    storeActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeCategoryToState, storeActiveCategory } =
  categorySlice.actions;

export default categorySlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./RecipesSlice"
export const store = configureStore({
reducer:{
recipes:RecipeSlice
}
})
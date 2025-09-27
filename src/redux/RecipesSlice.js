import {createSlice} from "@reduxjs/toolkit"
const RecipeSlice = createSlice({
    name:"RecipeBook",
    initialState: {
       recipes : [
            {id:0 , name:"Pasta with souce" , ingredients:["tomate" , "cheese" , "pasta"] , isCooked:false}
        ]
    },
    reducers:{
        addRecipe : (state , action) => {state.recipes.push(action.payload)},
        removeRecipe : (state , action) => {
            state.recipes = state.recipes.filter(rec => rec.id !== action.payload)
        },
        toggleRecipe : (state , action) => {
           const recipe = state.recipes.find(rec => rec.id === action.payload)
           if(recipe){
            recipe.isCooked=!recipe.isCooked
           }
    }
}
})
export const {addRecipe , removeRecipe , toggleRecipe} = RecipeSlice.actions
export default RecipeSlice.reducer;
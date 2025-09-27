import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../redux/RecipesSlice";
import { RecipeList } from "./RecipeList";
export const RecipeForm = () => {
    const dispatch = useDispatch()
    const  recipes = useSelector(state => state.recipes.recipes)
    return(
        <>
        <form onSubmit={(e) =>{
         e.preventDefault();
         const name = e.target.elements.name.value;
         const ingredients = e.target.elements.ingredients.value.split(",")
         dispatch(addRecipe({id:Date.now() , name , ingredients , isCooked:false}))
        }}>
            <input type="text" name="name" placeholder="Name recipe" />
            <input type="text"name="ingredients" placeholder="Ingredients recipe" />
            <button>Add</button>
        </form>
        <RecipeList recipes={recipes} />
        </>
    )
}
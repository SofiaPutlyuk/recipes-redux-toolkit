import { useDispatch } from "react-redux"
import { toggleRecipe , removeRecipe } from "../redux/RecipesSlice"
export const RecipeList = ({recipes}) => {
    const dispatch = useDispatch()
    return (
     <ul>
        {recipes.map((recipe) => (
        <>
       <li key={recipe.id} style={{textDecoration: recipe.isCooked ? "line-through" : "none"}}>
        <p>{recipe.name}</p>
        <ul>{recipe.ingredients.map((ingredient , index) => (
           <li key={index}>{ingredient}</li>
        ))}</ul>
       </li>
       <button onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
       <input type="checkbox" checked={recipe.isCooked} onChange={() => dispatch(toggleRecipe(recipe.id))}/>
        </>
        ))}
     </ul>
    )
}
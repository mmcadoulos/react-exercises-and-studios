import recipedata from "./recipe.json";

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((recipe, index) => (
        <ul>
        {recipe.ingredients.map((ingredient, i) => (
         <li key={i}>{ingredient}</li>
        ))}
        </ul>
      ))}
      {/* {recipedata.map((recipeDetails, index) => (
        <ul>
          {recipeDetails.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      ))} */}
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array

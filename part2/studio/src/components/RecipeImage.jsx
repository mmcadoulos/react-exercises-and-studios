import recipedata from './recipe.json';

function RecipeImage() {
  let recipeImage = recipedata.map((recipe)=><img src={recipe.recipeImage} alt={recipe.name} className='recipeImage'></img>) 
  return (
    <div>{recipeImage}</div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
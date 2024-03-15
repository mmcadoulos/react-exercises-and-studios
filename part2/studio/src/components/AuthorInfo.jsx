import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  let recipeAuthorImage = recipedata.map((recipe)=>{
    return <img src={recipe.authorImage} alt={recipe.author} className='authorImage'></img>
  });
  let recipeAuthor = recipedata.map((recipe)=>{
    return <div key={recipe.name}>{recipe.author}</div>
  });
  let recipeWebsite = recipedata.map((recipe)=>{
    return <a href={recipe.website}>Recipe Website</a>
  });

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image

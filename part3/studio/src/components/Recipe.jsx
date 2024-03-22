import { useState } from 'react';
import './Recipe.css'

const RecipeAuthor = () => {
   let authorLink = "https://www.twopeasandtheihttps://www.twopeasandtheirpod.com/about/rpod.com/one-bowl-brownie-recipe/";
   let authorPhoto = "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/10/family-caleb-baptism-1152x1536.jpeg";
   let authorName = "Maria Lichty";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Butter", "Sugar AND Brown Sugar", "Eggs", "Vanilla Extract", 'Flour', 'Cocoa'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {/* <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li> */}
            {ingredients.map((ingredient)=>{return <li>{ingredient}</li>})}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>One Bowl Brownies</h1>
            <p>Best Brownie Recipe-you only need ONE bowl to make these fudgy, chewy, gooey, chocolaty brownies with shiny crackly tops! This easy homemade brownie recipe will be your GO TO! You will never buy a boxed brownie mix again!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Brownies-7.jpg" alt="brownies" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}

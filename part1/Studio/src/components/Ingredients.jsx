import React from "react";
import styles from './Ingredients.module.css'

 export default function RecipeIngredients(){
    let ingredients = ["1 cup unsalted butter", "½ cup sugar", "2 large eggs", "2–3/4 cups all-purpose flour", "6–8 ounces 72% chocolate, chopped"]
    
    
    return <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {styles.ingredientList}>
       <li>{ingredients[0]}</li>
       <li>{ingredients[1]}</li>
       <li>{ingredients[2]}</li>
       <li>{ingredients[3]}</li>
       <li>{ingredients[4]}</li>
    </ul>
 </div>
}

// export default RecipeIngredients
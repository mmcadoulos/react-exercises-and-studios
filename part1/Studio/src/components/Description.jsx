import styles from "./Description.module.css";
import React from "react";

const RecipeAuthor = () => {
  let authorLink =
    "https://thewoodandspoon.com/the-best-salted-chocolate-chip-cookies/";
  let authorPhoto =
    "https://thewoodandspoon.com/wp-content/uploads/2020/01/Headshot_1500x1490@2x.png";
  let authorName = "Kate Wood";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>The Wood and Spoon</a>
      </div>
    </div>
  );
};

class RecipeDescription extends React.Component {
  render() {
   return <div>
      <div>
        <h1>The Best Salted Chocolate Chip Cookies</h1>
        <p>Self Explanatory</p>
      </div>
      <RecipeAuthor />
    </div>;
  }
}

export default RecipeDescription;
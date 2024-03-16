import { useState } from "react";
import data from "../data.json";

function MyProjects() {
  const [index, setIndex] = useState(0);
  const projects = data.projects;
  // const book1 = projects[0];
  // const book2 = projects[1];
  // const book3 = projects[2];
  // const book4 = projects[3];
  // projects.map((book)=>{
  //     const
  // })
  let book = projects[index];

  const handleClick = () => {
    setIndex((index + 1) % projects.length);
  };

  return (
    <div>
      <img src={book.img} alt={book.alt} style={{ maxHeight: "300px" }}></img>
      <p>Purpose: {book.type}</p>
      <p>Author(s): {book.authors}</p>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default MyProjects;

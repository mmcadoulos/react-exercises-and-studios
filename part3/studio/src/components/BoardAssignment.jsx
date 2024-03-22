import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    { label: "Dinner", value: "Dinner" },
    { label: "Dessert", value: "Dessert" },
    { label: "Breakfast", value: "Breakfast" },
  ];

  const [boardName, setName] = useState('no boards yet!');
  
  const handleChange = (event) => {
   setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}

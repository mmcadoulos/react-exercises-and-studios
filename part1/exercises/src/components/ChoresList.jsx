import React from 'react';
import classes from './ChoresList.module.css'


class ChoresList extends React.Component {
  render(){
  return (
    <div>
      <h3 className={classes.choresHeading}>Chore List</h3>
      <p className={classes.choresText}>Finish LaunchCode homework!</p>
    </div>
  );
  }
}

export default ChoresList


/*
let choreArray = ["chore1", "chore2"]

const ChoresList = ()=>{

  {choreArray.map((chore, index))}?????
}


*/
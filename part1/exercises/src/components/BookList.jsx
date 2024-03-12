import React from "react";
import classes from "./BookList.module.css";
class BookList extends React.Component {
  render() {
    let pageTitle = "Novels I Have Read";
    let book1 =
      "https://www.pluggedin.com/wp-content/uploads/2020/01/scarlet-pimpernel-cover-1030x1536.jpg";
    let book2 =
      "https://m.media-amazon.com/images/I/51yoPe3UyaL._AC_UF1000,1000_QL80_.jpg";
    let book3 = "https://toppsta.com/images/covers/3/2/5/2/9780261103252.jpg";

    return (
      <div className={classes.BookList}>
        <h3>{pageTitle}</h3>
        <img style={{maxHeight: "300px"}} src={book1} alt="The Scarlet Pimpernel by Baroness Orczy" />
        <img style={{maxHeight: "300px"}} src={book2} alt="The Count of Monte Cristo by Alexandre Dumas" />
        <img style={{maxHeight: "300px"}} src={book3} alt="The Lord of the Rings by J.R.R. Tolkien" />
      </div>
    );
  }
}

export default BookList
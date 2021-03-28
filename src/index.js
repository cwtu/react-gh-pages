import React from "react";
import ReactDom from "react-dom";

import Book2 from "./Book2.js";
import { books } from "./books.js";
import { secondbook } from "./books.js";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      {books.map((book) => {
        return <Book2 key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/41x7d5KZiOL._AC_SX184_.jpg"
    alt=""
  />
);
const Title = () => (
  <h3 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    The Body: A Guide for Occupants
  </h3>
);
const Author = () => <p>Bill Bryson</p>;

ReactDom.render(<BookList />, document.getElementById("root"));

import React from 'react';

const Book2 = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    alert("hey");
  };
  const showAuth = (author) => {
    alert(author);
  };

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      <h3
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {title}
      </h3>
      <p>{author}</p>
      <button onClick={clickHandler}>hey</button>
      <button onClick={() => showAuth(author)}>show author</button>
    </article>
  );
};

export default Book2
import { useState } from "react";

const BlogForm = ({ createBlog, blogs }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setNewAuthor(event.target.value);
  };
  const urlChangeHandler = (event) => {
    setNewUrl(event.target.value);
  };

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      id: blogs.length + 1,
    });

    setNewTitle("");
    console.log("newtitle", newTitle);
    setNewAuthor("");
    setNewUrl("");
  };

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addBlog}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" onChange={titleChangeHandler} />
        <br />
        <label htmlFor="author">Author:</label>
        <input id="author" name="author" onChange={authorChangeHandler} />{" "}
        <br />
        <label htmlFor="url">url:</label>
        <input id="url" name="url" onChange={urlChangeHandler} /> <br />
        <button type="submit">Add blog</button>
      </form>
    </>
  );
};

export default BlogForm;

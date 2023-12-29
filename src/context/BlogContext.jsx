import { createContext, useEffect, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, desc) => {
    return setPosts([
      ...posts,
      { title: title, desc: desc, id: `${posts.length + 1}` },
    ]);
  };

  const removeContxt = (id) => {
    const filtredPosts = posts.filter((ele) => ele.id != id);
    setPosts(filtredPosts);
  };

  const getOneBlog = (id) => {
    const foundedBlog = posts.filter((ele) => ele.id === id);
    return foundedBlog;
  };

  const editBlog = (blogId, newTitle, newDesc) => {
    const postToedit = posts.filter((ele) => ele.id === blogId);
    newDesc.length ? (postToedit[0].desc = newDesc) : null;
    newTitle.length ? (postToedit[0].title = newTitle) : null;
    setPosts([...posts, editBlog]);
  };

  return (
    <Context.Provider
      value={{ posts, addPost, removeContxt, getOneBlog, editBlog }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (type, content) => {
    const newPost = { type, content };
    setPosts([...posts, newPost]);
  };
  
  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  // TODO: CHECK DONE Add the ability for the <PostCreate /> component to create new posts.
  // TODO: CHECK DONE Add the ability for the <PostList /> component to delete an existing post.
  return (
    <div className="App">
      <PostCreate createPost={createPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}
export default App;
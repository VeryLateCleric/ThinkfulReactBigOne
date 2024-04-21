import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, deletePost }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <p>{post.content}</p>
          <button name="delete" onClick={() => deletePost(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
  // TODO:DONE Diplay the list of posts.
  // TODO:DONE (post) Create at least one additional component that is used by this component.
  // TODO:DONE Each post must have className="post" for the tests to work.
  // TODO:DONE Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // return <div className="post-list"></div>; DELETE LATER
}

export default PostList;

import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(type, content);
    setType("Text")
    setContent("")
  }

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required={true}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required={true}
              rows={3} 
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required={true}
            />
          )}
        </div>
        <div>
          <button type="submit" data-testid="formSubmit">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;

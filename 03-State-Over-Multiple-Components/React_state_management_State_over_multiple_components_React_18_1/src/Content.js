import React from "react";

function Content({ loggedIn, fontSize }) {
  return loggedIn ? <p style={{ fontSize: `${fontSize}px`}}>CONTENT</p> : null;
}

export default Content;
import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Logout" : "Login"}
      </button>
      <button onClick={handleFontSizeIncrease}>Increase Font Size</button>
    </div>
  );
}

export default Header;

import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Logout" : "Log In"}
      </button>
      <button onClick={handleFontSizeIncrease}>Increase Font size</button>
    </div>
  );
}

export default Header;

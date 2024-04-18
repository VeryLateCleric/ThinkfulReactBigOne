import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Logout" : "/Log In/i"}
      </button>
      <button onClick={handleFontSizeIncrease}>/Increase Font Size/i</button>
    </div>
  );
}

export default Header;

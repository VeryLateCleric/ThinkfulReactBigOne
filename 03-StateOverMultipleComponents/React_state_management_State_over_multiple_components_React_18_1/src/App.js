import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12);

  const handleLoggedInClick = () => {setLoggedIn(!loggedIn)};
  const handleFontSizeIncrease = () => {setFontSize(fontSize + 2)}

  // const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header
        loggedIn={loggedIn}
        handleLoggedInClick={handleLoggedInClick}
        handleFontSizeIncrease={handleFontSizeIncrease}
      />
      <Content fontSize={fontSize} />
    </div>
  );
}

export default App;

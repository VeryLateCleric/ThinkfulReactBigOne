import React, { useState } from "react";

function CountButton () {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };
    return (
        <button onClick={handleClick}>
            Click count: {clickCount}
        </button>
    )
}

export default CountButton;
import React from "react";

function ClickTimes({ onButtonClick }) {
    return (
        <div>
            <button onClick={onButtonClick} role="button">
            Click Me
            </button>
        </div>
    );
}

export default ClickTimes;

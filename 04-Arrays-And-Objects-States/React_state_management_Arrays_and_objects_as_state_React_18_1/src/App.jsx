import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimestamps] = useState([]);

  const handleButtonClick = () => {
    const newTimestamps = [...timestamps, Date.now()]
  }

  return (
    <div>
      
    </div>
  )
}

export default App;

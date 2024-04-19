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
      <ClickTimes onButtonClick={handleButtonClick}/>
      <TimestampsDisplay timestamps={timestamps}/>
    </div>
  )
}

export default App;

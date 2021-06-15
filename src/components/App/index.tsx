import React from "react";
import "./date.css";

const App = () => {
  let date = new Date();
  let liveDateTime = date.toLocaleTimeString();
  return (
    <>
      <div data-testid="date" className="date">{liveDateTime}</div>
    </>
  );
};

export default App;

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");
  return (
    <div
      style={{ backgroundColor: color }}
      className="container h-screen w-full relative"
    >
      <div className="h-14 color-container w-full absolute bottom-5 rounded-md flex p-2 space-x-5 justify-center bg-black text-center ">
        <button
      
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("olive")}>Olive</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("cyan")}>Cyan</button>
        <button onClick={() => setColor("pink")}>Pink</button>
        <button onClick={() => setColor("gray")}>Gray</button>
      </div>
    </div>
  );
}

export default App;

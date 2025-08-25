import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [height, setHeight] = useState(145);

  return (
    <div className="container">
      <div style={{ position: "fixed", top: "10%" }}>
        <button
          style={{ fontSize: "20px" }}
          onClick={() => setHeight(height + 10)}
        >
          +
        </button>
        <button
          style={{ fontSize: "20px" }}
          onClick={() => setHeight(height - 10)}
        >
          -
        </button>
      </div>

      <div
        style={{
          height: `${height}px`,
        }}
      >
        <Button />
      </div>
    </div>
  );
}

export default App;

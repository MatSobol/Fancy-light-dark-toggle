import "./Button.css";

import { useState } from "react";
import { SoonAndMoon } from "./SoonAndMoon";
import { Night } from "./Night";
import { Day } from "./Day";



export const Button = () => {
  const [checked, setChecked] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  return (
    <div
      className="button-container"
      onClick={() => {
        setIsMoving(true);
        setChecked(!checked);
      }}
    >
      <input
        type="checkbox"
        className="invisible-input"
        checked={checked}
        onChange={(el) => setChecked(el.target.checked)}
      />
      <Night />
      <Day />
      <SoonAndMoon isMoving={isMoving} setIsMoving={setIsMoving} />
    </div>
  );
};

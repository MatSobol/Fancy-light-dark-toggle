import { CloudsFront } from "../../../assets/Clouds front";
import { CloudsBack } from "../../../assets/Clouds back";

import "./Day.css"

export const Day = () => {
  return (
    <div className="day-container">
      <CloudsFront />
      <CloudsBack />
    </div>
  );
};

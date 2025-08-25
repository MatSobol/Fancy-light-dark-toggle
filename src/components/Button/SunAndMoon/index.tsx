import "./SoonAndMoon.css";

const Rays = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div className="ray" key={i} />
      ))}
    </>
  );
};

const Moon = () => {
  return (
    <div className="moon">
      <div className="moon-spot" />
      <div className="moon-spot" />
      <div className="moon-spot" />
    </div>
  );
};

export const SunAndMoon = ({
  isMoving,
  setIsMoving,
}: {
  isMoving: boolean;
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`sun-and-moon ${isMoving ? "moving" : ""}`}
      onTransitionEnd={() => setIsMoving(false)}
    >
      <Rays />
      <div className="sun">
        <Moon />
      </div>
    </div>
  );
};

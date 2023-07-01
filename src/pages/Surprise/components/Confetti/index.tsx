import React, { Fragment } from "react";
import "./confetti.scss";

interface IConfettiProps {
  open: boolean;
}

let count = 200;
let points = [];

const Confetti: React.FC<IConfettiProps> = ({ open }) => {
  function generatePoints() {
    points = [];

    for (let i = 0; i < count; i++) {
      points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
    }
    return points;
  }

  let confetti = generatePoints();

  return (
    <Fragment>
      <div className={`confetti ${open ? "animated" : ""}`}>
        {confetti.map((c) => c)}
      </div>
    </Fragment>
  );
};

export default Confetti;

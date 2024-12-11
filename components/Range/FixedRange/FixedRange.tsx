import { FC } from "react";
import "../range.css";

type FixedRangeProps = {
  values: number[];
};

const fixedRange: FC<FixedRangeProps> = ({ values }) => {
  const min = values[0];
  const max = values[values.length - 1];

  return (
    <div className="range-container">
      <p>{min} €</p>
      <div className="range-slider">
        <div className="thumb"></div>
        <div className="thumb"></div>
      </div>
      <p>{max} €</p>
    </div>
  );
};
export default fixedRange;

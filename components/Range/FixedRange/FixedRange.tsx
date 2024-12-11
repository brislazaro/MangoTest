import { FC, useState } from "react";
import "../range.css";

type FixedRangeProps = {
  values: number[];
};

const fixedRange: FC<FixedRangeProps> = ({ values }) => {
  const min = values[0];
  const max = values[values.length - 1];

  const [thumbMin, setThumbMin] = useState<number>(min);
  const [thumbMax, setThumbMax] = useState<number>(max);

  const range = max - min;
  const minPercent = ((thumbMin - min) / range) * 100;
  const maxPercent = ((thumbMax - min) / range) * 100;

  return (
    <div className="range-container">
      <span className="label--left">{min} €</span>
      <div className="range-slider">
        <div
          className="thumb"
          style={{ left: `calc(${minPercent}% - 10px)` }}
        ></div>
        <div
          className="thumb"
          style={{ left: `calc(${maxPercent}% - 10px)` }}
        ></div>
        {values.map((dot) => {
          return <div className="dot" key={dot}></div>;
        })}
      </div>
      <span className="label--right">{max} €</span>
    </div>
  );
};
export default fixedRange;

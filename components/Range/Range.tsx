"use client";
import { FC, useState } from "react";
import "./range.css";

type RangeProps = {
  min: number;
  max: number;
};

const Range: FC<RangeProps> = ({ min, max }) => {
  const [valueMin, setValueMin] = useState<number>(min);
  const [valueMax, setValueMax] = useState<number>(max);

  return (
    <div className="range-container">
      <div className="label label--left">
        <input
          type="text"
          name="min"
          value={valueMin}
          className="label-data"
          onChange={(e) => setValueMin(Number(e.target.value))}
        ></input>
        <span>€</span>
      </div>
      <div className="range-slider">
        <div className="thumb thumb-min"></div>
        <div className="thumb thumb-max"></div>
      </div>

      <div className="label">
        <input
          type="text"
          name="min"
          value={valueMax}
          className="label-data"
          onChange={(e) => setValueMax(Number(e.target.value))}
        ></input>
        <span>€</span>
      </div>
    </div>
  );
};

export default Range;

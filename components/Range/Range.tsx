"use client";
import { ChangeEvent, FC, useState } from "react";
import "./range.css";
import { parseRangeInput } from "../../utils/stringTreatment";

type RangeProps = {
  min: number;
  max: number;
};

const Range: FC<RangeProps> = ({ min, max }) => {
  const [displayMin, setDisplayMin] = useState<string>(min.toString());
  const [displayMax, setDisplayMax] = useState<string>(max.toString());

  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setDisplayMin(newValue);
  };

  const handleBlurMin = () => {
    if (Number(displayMin) >= Number(displayMax)) {
      const newValue = Number(displayMax) - 1;
      setDisplayMin(newValue.toString());
    }
  };

  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setDisplayMax(newValue);
  };

  const handleBlurMax = () => {
    if (Number(displayMax) <= Number(displayMin)) {
      const newValue = Number(displayMin) + 1;
      setDisplayMax(newValue.toString());
    }
  };

  return (
    <div className="range-container">
      <div className="label label--left">
        <input
          data-testid="input-min"
          name="min"
          value={displayMin}
          className="label-data"
          onChange={handleChangeMin}
          onBlur={handleBlurMin}
        ></input>
        <span>€</span>
      </div>
      <div className="range-slider">
        <div className="thumb thumb-min"></div>
        <div className="thumb thumb-max"></div>
      </div>
      <div className="label">
        <input
          data-testid="input-max"
          name="max"
          value={displayMax}
          className="label-data"
          onChange={handleChangeMax}
          onBlur={handleBlurMax}
        ></input>
        <span>€</span>
      </div>
    </div>
  );
};

export default Range;

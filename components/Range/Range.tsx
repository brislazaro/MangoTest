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
  const [originalMin, setOriginalMin] = useState<string>(min.toString());
  const [originalMax, setOriginalMax] = useState<string>(max.toString());

  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setDisplayMin(newValue);
  };

  const handleBlurMin = () => {
    if (Number(displayMin) >= Number(displayMax)) {
      alert("Min value cannot be greater than or equal to max value.");
      setDisplayMin(originalMin);
    } else {
      setOriginalMin(displayMin);
    }
  };

  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setDisplayMax(newValue);
  };

  const handleBlurMax = () => {
    if (Number(displayMax) <= Number(displayMin)) {
      alert("Max value cannot be smaller than or equal to min value.");
      setDisplayMax(originalMax);
    } else {
      setOriginalMax(displayMax);
    }
  };

  return (
    <div className="range-container">
      <div className="label label--left">
        <input
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

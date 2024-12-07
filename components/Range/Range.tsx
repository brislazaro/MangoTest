"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";
import "./range.css";
import { parseRangeInput } from "../../utils/stringTreatment";

type RangeProps = {
  min: number;
  max: number;
};

const Range: FC<RangeProps> = ({ min, max }) => {
  const [labelMin, setLabelMin] = useState<number>(min);
  const [labelMax, setLabelMax] = useState<number>(max);
  const [thumbMin, setThumbMin] = useState<number>(min);
  const [thumbMax, setThumbMax] = useState<number>(max);

  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);

  const range = max - min;
  const minPercent = ((thumbMin - min) / range) * 100;
  const maxPercent = ((thumbMax - min) / range) * 100;

  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setLabelMin(Number(newValue));
  };

  const handleBlurMin = () => {
    let newValue = labelMin;

    if (labelMin >= labelMax) {
      newValue = labelMax - 1;
    }

    if (labelMin > min) {
      newValue = min;
    }

    setLabelMin(newValue);
    setThumbMin(newValue);
  };

  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseRangeInput(e.target.value);
    setLabelMax(Number(newValue));
  };

  const handleBlurMax = () => {
    let newValue = labelMax;

    if (labelMax <= labelMin) {
      newValue = labelMin + 1;
    }

    if (labelMax > max) {
      newValue = max;
    }

    setLabelMax(newValue);
    setThumbMax(newValue);
  };

  const handleMouseDown = (thumb: "min" | "max") => {
    setIsDragging(thumb);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const slider = document.querySelector(".range-slider");
    if (!slider) return;

    const sliderRect = slider.getBoundingClientRect();
    const newPercent = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
    const newValue = Math.round(min + ((max - min) * newPercent) / 100);

    if (isDragging === "min") {
      if (newValue < min || newValue >= labelMax) return;
      setLabelMin(newValue);
      setThumbMin(newValue);
    } else if (isDragging === "max") {
      if (newValue > max || newValue <= labelMin) return;
      setLabelMax(newValue);
      setThumbMax(newValue);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="range-container">
      <div className="label label--left">
        <input
          data-testid="input-min"
          name="min"
          value={labelMin}
          className="label-data"
          onChange={handleChangeMin}
          onBlur={handleBlurMin}
        ></input>
        <span>€</span>
      </div>
      <div className="range-slider">
        <div
          className="thumb"
          style={{ left: `calc(${minPercent}% - 18px)` }}
          onMouseDown={() => handleMouseDown("min")}
        ></div>
        <div
          className="thumb"
          style={{ left: `calc(${maxPercent}% - 2px)` }}
          onMouseDown={() => handleMouseDown("max")}
        ></div>
      </div>
      <div className="label label--right">
        <input
          data-testid="input-max"
          name="max"
          value={labelMax}
          className="label-data"
          onChange={handleChangeMax}
          onBlur={handleBlurMax}
        ></input>
        <span>€</span>
      </div>
      <div></div>
    </div>
  );
};

export default Range;

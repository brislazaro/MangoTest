import { FC, useEffect, useState } from "react";
import "../range.css";
import { getNewThumbValue } from "../../../utils/rangeCalculations";

type FixedRangeProps = {
  values: number[];
};

const fixedRange: FC<FixedRangeProps> = ({ values }) => {
  const min = values[0];
  const max = values[values.length - 1];

  const [thumbMin, setThumbMin] = useState<number>(min);
  const [thumbMax, setThumbMax] = useState<number>(max);

  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);

  const getValuePercentage = (value: number) => {
    const index = values.indexOf(value);
    return (index / (values.length - 1)) * 100;
  };

  const minPercent = getValuePercentage(thumbMin);
  const maxPercent = getValuePercentage(thumbMax);

  const handleMouseDown = (thumb: "min" | "max") => {
    setIsDragging(thumb);
  };

  const getNearestValue = (value: number, rangeValues: number[]) => {
    return rangeValues.reduce((nearest, current) =>
      Math.abs(current - value) < Math.abs(nearest - value) ? current : nearest
    );
  };

  const handleMouseMove = (e: MouseEvent) => {
    const slider = document.querySelector(".range-slider");
    if (!slider) return;

    const sliderRect = slider.getBoundingClientRect();

    const newThumbValue = getNewThumbValue(e.clientX, sliderRect, min, max);

    const nearestValue = getNearestValue(newThumbValue, values);

    if (isDragging === "min" && nearestValue < thumbMax) {
      setThumbMin(nearestValue);
    } else if (isDragging === "max" && nearestValue > thumbMin) {
      setThumbMax(nearestValue);
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
      <span className="label--left">{min} €</span>
      <div className="range-slider">
        <div
          className="thumb"
          style={{ left: `calc(${minPercent}% - 10px)` }}
          onMouseDown={() => {
            handleMouseDown("min");
          }}
        ></div>
        <div
          className="thumb"
          style={{ left: `calc(${maxPercent}% - 10px)` }}
          onMouseDown={() => {
            handleMouseDown("max");
          }}
        ></div>
        {values.map((dot) => {
          return (
            <div
              className="dot"
              key={dot}
              style={{ left: `calc(${getValuePercentage(dot)}%)` }}
            ></div>
          );
        })}
      </div>
      <span className="label--right">{max} €</span>
    </div>
  );
};
export default fixedRange;

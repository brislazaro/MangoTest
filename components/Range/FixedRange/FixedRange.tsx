import { FC, useEffect, useState } from "react";
import "../range.css";
import {
  getIndexPercentageFromValue,
  getNearestValueFromCurrentThumb,
  getNewThumbValue,
} from "../../../utils/rangeCalculations";

type FixedRangeProps = {
  values: number[];
};

const FixedRange: FC<FixedRangeProps> = ({ values }) => {
  const min = values[0];
  const max = values[values.length - 1];

  const [thumbMin, setThumbMin] = useState<number>(min);
  const [thumbMax, setThumbMax] = useState<number>(max);

  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);

  const minPercent = getIndexPercentageFromValue(thumbMin, values);
  const maxPercent = getIndexPercentageFromValue(thumbMax, values);

  const handleMouseDown = (thumb: "min" | "max") => {
    setIsDragging(thumb);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const slider = document.querySelector(".range-slider");
    if (!slider) return;

    const sliderRect = slider.getBoundingClientRect();

    const newThumbValue = getNewThumbValue(e.clientX, sliderRect, min, max);

    const nearestValue = getNearestValueFromCurrentThumb(newThumbValue, values);

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
    <div className="range-container" data-testid="fixed-range">
      <span data-testid="min" className="label--left">
        {thumbMin} €
      </span>
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
              data-testid="dot"
              style={{
                left: `calc(${getIndexPercentageFromValue(
                  dot,
                  values
                )}% - 1px)`,
              }}
            ></div>
          );
        })}
      </div>
      <span data-testid="max" className="label--right">
        {thumbMax} €
      </span>
    </div>
  );
};
export default FixedRange;

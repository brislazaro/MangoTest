"use client";
import "./range.css";
import useRange from "./useRange";

export default function Range() {
  const { data, isLoading, isError } = useRange();
  return (
    <div className="range-container">
      <div className="label">
        <p>{data.min}</p>
        <p>€</p>
      </div>
      <div className="range-slider">
        <div className="thumb thumb-min"></div>
        <div className="thumb thumb-max"></div>
      </div>

      <div className="label">
        <p>{data.max}</p>
        <p>€</p>
      </div>
    </div>
  );
}

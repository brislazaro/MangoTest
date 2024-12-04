"use client";
import { useState } from "react";
import "./range.css";
import useRange from "./useRange";

export default function Range() {
  const { data, isLoading, isError } = useRange();
  const [valueMin, setValueMin] = useState<number>(0);
  const [valueMax, setValueMax] = useState<number>(0);

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
}

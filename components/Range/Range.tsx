import { FC } from "react";
import FixedRange from "./FixedRange/FixedRange";
import FlexibleRange from "./FlexibleRange";

type RangeProps = {
  min?: number;
  max?: number;
  values?: number[];
};

const Range: FC<RangeProps> = ({ min, max, values }) => {
  if (values) {
    return <FixedRange values={values} />;
  } else {
    if (!min || !max) {
      console.error("Can not render Range as min and max are required props");
      return null;
    }

    return <FlexibleRange min={min} max={max} />;
  }
};

export default Range;

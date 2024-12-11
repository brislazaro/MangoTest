"use client";

import FixedRange from "../../components/Range/FixedRange/FixedRange";
import useGetFixedRangeValues from "./useGetFixedRangeValues";

export default function exercise2() {
  const { data, isLoading, isError } = useGetFixedRangeValues();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return <FixedRange values={data} />;
}

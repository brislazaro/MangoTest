"use client";

import Range from "../../components/Range/Range";
import useGetRangeValues from "./useGetRangeValues";

export default function Exercise1() {
  const { data, isLoading, isError } = useGetRangeValues();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return <Range min={data.min} max={data.max} />;
}

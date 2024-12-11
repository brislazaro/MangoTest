"use client";

import Range from "../../components/Range/Range";
import useGetFixedRangeValues from "./useGetFixedRangeValues";

export default function Exercise2() {
  const { data, isLoading, isError } = useGetFixedRangeValues();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return <Range values={data} />;
}

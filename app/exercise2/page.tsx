"use client";

import Range from "../../components/Range/Range";
import useGetFixedRangeValues from "./useGetFixedRangeValues";
import "../app.css";
import Link from "next/link";

export default function Exercise2() {
  const { data, isLoading, isError } = useGetFixedRangeValues();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="page-container">
      <Range values={data} />
      <Link className="button" href="/">
        Go back
      </Link>
    </div>
  );
}

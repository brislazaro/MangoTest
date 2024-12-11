"use client";

import Link from "next/link";
import Range from "../../components/Range/Range";
import useGetRangeValues from "./useGetRangeValues";
import "../app.css";

export default function Exercise1() {
  const { data, isLoading, isError } = useGetRangeValues();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="page-container">
      <Range min={data.min} max={data.max} />
      <Link className="button" href="/">
        Go back
      </Link>
    </div>
  );
}

import Link from "next/link";
import "./app.css";

export default function Page() {
  return (
    <div className="buttons-container">
      <Link className="button" href="/exercise1">
        Go to Exercise 1
      </Link>
      <Link className="button" href="/exercise2">
        Go to Exercise 2
      </Link>
    </div>
  );
}

import "./range.css";
export default function Range() {
  return (
    <div className="range-container">
      <div className="label">
        <p>12</p>
        <p>€</p>
      </div>
      <div className="range-slider">
        <div className="thumb thumb-min"></div>
        <div className="thumb thumb-max"></div>
      </div>

      <div className="label">
        <p>20</p>
        <p>€</p>
      </div>
    </div>
  );
}

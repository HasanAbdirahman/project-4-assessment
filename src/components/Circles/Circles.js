import "./Circles.css";
import { useState } from "react";
export default function Circles({ selectOne, two, three, four }) {
  return (
    <div className="Circles">
      <div className={selectOne ? "selected" : ""}>1</div>
      <div className={two ? "selected" : ""}>2</div>
      <div className={three ? "selected" : ""}>3</div>
      <div className={four ? "selected" : ""}>4</div>
    </div>
  );
}

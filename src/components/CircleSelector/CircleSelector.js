import { useState, useRef, useEffect } from "react";
import Circles from "../Circles/Circles";
import "./CircleSelector.css";
export default function CircleSelector() {
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();

  useEffect(function () {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  useEffect(function () {
    document.addEventListener("click", handleClickOutside2, true);
  }, []);

  useEffect(function () {
    document.addEventListener("click", handleClickOutside3, true);
  }, []);

  useEffect(function () {
    document.addEventListener("click", handleClickOutside4, true);
  }, []);

  function handleClickOutside(e) {
    if (refOne.current.contains(e.target)) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(isSelected);
    }
  }
  function handleClickOutside2(e) {
    if (refTwo.current.contains(e.target)) {
      setTwo(!two);
    } else {
      setTwo(two);
    }
  }
  function handleClickOutside3(e) {
    if (refThree.current.contains(e.target)) {
      setThree(!three);
    } else {
      setThree(three);
    }
  }
  function handleClickOutside4(e) {
    if (refFour.current.contains(e.target)) {
      setFour(!four);
    } else {
      setFour(four);
    }
  }

  return (
    <>
      <div className="CircleSelector">
        <div>
          <button ref={refOne} className={isSelected ? "selected" : ""}>
            {isSelected ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
          </button>
        </div>
        <div>
          <button ref={refTwo} className={two ? "selected" : ""}>
            {two ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}{" "}
          </button>
        </div>
        <div>
          <button ref={refThree} className={three ? "selected" : ""}>
            {three ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}{" "}
          </button>
        </div>
        <div>
          <button ref={refFour} className={four ? "selected" : ""}>
            {four ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}{" "}
          </button>
        </div>
      </div>
      <Circles selectOne={isSelected} two={two} three={three} four={four} />
    </>
  );
}

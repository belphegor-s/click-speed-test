import React, { useState } from "react";
import "./index.css";
import { FiMousePointer, FiClock } from "react-icons/fi";
import Swal from "sweetalert2";

const Clock = () => {
  const [numberClicks, setNumberClicks] = useState(0);
  const [startClock, setStartClock] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function handleNumberClick() {
    setNumberClicks(numberClicks + 1);
    setStartClock(true);
  }

  if (startClock) {
    if (seconds !== 10) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else {
      Swal.fire({
        icon: "success",
        title: `${numberClicks / seconds} CPS!`,
        text: `Your score was ${numberClicks} clicks in 10 seconds`,
      });

      setTimeout(() => {
        setStartClock(false);
        setNumberClicks(0);
        setSeconds(0);
      }, 2000);
    }
  }

  return (
    <>
      <div className="clock">
        <div className="clockLayout">
          <FiClock />
          <span>{seconds} seconds</span>
        </div>
      </div>

      <div className="click">
        <h1>Your Score: {numberClicks}</h1>
        <button onClick={handleNumberClick} className="glow-on-hover">
          <span
            style={{
              fontSize: "1.5rem",
              fontFamily: "Nunito",
              padding: "10px 30px",
            }}
          >
            Click to Start
          </span>
        </button>
      </div>
    </>
  );
};

export default Clock;

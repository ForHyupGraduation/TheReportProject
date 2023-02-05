import React, { useEffect, useState } from "react";
import "./Meter.css";

const Meter = ({ progressEndValue }) => {
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState(10);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let progress = null;

    if (isRunning) {
      progress = setInterval(() => {
        if (progressValue === progressEndValue) {
          setIsRunning(false);
        } else {
          setProgressValue(progressValue + 1);
        }
      }, speed);
    } else {
      clearInterval(progress);
    }

    return () => clearInterval(progress);
  }, [isRunning, progressValue, speed, progressEndValue]);

  return (
    <div
      className="circular-progress"
      style={{
        width: "20vw",
        height: "20vw",
        background: `conic-gradient( ${
          progressValue >= 90
            ? "#49c20f"
            : progressValue >= 70
            ? "#5bf9f9"
            : progressValue >= 30
            ? "#f0c14b"
            : progressValue >= 0
            ? "#ff0000"
            : "#ff0000"
        } ${progressValue * 3.6}deg, #cadcff ${progressValue * 3.6}deg )`,
      }}
    >
      <div className="value-container" style={{ fontSize: "3vw" }}>
        {progressValue}%
      </div>
    </div>
  );
};

export default Meter;

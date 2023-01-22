import React, { useEffect, useState } from "react";
import "./Meter.css";

const Meter = ({ progressEndValue }) => {
    const [ isRunning, setIsRunning ] = useState(true);
    const [ speed, setSpeed ] = useState(10);
    const [ progressValue, setProgressValue ] = useState(0);
        
    useEffect(() => {
        let progress = null;

        if(isRunning)
        {
            progress = setInterval(() => {
                if(progressValue === progressEndValue)
                {
                    setIsRunning(false);
                }
                else
                {
                    setProgressValue(progressValue + 1);
                }
            }, speed);
        }
        else
        {
            clearInterval(progress);   
        }

        return () => clearInterval(progress);
    }, [ isRunning, progressValue, speed, progressEndValue ])
    

    return (
        <div className="circular-progress" style={{
            background: `conic-gradient(
                #4d5bf9 ${progressValue * 3.6}deg,
                #cadcff ${progressValue * 3.6}deg
            )`
        }}>
            <div className="value-container">
                {progressValue}%
            </div>
        </div>
    )
}

export default Meter;
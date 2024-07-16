import React from "react";
import { useEffect, useState } from "react";
import './time.css';

export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
          tick();
        }, 1000);
      
        return () => {
          clearInterval(intervalID);
        };
      }, []);

const tick = () => {
    setTime(new Date());
}

    return (
        <p className="time">Aktualny czas:{time.toLocaleTimeString()}</p>
    )
};
import React from "react";
import { useEffect, useState } from "react";
import { StyledParagraph } from "./styled";

export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
          setTime(new Date());;
        }, 1000);
      
        return () => {
          clearInterval(intervalID);
        };
      }, []);


    return (
        <StyledParagraph>Dziś jest:
          {time.toLocaleDateString()} 
          Godzina: 
          {time.toLocaleTimeString()}
          </StyledParagraph>
    )
};
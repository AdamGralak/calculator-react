import React from "react";
import './result.css'

export const Result = ({ result }) => {
  return (
    <p className="result">
      {result !== undefined && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
          {" "}
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </>
      )}
    </p>
  );
};
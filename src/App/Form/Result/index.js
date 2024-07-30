import React from "react";
import { StyledParagraph } from "./styled";

export const Result = ({ result }) => {
  return (
    <StyledParagraph>
      {result !== undefined && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
          {" "}
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </>
      )}
    </StyledParagraph>
  );
};
import { useState } from "react";
import { Result } from "./Result";
import { Time } from "../Time";
import { useApiRates, } from "./useDownloadAPI";
import React from "react";
import {
  StyledButton,
  StyledHeaderContent,
  StyledInfoParagraph,
  StyledInput,
  StyledParagraph,
  StyledSelectInput,
  StyledDiv
} from "./styled";
import { SyncLoader } from "react-spinners";

export const Form = () => {

  const ratesData = useApiRates();

  const getExchangeDate = (ratesData) => {
    return new Date(ratesData.data.meta.last_updated_at).toLocaleDateString("pl-PL");
  };

  const [result, setResult] = useState({
    sourceAmount: 0,
    targetAmount: 0,
    currency: '',
  });

  const calculateResult = (amount, currency) => {
    const rate = ratesData.data.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });

  }

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(amount, currency);
  }


  switch (ratesData.status) {
    case "loading":
      return <StyledDiv>
        <SyncLoader color="#000000" size={10} speedMultiplier={1} />
        <p>Trwa wczytywanie kursów walut...</p>
      </StyledDiv>
    case "success":
      return (
        <form onSubmit={onSubmit}>
          <StyledHeaderContent>
            <h1>Przelicznik walut</h1>
            <Time />
          </StyledHeaderContent>
          <StyledParagraph>
            <label>
              <span>Kwota w USD:</span>
              <StyledInput
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę"
                required
                step={0.01}
                min={0.00}
                type="number"
              />
            </label>
          </StyledParagraph>
          <StyledParagraph>
            <label>
              <span>Waluta:</span>
              <StyledSelectInput
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.data.data).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </StyledSelectInput>
            </label>
          </StyledParagraph>
          <p>
            <StyledButton>Przelicz</StyledButton>
          </p>
          <StyledInfoParagraph>
            Kursy walut pobrane są z strony:&nbsp;&nbsp;
            <a href="https://currencyapi.com/" target="_blank" rel="noreferrer">currencyapi.com</a>
            <br />
            Ostatnia aktualizacja kursów odbyła się: {getExchangeDate(ratesData)}.
          </StyledInfoParagraph>
          <Result result={result} />
        </form>
      );
    case "error":
      return <StyledDiv>
        <p>Error loading data.</p>
      </StyledDiv>;
    default:
      return <StyledDiv >
        <p>Unknown status.</p>
      </StyledDiv>;
  }
};
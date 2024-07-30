import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Time } from "../Time";
import React from "react";
import { StyledButton, StyledHeaderContent, StyledInfoParagraph,
        StyledInput, StyledParagraph, StyledSelectInput } from "./styled";

export const Form = () => {
    const [result, setResult] = useState();

    const calculateResult = (amount, currency) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });

    }

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <StyledHeaderContent>
                    <h1>Przelicznik walut </h1>
                    <Time />
                </StyledHeaderContent>
                <StyledParagraph>
                    <label>
                        <span> Kwota w zł:</span>
                        <StyledInput
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpsiz kwotę"
                            required
                            step={0.01}
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
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}

                        </StyledSelectInput>
                    </label>
                </StyledParagraph>
                <p>
                    <StyledButton>Przelicz</StyledButton>
                </p>
                <StyledInfoParagraph>Kurs walut na dzień: 11 lipca 2024r.</StyledInfoParagraph>
                <Result result={result} />
            </form>
        </>
    )
};
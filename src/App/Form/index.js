import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import React from "react";
import './form.css'

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
            <h1 className="form_header">Przelicznik walut </h1>
            <form onSubmit={onSubmit}>
                <p className="form_label">
                    <label>
                        <span> Kwota w zł:</span>
                        <input
                            className="form_input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpsiz kwotę"
                            required
                            step={0.01}
                            type="number"
                        />
                    </label>
                </p>
                <p className="form_label">
                    <label>
                        <span>Waluta:</span>
                        <select
                            className="form_input"
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

                        </select>
                    </label>
                </p>
                <p>
                    <button className="form_button">Przelicz</button>
                </p>
                <p className="form_info">Kurs walut na dzień: 11 lipca 2024r.</p>
                <Result result={result} />
            </form>
        </>
    )


};
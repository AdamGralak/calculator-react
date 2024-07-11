import { useState } from 'react';
import { currencies } from './currencies';
import { Form } from './Form';
import './App.css';
import React from 'react';

function App() {

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

  return (
    <div className="app">
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;

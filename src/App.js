import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');
  const [converted, setConverted] = useState('');

  useEffect(() => {
    const convert = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
      );
      const data = await res.json();
      setConverted(data.rates[toCur]);
    };

    if (fromCur === toCur) {
      setConverted(amount);
      return;
    }

    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Amount..."
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <div>
        {converted}
        {' '}
        {toCur}
      </div>
    </div>
  );
}

export default App;

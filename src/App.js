import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <h2>Now check the auto rendering on save.</h2>
      <h3>Looks like the auto rendering is working ok in this app.</h3>
      <h4>I think we can start working then.</h4>
      <h5>Let&apos;s also test it with some event.</h5>

      <h6
        style={{
          background: '#9fe23f',
          fontSize: '20px',
          padding: '12px 16px',
          width: 'fit-content',
          margin: '0 auto',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={handleCount}
      >
        Okey click me.
      </h6>
      {counter !== 0 ? (
        <h2 style={{ color: '#41e121', fontSize: '50px' }}>{counter}</h2>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

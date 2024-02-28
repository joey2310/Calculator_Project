import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setHistory([...history, { input, result: calculatedResult }]);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '%') {
      setInput((prevInput) => {
        try {
          setResult(eval(prevInput) / 100);
          return (eval(prevInput) / 100).toString();
        } catch (error) {
          setResult('Error');
          return '';
        }
      });
    } else if (value === 'Back') {
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='completeBox'>
      <div className='cal'>
        <h1>CALCULATOR</h1>
      </div>
      <div className='numberBox'>
        <input className="input" type="text" value={input} readOnly />
      </div>
      <div className='numberBox'>
        <div>
          <button className='buttons1' onClick={() => handleClick('AC')}><h2>AC</h2></button>
          <button className='buttons' onClick={() => handleClick('Back')}><h2>Back</h2></button>
          <button className='buttons' onClick={() => handleClick('%')}><h2>%</h2></button>
          <button className='buttons' onClick={() => handleClick('/')}><h2>/</h2></button>
        </div>
        <div>
          <button className='buttons' onClick={() => handleClick('7')}><h2>7</h2></button>
          <button className='buttons' onClick={() => handleClick('8')}><h2>8</h2></button>
          <button className='buttons' onClick={() => handleClick('9')}><h2>9</h2></button>
          <button className='buttons' onClick={() => handleClick('*')}><h2>X</h2></button>
        </div>
        <div>
          <button className='buttons' onClick={() => handleClick('4')}><h2>4</h2></button>
          <button className='buttons' onClick={() => handleClick('5')}><h2>5</h2></button>
          <button className='buttons' onClick={() => handleClick('6')}><h2>6</h2></button>
          <button className='buttons' onClick={() => handleClick('-')}><h2>-</h2></button>
        </div>
        <div>
          <button className='buttons' onClick={() => handleClick('1')}><h2>1</h2></button>
          <button className='buttons' onClick={() => handleClick('2')}><h2>2</h2></button>
          <button className='buttons' onClick={() => handleClick('3')}><h2>3</h2></button>
          <button className='buttons' onClick={() => handleClick('+')}><h2>+</h2></button>
        </div>
        <div>
          <button className='buttons' onClick={() => handleClick('00')}><h2>00</h2></button>
          <button className='buttons' onClick={() => handleClick('0')}><h2>0</h2></button>
          <button className='buttons' onClick={() => handleClick('.')}><h2>.</h2></button>
          <button className='buttons' type='submit' onClick={() => handleClick('=')}><h2>=</h2></button>
        </div>
      </div>
      <div className='numberBox'>
        <input className="input" type="text" value={result} readOnly />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((calculation, index) => (
              <tr key={index}>
                <td>{calculation.input}</td>
                <td>{calculation.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

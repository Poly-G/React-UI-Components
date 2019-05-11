import React from 'react';
import './App.css';

// components
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const numbers = [
  {
    text: 7
  },
  {
    text: 8
  },
  {
    text: 9
  },
  {
    text: 4
  },
  {
    text: 5
  },
  {
    text: 6
  },
  {
    text: 1
  },
  {
    text: 2
  },
  {
    text: 3
  },

]

const symbols = [
  {
    text: "\u00F7"
  },
  {
    text: "	\u00D7"
  },
  {
    text: "\u2212"
  },
  {
    text: "+"
  },
  {
    text: "="
  }
]

const clear = {
  text: 'clear'
}

const zero = {
  text: 0
}

const App = () => {
  return (
    <div className="app">

      <CalculatorDisplay />

      <div className="button-container">
        <div className="numbers-container">
          <ActionButton text={clear.text} buttonStyle={'clear'} key={clear.text} />

          <div className="middle-numbers">
            {numbers.map((number) => (
              <NumberButton text={number.text} buttonStyle={'numbers'} key={number.text} />
            ))}
          </div>

          <ActionButton text={zero.text} buttonStyle={'zero'} key={zero.text} />
        </div>

        <div className="symbols-container">
          {symbols.map((symbol) => (
            <NumberButton text={symbol.text} buttonStyle={'symbols'} key={symbol.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

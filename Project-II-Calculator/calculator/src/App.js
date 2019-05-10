import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

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
    </div>
  );
};

export default App;

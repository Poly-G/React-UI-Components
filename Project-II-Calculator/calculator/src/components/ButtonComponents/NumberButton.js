import React from 'react'
import './Button.css';

const NumberButton = () => {
  return (
    <div>
          <button className={props.buttonStyle}>{props.text}</button>
    </div>
  )
}

export default NumberButton


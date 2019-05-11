import React from 'react'
import './Button.css';

const NumberButton = props => {
  return (
    <React.Fragment>
          <button className={props.buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}

export default NumberButton


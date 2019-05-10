import React from 'react';
import './Button.css';

const ActionButton = () => {
  return (
    <div>
          <button className={props.buttonStyle}>{props.text}</button>
    </div>
  )
}

export default ActionButton
import React from 'react';

import { ButtonProps } from '../../types/button';

import './Button.css';

function Button({ text, clickHandler }: ButtonProps) {
  return (
    <button className="button" onClick={clickHandler} type="button">
      {text}
    </button>
  );
}

export default Button;

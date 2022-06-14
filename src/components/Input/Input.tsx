import React, { memo } from 'react';

import arrow from '../../images/down-arrow.svg';

import { InputProps } from '../../types/input';

import './Input.css';

function Input({ type, placeholder } : InputProps): JSX.Element {
  return (
    <div className="input">
      <img
        className="input__image"
        src={arrow}
        alt="Arrow"
      />
      <input
        className="input__field"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default memo(Input);

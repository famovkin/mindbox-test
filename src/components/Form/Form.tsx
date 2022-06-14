import React, { useState, memo } from 'react';

import arrow from '../../images/down-arrow.svg';

import { FormProps } from '../../types/form';

import './Form.css';

function Input({ type, placeholder, onSubmit } : FormProps): JSX.Element {
  const [value, setValue] = useState('');

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (value === '') {
      return;
    }

    const addedTodo = {
      id: new Date().getTime(),
      text: value,
      complete: false,
    };

    onSubmit(addedTodo);
    setValue('');
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <img
        className="form__image"
        src={arrow}
        alt="Arrow"
      />
      <input
        className="form__input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default memo(Input);

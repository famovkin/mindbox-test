import React from 'react';

import { TodoProps } from '../../types/todo';

import './Todo.css';

function Todo({ text, id }: TodoProps) {
  return (
    <li className="todo">
      <label className="todo__label" htmlFor={`${text + id}`}>
        <input
          className="todo__radio"
          type="checkbox"
          id={`${text + id}`}
        />
        <div className="todo__pseudo-item">
          <span className="todo__checkmark" />
        </div>
        <p className="todo__text">{text}</p>
      </label>
    </li>
  );
}

export default Todo;

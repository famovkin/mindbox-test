import React from 'react';

import { TodoProps } from '../../types/todo';

import './Todo.css';

function Todo({
  text,
  id,
  complete,
  todos,
  setTodos,
}: TodoProps) {
  const checkboxHandler = (todoId: number) => {
    const selectedTodoIndex = todos?.findIndex((todo) => todo.id === todoId);
    const selectedTodo = todos[selectedTodoIndex];
    const updatedTodo = { ...selectedTodo, complete: !selectedTodo.complete };
    const updatedTodos = [...todos];
    updatedTodos[selectedTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  };

  return (
    <li className="todo">
      <label className="todo__label" htmlFor={`${text + id}`}>
        <input
          className="todo__checkbox"
          type="checkbox"
          id={`${text + id}`}
          onChange={() => checkboxHandler(id)}
        />
        <div className="todo__pseudo-item">
          <span className="todo__checkmark" />
        </div>
        <p className={`todo__text ${complete ? 'todo__text_type_checked' : ''}`} data-testid="todo__text">{text}</p>
      </label>
    </li>
  );
}

export default Todo;

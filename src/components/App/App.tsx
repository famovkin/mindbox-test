import React from 'react';

import Input from '../Input/Input';
import Todo from '../Todo/Todo';

import { TodoProps } from '../../types/todo';

import './App.css';

const todos: Array<TodoProps> = [
  { id: 1, text: 'Сделать что-нибудь важное' },
  { id: 2, text: 'Купить хлеб' },
  { id: 3, text: 'Погулять с собакой' },
];

function App() {
  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__container">
        <Input
          type="text"
          placeholder="What needs to be done?"
        />
        <ul className="todos">
          {todos.length
            ? todos.map((todo) => (
              <Todo key={todo.id} text={todo.text} id={todo.id} />))
            : <h2 className="todos__message">Todo list is empty</h2>}
        </ul>
      </div>
    </div>
  );
}

export default App;

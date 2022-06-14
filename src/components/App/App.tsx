import React, { useState, useEffect, useCallback } from 'react';

import Input from '../Input/Input';
import Todo from '../Todo/Todo';
import Footer from '../Footer/Footer';

import { TodoState } from '../../types/todo';

import './App.css';

const initialTodos = [
  { id: 1, text: 'Сделать что-нибудь важное', complete: false },
  { id: 2, text: 'Купить хлеб', complete: false },
  { id: 3, text: 'Погулять с собакой', complete: false },
  { id: 4, text: 'Погулять с кошкой', complete: false },
  { id: 5, text: 'Погулять одному', complete: false },
];

function App() {
  const [filter, setFilter] = useState<string>('all');
  const [todos, setTodos] = useState<TodoState[]>(initialTodos);
  const [activeTodosCount, setActiveTodosCount] = useState<number>(todos.length);

  const filterTodo = (selectedFilter: string): void => {
    setFilter(selectedFilter);
  };

  useEffect(() => setFilter(filter), [filter]);

  const computeActiveTodo = useCallback(
    (): number => todos.filter((todo) => todo.complete === false).length,
    [todos],
  );

  useEffect(() => setActiveTodosCount(computeActiveTodo()), [todos]);

  const allTodos = filter === 'all'
    && todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        complete={todo.complete}
        setTodos={setTodos}
        todos={todos}
      />
    ));

  const activeTodos = filter === 'active'
    && todos
      .filter((todo) => todo.complete === false)
      .map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          id={todo.id}
          complete={todo.complete}
          setTodos={setTodos}
          todos={todos}
        />
      ));

  const completedTodos = filter === 'completed'
    && todos
      .filter((todo) => todo.complete === true)
      .map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          id={todo.id}
          complete={todo.complete}
          setTodos={setTodos}
          todos={todos}
        />
      ));

  const removeTodo = () => {
    const activeTodoItems = todos.filter((todo) => todo.complete === false);
    setTodos(activeTodoItems);
  };

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__container">
        <Input
          type="text"
          placeholder="What needs to be done?"
        />
        <ul className="todos">
          {allTodos && allTodos.length !== 0
            ? allTodos
            : filter === 'all' && <h2 className="todos__message">Todo list is empty</h2>}
          {activeTodos && activeTodos.length !== 0
            ? activeTodos
            : filter === 'active' && <h2 className="todos__message">No active tasks</h2>}
          {completedTodos && completedTodos.length !== 0
            ? completedTodos
            : filter === 'completed' && <h2 className="todos__message">No completed tasks</h2>}
        </ul>
        <Footer
          activeTodosCount={activeTodosCount}
          filterHandler={filterTodo}
          removeHandler={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;

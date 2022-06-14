import React, { useState, useEffect, useCallback } from 'react';

import Form from '../Form/Form';
import Todo from '../Todo/Todo';
import Footer from '../Footer/Footer';

import { initialTodos } from '../../utils/constants';
import { TodoState } from '../../types/todo';

import './App.css';

function App() {
  const [filter, setFilter] = useState<string>('all');
  const [todos, setTodos] = useState<TodoState[]>(initialTodos);
  const [activeTodosCount, setActiveTodosCount] = useState<number>(todos.length);

  const filterTodos = (selectedFilter: string): void => {
    setFilter(selectedFilter);
  };

  const removeTodos = (): void => {
    const activeTodoItems = todos.filter((todo) => todo.complete === false);
    if (activeTodoItems.length === todos.length) return;
    setTodos(activeTodoItems);
  };

  const submitFormHandler = (newTodo: TodoState): void => setTodos([...todos, newTodo]);

  const computeActiveTodos = useCallback(
    (): number => todos.filter((todo) => todo.complete === false).length,
    [todos],
  );

  useEffect(() => setFilter(filter), [filter]);
  useEffect(() => setActiveTodosCount(computeActiveTodos()), [todos]);

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

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__container">
        <Form
          type="text"
          placeholder="What needs to be done?"
          onSubmit={submitFormHandler}
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
          filterHandler={filterTodos}
          removeHandler={removeTodos}
        />
      </div>
    </div>
  );
}

export default App;

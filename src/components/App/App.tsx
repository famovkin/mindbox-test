import React, { useState, useEffect, useCallback } from 'react';

import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

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

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__container">
        <Form
          type="text"
          placeholder="What needs to be done?"
          onSubmit={submitFormHandler}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filter={filter}
        />
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

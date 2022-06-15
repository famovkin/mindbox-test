import React from 'react';

import Todo from '../Todo/Todo';

import { TodoListProps } from '../../types/todoList';

import './TodoList.css';

function TodoList({ filter, todos, setTodos }: TodoListProps) {
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
  );
}

export default TodoList;

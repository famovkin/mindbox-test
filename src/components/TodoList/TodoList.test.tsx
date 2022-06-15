import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoList from './TodoList';

const mockedTodos = [
  { id: 1, text: 'Read a book', complete: false },
  { id: 2, text: 'Figure out task in Codewars', complete: true },
];

describe('TodoList component', () => {
  const mockedSetTodos = jest.fn();

  test('Renders without crashing', () => {
    render(<TodoList filter="all" todos={mockedTodos} setTodos={mockedSetTodos} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Read a book')).toBeInTheDocument();
    expect(screen.getByText('Figure out task in Codewars')).toBeInTheDocument();
  });

  test('Filter active todos', () => {
    render(<TodoList filter="active" todos={mockedTodos} setTodos={mockedSetTodos} />);

    expect(screen.getByText('Read a book')).toBeInTheDocument();
    expect(screen.queryByText('Figure out task in Codewars')).toBeNull();
  });

  test('Filter completed todos', () => {
    render(<TodoList filter="completed" todos={mockedTodos} setTodos={mockedSetTodos} />);

    expect(screen.queryByText('Read a book')).toBeNull();
    expect(screen.getByText('Figure out task in Codewars')).toBeInTheDocument();
  });

  test('Renders heading with all filter', () => {
    render(<TodoList filter="all" todos={[]} setTodos={mockedSetTodos} />);

    expect(screen.getByText('Todo list is empty')).toBeInTheDocument();
  });

  test('Renders heading with active filter', () => {
    render(<TodoList filter="active" todos={[]} setTodos={mockedSetTodos} />);

    expect(screen.getByText('No active tasks')).toBeInTheDocument();
  });

  test('Renders heading with completed filter', () => {
    render(<TodoList filter="completed" todos={[]} setTodos={mockedSetTodos} />);

    expect(screen.getByText('No completed tasks')).toBeInTheDocument();
  });
});

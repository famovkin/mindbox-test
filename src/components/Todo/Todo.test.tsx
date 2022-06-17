import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import Todo from './Todo';

const mockedSetTodos = jest.fn();

const mockedTodo = {
  id: new Date().getTime(),
  text: 'Go to the park',
  complete: false,
};

let renderUtils: any;

describe('Todo component', () => {
  beforeEach(() => {
    renderUtils = render(
      <Todo
        todos={[mockedTodo]}
        setTodos={mockedSetTodos}
        text={mockedTodo.text}
        id={mockedTodo.id}
        complete={mockedTodo.complete}
      />,
    );
  });

  test('Renders without crashing', () => {
    expect(screen.getByText('Go to the park')).toBeInTheDocument();
  });

  test('Todo is marked completed on checkbox click', () => {
    const { rerender } = renderUtils;
    const checkbox = screen.getByLabelText(mockedTodo.text);
    fireEvent.click(checkbox);

    expect(mockedSetTodos).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();

    rerender(<Todo
      todos={[mockedTodo]}
      setTodos={mockedSetTodos}
      text={mockedTodo.text}
      id={mockedTodo.id}
      complete
    />);

    expect(screen.getByTestId('todo__text')).toHaveClass('todo__text_type_checked');
  });
});

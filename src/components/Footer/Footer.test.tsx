import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  const mockedRemoveHandler = jest.fn();
  const mockedFilterHandler = jest.fn();

  beforeEach(() => {
    render(
      <Footer
        activeTodosCount={42}
        removeHandler={mockedRemoveHandler}
        filterHandler={mockedFilterHandler}
      />,
    );
  });

  test('Renders without crashing', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('Renders correct active todos count', () => {
    expect(screen.getByText('42 items left')).toBeInTheDocument();
  });

  test('On filter click filter handler will be called', () => {
    const filter = screen.getByText('all');
    fireEvent.click(filter);

    expect(mockedFilterHandler).toHaveBeenCalledTimes(1);
  });

  test('On "Clear completed" click remove handler will be called', () => {
    const button = screen.getByText('Clear completed');
    fireEvent.click(button);

    expect(mockedRemoveHandler).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form component', () => {
  const mockedSubmit = jest.fn();

  jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-01-01').getTime());

  test('Renders form without crashing', () => {
    render(<Form placeholder="What needs to be done?" type="text" onSubmit={mockedSubmit} />);
    const linkElement = screen.getByPlaceholderText('What needs to be done?');

    expect(linkElement.getAttribute('placeholder')).toBe('What needs to be done?');
  });

  test('Form submission should go through successfully', () => {
    const { getByTestId } = render(
      <Form
        placeholder="What needs to be done?"
        type="text"
        onSubmit={mockedSubmit}
      />,
    );
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Go to the park' } });
    fireEvent.submit(getByTestId('form'));

    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith({
      id: new Date().getTime(),
      text: 'Go to the park',
      complete: false,
    });
    expect(input).toHaveValue('');
  });

  test('Form submission should not call add method if input field is empty', () => {
    const { getByTestId } = render(
      <Form
        placeholder="What needs to be done?"
        type="text"
        onSubmit={mockedSubmit}
      />,
    );
    fireEvent.submit(getByTestId('form'));

    expect(mockedSubmit).not.toHaveBeenCalled();
  });
});

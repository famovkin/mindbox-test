import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  test('Renders without crashing', () => {
    render(<App />);

    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});

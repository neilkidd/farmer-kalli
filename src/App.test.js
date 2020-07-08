import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders number of bags', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Number of bags/i);
  expect(linkElement).toBeInTheDocument();
});

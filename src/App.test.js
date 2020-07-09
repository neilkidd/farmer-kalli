import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders number of bags of corn', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bags of Corn:/i);
  expect(linkElement).toBeInTheDocument();
});

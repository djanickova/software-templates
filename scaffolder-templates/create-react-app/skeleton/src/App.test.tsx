import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // A new comment was added here.
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // Another new comment was added here.
  expect(linkElement).toBeInTheDocument();
});

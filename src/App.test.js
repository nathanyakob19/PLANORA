import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Planora home page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /planora home/i })).toBeInTheDocument();
  expect(screen.getByText(/where plans align perfectly/i)).toBeInTheDocument();
});

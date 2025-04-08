import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name of Anthony', () => {
  render(<App />);
  const nameElement = screen.getByText(/Anthony/i);
  expect(nameElement).toBeInTheDocument();
});

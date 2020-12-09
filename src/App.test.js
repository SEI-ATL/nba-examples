// Modules
import { render, screen } from '@testing-library/react';

// Components
import App from './App';
import EasternConference from './conferences/EasternConference';
import WesternConference from './conferences/WesternConference';

test('renders title of app', () => {
  render(<App />);
  const h1Element = screen.getByText(/NBA Teams/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders Western Conference header', () => {
  render(<WesternConference />);
  const h1Element = screen.getByText(/Western Conference/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders Eastern Conference header', () => {
  render(<EasternConference />);
  const h1Element = screen.getByText(/Eastern Conference/i);
  expect(h1Element).toBeInTheDocument();
});

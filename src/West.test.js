// Modules
import { render, screen } from '@testing-library/react';

// Components
import DallasMavericks from './western/DallasMavericks';
import LosAngelesClippers from './western/LosAngelesClippers';
import UtahJazz from './western/UtahJazz';

test('renders name of team Dallas Mavericks', () => {
  render(<DallasMavericks />);
  const h2Element = screen.getByText(/Dallas Mavericks/i);
  expect(h2Element).toBeInTheDocument();
});

test('renders name of team Los Angeles Clippers', () => {
  render(<LosAngelesClippers />);
  const h2Element = screen.getByText(/Los Angeles Clippers/i);
  expect(h2Element).toBeInTheDocument();
});

test('renders name of team Utah Jazz', () => {
  render(<UtahJazz />);
  const h2Element = screen.getByText(/Utah Jazz/i);
  expect(h2Element).toBeInTheDocument();
});
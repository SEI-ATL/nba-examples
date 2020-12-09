// Modules
import { render, screen } from '@testing-library/react';

// Components
import BostonCeltics from './eastern/BostonCeltics';
import NewYorkKnicks from './eastern/NewYorkKnicks';
import AtlantaHawks from './eastern/AtlantaHawks';

test('renders name of team Boston Celtics', () => {
  render(<BostonCeltics />);
  const h2Element = screen.getByText(/Boston Celtics/i);
  expect(h2Element).toBeInTheDocument();
});

test('renders name of team New York Knicks', () => {
  render(<NewYorkKnicks />);
  const h2Element = screen.getByText(/New York Knicks/i);
  expect(h2Element).toBeInTheDocument();
});

test('renders name of team Atlanta Hawks', () => {
  render(<AtlantaHawks />);
  const h2Element = screen.getByText(/Atlanta Hawks/i);
  expect(h2Element).toBeInTheDocument();
});


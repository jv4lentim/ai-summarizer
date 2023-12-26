import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders correctly', () => {
    render(<Hero />);
    const headingElement = screen.getByText(/Summarize Articles with/i);
    expect(headingElement).toBeInTheDocument();
  });
});

test('renders the logo', () => {
  render(<Hero />);
  const logoImage = screen.getByAltText('sumz_log');
  expect(logoImage).toBeInTheDocument();
});

test('renders GitHub button', () => {
  render(<Hero />);
  const buttonElement = screen.getByText('Github');
  expect(buttonElement).toBeInTheDocument();
});

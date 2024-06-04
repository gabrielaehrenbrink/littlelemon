import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

test('renders without crashing', () => {
    render(<App />);
});

test('contains navigation links', () => {
  render(<App />);
  expect(screen.getByText("Specials")).toBeInTheDocument();
});

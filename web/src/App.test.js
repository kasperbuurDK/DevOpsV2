import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button types', () => {
render(<App/>);
const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBe(3)

})


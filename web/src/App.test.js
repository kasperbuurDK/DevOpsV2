import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('do we have a button', () => {
  render(<App/>);
  const aButton = screen.getByRole('button');
  expect(aButton).toBeInTheDocument()
})
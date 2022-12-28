import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('button types', () => {
  render(<App/>);
  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBe(3)

})

test('store tester', () => {



})
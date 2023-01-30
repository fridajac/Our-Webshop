import { render, screen } from '@testing-library/react';
import InformationBox from './InformationBox';

test('renders number of products in stock text', () => {
  render(<InformationBox />);
  const text = screen.getByText(/Number of products in stock:/i);
  expect(text).toBeInTheDocument();
});

test('renders total price text', () => {
  render(<InformationBox />);
  const text = screen.getByText(/Total price:/i);
  expect(text).toBeInTheDocument();
});

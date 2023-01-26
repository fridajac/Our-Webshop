import { render, screen } from '@testing-library/react';
import COLORS from '../../styles/colors';
import products from '../../test-data/test-products.json';
import Product from './Product';

const isASauceProduct = products[0];
const inStockProduct = products[1];
const outOfStockProduct = products[2];

test('renders product name', () => {
  render(<Product {...isASauceProduct} />);
  const name = screen.getByText(/Taco sauce/i);
  expect(name).toBeInTheDocument();
});

test('renders category', () => {
  render(<Product {...isASauceProduct} />);
  const category = screen.getByText(/Sauces/i);
  expect(category).toBeInTheDocument();
});

test('renders out of stock', () => {
  render(<Product {...outOfStockProduct} />);
  const element = screen.getByTestId('status-display');
  expect(element).toHaveTextContent('Out of stock');
});

test('renders in stock', () => {
  render(<Product {...inStockProduct} />);
  const element = screen.getByTestId('status-display');
  expect(element).toHaveTextContent('In stock');
});

test('renders out of stock in red', () => {
  render(<Product {...outOfStockProduct} />);
  const element = screen.getByTestId('status-display');
  expect(element).toHaveStyle(`color:${COLORS.statusRed}`);
});

test('renders in stock in green', () => {
  render(<Product {...inStockProduct} />);
  const element = screen.getByTestId('status-display');
  expect(element).toHaveStyle(`color:${COLORS.statusGreen}`);
});

import { render, screen } from '@testing-library/react';
import COLORS from '../../styles/colors';

import Product from './Product';

const sauceProduct = {
  id: 1,
  name: 'Taco sauce',
  category: 'Sauces',
  price: 29.99,
  inStock: true,
};

const productInStock = {
  id: 1,
  name: 'Taco sauce',
  category: 'Sauces',
  price: 29.99,
  inStock: true,
};

const productOutOfStock = {
  id: 1,
  name: 'Taco sauce',
  category: 'Sauces',
  price: 29.99,
  inStock: false,
};

const productWithLabels = {
  id: 2,
  name: 'Hamburger cheese',
  category: 'Dairy products',
  price: 44.99,
  inStock: true,
  labels: ['Vegan', 'Eco-friendly'],
};

const productWithoutLabels = {
  id: 4,
  name: 'Thyme',
  category: 'Spices',
  price: 14.0,
  inStock: true,
};

test('renders product name', () => {
  render(<Product {...sauceProduct} />);
  const name = screen.getByText(/Taco sauce/i);
  expect(name).toBeInTheDocument();
});

test('renders category', () => {
  render(<Product {...sauceProduct} />);
  const category = screen.getByText(/Sauces/i);
  expect(category).toBeInTheDocument();
});

test('renders out of stock', () => {
  render(<Product {...productOutOfStock} />);
  const statusDisplay = screen.getByTestId('status-display');
  expect(statusDisplay).toHaveTextContent('Out of stock');
});

test('renders in stock', () => {
  render(<Product {...productInStock} />);
  const statusDisplay = screen.getByTestId('status-display');
  expect(statusDisplay).toHaveTextContent('In stock');
});

test('renders out of stock in red', () => {
  render(<Product {...productOutOfStock} />);
  const statusDisplay = screen.getByTestId('status-display');
  expect(statusDisplay).toHaveStyle(`color:${COLORS.statusRed}`);
});

test('renders in stock in green', () => {
  render(<Product {...productInStock} />);
  const statusDisplay = screen.getByTestId('status-display');
  expect(statusDisplay).toHaveStyle(`color:${COLORS.statusGreen}`);
});

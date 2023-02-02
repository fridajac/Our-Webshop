import { describe, expect, test } from '@jest/globals';
import { getNbrOfProductsInStock, getTotalPrice } from './utilities';

const products = [
  {
    id: 1,
    name: 'Taco sauce',
    category: 'Sauces',
    price: 29.99,
    inStock: true,
  },
  {
    id: 2,
    name: 'Hamburger cheese',
    category: 'Dairy products',
    price: 51.0,
    inStock: true,
    labels: ['Vegan', 'Eco-friendly'],
  },
];

describe('get total nbr of products in stock', () => {
  test('return 2 as total nbr of products in stock', () => {
    expect(getNbrOfProductsInStock(products)).toBe(2);
  });
  test('return 0 as total nbr of products in stock', () => {
    expect(getNbrOfProductsInStock([])).toBe(0);
  });
});

describe('get total price of all products', () => {
  test('get $80.99', () => {
    expect(getTotalPrice(products)).toBe(80.99);
  });
});

import { describe, expect, test } from '@jest/globals';
import products from '../../test-data/test-products.json';
import { getNbrOfProductsInStock, getTotalPrice } from './utilities';

console.log(products);

describe('get total nbr of products in stock', () => {
  test('return 2 as total nbr of products in stock', () => {
    expect(getNbrOfProductsInStock(products)).toBe(2);
  });
  test('return 0 as total nbr of products in stock', () => {
    expect(getNbrOfProductsInStock([])).toBe(0);
  });
});

describe('get total price of all products', () => {
  test('get 85.97$', () => {
    expect(getTotalPrice(products)).toBe(85.97);
  });
});

import products from '../data/products.json';
import { ProductItem } from '../types';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getProducts = async (): Promise<ProductItem[]> => {
  await sleep(1000);
  return products;
};

import { ProductItem } from '../../types';

export function getNbrOfProductsInStock(products: ProductItem[]): number {
  return products.filter((product) => product.status === 'In stock').length;
}

export function getTotalPrice(products: ProductItem[]): number {
  return products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
}

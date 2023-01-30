import { useEffect, useState } from 'react';
import { ProductItem } from '../types';
import { getProducts } from './../api/api';

const useProduct = (): ProductItem[] => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return products;
};

export default useProduct;

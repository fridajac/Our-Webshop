import { Typography } from '@mui/material';
import products from '../../data/products.json';
import { getNbrOfProductsInStock, getTotalPrice } from './utilities';

const InformationBox = () => {
  const nbrOfProductsInStock = getNbrOfProductsInStock(products);
  const totalPrice = getTotalPrice(products);

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="body1">
        Number of products: {products.length}
      </Typography>
      <Typography variant="body1">
        Number of products in stock: {nbrOfProductsInStock}
      </Typography>
      <Typography variant="body1">Total price: {totalPrice}$ </Typography>
    </div>
  );
};

export default InformationBox;

import { Card, CardContent, Typography } from '@mui/material';
import products from '../../data/products.json';
import { getNbrOfProductsInStock, getTotalPrice } from './utilities';

const InformationBox = () => {
  const nbrOfProductsInStock = getNbrOfProductsInStock(products);
  const totalPrice = getTotalPrice(products);

  return (
    <Card
      sx={{
        width: 350,
        margin: '2rem',
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          About the products
        </Typography>
        <Typography variant="h6">
          Number of products in stock: {nbrOfProductsInStock}
        </Typography>
        <Typography variant="h6">Total price: ${totalPrice} </Typography>
      </CardContent>
    </Card>
  );
};

export default InformationBox;

import { Card, CardContent, Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts';
import { getNbrOfProductsInStock, getTotalPrice } from './utilities';

const InformationBox = () => {
  const products = useProducts();
  const nbrOfProductsInStock = getNbrOfProductsInStock(products);
  const totalPrice = getTotalPrice(products);

  return (
    <Card
      sx={{
        width: 350,
        margin: '1.5rem',
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          Info about the products
        </Typography>
        <Typography variant="h6">
          Number of products in stock: {nbrOfProductsInStock}
        </Typography>

        <Typography variant="h6">
          Total price: ${totalPrice.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InformationBox;

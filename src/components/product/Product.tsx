import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import COLORS from '../../styles/colors';
import { ProductItem } from '../../types';

const Product = (props: ProductItem) => {
  const { name, category, price, inStock } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../../assets/images/food-default-image.png')}
          alt="product image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
            color="text.secondary"
          >
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary" marginBottom={4}>
            {category}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${price}
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={{ color: '#f9f9f9', backgroundColor: '#1a1a1a' }}
            disabled={!inStock}
          >
            Add to cart
          </Button>
          <Typography
            variant="body1"
            data-testid="status-display"
            color={inStock ? COLORS.statusGreen : COLORS.statusRed}
          >
            {inStock ? 'In stock' : 'Out of stock'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import COLORS from '../../styles/colors';
import { ProductItem } from '../../types';

const Product = (props: ProductItem) => {
  const { name, category, price, status } = props;
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
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            {price}$
          </Typography>
          <Typography
            variant="body1"
            data-testid="status-display"
            color={
              status === 'In stock' ? COLORS.statusGreen : COLORS.statusRed
            }
          >
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;

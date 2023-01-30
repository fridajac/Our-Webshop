import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import COLORS from '../../styles/colors';
import { ProductItem } from '../../types';

const Product = (props: ProductItem) => {
  const { name, category, price, inStock, labels } = props;
  return (
    <Card sx={{ maxWidth: 345, height: 540 }}>
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
        {labels && (
          <Grid container spacing={1}>
            {labels.map((label, index) => {
              return (
                <Grid item>
                  <Chip
                    label={label.toUpperCase()}
                    key={index}
                    variant="outlined"
                    size="medium"
                    style={{ backgroundColor: COLORS.labelColor }}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
        <Typography variant="body1" color="text.secondary" margin={2}>
          {category}
        </Typography>
      </CardContent>
      <Typography variant="h4" color="text.secondary" marginBottom={1}>
        ${price}
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{
          color: '#f9f9f9',
          backgroundColor: COLORS.mainBlack,
          fontSize: '14pt',
          fontWeight: 'bold',
          textTransform: 'none',
          width: '80%',
          marginBottom: '10px',
        }}
      >
        Add to cart
      </Button>
      <Typography
        variant="body1"
        data-testid="status-display"
        color={inStock ? COLORS.statusGreen : COLORS.statusRed}
        fontWeight="bold"
      >
        {inStock ? 'In stock' : 'Out of stock'}
      </Typography>
    </Card>
  );
};

export default Product;

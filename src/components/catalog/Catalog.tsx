import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import useProducts from '../../hooks/useProducts';
import Product from '../product/Product';

const Catalog = () => {
  const products = useProducts();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        margin: 3,
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {products.map((product, index) => {
        return (
          <Grid xs={3} key={index}>
            <Product {...product} />
          </Grid>
        );
      })}
    </Box>
  );
};

export default Catalog;

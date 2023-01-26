import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import products from '../../data/products.json';
import Product from '../product/Product';

const Catalog = () => {
  return (
    <Grid container spacing={1} style={{ marginTop: '5rem' }}>
      {products.map((product, index) => {
        return (
          <Grid xs={3} key={index}>
            <Product {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Catalog;

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import useProducts from '../../hooks/useProducts';
import InformationBox from '../InformationBox/InformationBox';
import Product from '../product/Product';

const Catalog = () => {
  const products = useProducts();

  return (
    <>
      <InformationBox />
      <Grid container spacing={1} style={{ marginTop: '5rem' }}>
        {products.map((product, index) => {
          return (
            <Grid xs={3} key={index}>
              <Product {...product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Catalog;

import { React } from 'react';
import { Grid } from '@mui/material';

const CryptoDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin } = props;
  return (
    <Grid container>
      <Grid item xs={2}>
        <img
          src={`https://images.cryptocompare.com/sparkchart/${coin}/USD/latest.png?ts=1668361200`}
          width={150}
          height={50}
        />
      </Grid>
    </Grid>
  );
};
export default CryptoDetail;

import { React, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import PropTypes from 'prop-types';
const TrendingCoins = () => {
  let coins = [];
  useEffect(() => {
    const fetchCoins = async () => {
      const fetchedData = await axios.get('https://api.coingecko.com/api/v3/search/trending');
      coins = fetchedData.data.coins;
    };
    fetchCoins();
  });
  return (
    <Grid container>
      <Grid item sx={12}>
        <Typography variant="h4">Trending Coins</Typography>
      </Grid>
      <Grid item container sx={12}>
        {coins.map((coin) => {
          <Grid item sx={2.5}>
            <TrendingCard coinName={coin.item.symbol} />
          </Grid>;
        })}
      </Grid>
      <Card>
        <CardContent>
          <Typography>{'HI'}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const TrendingCard = (props) => {
  const { coinName } = props;
  return (
    <Card>
      <CardContent>
        <Typography>{coinName}</Typography>
      </CardContent>
    </Card>
  );
};

TrendingCard.propTypes = {
  coinName: PropTypes.String
};
export default TrendingCoins;

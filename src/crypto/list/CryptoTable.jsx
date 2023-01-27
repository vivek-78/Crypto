import { React, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Grid } from '@mui/material';
import axios from 'axios';
const CryptoTable = () => {
  let coinData = [];
  const coins = ['BTC', 'ETH', 'SOL', 'USDC', 'TWT'];
  useEffect(() => {
    coins.map(async (coin) => {
      const rawData = await axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
      );
      const fetchedData = rawData.data.DISPLAY[coin].USD;
      const data = {
        name: coin,
        price: fetchedData.PRICE,
        change: fetchedData.CHANGEPCTDAY,
        highestToday: fetchedData.HIGH24HOUR,
        lowestToday: fetchedData.LOW24HOUR,
        marketCap: fetchedData.MKTCAP,
        last7Days: null
      };
      coinData.push(data);
    });
  });
  const columns = [
    {
      name: 'coin',
      label: 'Coin',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'change',
      label: 'Change%',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'highestToday',
      label: 'Highest Today',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'lowestToday',
      label: 'Lowest Today',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'marketCap',
      label: 'Market Cap',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'last7Days',
      label: 'Last 7 Days',
      options: {
        filter: true,
        sort: true
      }
    }
  ];
  return (
    <Grid>
      {console.log(coinData)}
      <MUIDataTable columns={columns} data={coinData} />
    </Grid>
  );
};

export default CryptoTable;

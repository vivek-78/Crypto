import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography
} from '@mui/material';
import Development from '../../development';
import CryptoList from './CryptoList';
import { CryptoNews } from './components';

const Crypto = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  const [newsData, setNewsData] = useState({});
  var count = 0;
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
      );
      const data = fetchedData.data.Data;
      setNewsData(data);
    }
    fetchData();
  });
  if (newsData == null) {
    return <Development />;
  }
  const coins = [
    'BTC',
    'ETH',
    'SHIB',
    'BNB',
    'ADA',
    'XLM',
    'TRX',
    'USDT',
    'THETA',
    'SOL',
    'MATIC',
    'ETC',
    'DASH',
    'ZEC'
  ];
  return (
    <Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h5">Latest News</Typography> <br />
      </Grid>
      <Grid sx={{ marginLeft: 2, marginBottom: 2 }}>
        <Slider {...settings}>
          {Array.isArray(newsData)
            ? newsData.map((data) => (
                <div key={data.id}>
                  <CryptoNews
                    count={++count}
                    src={data.source_info.name}
                    title={data.title}
                    url={data.url}
                    image={data.imageurl}
                  />
                </div>
              ))
            : ''}
        </Slider>
      </Grid>
      <Grid item sx={{ marginTop: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Logo</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Change Percentage</TableCell>
                <TableCell align="left">Highest Today</TableCell>
                <TableCell align="left">Lowest Today</TableCell>
                <TableCell align="left">Market Cap</TableCell>
                <TableCell align="left">Last Hour</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.map((coin) => (
                <CryptoList coin={coin} key={coin} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
export default Crypto;

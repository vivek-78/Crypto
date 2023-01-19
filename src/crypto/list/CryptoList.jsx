import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { TableRow, TableCell, Typography, Grid } from '@mui/material';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { MiniCoinChart } from './components';
import { ListSkeleton } from './components';
var previousValue = 0;

const CryptoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin } = props;
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState({});
  const [priceColor, setPriceColor] = useState();
  const [loading, setLoading] = useState(true);
  var percentColor;
  const handleRowClick = () => {
    navigate(`/crypto/${coin}`);
  };
  function setPriceChange(orginalPrice) {
    const trim = orginalPrice.slice(2);
    orginalPrice = parseFloat(trim.replace(/,/g, ''));
    previousValue > orginalPrice ? setPriceColor('#FF0000') : setPriceColor('#00FF00');
    previousValue = orginalPrice;
  }
  if (coinData.CHANGEPCTDAY > 0) {
    percentColor = '#00FF00';
  } else {
    percentColor = '#FF0000';
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
      );
      const data = fetchedData.data.DISPLAY[coin];
      setCoinData(data.USD);
      setLoading(false);
    }
    fetchData();
  });
  useEffect(() => {
    async function changeInPrice() {
      await setPriceChange(coinData.PRICE);
    }
    changeInPrice();
  }, [coinData.PRICE]);
  return (
    <>
      {loading ? (
        <ListSkeleton />
      ) : (
        <TableRow
          key={coin}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          style={{ cursor: 'pointer' }}
          height={75}
          onClick={handleRowClick}>
          <TableCell component="th" scope="row" align="center" sx={{ padding: '0px 0px 0px 0px' }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <img
                  src={`https://www.cryptocompare.com${coinData.IMAGEURL}`}
                  width={40}
                  height={40}
                  alt=""></img>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <Typography sx={{ width: '10px', fontWeight: '535' }}> {coin} </Typography>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell align="center" sx={{ color: priceColor, padding: '0px 0px 0px 0px' }}>
            <Typography>
              {coinData.PRICE}
              {priceColor === '#00FF00' ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </Typography>
          </TableCell>
          <TableCell align="center" sx={{ color: percentColor, padding: '0px 0px 0px 0px' }}>
            <Typography>
              {coinData.CHANGEPCTDAY}%{''}
              {coinData.CHANGEPCTDAY > 0 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography sx={{ padding: '0px 0px 0px 0px' }}>{coinData.HIGH24HOUR}</Typography>
          </TableCell>
          <TableCell align="center" sx={{ padding: '0px 0px 0px 0px' }}>
            <Typography>{coinData.LOW24HOUR}</Typography>
          </TableCell>
          <TableCell align="center" sx={{ padding: '0px 0px 0px 0px' }}>
            <Typography>{coinData.MKTCAP}</Typography>
          </TableCell>
          <TableCell align="right" sx={{ padding: '0px 0px 0px 0px', marginleft: '10px' }}>
            {<MiniCoinChart coin={coin} color={percentColor} />}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default CryptoList;

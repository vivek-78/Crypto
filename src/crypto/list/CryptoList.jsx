import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { TableRow, TableCell } from '@mui/material';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { MiniCoinChart } from './components';
var previousValue = 0;

const CryptoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin } = props;
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState({});
  const [priceColor, setPriceColor] = useState();
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
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1`
      );
      const data = fetchedData.data.DISPLAY[coin];
      setCoinData(data.USD);
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
      <TableRow
        key={coin}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        style={{ cursor: 'pointer' }}
        onClick={handleRowClick}>
        <TableCell component="th" scope="row" align="center">
          <img
            src={`https://www.cryptocompare.com${coinData.IMAGEURL}`}
            width={50}
            height={50}
            alt=""></img>
        </TableCell>
        <TableCell align="center">{coin}</TableCell>
        <TableCell align="center" sx={{ color: priceColor }}>
          {coinData.PRICE}
          {priceColor === '#00FF00' ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </TableCell>
        <TableCell align="center" sx={{ color: percentColor }}>
          {coinData.CHANGEPCTDAY}%{' '}
          {coinData.CHANGEPCTDAY > 0 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </TableCell>
        <TableCell align="left">{coinData.HIGH24HOUR}</TableCell>
        <TableCell align="left">{coinData.LOW24HOUR}</TableCell>
        <TableCell align="left">{coinData.MKTCAP}</TableCell>
        <TableCell align="left">{<MiniCoinChart coin={coin} color={percentColor} />}</TableCell>
      </TableRow>
    </>
  );
};

export default CryptoList;

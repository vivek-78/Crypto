import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,Paper
} from '@mui/material';
import CryptoList from './CryptoList';

const Crypto = () => {
  const coins = ["BTC","ETH","SHIB","BNB","ADA","XLM","TRX","USDT","THETA","SOL","MATIC","ETC","DASH"];
  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
            {coins.map((coin)=><CryptoList coin={coin} key={coin}/>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Crypto;
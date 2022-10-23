import React,{useState} from 'react';
import axios from 'axios';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CryptoList from './CryptoList';

const Crypto = () => {
  const coins = ["BTC","ETH","BNB","BCH"];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Change Percentage</TableCell>
            <TableCell align="left">Highest Today</TableCell>
            <TableCell align="left">Lowest Today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {coins.map((coin)=><CryptoList coin={coin} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Crypto;
import { React } from 'react';
import { Search } from './components';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';
import CryptoList from './CryptoList';
const coins = [
  'BTC',
  'ETH',
  'SOL',
  'USDC',
  'TWT',
  'BNB',
  'ADA',
  'XLM',
  'TRX',
  'USDT',
  'THETA',
  'MATIC',
  'ETC',
  'DASH'
];
const Crypto = () => {
  return (
    <>
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Coin</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Price</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Change%</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Highest Today</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Lowest Today</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 'bold' }}>Market Cap</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography sx={{ fontWeight: 'bold' }}>Last 7 Days</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin) => (
              <CryptoList coin={coin} key={coin} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Crypto;

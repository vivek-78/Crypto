import { React } from 'react';
import CryptoList from './CryptoList';
import { Search } from './components';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Paper
} from '@mui/material';
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
  'DASH'
];
const Crypto = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Search />
      </Grid>
      <Grid item xs={12}>
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
              {coins.map((coin) => (
                <CryptoList coin={coin} key={coin} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};
export default Crypto;

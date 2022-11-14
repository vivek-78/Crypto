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
  Grid,
  Typography
} from '@mui/material';
import CryptoList from './CryptoList';
const coins = [
  'BTC',
  'ETH',
  'USDC',
  'TWT',
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
    <Grid container direction="column" spacing={8}>
      <Grid item xs={12} sx={{ marginTop: '50px' }}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: '500' }}>Coin</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: '500' }}>Price</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: '500' }}>Change%</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: '500' }}>Highest Today</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: '500' }}>Lowest Today</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: '500' }}>Market Cap</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: '500' }}>Last 7 Days</Typography>
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
      </Grid>
    </Grid>
  );
};
export default Crypto;

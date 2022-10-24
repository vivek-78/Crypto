import {React,useEffect,useState} from 'react';
import axios from "axios";
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
    const [coinsData,setCoinsData] = useState({});
    const coins = "BTC,ETH,SHIB,BNB,ADA";
    const fetchedCoinData = [];
    useEffect(()=>{
        async function fetchData(){
            const fetchedData = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=USD&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`)
            setCoinsData(fetchedData.data.DISPLAY);
        }
        fetchData();
    },[]
    ); 
    for(var i in coinsData){
        coinsData[i].USD.NAME = i;
        fetchedCoinData.push(coinsData[i].USD); 
    }
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
           {fetchedCoinData.map(coin=> <CryptoList coinData={coin} key={coin.NAME}/> )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Crypto;
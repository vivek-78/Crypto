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
const Crypto = () => {
  const [data,setData]= useState({});
  const coins=["BTC"];
  const url = "https://www.cryptocompare.com/";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change Percentage</TableCell>
            <TableCell align="right">Highest Today</TableCell>
            <TableCell align="right">Lowest Today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {coins.map(element => {
  axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${element}&tsyms=USD&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`)
  .then((res)=>{
    const key=res.data.DISPLAY;
     setData(key[element].USD);
  });
    return(
    <TableRow
              key={element}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={url+data.IMAGEURL} height="40px" alt=""></img>
              </TableCell>
              <TableCell align="right">{element}</TableCell>
              <TableCell align="right">{data.PRICE}</TableCell>
              <TableCell align="right">{data.CHANGEPCT24HOUR}% {data.CHANGEPCT24HOUR>0 ? <BsArrowUp /> : <BsArrowDown/>}</TableCell>
              <TableCell align="right">{data.HIGH24HOUR}</TableCell>
              <TableCell align="right">{data.LOW24HOUR}</TableCell>
            </TableRow>
            );
  })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Crypto;

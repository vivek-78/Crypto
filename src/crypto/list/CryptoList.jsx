import {React,useState,useEffect} from "react";
import axios from "axios";
import {TableRow,TableCell} from "@mui/material";
import {BsArrowUp,BsArrowDown} from "react-icons/bs";

const CryptoList = (props)=>{
    const {coin} = props
    const [coinData,setCoinData] = useState({});
    useEffect(()=>{
        async function fetchData(){
            const fetchedData = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`)
            const data = fetchedData.data.DISPLAY[coin];
            setCoinData(data.USD);
        }
        fetchData();
    },
    );
    return(
        <TableRow
        key={coinData.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          <img src={`https://www.cryptocompare.com${coinData.IMAGEURL}`} width={50} height={50} alt=""></img>
        </TableCell>
        <TableCell align="center">{coin}</TableCell>
        <TableCell align="center">{coinData.PRICE}</TableCell>
        <TableCell align="center">{coinData.CHANGEPCT24HOUR}% {coinData.CHANGEPCT24HOUR > 0 ? <BsArrowUp /> : <BsArrowDown/>}</TableCell>
        <TableCell align="left">{coinData.HIGH24HOUR}</TableCell>
        <TableCell align="left">{coinData.LOW24HOUR}</TableCell>
        <TableCell align="left">{coinData.MKTCAP}</TableCell>
      </TableRow>
    )
}

export default CryptoList;
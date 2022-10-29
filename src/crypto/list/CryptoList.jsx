import {React,useState,useEffect} from "react";
import axios from "axios";
import {TableRow,TableCell} from "@mui/material";
import {BsArrowUp,BsArrowDown} from "react-icons/bs";
var previousValue = 0;

const CryptoList = (props)=>{
    const {coin} = props
    const [coinData,setCoinData] = useState({});
    const [priceColor,setPriceColor] = useState();
    var percentColor;
    function setPriceChange(orginalPrice)
    {
      const trim = orginalPrice.slice(2);
      orginalPrice = parseFloat(trim.replace(/,/g, ''));
      previousValue > orginalPrice ? setPriceColor("red") : setPriceColor("green");
      previousValue = orginalPrice;
    }
      if( coinData.CHANGEPCTDAY >0){
       percentColor = "green"
      }
      else{
        percentColor="red";
      }

    useEffect(()=>{
        async function fetchData(){
            const fetchedData = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1`)
            const data = fetchedData.data.DISPLAY[coin];
            setCoinData(data.USD);
        }
        fetchData();
    },
    );
    useEffect(()=>{
        async function changeInPrice(){
            await setPriceChange(coinData.PRICE);
        }
        changeInPrice();
    },[coinData.PRICE]
    );
    return(
        <TableRow
        key={coin}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          <img src={`https://www.cryptocompare.com${coinData.IMAGEURL}`} width={50} height={50} alt=""></img>
        </TableCell>
        <TableCell align="center">{coin}</TableCell>
        <TableCell align="center" sx={{color:priceColor}}>{coinData.PRICE}</TableCell>
        <TableCell align="center" sx={{color:percentColor}}>{coinData.CHANGEPCTDAY}% {coinData.CHANGEPCTDAY > 0 ? <BsArrowUp /> : <BsArrowDown />}</TableCell>
        <TableCell align="left">{coinData.HIGH24HOUR}</TableCell>
        <TableCell align="left">{coinData.LOW24HOUR}</TableCell>
        <TableCell align="left">{coinData.MKTCAP}</TableCell>
      </TableRow>
    )
}

export default CryptoList;
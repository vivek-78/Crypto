import {React,useState,useEffect} from "react";
import axios from "axios";
import {TableRow,TableCell} from "@mui/material";
import {BsArrowUp,BsArrowDown} from "react-icons/bs";
var previousValue = 0;

const CryptoList = (props)=>{
    const {coinData} = props;
    const [priceColor,setPriceColor] = useState();
    function setPriceChange(orginalPrice)
    {
      const trim = orginalPrice.slice(2);
      orginalPrice = parseFloat(trim.replace(/,/g, ''));
      previousValue > orginalPrice ? setPriceColor("red") : setPriceColor("green");
      previousValue = orginalPrice;
    }

    useEffect(()=>{
        async function changeInPrice(){
            await setPriceChange(coinData.PRICE);
            console.log("Effect");
        }
        changeInPrice();
    },[coinData.PRICE]
    );
    return(
        <TableRow
        key={coinData.NAME}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell component="th" scope="row" align="center">
          <img src={`https://www.cryptocompare.com${coinData.IMAGEURL}`} width={50} height={50} alt=""></img>
        </TableCell>
        <TableCell align="center">{coinData.NAME}</TableCell>
        <TableCell align="center" sx={{color:priceColor}}>{coinData.PRICE}</TableCell>
        <TableCell align="center">{coinData.CHANGEPCTDAY}% {coinData.CHANGEPCTDAY > 0 ? <BsArrowUp /> : <BsArrowDown />}</TableCell>
        <TableCell align="left">{coinData.HIGH24HOUR}</TableCell>
        <TableCell align="left">{coinData.LOW24HOUR}</TableCell>
        <TableCell align="left">{coinData.MKTCAP}</TableCell>
      </TableRow>
    )
}

export default CryptoList;
import {React, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { Grid } from "@mui/material";

const CryptoDetail =()=>{
    const [chartData,setChartData] = useState({});
        useEffect(()=>{
        function fetchData(){
            axios.get('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1')
             .then( (fetchedData)=>{
                 console.log(fetchedData);
                const data = fetchedData.data.Data.Data
                const times = data.map(obj => obj.time)
                const prices = data.map(obj => obj.high)
                setChartData({times,prices});
             });
        }
        fetchData();
    },[]
    );
    const {prices,times} = chartData;
    console.log(prices,times);
    return (
    <Grid container>
        <Grid item xs={12}>
    <Chart 
    type="line"
    width={1349}
    height={550}
    series={[
        {
            name:"btc",
            data:prices
        }
    ]}
    options={{

    }}
    >
    </Chart>
    </Grid>
    </Grid>
    );
}
export default CryptoDetail;
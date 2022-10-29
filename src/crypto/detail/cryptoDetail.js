import {React, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const CryptoDetail =(props)=>{
    const { coin }= useParams()
    console.log(coin)
    const [chartData,setChartData] = useState({});
        useEffect(()=>{
        function fetchData(){
            axios.get(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=119&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1`)
             .then( (fetchedData)=>{
                 console.log(fetchedData);
                const data = fetchedData.data.Data.Data
                const times = data.map(obj => obj.time)
                const prices = data.map(obj => obj.high)
                setChartData({times,prices});
             });
        }
        fetchData();
    }
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
            name:coin,
            data:prices
        }
    ]}
options= {{
      title: {
        display: false,
        text: coin,
        fontSize: 35
      },
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }}
    >
    </Chart>
    </Grid>
    </Grid>
    );
}
export default CryptoDetail;
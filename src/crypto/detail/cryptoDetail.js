import {React, useState} from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CryptoDetail =()=>{
    const [ChartData,setChartData] = useState({});
         function fetchData(){
            // const fetchedData = axios.get('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1');
            //  .then( (fetchedData)=>{}
            //   const data = json.data.Data.Data
            //   const times = data.map(obj => obj.time)
            //   const prices = data.map(obj => obj.high)
            const times = [1,2,3,4,5,6,7,8,9,10,11,12,13]
            const prices =[100,200,300,200,100,300,400,200,150,0,20,13,123] 
            //   console.log(prices,times)
              return {prices,times};
              
    }
        useEffect(()=>{
        async function fetchData(){
            const fetchedData = axios.get('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1')
             .then( ()=>{

                const data = json.data.Data.Data
                const times = data.map(obj => obj.time)
                const prices = data.map(obj => obj.high)
             });
        }
        fetchData();
    },
    );
    const {prices,times} = fetchData();
    console.log(prices,times);
    return (
    <Chart 
    type="line"
    width={1349}
    height={550}
    series={[
        {
            name:times,
            data:prices
        }
    ]}
    options={{

    }}
    >
    </Chart>
    );
}
export default CryptoDetail;
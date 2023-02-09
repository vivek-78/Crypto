import { React, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const CryptoDetail = () => {
  const { coin } = useParams();
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=80&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
        )
        .then((fetchedData) => {
          const data = fetchedData.data.Data.Data;
          setChartData(data.map((item) => [item.time * 1000, item.close]));
        });
    }
    fetchData();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Chart
          type="area"
          height={500}
          width={1500}
          series={[
            {
              name: coin,
              data: chartData
            }
          ]}
          options={{
            xaxis: {
              type: 'datetime'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              width: 2
              // colors: '#51db5a'
            }
          }}></Chart>
      </Grid>
    </Grid>
  );
};
export default CryptoDetail;

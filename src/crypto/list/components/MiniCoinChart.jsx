import { React, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { Grid } from '@mui/material';

const CryptoDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin, color } = props;
  console.log(color);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=80&api_key=4e9bf69d838c7e61bc2b230a4d5887933b468da784d876f8777d16d0e34241a1`
        )
        .then((fetchedData) => {
          const data = fetchedData.data.Data.Data;
          const times = data.map((obj) => new Date(obj.time * 1000).getHours());
          const prices = data.map((obj) => obj.close);
          setChartData({ times, prices });
        });
    }
    fetchData();
  });
  const { prices } = chartData;
  return (
    <Grid container>
      <Grid item xs={2}>
        <Chart
          type="line"
          width={200}
          height={100}
          series={[
            {
              name: coin + '(USD)',
              data: prices
            }
          ]}
          options={{
            stroke: {
              show: true,
              curve: 'smooth',
              lineCap: 'butt',
              colors: color,
              width: 2
            },
            chart: {
              id: 'bar-chart',
              toolbar: {
                show: false
              }
            },
            grid: {
              show: false
            },
            xaxis: {
              show: false,
              labels: {
                show: false
              }
            },
            yaxis: {
              show: false,
              labels: {
                show: false
              }
            }
          }}></Chart>
      </Grid>
    </Grid>
  );
};
export default CryptoDetail;

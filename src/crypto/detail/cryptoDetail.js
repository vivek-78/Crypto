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
          `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=80&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
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
  const { prices, times } = chartData;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Chart
          type="line"
          width={1349}
          height={550}
          series={[
            {
              name: coin + '(USD)',
              data: prices
            }
          ]}
          options={{
            title: {
              text: coin,
              align: 'center',
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: '24px',
                color: '#213043'
              }
            },
            stroke: {
              show: true,
              curve: 'smooth',
              lineCap: 'butt',
              colors: '#51db5a',
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
              categories: times
            }
          }}></Chart>
      </Grid>
    </Grid>
  );
};
export default CryptoDetail;

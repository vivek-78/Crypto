import { React, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { Grid } from '@mui/material';

const CryptoDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin, color } = props;
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=20&api_key=557770814a82703ce2ed50c174c03264fee9a0117e1dc109f892d1a4f82084fc`
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
          width={125}
          height={80}
          sx={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
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
              width: 1
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
              },
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              }
            },
            yaxis: {
              show: false,
              labels: {
                show: false
              }
            },
            tooltip: {
              enabled: false
            },
            states: {
              hover: {
                filter: {
                  type: 'none'
                }
              }
            }
          }}></Chart>
      </Grid>
    </Grid>
  );
};
export default CryptoDetail;

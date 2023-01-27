import { React } from 'react';
import { Grid } from '@mui/material';

const CryptoDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coin } = props;
  return (
    <Grid container>
      <Grid item xs={2}>
        <Chart
          type="line"
          width={100}
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

import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ApexCharts from 'apexcharts';
import { useParams } from 'react-router-dom';

const CryptoDetail = () => {
  const { coin } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=1000`
      );
      setData(result.data.Data.Data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const options = {
      chart: {
        type: 'area',
        height: 500,
        width: 1500
      },
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
      },
      series: [
        {
          name: coin,
          data: data.map((item) => [item.time * 1000, item.close])
        }
      ]
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }, [data]);

  return (
    <Grid>
      <div id="chart" />
    </Grid>
  );
};
export default CryptoDetail;

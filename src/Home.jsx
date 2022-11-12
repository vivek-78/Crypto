import React from 'react';
import './Home.css';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleCryptoClick = () => {
    navigate('/crypto');
  };
  const handleStockClick = () => {
    navigate('/stockmarket');
  };
  return (
    <div className="main">
      <div className="text">
        <h1 className="project-name">Project Name</h1>
        <p className="subtitles">Get latest updates on Crypto and Stock market.</p>
        <Grid container spacing={3}>
          <Grid item xs={1.5}>
            <Button
              variant="contained"
              onClick={handleCryptoClick}
              sx={{ backgroundColor: '#365B6C' }}>
              Crypto →
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleStockClick}
              sx={{ backgroundColor: '#365B6C' }}>
              Stocks →
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;

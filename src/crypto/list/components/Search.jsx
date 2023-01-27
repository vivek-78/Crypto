import { React, useState } from 'react';
import { Grid, Button, Backdrop, CircularProgress, Snackbar, Typography } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Search = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const navigate = useNavigate();
  const textOnChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClose = () => {
    setSnackBar(false);
  };
  const handleOnClick = async () => {
    setLoading(true);
    const FetchedData = await axios.get(`https://api.coingecko.com/api/v3/search?query=${search}`);
    const coinSymbol = FetchedData?.data?.coins[0]?.symbol;
    const coinName = FetchedData?.data?.coins[0]?.id;
    if (search.toUpperCase() == coinSymbol || search.toLowerCase() == coinName) {
      navigate(`/crypto/${coinSymbol}`);
    } else if (FetchedData.data.coins.length < 1) {
      setLoading(false);
      setSnackBar(true);
    } else {
      setLoading(false);
      setSnackBar(true);
    }
  };
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      xs={12}
      sx={{ marginBottom: '10px' }}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ fontWeight: '300', textAlign: 'center' }}>
          Explore the crypto world!
        </Typography>
      </Grid>
      <Grid item container direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <input
            onChange={textOnChange}
            placeholder="Search for coins"
            style={{
              height: '32px',
              width: '250px',
              alignItem: 'center',
              borderRadius: '10px',
              padding: '2px 20px',
              borderStyle: 'solid',
              borderWidth: 'small'
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleOnClick}
            startIcon={<SearchTwoToneIcon />}
            sx={{ maringTop: '0px', borderRadius: '10px', marginLeft: '0px' }}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Backdrop open={loading}>
        <CircularProgress sx={{ color: 'white' }} />
      </Backdrop>
      <Snackbar
        open={snackBar}
        onClose={handleClose}
        autoHideDuration={2000}
        message="Enter a valid coin name"
      />
    </Grid>
  );
};

export default Search;

import { React, useState } from 'react';
import { Grid, Button, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import { SearchTwoToneIcon } from '@mui/icons-material/SearchTwoTone';
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
    console.log(FetchedData);
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
      justifyContent="flex-end"
      alignItems="center"
      spacing={1}
      xs={12}
      sx={{ marginBottom: '10px' }}>
      <Grid item>
        <input
          onChange={textOnChange}
          placeholder="Enter Coin Name"
          style={{
            height: '32px',
            borderRadius: '5px',
            marginLeft: '10px',
            marginRight: '0',
            padding: '2px 20px',
            borderStyle: 'solid',
            borderWidth: 'small'
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleOnClick}>
          <SearchTwoToneIcon />
          Search
        </Button>
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

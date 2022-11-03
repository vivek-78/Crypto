import React from 'react';
import { Grid, Typography } from '@mui/material';
import { underDevelopment } from './images';
export default function Development() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item sx={{ marginTop: '100px' }}>
        <img src={underDevelopment} alt="error" height={400} width={400} />
      </Grid>
      <Grid item sx={{ marginTop: '10px' }}>
        <Typography variant="h5">This section is under Development</Typography>
      </Grid>
    </Grid>
  );
}

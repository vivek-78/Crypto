import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static" color="" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
          <Grid item>
            <Typography variant="h5" sx={{ marginLeft: "auto", fontWeight: "800" }}>
              Branding
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/crypto" style={{ textDecoration: "none" }}>
              <Button sx={{ marginLeft: "60px", color: "black" }}>Crypto coins</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/stockmarket" style={{ textDecoration: "none" }}>
              <Button sx={{ marginLeft: "30px", color: "black" }}> Stock market</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button sx={{ marginLeft: "30px", color: "black" }}>About</Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

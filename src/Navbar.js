import React from "react";
import { AppBar,Toolbar, Typography, Grid} from "@mui/material";
import {Link} from "react-router-dom";

function NavBar()
{
    return(
        <AppBar position="static" color="">
        <Toolbar>
        <Grid item>
         <Typography sx={{marginLeft:"auto"}}>Branding</Typography>
         </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
         <Grid item>
           <Link to="/crypto" style={{textDecoration: 'none'}}>
            <Typography sx={{marginLeft:"80px"}}>Crypto</Typography>
           </Link>
         </Grid>
         <Grid item>
          <Link to="/stockmarket" style={{textDecoration: 'none'}}>
           <Typography sx={{marginLeft:"80px"}}> Stocks</Typography>
          </Link>
         </Grid>
         <Grid item>
          <Link to="/about" style={{textDecoration: 'none'}}>
           <Typography sx={{marginLeft:"80px"}}>About</Typography>
          </Link>
         </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Timer from '../components/Timer';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Container, Hidden, Typography } from '@mui/material';



function TopBar() {
  return (
    <Container>
      <Grid  container spacing={2} padding={1}>
        <Grid item xs={8} >
          <Typography ><Timer /></Typography>
        </Grid>
        <Grid item >
          <span><FaFacebookF style={{color:"black"}}/></span>           
        </Grid>
        <Grid item >
            <span><FaTwitter style={{color:"black"}}/></span>
        </Grid>
        <Grid item >
           <span><FaYoutube style={{color:"black"}}/></span>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TopBar;
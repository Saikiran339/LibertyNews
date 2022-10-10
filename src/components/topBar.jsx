import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Timer from '../components/Timer';
import Date from './SocialIcons';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from '@mui/material/Button';
import { color } from '@mui/system';
import { Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TopBar() {
  return (
    <Container>
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} >
        <Grid item xs={8}>
          <Item style={{display:"contents", color:"red"}}><Timer /></Item>
          
        </Grid>
        <br/>
        <Grid item xs={4}>
          <Item style={{display:"contents", }}>
            <Button><FaFacebookF style={{color:"black"}}/>&nbsp;&nbsp;&nbsp;</Button>
            <Button><FaTwitter style={{color:"black"}}/>&nbsp;&nbsp;&nbsp;</Button>
            <Button><FaYoutube style={{color:"black"}}/></Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default TopBar;
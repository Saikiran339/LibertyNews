import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function TopMenu() {
  return (

<Container>
    <Paper style={{backgroundColor: 'blue',}} square>
      <HomeIcon style={{color: 'white', paddingTop: '5px', display:"inline"}}/>
      &nbsp;&nbsp;&nbsp;
      <Button style={{color: 'white', borderleft: "10px"}}>ఆంధ్రప్రదేశ్</Button>
      &nbsp;
      <Button style={{color: 'white'}}>తెలంగాణ</Button>
      &nbsp;
      <Button style={{color: 'white'}}>జాతీయం</Button>
      &nbsp;
      <Button style={{color: 'white'}}>వీడియోలు</Button>
    </Paper>
    </Container>
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NavBar() {
  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Paper elevation="0">
                <Typography>
          <Item style={{display:"contents"}}>
            <img style={{cursor: "pointer"}}
            src="https://libertynewstelugu.com/assets/images/common/logo.png"
            height='90%'
            alt='logo'
            display='content' />

          </Item>
          </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
    </Container>
  );
}

import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function NavBar () {
  return (
    <>
    <Container>
      {/* <MenuIcon></MenuIcon> */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Item style={{display:"contents"}}>
              <img src={logo}  height="70%" />
          </Item>
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  )
}

export default NavBar;
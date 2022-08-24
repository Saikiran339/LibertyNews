import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NewsDetail from "./NewsDetail";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const handleClick = () => {
    console.log('Hello')
  }


function NewsCardComponent (props) {
    const[data, ] = useState();


    console.log(data);
    return (
        <div>
            <Grid item xs={4} style={{display: "inline"}}>
                <Item style={{display:"contents"}}>
                    <Button>
                    <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
                    <img src={props.img} />
                    <h2>{props.title}</h2>
                    <h4  style={{display:"inline-flex",color:"red"}}>{props.timeDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;<VisibilityIcon fontSize="small"/>{props.views}</h4>
                    <p>{props.description}</p>
                    <Button onClick={handleClick()} style={{left:"143px",top:"-400px"}}><h5 style={{backgroundColor:"black", color:"white"}}>తెలంగాణ</h5></Button>
                    </Card>
                    </Button>
                </Item>
            </Grid>
        </div>
    )
}

export default NewsCardComponent;
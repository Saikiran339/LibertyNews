import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ReactSwipe from 'react-swipe';
import './Slider.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function FixedContainer() {
    let reactSwipeEl;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{display: 'contents'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '1000vh' }} >
        <Grid container spacing={2}>
        <Grid item xs={8.5}>
          <Item style={{display:'contents',alignItems:'moveToLeft'}}>
          <div class="swipe">           
            <ReactSwipe  
                 childCount={6}
                swipeOptions={{ continuous: true,
                         autoplay: true, 
                         interval: 2000}}
                         ref={el => (reactSwipeEl = el) }
             >
                 <div ><img style={{width:"550px"}}src="https://www.libertynewstelugu.com/assets/images/news/Kolla_Donga_copy.jpg"  ></img></div>
                 <div ><img style={{width:"550px"}}src="https://www.libertynewstelugu.com/assets/images/news/Ashrama_School_copy.jpg"  ></img></div>
                 <div ><img style={{width:"550px"}}src="https://www.libertynewstelugu.com/assets/images/news/MALLU_SWARAJYAM_copy.jpg"  ></img></div>  
             </ReactSwipe>
             
            <a style={{paddingLeft:'5px'}} href="#"  onClick= { (e)=>{reactSwipeEl.prev();e.preventDefault();}} class="btn-text"> Previous  </a> 
            <a style={{paddingLeft:'450px'}} href="#" onClick= { (e)=>{reactSwipeEl.next();e.preventDefault();}} class="btn-text">Next </a>
           
           
            
            <Grid item xs={4}>
            <Item style={{display:'contents', paddingTop:'150px'}}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.libertynewstelugu.com/assets/images/news/COLLECTOR___DALIT_BANDHU_copy.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ పూర్తి చేయాలి: కలెక్టర్
                <h6>26 March 2022 09:00 PM</h6>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                లిబర్టీ న్యూస్ : దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ సోమవారం వరకు పూర�
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
              </Card>

              
              </Item>
            </Grid>

            <Grid item xs={4}>
            <Item style={{display:'contents', paddingTop:'150px'}}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.libertynewstelugu.com/assets/images/news/COLLECTOR___DALIT_BANDHU_copy.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ పూర్తి చేయాలి: కలెక్టర్
                <h6>26 March 2022 09:00 PM</h6>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                లిబర్టీ న్యూస్ : దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ సోమవారం వరకు పూర�
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
              </Card>
              </Item>
            </Grid>
            </div>
          </Item>
        </Grid>

            <Grid item xs={3.5}>
            <Item style={{display:'contents', paddingLeft:'35px'}}>
              <h3 style={{color: 'red', textAlign:'justify'}}>
              ఎక్కువగా చూసిన వార్తలు
              <hr></hr>
              </h3>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.libertynewstelugu.com/assets/images/news/COLLECTOR___DALIT_BANDHU_copy.jpg"
                alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom var iant="h6" component="div">
              దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ పూర్తి చేయాలి: కలెక్టర్
              <h6>26 March 2022 09:00 PM</h6>
              </Typography>
            </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.libertynewstelugu.com/assets/images/news/COLLECTOR___DALIT_BANDHU_copy.jpg"
                alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom var iant="h6" component="div">
              దళితబంధు లబ్ధిదారుల గ్రౌండింగ్ ప్రక్రియ పూర్తి చేయాలి: కలెక్టర్
              <h6>26 March 2022 09:00 PM</h6>
              </Typography>
            </CardContent>
            </Card>
              
              </Item>
            </Grid>
          
            
      </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

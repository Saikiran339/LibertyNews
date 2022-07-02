import React from 'react';
import Slider from "react-slick";
import ReactSwipe from 'react-swipe';
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Swipe () {
    let reactSwipeEl;
    return (
       
        <section class="corousel">
            <div class="u-center-text u-margin-bottom-medium">
                <h2 class="heading-secondary">
                    News
                </h2>
            </div>
        
            <div class="corousel__swipe">          
            
            <ReactSwipe  
                childCount={6}
                swipeOptions={{ continuous: true,
                        autoplay: true, 
                        interval: 3000}}
                        ref={el => (reactSwipeEl = el) }
            >
         
     
                <div width={"20%"} height={"20%"}><img style={{width:"inherit"}}src="https://www.libertynewstelugu.com/assets/images/news/Kolla_Donga_copy.jpg"  ></img></div>
                <div width={"20%"} height={"20%"}><img style={{width:"inherit"}}src="https://www.libertynewstelugu.com/assets/images/news/Ashrama_School_copy.jpg"  ></img></div>
                <div width={"20%"} height={"20%"}><img style={{width:"inherit"}}src="https://www.libertynewstelugu.com/assets/images/news/MALLU_SWARAJYAM_copy.jpg"  ></img></div>
                {/* <div width={"80%"} height={"70%"}><img style={{width:"inherit"}}src={image3}  ></img></div>
                <div width={"80%"} height={"70%"}><img style={{width:"inherit"}}src={image4}  ></img></div>
                <div width={"80%"} height={"70%"}><img style={{width:"inherit"}}src={image5}  ></img></div> */}
                
            </ReactSwipe>

             <Box sx={{ flexGrow: 1 }}>
                <Grid item xs={6}>
                <Item><a href="#" onClick= { (e)=>{reactSwipeEl.prev();e.preventDefault();}} class="btn-text">Previous &rarr; </a>
                </Item>
                </Grid>
                <Grid item xs={6}>
                <Item><a href="#" onClick= { (e)=>{reactSwipeEl.next();e.preventDefault();}} class="btn-text">Next &rarr; </a>
                </Item>
                </Grid>
                </Box>
                
            </div>
            
        </section> 
        
    
        );
    }

        export default Swipe;
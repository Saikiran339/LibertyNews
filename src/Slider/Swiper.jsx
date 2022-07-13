import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import ReactSwipe from "react-swipe";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SpaceBarRounded } from "@mui/icons-material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function Drawer() {
  let reactSwipeEl;
  return (
    <div>
      <Container>
      <Container style={{display:"contents"}}>
        <Box sx={{ height: "50vh" }}>
          <Grid item xs={6}>
            <div class="swipe">
              <ReactSwipe
                childCount={6}
                swipeOptions={{
                  continuous: true,
                  autoplay: true,
                  interval: 2000,
                }}
                ref={(el) => (reactSwipeEl = el)}
              >
                <div>
                  <img
                    style={{ width: "800px" }}
                    src="https://www.libertynewstelugu.com/assets/images/news/Kolla_Donga_copy.jpg"
                  ></img>
                </div>
                <div>
                  <img
                    style={{ width: "800px" }}
                    src="https://www.libertynewstelugu.com/assets/images/news/Ashrama_School_copy.jpg"
                  ></img>
                </div>
                <div>
                  <img
                    style={{ width: "800px" }}
                    src="https://www.libertynewstelugu.com/assets/images/news/MALLU_SWARAJYAM_copy.jpg"
                  ></img>
                </div>
              </ReactSwipe>
            </div>
            <a
              href="#"
              onClick={(e) => {
                reactSwipeEl.prev();
                e.preventDefault();
              }}
              class="btn-text"
            >
              {" "}
              Previous{" "}
            </a>
            <a
              style={{ paddingLeft: "700px" }}
              href="#"
              onClick={(e) => {
                reactSwipeEl.next();
                e.preventDefault();
              }}
              class="btn-text"
            >
              Next{" "}
            </a>
          </Grid>

          {/* <Grid item xs={6}>
            <h1>Hello World</h1>
          </Grid> */}
        </Box>
      </Container>
      </Container>
    </div>
  );
}

export default Drawer;

import { Container, Grid } from "@mui/material";
import React from "react";
import TopBar from "../components/topBar";
import TopMenu from "../menu/TopMenu";
import NavBar from "../navbar/navBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function Telangana() {
  const theme = useTheme();
  return (
    <div>
      <Container>
        <br />
        <TopBar />
        <NavBar />
        <TopMenu />
        <br />

        <h1 style={{ color: "red" }}>తెలంగాణ</h1>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 300, height: 150 }}
                    // image="/static/images/cards/live-from-space.jpg"
                    src={
                      "https://libertynewstelugu.com/assets/images/news/JJJJJJJ.jpg"
                    }
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        కేటీపీఎస్ ఉద్యోగికి జైలు శిక్ష
                      </Typography>
                      <h3 style={{ display: "inline-flex", color: "red" }}>
                        09 September 2022 12:09 PM
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <VisibilityIcon fontSize="small" /> 3201
                      </h3>
                      <br />

                      <h3 style={{ display: "inline", textAlign: "justify" }}>
                        <strong style={{ color: "red", fontSize: "20px" }}>
                          {" "}
                         లిబర్టీ న్యూస్ :
                        </strong>
                        చెక్కు బౌన్స్ కేసులో వ్యక్తికి ఆరు నెలల జైలు శిక్ష
                        విధిస్తూ కొత్తగూడెం మూడవ అదనపు జ్యుడిషియల్ ఫస్ట్ క్లాస్
                        మె�
                      </h3>
                    </CardContent>
                  </Box>
                </Card>

                <br />
                <br />

                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 300, height: 150 }}
                    // image="/static/images/cards/live-from-space.jpg"
                    src={
                      "https://libertynewstelugu.com/assets/images/news/Hospital_copy.jpg"
                    }
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        ఫణిగిరి మేరీమాత హాస్పిటల్ లో ఉచిత వైద్య శిబిరం
                      </Typography>
                      <h3 style={{ display: "inline-flex", color: "red" }}>
                        10 September 2022 07:52 PM
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <VisibilityIcon fontSize="small" /> 22
                      </h3>
                      <br />

                      <h3 style={{ display: "inline", textAlign: "justify" }}>
                        <strong style={{ color: "red", fontSize: "20px" }}>
                          {" "}
                        లిబర్టీ న్యూస్ :
                        </strong>
                        లిబర్టీ న్యూస్ : సూర్యాపేట జిల్లా, తిరుమలగిరి మండలం
                        ఫణిగిరి మేరీమాత హాస్పిటల్ ఆధ్వర్యంలో శనివారం నిర్వహించిన
                        ఉచిత మెగా వైద్య �
                      </h3>
                    </CardContent>
                  </Box>
                </Card>
              </Item>
            </Grid>

            <Grid xs={4}>
              <Item>
                <h2>మరిన్ని వార్తలు</h2>
                <hr></hr>

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <h4>కేటీపీఎస్ ఉద్యోగికి జైలు శిక్ష</h4>

                      <h4 style={{ display: "inline-flex", color: "red" }}>
                        09 Sep 2022 12:09 PM
                        <VisibilityIcon fontSize="small" />
                        3689
                      </h4>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 90 }}
                    // image="/static/images/cards/live-from-space.jpg"
                    src={
                      "https://www.libertynewstelugu.com/assets/images/news/BUDJET_copy.jpg"
                    }
                    alt="Live from space album cover"
                  />
                </Card>

                <br />

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <h4>కేటీపీఎస్ ఉద్యోగికి జైలు శిక్ష</h4>

                      <h4 style={{ display: "inline-flex", color: "red" }}>
                        09 Sep 2022 12:09 PM
                        <VisibilityIcon fontSize="small" />
                        3689
                      </h4>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 90 }}
                    // image="/static/images/cards/live-from-space.jpg"
                    src={
                      "https://www.libertynewstelugu.com/assets/images/news/BUDJET_copy.jpg"
                    }
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
            <br />
            <br />
            <br />
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Telangana;

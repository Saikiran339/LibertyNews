import React from "react";
import Society from "../assets/SOCIETY_copy.jpg";
import TopBar from "../components/topBar";
import TopMenu from "../menu/TopMenu";
import NavBar from "../navbar/navBar";
import { Container, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SmsIcon from "@mui/icons-material/Sms";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NewsDetail() {
  return (
    <div>
      <Container>
      <br />
      <br />
      <br />
        <TopBar />
        <NavBar />
        <TopMenu />
        <br />

        {/* <Paper style={{backgroundColor: 'blue'}} square>
            Hello
        </Paper> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <h1 style={{ color: "red", textAlign: "left" }}>
                  రైతులు సొసైటీ సేవలు సద్వినియోగం చేసుకోవాలి : కొత్వాల
                </h1>
                <h3 style={{ textAlign: "left" }}>
                  Date : 05 July 2022 03:30 PM
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                  Views :<VisibilityIcon fontSize="small" /> 78
                </h3>
                <div
                  className="icons"
                  style={{
                    position: "relative",
                    justifyContent: "right",
                    alignItems: "right",
                  }}
                >
                  <IconButton
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    <AddIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    <FacebookIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "skyBlue", color: "white" }}
                  >
                    <TwitterIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "lightGreen", color: "white" }}
                  >
                    <SmsIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "skyBlue", color: "white" }}
                  >
                    <TelegramIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                  &nbsp;
                  <br />
                  <br />
                  <br />
                </div>
                <img src={Society} style={{ width: "1000px" }} />

                <h3 style={{ textAlign: "justify" }}>
                  <strong style={{ color: "red", fontSize: "20px" }}>
                    {" "}
                    తెలంగాణ / లిబర్టీ న్యూస్ :
                  </strong>
                  భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ కో- ఆపరేటివ్ సొసైటీ
                  ద్వారా రైతులకు చేపడుతున్న సేవలను సద్వినియోగం చేసుకోవాలని
                  పాల్వంచ సొసైటీ అధ్యక్షులు, డీసీఎంఎస్ వైస్ చైర్మన్ కొత్వాల
                  శ్రీనివాసరావు అన్నారు. మంగళవారం స్థానిక కాంట్రాక్టర్స్
                  కాలని(పున్నమ్మ స్కూల్) లోని సొసైటీ గోడౌన్ వద్ద రైతులకు ఎరువుల
                  పంపిణీ కార్యక్రమాన్ని కొత్వాల ప్రారంభించారు. ఈ సందర్బంగా
                  కొత్వాల మాట్లాడుతూ రైతులకు నిత్యం అందుబాటులో ఉంటూ వారికి
                  సకాలంలో ఎమ్మార్పీ ధరలకే ఎరువులు, సబ్సిడీపై విత్తనాలురుణాలు
                  పంపిణీ చేయడం జరుగుతున్నాదన్నారు. ధాన్యం కొనుగోలు కేంద్రాలు
                  ఏర్పాటు చేసి ప్రభుత్వం మద్దతు ధరకు ధాన్యం సేకరణ
                  జరుగుతుందన్నారు. సొసైటీ ద్వారా చేపడుతున్న సేవలను రైతులు
                  సద్వినియోగం చేసుకోవాలని కొత్వాల కొరారు. ఈ కార్యక్రమంలో సొసైటీ
                  వైస్ చైర్మన్ కాంపెల్లి కనకేష్, డైరెక్టర్లు బుడగం రామ్మోహన్
                  రావు, కనగాల నారాయణరావు, సామా జనార్దన్ రెడ్డి, మైనేని
                  వెంకటేశ్వరరావు, చౌగాని పాపారావు, సొసైటీ సీఈఓ జి.లక్ష్మీనారాయణ,
                  సురేందర్ రెడ్డి తదితరులు పాల్గొన్నారు.
                </h3>
                {/* <h4>
                  తెలంగాణ / లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ కో- ఆపరేటివ్ సొసైటీ ద్వారా రైతులకు /n
                  చేపడుతున్న సేవలను సద్వినియోగం చేసుకోవాలని పాల్వంచ సొసైటీ అధ్యక్షులు, డీసీఎంఎస్ వైస్ చైర్మన్ కొత్వాల
                </h4> */}
                <h1 style={{ textAlign: "justify" }}>
                  మరిన్ని వార్తలు
                  <hr></hr>
                </h1>
                </Item>
                </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NewsDetail;

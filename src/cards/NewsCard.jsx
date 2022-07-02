import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function NewsCard() {
  return (
  <Container>
    <Grid container spacing={2} >
        <Grid item xs={4} style={{display: "inline"}}>
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Street_Food_KTR.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              అమెరికాలో స్ట్రీట్ ఫుడ్ తిన్న మంత్రి కేటీఆర్
              <h6>26 March 2022 08:34 PM</h6>
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
          <Item style={{display:"contents"}}>
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/TEACHER.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              టీచర్ పై అత్యాచారం
              <h6>24 March 2022 11:33 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : విద్యాబుద్ధులు నేర్పించి విద్యార్థులను అగ్రభాగాన నిలిపే
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Item>
        </Grid>


        <br />
        <br />
        <br />
        <Grid item xs={4}>
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Banks_-_Bundh_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              4 రోజులు బ్యాంకులు బంద్
              <h6>26 March 2022 08:58 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : రేపటి నుంచి వరుసగా 4 రోజులు బ్యాంకులు బంద్ కానున్నాయి. మార్�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/MARADALU.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              మరదలి పై కన్నేసిన బావ
              <h6>26 March 2022 08:33 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : మగదిక్కు లేని ఆ ఇంటికి అండగా నిలబడాల్సిన అల్లుడే మరదలి పాల
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Kolla_Donga_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              వైరాలో కోళ్ల దొంగ
              <h6>23 March 2022 08:53 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : గత నెల రోజులుగా చికెన్ ధరలు కొండెక్కడంతో  కొంతమంది దుండగ�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Ashrama_School_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              పాల్వంచ ఆశ్రమ పాఠశాల హెడ్ మాస్టర్ పై చర్యలు తీసుకోవాలి
              <h6>22 March 2022 12:24 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ పట్టణ కేంద్రంలోని ఆశ�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/SINDICATE_-_NEW_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              బూర్గంపాడులో మద్యం సిండికేట్ దందా
              <h6>21 March 2022 05:42 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా బూర్గంపాడు మండలంలోని సారపాక, �
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/MALLU_SWARAJYAM_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              మల్లు స్వరాజ్యం ఇక లేరు
              <h6>19 March 2022 08:28 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : మాజీ ఎమ్మెల్యే, తెలంగాణ సాయుధ పోరాట యోధురాలు మల్లు స్వరాజ్
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/CCCCCC.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              భక్తులు మెచ్చేలా నవమి ఏర్పాట్లు ఉండాలి : కలెక్టర్
              <h6>19 March 2022 07:29 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : శ్రీరామనవమి ఏర్పాటుల్లో రాజీ వద్దని, భక్తులు మెచ్చేలా ఏర్�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/SUMMER_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              ఎండల పట్ల అప్రమత్తంగా ఉండాలి : కలెక్టర్
              <h6>19 March 2022 06:53 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : ప్రజలు వడదెబ్బ బారిన పడకుండా జాగ్రత్తలు పాటించాలని భద్రా�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Balaji_-_Kalyanam_-_Nw_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              ఘనంగా శ్రీ బాలాజీ కల్యాణోత్సవం
              <h6>19 March 2022 08:33 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా అన్నపురెడ్డిపల్లి మండల కేంద్
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Katnam_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              వరకట్నం వేధింపులకు వివాహిత బలి
              <h6>18 March 2022 01:22 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : వరకట్న వేధింపులతో వివాహిత ఆత్మహత్యకు పాల్పడిన సంఘటన పాల్�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Teachjer_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              పాల్వంచలో టీచర్ పై దాడి
              <h6>17 March 2022 08:26 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ మండల పరిధిలోని కిన్న�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Pavan_Babu_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              గరుడ సేవలో పాల్గొన్న కాళ్లూరి పవన్ బాబు దంపతులు
              <h6>17 March 2022 07:52 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా అన్నపురెడ్డిపల్లి మండల కేంద్
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Collector_-_HOLY_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              హోలీ పండుగ శుభాకాంక్షలు తెలిపిన జిల్లా కలెక్టర్ అనుదీప్
              <h6>17 March 2022 09:12 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా కలెక్టర్ అనుదీప్ జిల్లా ప్రజ�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Police_Vs_DONGA_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              పోలీసులకు సవాల్ విసురుతున్న దొంగలు
              <h6>16 March 2022 09:09 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ లో దొంగలు హల్ చల్ చేస్
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Julan_Go_swamy_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              చరిత్ర సృష్టించిన భారత మహిళా క్రికెటర్ ఝులన్‌ గోస్వామి
              <h6>16 March 2022 08:03 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భారత మహిళా క్రికెట్‌‌లో సుదీర్ఘ కాలంగా పేస్ బౌలర్‌గా క�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Collector_-_Vaccine_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              కార్బెవ్యాక్సిన్ ప్రారంభించిన జిల్లా కలెక్టర్ అనుదీప్
              <h6>16 March 2022 07:12 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : కోవిడ్ మహమ్మారిని తరిమి కొట్టాలంటే తప్పని సరిగా టీకా వేయి�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Hijab_-_Yakub_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              హిజాబ్ పై కర్ణాటక హైకోర్టు తీర్పు బాధాకరం: యండి.యాకూబ్ పాషా
              <h6>16 March 2022 05:55 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : ఇస్లాం మతంలో ముస్లిం స్త్రీలు హిజాబ్ ధరించడం తప్పనిసరి కా�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Sajjanar_-1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              సజ్జనార్ క్రియేటివిటీ కేక
              <h6>16 March 2022 11:45 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : వి.సి సజ్జనార్ తెలంగాణ ఆర్టీసీ ఎండీ అయ్యాక మునుపెన్నడు ఎవర
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Midday_Meals_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              మధ్యాహ్న భోజన పథకం కార్మికులకు శుభవార్త
              <h6>16 March 2022 11:24 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : తెలంగాణ రాష్ట్రంలోని మధ్యాహ్న భోజన పథకం కార్మికులకు ముఖ్�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Swimming_Death_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              ప్రాణం తీసిన ఈత సరదా
              <h6>15 March 2022 06:39 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : ఈత సరదా ఓ చిన్నారి ప్రాణాలను బలిగొంది. భద్రాద్రి కొత్తగూడె
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Hijab_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              హిజాబ్ వివాదం పై కర్నాటక హైకోర్టు సంచలన తీర్పు
              <h6>15 March 2022 11:19 AM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : హిజాబ్ వివాదంపై క‌ర్నాట‌క హైకోర్టు మంగ‌ళ‌వారం సంచ‌ల
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Ponisetti_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              పాల్వంచలో మైనింగ్ మాఫియా
              <h6>14 March 2022 04:11 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భారతీయ జనతా పార్టీ ఆధ్వర్యంలో సోమవారం పాల్వంచ ప్రెస్ క్లబ�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Grivence_Dat_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              రేపు కొత్తగూడెం కలెక్టరేట్ లో గ్రీవెన్స్ డే
              <h6>13 March 2022 09:04 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : మార్చి 14 సోమవారం కొత్తగూడెం కలెక్టరేట్ సమావేశపు హాలులో  �
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Yakub_Pasha-4_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              మైనారిటీ గురుకులాలను సద్వినియోగం చేసుకోవాలి : యాకూబ్ పాషా
              <h6>13 March 2022 08:39 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లాలో గల మైనారిటీ గురుకులాలకు చె�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Corona_Report_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              భద్రాద్రి కొత్తగూడెం జిల్లా కరోనా అప్ డేట్
              <h6>13 March 2022 07:36 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా వ్యాప్తంగా ఆదివారం నిర్వహించ
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Mantrula_Boat_Sheekar_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              వైరాలో మంత్రుల బోట్ షికార్
              <h6>13 March 2022 07:07 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : ఖమ్మంజిల్లా వైరా నియోజకవర్గ కేంద్రంలో పలు అభివృద్ది పనుల �
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/KAMPELLI_KANAKESH.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              డి.హెచ్ శ్రీనివాసరావుతో భేటి అయిన కాంపెల్లి కనకేష్ పటేల్
              <h6>13 March 2022 06:33 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : కొత్తగూడెం క్లబ్ లో జి.ఎస్.ఆర్ ట్రస్ట్ ఆధ్వర్యంలో తెలంగాణ �
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/KCR_-_Health_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              కేసీఆర్ హెల్త్ బులెటిన్
              <h6>11 March 2022 02:47 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ :  తెలంగాణ ముఖ్యమంత్రి కల్వకుంట్ల చంద్రశేఖర రావు ఆరోగ్య ప�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Vanama_Ragava_Bail_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              వనమా రాఘవకు బెయిల్ మంజూరు
              <h6>10 March 2022 01:13 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ పట్టణ పరిధిలోని పాత ప�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/Ganjayi_-_Arrest_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              పాల్వంచలో గంజాయి ముఠా అరెస్ట్
              <h6>08 March 2022 08:56 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : ఒడిశా రాష్ట్రం, మల్కాన్ గిరి ప్రాంతం నుండి భద్రాద్రి కొత్త
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/SPEAKER_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              టిఆర్ఎస్ పార్టీ ఏజెంట్ గా వ్యవహరిస్తున్న స్పీకర్ : ఎడవల్లి కృష్ణ
              <h6>08 March 2022 03:20 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : శాసనసభలో కాంగ్రెస్ పార్టీ సభ్యుల పట్ల స్పీకర్ పోచారం శ్రీ�
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
          <Item style={{display:"contents"}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.libertynewstelugu.com/assets/images/news/BUDJET_copy.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              మైనారిటీల పట్ల చిత్తశుద్ధి లేని బడ్జెట్ : ఎండీ.యాకూబ్ పాషా
              <h6>07 March 2022 07:48 PM</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              లిబర్టీ న్యూస్ : రాష్ట్ర ప్రభుత్వం సోమవారం నాడు ప్రవేశ పెట్టిన బడ్జెట్ లో మ
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Item>
        </Grid>

       


      </Grid>
      </Container>
    
      
  );
}

export default NewsCard;
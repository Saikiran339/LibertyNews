import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import NewsCardComponent from './NewsCardComponent';
import Drawer from "../Slider/Swiper";


const tData= [
  // {
  //   img:"https://www.libertynewstelugu.com/assets/images/news/SOCIETY_copy.jpg",
  //   title:"రైతులు సొసైటీ సేవలు సద్వినియోగం చేసుకోవాలి : కొత్వాల",
  //   description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ కో- ఆపరేటివ్ సొసైటీ ద�",
  //   timeDate:"05 July 2022 03:30 PM",
  //   views:"100",
  // },
  // {
  //   img:"https://www.libertynewstelugu.com/assets/images/news/NEW_SP.jpg",
  //   title:"భద్రాద్రి జిల్లా ఎస్పీగా బాధ్యతలు చేపట్టిన డాక్టర్ జి.వినీత్",
  //   description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా సూపరింటెండెంట్ ఆఫ్ పోలీస్",
  //   timeDate:"04 July 2022 07:33 PM",
  //   views:"100",
  // },
  // {
  //   img:"https://www.libertynewstelugu.com/assets/images/news/kkkkkk.jpg",
  //   title:"వీధి వ్యాపారులకు అండగా ఉంటాం: ముత్యాల విశ్వనాథం",
  //   description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ పట్టణంలో గత 30, 40 ఏళ్లగా",
  //   timeDate:"04 July 2022 07:08 PM",
  //   views:"100",
  // },
  // {
  //   img:"https://www.libertynewstelugu.com/assets/images/news/Peddammaaa.jpg",
  //   title:"పెద్దమ్మతల్లికి ఘనంగా పంచామృతాభిషేకం",
  //   description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ మండల పరిధిలోని కేశ",
  //   timeDate:"01 July 2022 02:12 PM",
  //   views:"100",
  // },
  // {
  //   img:"https://www.libertynewstelugu.com/assets/images/news/ZPGSS_copy.jpg",
  //   title:"పాల్వంచ జిల్లా పరిషత్ బాలికల పాఠశాల విద్యార్థుల విజయదుందుభి",
  //   description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ కేటీపీఎస్ కాలనీలో",
  //   timeDate:"01 July 2022 01:33 PM",
  //   views:"100",
  // },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/MARADALU.jpg",
    title:"మరదలి పై కన్నేసిన బావ",
    description:"లిబర్టీ న్యూస్ : మగదిక్కు లేని ఆ ఇంటికి అండగా నిలబడాల్సిన అల్లుడే మరదలి పాల",
    timeDate:"26 March 2022 08:33 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Kolla_Donga_copy.jpg",
    title:"వైరాలో కోళ్ల దొంగ",
    description:"లిబర్టీ న్యూస్ : గత నెల రోజులుగా చికెన్ ధరలు కొండెక్కడంతో  కొంతమంది దుండగ�",
    timeDate:"23 March 2022 08:53 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Ashrama_School_copy.jpg",
    title:"పాల్వంచ ఆశ్రమ పాఠశాల హెడ్ మాస్టర్ పై చర్యలు తీసుకోవాలి",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా, పాల్వంచ పట్టణ కేంద్రంలోని ఆశ�",
    timeDate:"22 March 2022 12:24 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/SINDICATE_-_NEW_copy.jpg",
    title:"బూర్గంపాడులో మద్యం సిండికేట్ దందా",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా బూర్గంపాడు మండలంలోని సారపాక, �",
    timeDate:"21 March 2022 05:42 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/MALLU_SWARAJYAM_copy.jpg",
    title:"మల్లు స్వరాజ్యం ఇక లేరు",
    description:"లిబర్టీ న్యూస్ : మాజీ ఎమ్మెల్యే, తెలంగాణ సాయుధ పోరాట యోధురాలు మల్లు స్వరాజ్",
    timeDate:"19 March 2022 08:28 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/CCCCCC.jpg",
    title:"భక్తులు మెచ్చేలా నవమి ఏర్పాట్లు ఉండాలి : కలెక్టర్",
    description:"లిబర్టీ న్యూస్ : శ్రీరామనవమి ఏర్పాటుల్లో రాజీ వద్దని, భక్తులు మెచ్చేలా ఏర్�",
    timeDate:"19 March 2022 07:29 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/SUMMER_copy.jpg",
    title:"ఎండల పట్ల అప్రమత్తంగా ఉండాలి : కలెక్టర్",
    description:"లిబర్టీ న్యూస్ : ప్రజలు వడదెబ్బ బారిన పడకుండా జాగ్రత్తలు పాటించాలని భద్రా�",
    timeDate:"19 March 2022 06:53 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Balaji_-_Kalyanam_-_Nw_copy.jpg",
    title:"ఘనంగా శ్రీ బాలాజీ కల్యాణోత్సవం",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా అన్నపురెడ్డిపల్లి మండల కేంద్",
    timeDate:"19 March 2022 08:33 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Katnam_copy.jpg",
    title:"వరకట్నం వేధింపులకు వివాహిత బలి",
    description:"లిబర్టీ న్యూస్ : వరకట్న వేధింపులతో వివాహిత ఆత్మహత్యకు పాల్పడిన సంఘటన పాల్�",
    timeDate:"18 March 2022 01:22 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Teachjer_copy.jpg",
    title:"పాల్వంచలో టీచర్ పై దాడి",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ మండల పరిధిలోని కిన్న�",
    timeDate:"17 March 2022 08:26 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Pavan_Babu_copy.jpg",
    title:"గరుడ సేవలో పాల్గొన్న కాళ్లూరి పవన్ బాబు దంపతులు",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా అన్నపురెడ్డిపల్లి మండల కేంద్",
    timeDate:"17 March 2022 07:52 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Collector_-_HOLY_copy.jpg",
    title:"హోలీ పండుగ శుభాకాంక్షలు తెలిపిన జిల్లా కలెక్టర్ అనుదీప్",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా కలెక్టర్ అనుదీప్ జిల్లా ప్రజ�",
    timeDate:"17 March 2022 09:12 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Police_Vs_DONGA_copy.jpg",
    title:"పోలీసులకు సవాల్ విసురుతున్న దొంగలు",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ లో దొంగలు హల్ చల్ చేస్",
    timeDate:"16 March 2022 09:09 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Julan_Go_swamy_copy.jpg",
    title:"చరిత్ర సృష్టించిన భారత మహిళా క్రికెటర్ ఝులన్‌ గోస్వామి",
    description:"లిబర్టీ న్యూస్ : భారత మహిళా క్రికెట్‌‌లో సుదీర్ఘ కాలంగా పేస్ బౌలర్‌గా క�",
    timeDate:"16 March 2022 08:03 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Collector_-_Vaccine_copy.jpg",
    title:"కార్బెవ్యాక్సిన్ ప్రారంభించిన జిల్లా కలెక్టర్ అనుదీప్",
    description:"లిబర్టీ న్యూస్ : కోవిడ్ మహమ్మారిని తరిమి కొట్టాలంటే తప్పని సరిగా టీకా వేయి�",
    timeDate:"16 March 2022 07:12 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Hijab_-_Yakub_copy.jpg",
    title:"హిజాబ్ పై కర్ణాటక హైకోర్టు తీర్పు బాధాకరం: యండి.యాకూబ్ పాషా",
    description:"లిబర్టీ న్యూస్ : ఇస్లాం మతంలో ముస్లిం స్త్రీలు హిజాబ్ ధరించడం తప్పనిసరి కా�",
    timeDate:"16 March 2022 05:55 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Sajjanar_-1.jpg",
    title:"సజ్జనార్ క్రియేటివిటీ కేక",
    description:"లిబర్టీ న్యూస్ : వి.సి సజ్జనార్ తెలంగాణ ఆర్టీసీ ఎండీ అయ్యాక మునుపెన్నడు ఎవర",
    timeDate:"16 March 2022 11:45 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Midday_Meals_copy.jpg",
    title:"మధ్యాహ్న భోజన పథకం కార్మికులకు శుభవార్త",
    description:"లిబర్టీ న్యూస్ : తెలంగాణ రాష్ట్రంలోని మధ్యాహ్న భోజన పథకం కార్మికులకు ముఖ్�",
    timeDate:"16 March 2022 11:24 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Swimming_Death_copy.jpg",
    title:"ప్రాణం తీసిన ఈత సరదా",
    description:"లిబర్టీ న్యూస్ : ఈత సరదా ఓ చిన్నారి ప్రాణాలను బలిగొంది. భద్రాద్రి కొత్తగూడె",
    timeDate:"15 March 2022 06:39 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Hijab_copy.jpg",
    title:"హిజాబ్ వివాదం పై కర్నాటక హైకోర్టు సంచలన తీర్పు",
    description:"లిబర్టీ న్యూస్ : హిజాబ్ వివాదంపై క‌ర్నాట‌క హైకోర్టు మంగ‌ళ‌వారం సంచ‌ల",
    timeDate:"15 March 2022 11:19 AM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Ponisetti_copy.jpg",
    title:"పాల్వంచలో మైనింగ్ మాఫియా",
    description:"లిబర్టీ న్యూస్ : భారతీయ జనతా పార్టీ ఆధ్వర్యంలో సోమవారం పాల్వంచ ప్రెస్ క్లబ�",
    timeDate:"14 March 2022 04:11 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Grivence_Dat_copy.jpg",
    title:"రేపు కొత్తగూడెం కలెక్టరేట్ లో గ్రీవెన్స్ డే",
    description:"లిబర్టీ న్యూస్ : మార్చి 14 సోమవారం కొత్తగూడెం కలెక్టరేట్ సమావేశపు హాలులో  �",
    timeDate:"13 March 2022 09:04 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Yakub_Pasha-4_copy.jpg",
    title:"రేమైనారిటీ గురుకులాలను సద్వినియోగం చేసుకోవాలి : యాకూబ్ పాషా",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లాలో గల మైనారిటీ గురుకులాలకు చె�",
    timeDate:"13 March 2022 08:39 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Corona_Report_copy.jpg",
    title:"భద్రాద్రి కొత్తగూడెం జిల్లా కరోనా అప్ డేట్",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా వ్యాప్తంగా ఆదివారం నిర్వహించ",
    timeDate:"13 March 2022 07:36 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Mantrula_Boat_Sheekar_copy.jpg",
    title:"వైరాలో మంత్రుల బోట్ షికార్",
    description:"లిబర్టీ న్యూస్ : ఖమ్మంజిల్లా వైరా నియోజకవర్గ కేంద్రంలో పలు అభివృద్ది పనుల �",
    timeDate:"13 March 2022 07:07 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/KAMPELLI_KANAKESH.jpg",
    title:"డి.హెచ్ శ్రీనివాసరావుతో భేటి అయిన కాంపెల్లి కనకేష్ పటేల్",
    description:"లిబర్టీ న్యూస్ : కొత్తగూడెం క్లబ్ లో జి.ఎస్.ఆర్ ట్రస్ట్ ఆధ్వర్యంలో తెలంగాణ �",
    timeDate:"13 March 2022 06:33 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/KCR_-_Health_copy.jpg",
    title:"కేసీఆర్ హెల్త్ బులెటిన్",
    description:"లిబర్టీ న్యూస్ :  తెలంగాణ ముఖ్యమంత్రి కల్వకుంట్ల చంద్రశేఖర రావు ఆరోగ్య ప�",
    timeDate:"11 March 2022 02:47 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Vanama_Ragava_Bail_copy.jpg",
    title:"వనమా రాఘవకు బెయిల్ మంజూరు",
    description:"లిబర్టీ న్యూస్ : భద్రాద్రి కొత్తగూడెం జిల్లా పాల్వంచ పట్టణ పరిధిలోని పాత ప�",
    timeDate:"10 March 2022 01:13 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/Ganjayi_-_Arrest_copy.jpg",
    title:"పాల్వంచలో గంజాయి ముఠా అరెస్ట్",
    description:"లిబర్టీ న్యూస్ : ఒడిశా రాష్ట్రం, మల్కాన్ గిరి ప్రాంతం నుండి భద్రాద్రి కొత్త",
    timeDate:"08 March 2022 08:56 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/SPEAKER_copy.jpg",
    title:"టిఆర్ఎస్ పార్టీ ఏజెంట్ గా వ్యవహరిస్తున్న స్పీకర్ : ఎడవల్లి కృష్ణ",
    description:"లిబర్టీ న్యూస్ : శాసనసభలో కాంగ్రెస్ పార్టీ సభ్యుల పట్ల స్పీకర్ పోచారం శ్రీ�",
    timeDate:"08 March 2022 03:20 PM",
    views:"100",
  },
  {
    img:"https://www.libertynewstelugu.com/assets/images/news/BUDJET_copy.jpg",
    title:"మైనారిటీల పట్ల చిత్తశుద్ధి లేని బడ్జెట్ : ఎండీ.యాకూబ్ పాషా",
    description:"లిబర్టీ న్యూస్ : రాష్ట్ర ప్రభుత్వం సోమవారం నాడు ప్రవేశ పెట్టిన బడ్జెట్ లో మ",
    timeDate:"07 March 2022 07:48 PM",
    views:"100",
  },
]

function NewsCard() {
  return (
    
  <Container>
    {/* <Drawer /> */}
    <h3>తాజా వార్తల</h3>
    <hr></hr>

    <br/>
    <Grid  spacing={2} >
                    

{/* News Cards */}


{
  tData.map(NewsCard => {
    return (
        <NewsCardComponent title={NewsCard.title} description={NewsCard.description} img={NewsCard.img} timeDate={NewsCard.timeDate} views={NewsCard.views} />
    );
  })
}
    </Grid>
  </Container>
    
      
  );
}

export default NewsCard;
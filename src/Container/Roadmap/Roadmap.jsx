import React from "react";
import SampleNextArrow from '../Slidercustom_styling/Nextbtn';
import SamplePrevArrow from '../Slidercustom_styling/Previousbtn.jsx';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  makeStyles,
  useMediaQuery
} from "@material-ui/core";
import Roadmapimg from "../../Images/roadmap.png";
import Roadmaphand from "../../Images/roadmaphand.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import roadmaplogo from "../../Images/roadmaplogo.png";
import Developer from "../../Images/DEVELOPER.png";
import Slider from "react-slick";
import FUNGAME from "../../Images/Fungame.png";
import INVESTER from "../../Images/INVESTOR & PARTNER.png";
import Firstinvester from "../../Images/image 10.png";
import secondinvester from "../../Images/image 11.png";
import thirdinvester from "../../Images/image 12.png";
import fourinvester from "../../Images/image 14.png";
import fiveinvester from "../../Images/image 15.png";
import sexinvester from "../../Images/image 16.png";
import seveninvester from "../../Images/image 2.png";
import eightinvester from "../../Images/image 3.png";
import nineinvester from "../../Images/image 4.png";
import teninvester from "../../Images/image 5.png";
import eleveninvester from "../../Images/image 6.png";
import to_wellinvester from "../../Images/image 15.png";
import thirtyinvester from "../../Images/image 16.png";
import Doublehand from "../../Images/doublehand.png";
import logo from '../../Images/logo.png';
import {Slide,Fade,Roll,Rotate} from 'react-reveal';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SamplePrevArrow/>,
  prevArrow:<SampleNextArrow/>,

};
const Roadmap = () => {
  const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(min-width:596px)');
 
  const useStyles = makeStyles({
    roadmapcontainer: {
      backgroundColor: "#150C1F",width: "100%", padding: "5% 0% 5% 0%",
    },
    roadmaplogo: {
      margin: "10% 0px 0px 8%",
    },
    roadmapBox_style: {
      margin: "auto",
      textAlign: "center",
      width: "88%",
    },
    roadmapimagestyling: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    handroadmap_image: {
      marginTop: matches?"-27%":"-20%",
      textAlign: "center",
      justifyContent: matches?"center":"",
    },
    handroadmapimage_styling:{
      postion:"relative",
      width:matches?"auto":"85%",
      marginRight:matches?"":"30px"
    },
    carouselBox: {
      width: matches?"68%":"68%",
      padding: "10%",
      margin: matches?"auto":"20px 0px 0px 20px",
      textAlign: "left",
    },
    Developerstying: {
      textAlign: "center",
    },
    funGameBoxstyling: {
      width: "180px",
      heigh: "170px",
      borderRadius: "5%",
      boxShadow: "5px 5px 5px rgba(0,0,#150C1F,0.5)",
      padding: "2% 0% 0% 2%",
      backgroundColor: "#0E0C16",
      margin: "auto",
    },
    custamcardstyling: {
      postion: "absolute",
      textAlign: "center",
      width: "180px",
      heigh: "170px",
      borderRadius: "5%",
      boxShadow: "5px 5px 5px rgba(0,0,#150C1F,0.5)",
      padding: "2% 0% 0% 2%",
      backgroundColor: "#0E0C16",
      overflow:'hidden',
      margin:matches?"":"10px",
      margin:extrassmallscreen?"":"auto",
      marginTop:extrassmallscreen?"":"15px"
    },
    doublehand:{
      marginTop:'-20%',
      margin:'auto',
      position:'relative',
      width:'100%'
    },
    footer:{
      textAlign:'center',padding:'20px 0px',backgroundColor:'#150C1F',
    },
    liststyling:{
      fontSize:'14px',
      fontWeight:'normal',
      margin:'auto',
      // border:'1px solid red',
     marginLeft:'2%'
    },
    lasttwocards:{
      marginTop: '2%',
      display: 'flex',
      width: "100%",
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: extrassmallscreen?"row":"column"
    }
  });
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.roadmapcontainer}>
        <Grid xs={12}>
        <Slide right> 
        <Typography className={classes.roadmaplogo}>
            <img src={roadmaplogo} atl="" />
          </Typography>
          </Slide>
        </Grid>
        <Grid xs={12}>
          <Box className={classes.roadmapBox_style}>
          <img
              src={Roadmapimg}
              alt=""
              className={classes.roadmapimagestyling}
            />
          </Box>
        </Grid>
        {/* carousel Box  starting coding*/}
        <Grid xs={12} sm={7} md={5}>
          <Box className={classes.carouselBox}>
            <Slider {...settings}>
              <div>
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </div>
              <div>
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </div>
              <div>
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </div>
            </Slider>
          </Box>
        </Grid>
        <Grid xs={12} md={5} className={classes.handroadmap_image}>
        <Rotate bottom right><img src={Roadmaphand}className={classes.handroadmapimage_styling} alt=""
         style={{ marginLeft: matches?"20%":"5%" }} /> </Rotate>
        </Grid>
        <Grid xs={12} className={classes.Developerstying}>
        <Slide left> <Box>
            <img src={Developer} alt="" />
          </Box></Slide>
        </Grid>
        <Grid xs={12} className={classes.Developerstying} style={{ padding: "10% 0% 10% 0%" }} >
          <Box className={classes.funGameBoxstyling}>
            <img src={FUNGAME} alt="" style={{ margin: "auto", position: "relative", bottom: "10px" }}/>
          </Box>
        </Grid>
        <Grid
          xs={12}
          className={classes.Developerstying}
          style={{ padding: "0% 0% 5% 0%" }}
        >
          <Box style={{ width: "100%" }}>
           <Slide right> <img src={INVESTER} alt="" style={{width:extrassmallscreen?"":"95%"}}/></Slide>
          </Box>
        </Grid>
      </Grid>
      {/* invester and partner cards */}
      <Box style={{ backgroundColor: "#150C1F",width:'100%'}}>
      <Container
        style={{
          width: "100%",
          padding: "0% 0% 10% 0%",
          marginLeft: "0px",
          marginRight: "0%",
        }}
      >
        <Grid
          container
          style={{
            paddingTop: "10px",
            width: "80%",
            margin: "auto",
          }}
        >
          <Grid item xs={12} md={3} sm={5}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={Firstinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={5} >
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={secondinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={5}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={thirdinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} item sm={5}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={fourinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>

          {/* one card sections is also completed */}
          <Grid xs={12} md={3} sm={5}  item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={fiveinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={sexinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item style={{marginTop:'10px'}}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={seveninvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={4} item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={eightinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={nineinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3}  sm={5} item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={teninvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item style={{marginTop:'10px'}}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={eleveninvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={to_wellinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Box className={classes.lasttwocards}> 
          <Grid xs={12} md={3} sm={5}  item>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={thirtyinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={5} item style={{marginTop:'2%'}}>
            <Card className={classes.custamcardstyling} elevation={0}>
              <CardContent>
                <img src={thirtyinvester} alt="" />
              </CardContent>
            </Card>
          </Grid>
          </Box>
        </Grid>
      </Container>
      </Box>
      <Grid container style={{paddingBottom:'5%'}}>
          <Grid xs={12}>
          <Roll top> <img src={Doublehand} alt="double handing" className={classes.doublehand}/></Roll>
          </Grid>
          <Grid md={6} xs={12} style={{textAlign:'center'}}>
           <Box style={{marginTop:'8%'}}>
               <img src={logo} alt=""/><br/>
               <Typography variant="h5" style={{color:'black',fontWeight:'bold',marginTop:'3%'}}>LogoName Here</Typography>
           </Box>
          </Grid>
          
          <Grid md={2} xs={3} >
            <Box className={classes.liststyling}>
              <ul>
              <li><Typography  variant="h5">Home</Typography></li>
              <li> Game</li>
              <li>NFTs</li>
              <li>RoadMap</li>
              <li>Team</li>
              <li>Partner</li>
              </ul>
            </Box>
          </Grid>
          <Grid md={2} xs={3}>
          <Box className={classes.liststyling}>
              <ul>
              <li><Typography  variant="h5">Company</Typography></li>
              <li> Abouts</li>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              </ul>
            </Box>
          </Grid>
          <Grid md={2} xs={3} style={{marginLeft:matches?"0px":"20px"}}>
          <Box className={classes.liststyling}>
              <ul>
              <li><Typography variant="h5">Platform</Typography></li>
              <li> Support</li>
              <li>Blog</li>
              <li>Documentations</li>
              </ul>
            </Box>
          </Grid>
      </Grid>
      <Grid container>
      <Grid  xs={12} className={classes.footer}>
        <Typography variant="h5" >
        Copyright © 2026 Tatum Limited
        </Typography>
          </Grid>
      </Grid>
      {/* //end card */}
    </>
  );
};

export default Roadmap;

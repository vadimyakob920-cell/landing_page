import React from "react";
import {Rotate} from 'react-reveal';
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  useMediaQuery
} from "@material-ui/core";
import img from "../../Images/background.png";
import Team from "../Teams/Teams";
import Formdetails from "../Form/Formdetails";
import Dashboard from "../../Images/completdeashboard.png";
import Gameplay from "../Gameplay/Gameplay.jsx";
import Coreteam from "../Coreteam/Coreteam";
import Roadmap from "../Roadmap/Roadmap";
import Responsiveimage from '../../Images/reponsiveness_image.png';
function Homepage() {
  const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(max-width:576px)')
  const useStyles = makeStyles({
    Homepagestyle: {
      width: "100%",
      height: "auto",
      margin: "0px",
      color: "white",
      fontFamily: "Metal Mania",
      fontWeight: "bold",
      justifyContent: "left",
      position: "absolute",
      zIndex: "-1",
      overflowY: extrassmallscreen?"hidden":'scroll',
      overflow:'hidden'
    },
    ContentBox: {
      width: matches?"65%":"95%",
      height: "auto",
      position: "relative",
      left: matches?"88px":"10px",
      top: "32%",
    },
    Mainheading: {
      // paddingBottom: "10px",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: matches?"4rem":"2rem",
    },
    Homepagecontentstyle: {
      fontSize: matches?"1.5rem":"1rem",
      marginTop:matches?"0px":'20px'
    },
    Mainkeyword: {
      color: "slateblue",
      marginTop: "18px",
      fontSize: "22px",
      fontWeight:'bold'
    },
    containerStyling: {
      background: `url(${img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    imageBoxstyling:{
     textAlign:matches?"":"center",
     marginTop:matches?"":"5%"
    },
    Imagestyling:{
      position:'relative',
      marginLeft: "7%",
    
    }
  });
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Homepagestyle}>
        <Grid container className={classes.containerStyling}>
          <Grid item md={6} xs={12} style={{paddingBottom:'50px'}}>
            <Box className={classes.ContentBox}>
              <Typography className={classes.Mainheading}>
                 THETRAN 
                ARENA
              </Typography>
              <Typography className={classes.Homepagecontentstyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography className={classes.Mainkeyword}>
                #ThetenArena #MobaNFT #FreeToPlay #BattleToEran
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} style={{paddingBottom:'50px'}}>
            <Box className={classes.imageBoxstyling}>
              <Rotate top left>
               <img
                src={matches ? Dashboard:Responsiveimage}
                alt=""
                style={{width: matches?"80%":"500px",   width:extrassmallscreen?"300px":"500px",
                marginTop:extrassmallscreen?"60px":"", height: matches?"900px":"70%",}}
                classes={classes.Imagestyling}
              /> 
             </Rotate>
            </Box>
          </Grid>
          <br />
          <Formdetails />
          <Gameplay />
          <Team />
          <Coreteam />
          <Roadmap />
        </Grid>
      </Box>
    </>
  );
}
export default Homepage;

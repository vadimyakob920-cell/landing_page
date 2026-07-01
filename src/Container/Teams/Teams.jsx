import React from "react";
import NETSITEM from "../../Images/NETSITEM.png";
import { Grid, makeStyles, Box,useMediaQuery } from "@material-ui/core";
import MultipleItems from "../Carousel/Carousel.jsx";
import netitems from "../../Images/netsitemlowerline.png";
import Coin from "../../Images/Coin.png";
import netsitemtrophy from "../../Images/netsitemtrophy.png";
import netitemsupper from "../../Images/netsitem-upperline.png";
import Itemslist from "../../Images/itemlist.png";
import {Slide,Zoom  } from 'react-reveal';
import Thecoinresponsive from "../../Images/thecoinresponsive.png";
import "./Teamstylesheet.css";
function Team() {
  const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(max-width:576px)')
  const useStyles = makeStyles({
    Teamcompomentstyling: {
      height: "auto",
      backgroundColor: "#150C1F",
    },
    Coinstyling: {
      textAlign: "center",
      paddingTop: "12%",
    },
    Coincontent: {
      width: "60%",
      margin: matches?"auto":"20px",
      textAlign: "justify",
      fontSize: matches?"14px":"10px",
      fontWeight:matches?"bold":"normal",
      lineHeight:'14px'
    },
    upperitem: {
      width: "90%",
    },
    buttonstyling: {
      backgroundColor: "white",
    },
    Eventlisting: {
      padding: "20px",
    },
    Thethancoinstying: {
      width: "95%",
      margin: "auto",
    },
    paragraphstyling:{
      width: "69%",
      textAlign: matches?"center":"left",
      fontSize: matches?"16px":"12px",
      padding: matches?"100px":"50px 0px 20px 45px",
      margin: matches?"auto":"20px",
      fontWeight:"normal"
    },
    cointitleStyling:{
      width:matches?"500px":"200px"
    },
    Unoderlist:{
      fontSize:matches?"15px":"13px",
      fontWeight:matches?"bold":"normal",
    },
    tropystyling:{
           width:matches?"100%":"100%",
    },
    GroupexchangeButton:{
      width:matches?"100%":"300px",
      margin:matches?"":"20px"
    }
  });
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.Teamcompomentstyling}>
        <Grid
          xs={12}
          style={{marginTop: "8%", textAlign: "center",}}
        >
         <Slide right><img src={NETSITEM} alt="" /></Slide> 
          <p className={classes.paragraphstyling}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Grid>
        <Grid xs={12}>
          <MultipleItems />
        </Grid>
        {/* starting the coin items */}
        <Grid xs={12} className={classes.Coinstyling}>
          <img src={Coin} alt="" className={classes.cointitleStyling} />
          <Box className={classes.Coincontent}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Box>
          <Slide left><img src={netitems} alt="" className={classes.upperitem} /></Slide>
        </Grid>
        <Grid container className={classes.Thethancoinstying}>
          <Grid md={2} xs={7} style={{ textAlign: "center" }}>
            <Zoom left><img className={classes.tropystyling} src={netsitemtrophy} alt="" /></Zoom>
          </Grid>
          <Grid md={2} xs={5}>
            <Zoom left cascade>
            <ul className={classes.Unoderlist}>
              <li>Special Events</li>
              <li>battle Pass</li>
              <li> Ranking Rewards</li>
              <li>Quest</li>
              <li> Guild War</li>
              <li> Tournament</li>
            </ul>
            </Zoom>
          </Grid>
          <Grid md={6} xs={12} style={{ textAlign: matches?"left":"center" }}>
            <img className={classes.GroupexchangeButton} src={matches?Itemslist:Thecoinresponsive} alt="" />
          </Grid>
          <Grid xs={12} style={{ textAlign: "center" }}>
            <Slide right><img src={netitemsupper} alt="" className={classes.upperitem} /></Slide>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Team;

import React from "react";
import Image from "../../Images/GAMEPLAY.png";
import imageofplayground from "../../Images/space-background.png";
import Uppergameplay from "../../Images/gameplay-upperline.png";
import gameplayhand from "../../Images/gameplay-hand.png";
import lowergameplay from "../../Images/gameplay-lowerline.png";
import { Grid, makeStyles, Typography, Box,useMediaQuery } from "@material-ui/core";
import {Slide,Roll } from 'react-reveal';
function Gameplay() {
  const matches=useMediaQuery('(min-width:960px)');
const extrassmallscreen=useMediaQuery('(max-width:576px)')
const extraminssmallscreen=useMediaQuery('(min-width:576px)')
  const useStyles = makeStyles({
    Gamestyling: {
      height: "100%",
      background:`url(${imageofplayground})`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      position: "relative",
      opacity:0.6
    },
    mainContainer:{
      background: 'rgba(#FFFFFF, 0, 0, 0.1)',
      color:'white'
    },
    Boxstyling:{
      width: matches?"60%":"70%",
      width:extrassmallscreen?"85%":"70%",
      height: "100px",
      marginLeft:matches?"0px":"20px",
      border: "1px solid  white",
      fontSize: matches?"20px":"15px",
      fontFamily: "Robot",
      fontWeight: "bold",
      padding: "5px 0px 5px 0px",
      border: "none",
      background: "rgba(3,147,36,0.2)",
      background:"linear-gradient(79deg, rgba(3,147,36,1) 79%, rgba(0,0,0,1) 100%)",
    },
    uppergameplaystyle: {
      position:'relative',
      width: "95%",
    },
    lowergameplay: {
      position:'relative',
      width: "95%",
      marginBottom: "10%",
    },
    innercontainer: {
      textAlign: "left",
    },
    Battle_rolysolo: {
      marginTop: "5%",
    },
    InnerBoxtypograpy: {
      width: "65%",
      textAlign: "justify",
      marginTop: "5%",
      marginLeft:matches?"0px":"20px",
      fontSize:matches?"20px":"22px"
    },
    gameplayHand: {
      textAlign: matches?"center":"left",
      marginLeft:matches?"0px":"20px",
      marginBottom: "10%",
    },
    gameplayhand_image:{
      position:"relative",
       width:matches?'70%':"70%"
    }
  });
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Gamestyling}>
        <Grid container className={classes.mainContainer}>
          <Grid
            xs={12}
            style={{
              textAlign: "center",
              marginTop: "8%",
              height: "18%",
              paddingBottom: "5px",
            }}
          >
           <Slide top><img src={Image} alt="" style={{ width: matches?"300px":"200px",}}/></Slide> 
            <p
              style={{
                width: matches?"50%":"60%",
                margin: extraminssmallscreen?"auto":"10px",
                marginLeft:"50px",
                textAlign: "left",
                fontSize: matches?"16px":"16px",
                fontSize: extrassmallscreen?"14px":"12px",
                paddingTop: "10px",
                fontWeight:'bold'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Grid>
          <Grid
            xs={12}
            style={{
              textAlign: "center",
              maginTop: "0px",
            }}
          >
             <Slide left>
            <img
              src={Uppergameplay}
              alt=""
              className={classes.uppergameplaystyle}
            />
            </Slide>
            <Grid container className={classes.innercontainer}>
              <Grid item md={6} xs={12} className={classes.gameplayHand}>
              <Roll bottom> <img className={classes.gameplayhand_image} src={gameplayhand} alt="" /></Roll>
              </Grid>
              <Grid item md={6} xs={12} className={classes.Battle_rolysolo}>
              <Slide right>
                <Box className={classes.Boxstyling}>
                  <h1 style={{ margin: "2% 0px 0px 2%", }} >
                     BATTLE ROYALE Solo-Duo
                  </h1>
                </Box>
                <Box className={classes.InnerBoxtypograpy}>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </Box>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
          <Slide right> <img src={lowergameplay} alt="" className={classes.lowergameplay} /></Slide> 
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Gameplay;

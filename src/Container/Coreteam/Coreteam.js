import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  makeStyles,
  useMediaQuery
} from "@material-ui/core";
import THETANGAM from "../../Images/THETANGAM.png";
import Cartoonsword from "../../Images/cartoonsword.png";
import Blackcoreteam from "../../Images/blackcoregam.png";
import Coreteamicon from "../../Images/CORETEAM.png";
import Teamgroup from "../../Images/groupcoreteam.png";
import Evoleheroes from "../../Images/evolveheroes.png";
import Stacking from "../../Images/stacking.png";
import {Slide,Roll} from 'react-reveal';
import cartoonwithsword from '../../Images/cartoonwithsword.png';
import Envolapeandstarcking from '../../Images/Evolapeandstarcking.png';
import learnandmarket from '../../Images/learnandmarket.png';
function Coreteam() {
  const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(min-width:596px)');
  const extrasmaxscreen=useMediaQuery('(max-width:596px)');
  const useStyles = makeStyles({
    maincontainer: {
      background: `url(${Blackcoreteam})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      justifyContent: "center",
      paddingBottom: "15%",
      color:'white'
    },
    Thetangamepagestyle: {
      textAlign: "center",
      marginTop: "20%",
      paddingBottom: matches?"10%":"5%",
      margin: "auto",
    },
    thetangametitle:{
      width:matches?"40%":"40%"
    },
    coreteamtypography: {
      textAlign: "left",
      margin: "4% 0% 4% 0%",
    },
    coreteam_inner_content: {
      width: matches?"50%":"99%",
      height: "58.5",
      margin: matches?"auto":"10px",
      fontSize: matches?"14px":"12px",
    },
    custamcardstyling: {
      postion: "absolute",
      backgroundColor: "transparent",
      width:matches?"auto":"50%",
      width:extrasmaxscreen?"50%":"",
      margin:matches?"":"auto",
      color:'white'
    },
    Cardcontentimage: {
      width: "100%",
      height: "100%",
      postion: "relative",
      marginTop: "-45%",
      paddingRight: "30px",
    },
    cardtextcontent: {
      textAlign: "center",
      fontWeight: "bold",
      marginTop: "7%",
    },
    Btnimage: {
      height: "200px",
      width: "230px",
    },
    ImageBox: {
      width: "70%",
      height: "50%",
      textAlign: matches?"right":"center",
       margin: matches?"55% 0% 0% 18%":"auto" ,
       marginTop:matches?"":"20px"
    },
  });
  const commonStyles = {
    bgcolor: "lightgreen",
    borderColor: "black",
    m: 1,
    border: 1,
    width: "4.5rem",
    height: "4.5rem",
    margin: "auto",
    position: "relative",
    top: "2%",
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.maincontainer} spacing={2}>
      <Grid item xs={12} className={classes.Thetangamepagestyle}>
        <img src={THETANGAM} alt="" className={classes.thetangametitle}/>
      </Grid><br/>
      {/* left button image */}
      <Grid item xs={12} md={3}>
        <Box className={classes.ImageBox}>
          <Slide left><img src={Envolapeandstarcking} alt="" className={classes.Btnimage} /></Slide>
        </Box>
      </Grid>
      {/* end the left image */}
      <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
       <fade bottom cascade>
         <img src={matches?Cartoonsword:cartoonwithsword} alt=""  />
         </fade> 
      </Grid>
      {/* right button image */}
      <Grid item xs={12} md={3}>
        <Box className={classes.ImageBox}>
         <Slide right><img src={learnandmarket}  alt="" className={classes.Btnimage} /></Slide> 
        </Box>
       </Grid> 
      {/* end the right button */} 
      <Grid item xs={12} className={classes.Thetangamepagestyle}>
      <Roll top> <img src={Coreteamicon} alt="" /></Roll>
      </Grid>
    {/* this is paragraphy */}
      <Grid item xs={12} className={classes.coreteamtypography}>
        <Typography className={classes.coreteam_inner_content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          <Typography style={{ textAlign: "center", fontSize: "14px" }}>
            scrambled it to make a type specimen book.
          </Typography>
        </Typography>
      </Grid>
      {/* //this is card box */}
      <Grid item md={2} sm={4} xs={12}>
        <Card className={classes.custamcardstyling} elevation={0}>
          <CardContent>
            <Box sx={{ ...commonStyles, borderRadius: "50%" }} />
            <Typography className={classes.cardtextcontent}>
              Name Here
            </Typography>
            <Typography
              style={{ textAlign: "center",fontSize: matches?"16px":"12px", }}
            > Description Here
            </Typography>
            <img src={Teamgroup} alt="" className={classes.Cardcontentimage} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <Card className={classes.custamcardstyling} elevation={0}>
          <CardContent>
            <Box sx={{ ...commonStyles, borderRadius: "50%" }} />
            <Typography className={classes.cardtextcontent}>
              Name Here
            </Typography>
            <Typography
              style={{ textAlign: "center",fontSize:'10px',fontSize: matches?"16px":"12px",  }}
            >
              Description Here
            </Typography>
            <img src={Teamgroup} alt="" className={classes.Cardcontentimage} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <Card className={classes.custamcardstyling} elevation={0}>
          <CardContent>
            <Box sx={{ ...commonStyles, borderRadius: "50%" }} />
            <Typography className={classes.cardtextcontent}>
              Name Here
            </Typography>
            <Typography
              style={{ textAlign: "center",fontSize: matches?"16px":"12px",  }}>
              Description Here
            </Typography>
            <img src={Teamgroup} alt="" className={classes.Cardcontentimage} />
          </CardContent>
        </Card>
      </Grid>
      <Grid md={2} sm={4} xs={12} item>
        <Card className={classes.custamcardstyling} elevation={0}>
          <CardContent>
            <Box sx={{ ...commonStyles, borderRadius: "50%" }} />
            <Typography className={classes.cardtextcontent}>
              Name Here
            </Typography>
            <Typography
              style={{ textAlign: "center",fontSize: matches?"16px":"12px",  }}>
              Description Here
            </Typography>
            <img src={Teamgroup} alt="" className={classes.Cardcontentimage} />
          </CardContent>
        </Card>
      </Grid>
      <Grid md={2} sm={4} xs={12} item>
        <Card className={classes.custamcardstyling} elevation={0}>
          <CardContent>
            <Box sx={{ ...commonStyles, borderRadius: "50%" }} />
            <Typography className={classes.cardtextcontent}>
              Name Here
            </Typography>
            <Typography
              style={{ textAlign: "center",fontSize: matches?"16px":"12px",  }}>
              Description Here
            </Typography>
            <img src={Teamgroup} alt="" className={classes.Cardcontentimage} />
          </CardContent>
        </Card>
      </Grid>
      {/* //end card */}
    </Grid>
  );
}

export default Coreteam;

import React from "react";
import { makeStyles, Typography, Box, Grid, useMediaQuery } from "@material-ui/core";

function Formdetails() {
  const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(max-width:576px)')
  const smallscreen=useMediaQuery('(max-width:365px)')
  const useStyles = makeStyles({
    formstyling: {
      position: "relative",
      background: "rgb(2,0,36)",
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,62,2,1) 0%, rgba(0,255,89,1) 100%)",
      marginTop: "150px",
      height: "auto",
      padding: "30px 93px 40px 93px",
    },
    leftgrid_styling:{
     margin: matches?"auto":"0px",
    margin:extrassmallscreen?'inset':'-10px',
      position:'relative',
      width: "100%" ,
      paddingBottom:'10px'
    },
    totalplayers:{
      color:'#537F2C',
      fontSize: matches?"30px":"22px", 
      fontWeight: "bold",
      marginTop:matches?"":"30px"
    },
    contractaddressstyling:{
      height: "17px",
      margin: extrassmallscreen?'inset':'',
      color: "black",
      padding:'5px',
      fontSize:smallscreen?"12px":"14px"
    },
    addressdetails:{
                  backgroundColor: "#79BE6D",
                  width: matches?"90%":"100%",
                  padding: "7px",
                  fontSize:matches?'19px':"14px",
                  fontWeight:'normal',
                  fontSize:extrassmallscreen?"12px":'14px',
    },

    Playerdetailsstyling: {
      height: "140px",
      width: matches?"85%":"100%",
      textAlign: "center",
      margin: "auto",
      paddingBottom:'5px'
    },
    innerBox: {
      height: extrassmallscreen?"60%":"65%",
      width:extrassmallscreen?"100%":"65%",
      textAlign: "center",
      boxShadow: "5px 5px 10px lightgray,-5px -5px -10px lightgreen",
      backgroundColor: "#5DA054",
      margin: "auto",
      marginTop:'10px' ,
      borderRadius:'3%'
    },
    Playerstrength: {
      fontSize: matches?"3rem":"2.5rem",
      fontSize:extrassmallscreen?"2rem":"2.5rem",
      justifyContent: "center",
      alighItem: "center",
      fontWeight: "bold",
      textAlign:'center',
      padding:'15px'
    },
  });
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.formstyling}>
        <Grid md={6} xs={12} sm={8}>
          <div className={classes.leftgrid_styling}>
            <p className={classes.contractaddressstyling} sx={{
              fontSize: {
                lg: 30,
                md: 20,
                sm: 8,
                xs: 5
              } }}>     
              $TEG Contract Address
            </p>
            <div className={classes.addressdetails}>
              <span style={{ borderRight: "1px solid white" }}>BEP20 </span>
              <span>0*9FDDHGSFJHDKJHFHU6R</span>
            </div>
            <div className={classes.addressdetails} style={{marginTop:'5px'}}>
              <span style={{ borderRight: "1px solid white" }}>BEP20 </span>
              <span>0*9FDDHGSFJHDKJHFHU6R</span>
            </div>
            <p className={classes.contractaddressstyling}>
              $TEG Contract Address
            </p>
            <div className={classes.addressdetails}>
              <span style={{ borderRight: "1px solid white" }}>BEP20 </span>
              <span>0*9FDDHGSFJHDKJHFHU6R</span>
            </div>
          </div>
        </Grid>
        <Grid md={6} xs={12}>
          <Box className={classes.Playerdetailsstyling}>
            <Typography className={classes.totalplayers}>
              TOTAL PLAYERS
            </Typography>
            <center>
            <Box className={classes.innerBox}>
              <Typography className={classes.Playerstrength}>
                2,670,683
              </Typography>
            </Box>
            </center>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Formdetails;

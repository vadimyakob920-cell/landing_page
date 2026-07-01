import React from "react";
import {Slide } from 'react-reveal';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import vectorNavbar from "../../Images/Header.png";
import logo from "../../Images/Ellipse.png";
const useStyles = makeStyles({
  Appbar: {
    paddingBottom: "10px",
    marginTop: "-10px",
    position: "relative",
    zIndex: "4",
    width:'100%',
  },
  navbar: {
    flex: 1,
    fontFamily: "Roboto",
    fontWeight: "bold",
    cursor: "pointer",
    justifyContent: "center",
  },

});
const leftnav = ["Home", "Game", "NFTs"];
const rightnav = ["Team", "RoadMap", "Partner"];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        classes={classes.Appbar}
        elevation={0}
      >
        <Container maxWidth="xl" style={{ color: "white" }}>
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className={classes.navbar}
            >
              {leftnav.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  style={{ color: "aliceblue" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className={classes.navbar}
            >
              <Slide top >
              <img src={vectorNavbar} alt="" style={{ zIndex: "1" }} />
              </Slide>
              <img
                src={logo}
                alt="logo"
                style={{ zIndex: "2", backdropFilter: "blur(34px)" }}
              />
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className={classes.navbar}
            >
              {rightnav.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{ color: "aliceblue" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;

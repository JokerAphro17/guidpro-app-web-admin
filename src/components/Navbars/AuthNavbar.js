import React from "react";
// import clsx from "clsx";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons components

import ShoppingCart from "@material-ui/icons/ShoppingCart";

// core components
import componentStyles from "assets/theme/components/navbars/auth-navbar.js";

const useStyles = makeStyles(componentStyles);

export default function AuthNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "responsive-menu-id";
  const ListLeftObject = (
    <Box
      display="flex"
      alignItems="center"
      width="auto"
      component={List}
      className={classes.flexDirectionColumn}
    >
      <ListItem
        component={Link}
        to="/auth/login"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        Connexion
      </ListItem>
      <ListItem
        component={Link}
        to="/auth/register"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        Inscription
      </ListItem>
     
    </Box>
  );
  const ListRightObject = (
    <Box
      display="flex"
      alignItems="center"
      width="auto"
      component={List}
      className={classes.flexDirectionColumn}
    >
      <ListItem
        component="a"
        href="https://www.facebook.com/CreativeTim/"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        <Box
          component="i"
          className="fab fa-facebook-square"
          fontSize="1.25rem!important"
          marginRight=".5rem!important"
        />
        <Hidden lgUp implementation="css">
          Facebook
        </Hidden>
      </ListItem>
      <ListItem
        component="a"
        href="https://www.instagram.com/creativetimofficial/"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        <Box
          component="i"
          className="fab fa-instagram"
          fontSize="1.25rem!important"
          marginRight=".5rem!important"
        />

        <Hidden lgUp implementation="css">
          Istagram
        </Hidden>
      </ListItem>
      <ListItem
        component="a"
        href="https://twitter.com/creativetim"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        <Box
          component="i"
          className="fab fa-twitter"
          fontSize="1.25rem!important"
          marginRight=".5rem!important"
        />
        <Hidden lgUp implementation="css">
          Twitter
        </Hidden>
      </ListItem>
      <ListItem
        component="a"
        href="https://github.com/creativetimofficial"
        onClick={handleMenuClose}
        classes={{
          root: classes.listItemRoot,
        }}
      >
        <Box
          component="i"
          className="fab fa-github"
          fontSize="1.25rem!important"
          marginRight=".5rem!important"
        />
        <Hidden lgUp implementation="css">
          Github
        </Hidden>
      </ListItem>
      <Button
        variant="outlined"
        color="primary"
        classes={{
          root: classes.buttonRootPurchase,
          label: classes.buttonLabelPurchase,
        }}
      >
        <Box
          component={ShoppingCart}
          position="relative"
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight=".25rem!important"
        />
        Purchase now
      </Button>
    </Box>
  );
  return (
    <>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Container
            display="flex!important"
            justifyContent="space-between"
            alignItems="center"
            marginTop=".75rem"
            component={Box}
            maxWidth="xl"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                alt="..."
                height="30px"
                component="img"
                marginRight="1rem"
                className={classes.headerImg}
                src={require("assets/img/logo/logo-nom.png").default}
              />
              <Hidden mdDown implementation="css">
                {ListLeftObject}
              </Hidden>
            </Box>
            
            
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

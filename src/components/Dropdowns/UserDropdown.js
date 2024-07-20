import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";

// core components
import componentStyles from "assets/theme/components/dropdowns/user-dropdown.js";
import useAuth from "utils/hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles(componentStyles);

export default function UserDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const auth = useAuth();
  const { user } = auth;

  const handleLogout = () => {
    auth.signout();
  }

  const menuId = "dropdowns-user-dropdown-id";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Bienvenue!
      </Typography>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
          
          />
        <span onClick={() => history.push('/admin/user-profile/'+user?.id, {
          id: user?.id
        })}>
          Mon profile</span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Paramettre</span>
      </Box>
      
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={LiveHelp}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Support</span>
      </Box>
      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleLogout}
      >
        <Box
          component={DirectionsRun}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
         
        />
        <span>Logout</span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
     
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden mdDown>
            {user && user.lastName }
        </Hidden>
      </Button>
      {renderMenu}
    </>
  );
}

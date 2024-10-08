import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// core components
import componentStyles from "assets/theme/components/headers/user-header.js";

const useStyles = makeStyles(componentStyles);

const UserHeader = ({user}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        paddingBottom="4.5rem"
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="500px"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          className={classes.overlayBox}
        />
        <Container
          display="flex"
          alignItems="center"
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant="h1"
                classes={{ root: classes.typographyRootH1 }}
              >
                Bonjour, {user?.firstName} {user?.lastName}
              </Typography>
              <Box
                component="p"
                marginBottom="3rem"
                color={theme.palette.white.main}
                lineHeight="1.7"
                fontSize="1rem"
              >
                Ici, vous pouvez modifier votre profil, vos préférences et bien
                plus encore.
              </Box>
              <Button
                variant="contained"
                classes={{ root: classes.buttonRoot }}
              >
                Edit profile
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserHeader;

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import School from "@material-ui/icons/School";

// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import componentStyles from "assets/theme/views/auth/register.js";
import componentStylesButtons from "assets/theme/components/button.js";

const useStyles = makeStyles(componentStyles);
const useStylesButtons = makeStyles(componentStylesButtons);

function Register() {
  const classes = { ...useStyles(), ...useStylesButtons() };
  const theme = useTheme();
  return (
    <>
      <AuthHeader
        title="Nouveau sur Guid Pro?"
        description="Créez un compte pour continuer, c'est gratuit."
      />
      {/* Page content */}
      <Container
        component={Box}
        maxWidth="xl"
        marginTop="-8rem"
        paddingBottom="3rem"
        position="relative"
        zIndex="101"
      >
        <Box component={Grid} container justifyContent="center">
          <Grid item xs={12} lg={6} md={8}>
            <Card classes={{ root: classes.cardRoot }}>
          
              <CardContent classes={{ root: classes.cardContent }}>
                <Box
                  color={theme.palette.gray[600]}
                  textAlign="center"
                  marginBottom="1.5rem"
                  marginTop=".5rem"
                  fontSize="1rem"
                >
                  <Box fontSize="80%" fontWeight="400" component="small">
                    Rempissez les champs suivants pour créer un compte
                  </Box>
                </Box>
                <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="text"
                    placeholder="Nom complet"
                    startAdornment={
                      <InputAdornment position="start">
                        <School />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="email"
                    placeholder="Email"
                    startAdornment={
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="password"
                    placeholder="Mot de passe"
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    }
                  />
                </FormControl>
               
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label={
                    <>
                      J'accepte les{" "}
                      <Box
                        color={theme.palette.primary.main}
                        component="a"
                        textDecoration="none"
                      >
                        Conditions d'utilisation
                      </Box>
                    </>
                  }
                  labelPlacement="end"
                  classes={{
                    root: classes.formControlLabelRoot,
                    label: classes.formControlLabelLabel,
                  }}
                />
                <Box
                  textAlign="center"
                  marginTop="1.5rem"
                  marginBottom="1.5rem"
                >
                  <Button
                    variant="contained"
                    classes={{ root: classes.buttonContainedInfo }}
                  >
                    Créer un compte
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Register;

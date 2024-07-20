import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import * as yup from "yup";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import componentStyles from "assets/theme/views/auth/login.js";
import componentStylesButtons from "assets/theme/components/button.js";
import { useFormik } from "formik";
import { signInRequest } from "api/request";
import { alertPending } from "components/alert";
import { alertClosed } from "components/alert";
import useAuth from "utils/hooks/useAuth";
import { alertNotification } from "components/alert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles(componentStyles);
const useStylesButtons = makeStyles(componentStylesButtons);

function Login() {
  const classes = { ...useStyles(), ...useStylesButtons() };
  const theme = useTheme();
  const auth = useAuth();
  const history = useHistory();



  
  const schema = yup.object().shape({
    email: yup.string().email("L'email est invalide").required("L'email est requis"),
    password: yup.string().required("Le mot de passe est requis"),
  });

  const formik = useFormik({
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      handleLogin(values);
    },
  });


  const handleLogin = async (values) => {
    try {
      alertPending("Connexion en cours", "Veuillez patienter...");
      const data = {
        username: values.email,
        password: values.password
      }
      alertClosed();

      const response = await signInRequest(data);
      const userData = response.data?.data;
      console.log("userData", userData);

      const user = {
        ...userData?.user,
        ...userData?.tokens,
      }
      if (userData) {
      auth.signin(user, 
          () => {
            history.push("/admin/dashboard");
          }
        );
      }


      console.log(response);

    } catch (error) {
      alertClosed();
      const { message } = error;
      if (message) {
        alertNotification("error", message);
      }
      else {
        alertNotification("error", "Une erreur s'est produite, veuillez réessayer");
      }
    }
  }



  return (
    <>  
      <AuthHeader
        title="Bienvenue!"
        description="Connectez-vous pour continuer"
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
          <Grid item xs={12} lg={5} md={7}>
            <Card classes={{ root: classes.cardRoot }}>
              {/* <CardHeader
                className={classes.cardHeader}
                title={
                  <Box
                    fontSize="80%"
                    fontWeight="400"
                    component="small"
                    color={theme.palette.gray[600]}
                  >
                    Sign in with
                  </Box>
                }
                titleTypographyProps={{
                  component: Box,
                  textAlign: "center",
                  marginBottom: "1rem!important",
                  marginTop: ".5rem!important",
                  fontSize: "1rem!important",
                }}
                subheader={
                  <Box textAlign="center">
                    <Box
                      component={Button}
                      variant="contained"
                      marginRight=".5rem!important"
                      classes={{ root: classes.buttonRoot }}
                    >
                      <Box component="span" marginRight="4px">
                        <Box
                          alt="..."
                          component="img"
                          width="20px"
                          className={classes.buttonImg}
                          src={
                            require("assets/img/icons/common/github.svg")
                              .default
                          }
                        ></Box>
                      </Box>
                      <Box component="span" marginLeft=".75rem">
                        Github
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      classes={{ root: classes.buttonRoot }}
                    >
                      <Box component="span" marginRight="4px">
                        <Box
                          alt="..."
                          component="img"
                          width="20px"
                          className={classes.buttonImg}
                          src={
                            require("assets/img/icons/common/google.svg")
                              .default
                          }
                        ></Box>
                      </Box>
                      <Box component="span" marginLeft=".75rem">
                        Google
                      </Box>
                    </Button>
                  </Box>
                }
              ></CardHeader> */}
              <CardContent classes={{ root: classes.cardContent }}>
                <div className="row justify-content-center">
              <Box
                alt="..."
                height="50px"
                component="img"
                marginRight="1rem"

                className={classes.headerImg}
                src={require("assets/img/logo/logo-nom-2.png").default}
              />
              </div>
                <Box
                  color={theme.palette.gray[600]}
                  textAlign="center"
                  marginBottom="1rem"
                  marginTop=".5rem"
                  fontSize="1rem"
                >
                  <Box fontSize="80%" fontWeight="400" component="small">
                    Rentrez vos identifiants
                  </Box>
                </Box>
                <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
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
                  marginBottom="1rem!important"
                >
                  <FilledInput
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}

                    placeholder="Mot de passe"
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    }
                  />
                </FormControl>
               
                <Box
                  textAlign="center"
                  marginTop="1.5rem"
                  marginBottom="1.5rem"
                >
                  <Button
                    variant="contained"

                    onClick={() => formik.handleSubmit()}

                    classes={{ root: classes.buttonContainedInfo }}
                  >
                    Connexion
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Grid container component={Box} marginTop="1rem">
              <Grid item xs={6} component={Box} textAlign="left">
                {/* <a
                  href="#admui"
                  onClick={(e) => e.preventDefault()}
                  className={classes.footerLinks}
                >
                  Forgot password
                </a> */}
              </Grid>
              <Grid item xs={6} component={Box} textAlign="right">
                <a
                  href="#admui"
                  onClick={(e) => e.preventDefault()}
                  className={classes.footerLinks}
                >
                  Créer un compte
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Login;

import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import Flight from "@material-ui/icons/Flight";
// import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
// import CardProfile from "components/Cards/Profile/CardProfile.js";
// import CardStatsGradient from "components/Cards/Widgets/CardStatsGradient.js";
// import CardProgressTrack from "components/Cards/Dashboard/CardProgressTrack.js";

import componentStyles from "assets/theme/views/admin/profile.js";
import componentStylesCardImg from "assets/theme/components/card-img.js";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import { alertPending } from "components/alert";
import { getUserRequest } from "api/request";
import { alertClosed } from "components/alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { gate } from "utils/helpers";
import { updateUserRequest } from "api/request";
import { formatPropValueToString } from "api/client";
import { alertNotification } from "components/alert";
// import { updateUserRequest } from "api/request";
// import { alertNotification } from "components/alert";
const useStyles = makeStyles(componentStyles);
const useStylesCardImg = makeStyles(componentStylesCardImg);

function Profile() {
  const classes = { ...useStyles(), ...useStylesCardImg() };
  const theme = useTheme();
  const [user, setUser] = React.useState(null);
  const [errorForm, setErrorForm] = React.useState({});

  const [company, setCompany] = React.useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    logo: '',
    description: '',
    location: '',
    city: '',
    country: ''
  });


  const location = useLocation();
  const id = location.state?.id;
  const params = useParams();


  useEffect(() => {
    if (id) fetchUser();

  }, []);


  const fetchUser = async () => {
    try {
      alertPending();
      const response = await getUserRequest(id);
      alertClosed();
      console.log(response.data);
      const userData = response.data?.data;


      setUser(userData);

      setCompany({
        name: userData?.companyName || '',
        address: userData?.companyAddress || '',
        phone: userData?.companyPhone || '',
        email: userData?.companyEmail || '',
        website: userData?.companyWebsite || '',
        logo: userData?.companyLogo || '',
        description: userData?.companyDescription || '',
        location: userData?.companyLocation || '',
        city: userData?.companyCity || '',
        country: userData?.companyCountry || ''
      });
    }
    catch (error) {
      console.log(error);
    } finally {
      alertClosed();
    }
  }
  const schema = yup.object().shape({
    firstName: yup.string().required("Le prénom est requis"),
    lastName: yup.string().required("Le nom est requis"),
    email: yup.string().email("L'email est invalide").required("L'email est requis"),
    phone: yup.string().required("Le téléphone est requis"),
  });
  const formik = useFormik({
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,

      // company
      companyName: company.name,
      companyAddress: company.address,
      companyPhone: company.phone,
      companyEmail: company.email,
      companyWebsite: company.website,
      companyDescription: company.description,
      companyCity: company.city,
      companyCountry: company.country

    },
    onSubmit: (values) => {
      handleUpdate(values);

    }
  });


  const handleUpdate = async (values) => {
    try {
      alertPending();
      const data = {
        ...values,
      }
  const response =   await updateUserRequest(id, data);
      alertClosed();
       alertNotification("success", response.data?.message);
    }
    catch (error) {
      alertClosed();
      const { message } = error;
      if (message) {
        alertNotification("error", message);
      }
      else {
        const errorForm = formatPropValueToString(error?.response?.data?.errors, {});
        setErrorForm(errorForm);
      }
    }
  }


  




  return (
    <>
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-4.5rem"
        classes={{ root: classes.containerRoot }}
        style={{ marginTop: "3.5rem" }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={12}
            component={Box}
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
          >
            {/* <Grid container>
              <Grid item xs={12} lg={6}>
                <CardStatsGradient
                  subtitle="Total Traffic"
                  title="350,897"
                  icon={TrendingUp}
                  color="bgGradientSuccess"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.white.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box
                        component="span"
                        whiteSpace="nowrap"
                        color={theme.palette.gray[400]}
                      >
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CardStatsGradient
                  subtitle="Performance"
                  title="49,65%"
                  icon={Flight}
                  color="bgGradientError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.white.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box
                        component="span"
                        whiteSpace="nowrap"
                        color={theme.palette.gray[400]}
                      >
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid> */}
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        INFORMATIONS DU COMPTE
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >

                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box
                  component={Typography}
                  variant="h6"
                  color={theme.palette.gray[600] + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Informations personnelles
                </Box>
                <div>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>
                          Prénoms
                        </FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"


                        >
                          <TextField
                            autoComplete="off"
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                          />
                          {errorForm.firstName && <span className="text-danger">{errorForm.firstName}</span>}
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Nom</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <TextField
                            autoComplete="off"
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                          />
                          {errorForm.lastName && <span className="text-danger">{errorForm.lastName}</span>}
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <TextField
                            autoComplete="off"
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                          />
                          {errorForm.email && <span className="text-danger">{errorForm.email}</span>}

                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Phone</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <TextField
                            autoComplete="off"
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                          />
                          {errorForm.phone && <span className="text-danger">{errorForm.phone}</span>}
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>

                </div>
                {gate(user).isExpert && (
                  <>
                    <Box component={Divider} marginBottom="1.5rem!important" marginTop="1.5rem!important" />
                    <Box
                      component={Typography}
                      variant="h6"
                      color={theme.palette.gray[600] + "!important"}
                      paddingTop=".25rem"
                      paddingBottom=".25rem"
                      fontSize=".75rem!important"
                      letterSpacing=".04em"
                      marginBottom="1.5rem!important"
                      classes={{ root: classes.typographyRootH6 }}
                    >
                      Informations du cabinet de conseil
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Nom du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyName"
                              value={formik.values.companyName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Adresse du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyAddress"
                              value={formik.values.companyAddress}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyAddress && Boolean(formik.errors.companyAddress)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Téléphone du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyPhone"
                              value={formik.values.companyPhone}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyPhone && Boolean(formik.errors.companyPhone)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Email du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="email"
                              name="companyEmail"
                              value={formik.values.companyEmail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Site web du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyWebsite"
                              value={formik.values.companyWebsite}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyWebsite && Boolean(formik.errors.companyWebsite)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormLabel>
                            Description du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyDescription"
                              value={formik.values.companyDescription}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyDescription && Boolean(formik.errors.companyDescription)}
                              multiline
                              rows={4}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Ville du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyCity"
                              value={formik.values.companyCity}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyCity && Boolean(formik.errors.companyCity)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <FormGroup>
                          <FormLabel>
                            Pays du cabinet
                          </FormLabel>
                          <FormControl variant="filled" component={Box} width="100%" marginBottom="1rem!important">
                            <TextField
                              autoComplete="off"
                              type="text"
                              name="companyCountry"
                              value={formik.values.companyCountry}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.companyCountry && Boolean(formik.errors.companyCountry)}
                            />
                          </FormControl>
                        </FormGroup>
                      </Grid>
                    </Grid>

                  </>
                )}
             <Grid
            item
            xs={12}
            xl={12}
            component={Box}
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + " " + classes.order1 }}
          >
            <Box
              display="flex"
              justifyContent="flex-end"
              marginTop="1rem"
              marginBottom="1rem"
            >
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={formik.handleSubmit}
                >
                  Enregistrer
                </button>
              </div>

            
            </Box>
            </Grid>
              </CardContent>
            </Card>
          </Grid>
         

        </Grid>
      </Container>
    </>
  );
}

export default Profile;

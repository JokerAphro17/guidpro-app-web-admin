import { Card, CardContent, CardHeader,Button, FormGroup,Box, FormLabel, Grid, OutlinedInput, makeStyles, FormHelperText } from "@material-ui/core"
import { createArticleRequest } from "api/request";
import componentStyles from "assets/theme/views";
import { alertNotification } from "components/alert";
import { alertClosed } from "components/alert";
import { alertPending } from "components/alert";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
const useStyles = makeStyles(componentStyles);


const ArticleForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const [formError, setFormError] = React.useState({
        title: "",
        budget: "",
        description: "",
    });
    
    const validationSchema = yup.object({
        title: yup.string().required("Le titre est obligatoire"),
        budget: yup.number().required("Le budget est obligatoire, il peut être  0"),
        description: yup.string().required("La description est obligatoire"),
});

const formik = useFormik({
    initialValues: {
        title: "",
        budget: "",
        description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        handleSubmit(values);
    }
});


const handleSubmit = async (values) => {
    try {
        setFormError({
            title: "",
            budget: "",
            description: "",
        });
        alertPending();
        const response = await createArticleRequest(values);
        alertClosed();
        alertNotification("success", "Article créé avec succès");
        // wait for 2 seconds
        setTimeout(() => {
        history.push("/admin/articles");
        }
        , 2000);
    
    } catch (error) {
        console.log(error);
        alertClosed();
        const { message} = error;
        if (message) {
            alertNotification("error", message);
          }
          else {
            alertNotification("error", "Une erreur s'est produite, veuillez réessayer");
          }
          if(typeof error?.data =="object"){
            setFormError(error.data);
          }

    }
}





    return (
       
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Informations generales"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          <CardContent>
            <Grid container>
              <Grid item xs={12} md={4}>
                <FormGroup>
                  <FormLabel>Titre de l'article</FormLabel>
                  <OutlinedInput
                    fullWidth
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formError.title || formik.errors.title}
                    type="text"
                    placeholder="Ex: Elevage en milieu rural"
                  />
                    {formError.title || formik.errors.title ? (
                    <FormHelperText error>
                      {formError.title || formik.errors.title}
                    </FormHelperText>
                    ) : null}
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormGroup>
                  <FormLabel>Bugdet minimal estimé</FormLabel>
                  <OutlinedInput
                    fullWidth
                    name="budget"
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                    error={formError.budget || formik.errors.budget}
                    
                    type="number"
                    placeholder="Ex: 1000000"
                  />
                  {formError.budget || formik.errors.budget ? (
                    <FormHelperText error>
                      {formError.budget || formik.errors.budget}
                    </FormHelperText>
                  ) : null}
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={4}> 
                <FormGroup>
                  <FormLabel>Image de couverture</FormLabel>
                  <OutlinedInput
                    fullWidth
                    type="file"
                   
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <FormGroup>
                  <FormLabel>Description</FormLabel>
                  <OutlinedInput
                    fullWidth
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    error={formError.description || formik.errors.description}
                    multiline
                    rows={3}
                    type="textarea"
                    placeholder="Petite description de l'article, 255 caractères max"
                  />
                    {formError.description || formik.errors.description ? (
                        <FormHelperText error>
                        {formError.description || formik.errors.description}
                        </FormHelperText>
                    ) : null}
                </FormGroup>
              </Grid>
            
            
            </Grid>

            <Grid container>
               
                <Grid item xs={12} md={2}>
                <Button
                  color="primary"
                  variant="outlined"
                  fullWidth
                    onClick={formik.handleSubmit}
                >
                    Enregistrer
                </Button>

                
                </Grid>
                </Grid>
           
          </CardContent>
        </Card>
    )
}

export default ArticleForm
import { Box, Card, CardContent, CardHeader, FormLabel, FormGroup, OutlinedInput, Grid, Button, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addSectionRequest } from "api/request";
import { alertNotification } from "components/alert";
import { alertClosed } from "components/alert";
import { alertPending } from "components/alert";
import { useFormik } from "formik";
import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const { default: componentStyles } = require("assets/theme/views")

const useStyles = makeStyles(componentStyles);



const SectionForm = ({ article, section, handleAdd }) => {

    const classes = useStyles();
              alertClosed();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            title: section?.title || "",
            description: section?.description || "",
            content: section?.content || "",
        },
        onSubmit: (values) => {
            onSubmit(values);
        }
    });


    const onSubmit = async (values) => {
     alertPending();
     try {
           const response = await addSectionRequest(article.id, values);
                alertNotification("success", "La section a été ajoutée avec succès");
               
                handleAdd(values);

            }
            catch (error) {
                alertClosed();
                alertNotification("error", "Une erreur s'est produite lors de l'ajout de la section");
            }
            alertClosed();

        }

    
   

    return (
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Nouvelle section"
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
                <FormLabel>Titre de la section</FormLabel>
                <OutlinedInput
                  fullWidth
                  type="text"
                  name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    placeholder="Ex: Introduction"
                />
                {formik.touched.title && formik.errors.title ? (
                    <FormHelperText error>{formik.errors.title}</FormHelperText>
                ) : null}

              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormGroup>
                <FormLabel>Description</FormLabel>
                <OutlinedInput
                  fullWidth
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                  multiline
                  rows={3}
                  type="textarea"
                  placeholder="Petite description de l'article, 255 caractères max"
                />
                {formik.touched.description && formik.errors.description ? (
                    <FormHelperText error>{formik.errors.description}</FormHelperText>
                ) : null}

              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <FormGroup>
                <FormLabel>Contenu</FormLabel>
                <ReactQuill
                  theme="snow"
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["clean"],
                    ],
                  }}
                  placeholder="Ecrivez ici..."
                    value={formik.values.content}
                    onChange={(value) => formik.setFieldValue("content", value)}
                />
                {formik.touched.content && formik.errors.content ? (
                    <FormHelperText error>{formik.errors.content}</FormHelperText>
                ) : null}
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={2}>
              <Button color="primary" variant="outlined" fullWidth onClick={formik.handleSubmit}>
                Enregistrer
              </Button>
            </Grid>
          </Grid>
          </CardContent>
        </Card>

    )
}



export default SectionForm
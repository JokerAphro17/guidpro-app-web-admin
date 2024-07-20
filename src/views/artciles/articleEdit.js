import React, { useState, useEffect } from 'react';
import { Box, Card, Container, makeStyles, Grid, Typography } from "@material-ui/core";
import componentStyles from "assets/theme/views";
import SimpleHeader from "components/Headers/SimpleHeader";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ArticleForm from "./ArticleForm";
import CardStats from "components/Cards/Dashboard/CardStats";
import * as Icon from "@material-ui/icons";
import CoverUpload from "views/admin/Components/CoverUpload";
import { alertPending } from 'components/alert';
import { uploadCoverRequest } from 'api/request';
import { alertClosed } from 'components/alert';
import { alertNotification } from 'components/alert';

const useStyles = makeStyles(componentStyles);

const stats = [
    { name: "Vues", value: 1200, icon: Icon.RemoveRedEyeRounded, color: "bgError" },
    { name: "Likes", value: 300, icon: Icon.ThumbUp, color: "bgWarning" },
    { name: "Commentaires", value: 45, icon: Icon.Comment, color: "bgInfo" },
    { name: "Savegardes", value: 100, icon: Icon.Bookmark, color: "bgSuccess" },
];

const ArticleEdit = () => {
    const history = useHistory();
    const location = useLocation();
    const { articleId } = location.state;
    const [coverFile, setCoverFile] = useState(null);
    const [coverUrl, setCoverUrl] = useState(null);

    const handleCoverChange = (file) => {
        setCoverFile(file);
    };

    const back = () => {
        history.push("/admin/articles");
    }


    console.log("file", coverFile);

    const handleUpdload = async (file) => {
        alertPending("Chargement en cours");
        try {
            const formData = new FormData();
            formData.append("file", file);

            console.log("formData ----", formData.get("file"));

            

            const response = await uploadCoverRequest(articleId, formData);
            setCoverUrl(response.data?.data);
            alertClosed();
            alertNotification("success", response.data?.message);
        }
        catch (error) {
            alertClosed();
            alertNotification("error", error?.message);
            // upload file
        }
    }

    useEffect(() => {
        if (coverFile) {
            console.log("file", coverFile);
            handleUpdload(coverFile);
        }
    }
        , [coverFile]);







    const classes = useStyles();
    return (
        <>
            <SimpleHeader section="Articles" subsection="" onRightButtonClick={back} rightButton="Retour" />

            <Container
                maxWidth={false}
                component={Box}
                marginTop="-4.5rem"
                classes={{ root: classes.containerRoot }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box maxHeight="100%">
                            <CoverUpload onCoverChange={handleCoverChange} coverUrl={coverUrl} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Grid container spacing={2}>
                            {stats.map((stat, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card classes={{ root: classes.cardRoot }}>
                                        <CardStats
                                            subtitle={stat.name}
                                            title={stat.value}
                                            color={stat.color}
                                            icon={stat.icon}
                                        />
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box
                    component={Card}
                    display="flex"
                    flexDirection="column"
                    padding="1rem"
                    marginTop="2rem"
                    classes={{ root: classes.cardRoot }}
                >
                    <Typography variant="h4">Statistiques</Typography>
                </Box>

                <ArticleForm articleId={articleId} setCoverUrl={setCoverUrl} />
            </Container>
        </>
    );
}

export default ArticleEdit;

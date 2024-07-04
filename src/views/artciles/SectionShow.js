
import { Card, CardContent, CardHeader,Box,  makeStyles} from "@material-ui/core"

import componentStyles from "assets/theme/views";

import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles(componentStyles);

const SectionShow = ({ section }) => {
    const classes = useStyles();
    
    
    return (
        <>
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-4.5rem"
                classes={{ root: classes.containerRoot }}
            >
                <Card classes={{ root: classes.cardRoot }}>
                    <CardHeader
                        className={classes.cardHeader}
                        title={
                            <Box
                                component="span"
                                color={themeColors.white.main}
                                className={classes.cardTitle}
                            >
                                {section.title}
                            </Box>
                        }
                        subheader={
                            <Box
                                component="span"
                                color={themeColors.gray[400]}
                                className={classes.cardSubTitle}
                            >
                                {section.description}
                            </Box>
                        }
                    ></CardHeader>
                    <CardContent>
                        <Box
                            component="span"
                            color={themeColors.gray[400]}
                            className={classes.cardSubTitle}
                        >
                            {section.content}
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}
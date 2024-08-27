import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components

import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import Home from "@material-ui/icons/Home";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/Dashboard/CardStats.js";

import componentStyles from "assets/theme/components/headers/stats-header.js";

const useStyles = makeStyles(componentStyles);

const StatsHeader = ({ section, subsection }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid
            container
            component={Box}
            alignItems="center"
            paddingTop="1.5rem"
            paddingBottom="1.5rem"
          >
            <Grid item xs={7} lg={6} className={classes.gridItem}>
              <Typography
                variant="h2"
                component="h6"
                className={clsx(
                  classes.displayInlineBlock,
                  classes.mb0,
                  classes.textWhite
                )}
              >
                {section}
              </Typography>
              <Breadcrumbs
                separator="-"
                aria-label="breadcrumb"
                classes={{
                  root: classes.breadcrumbRoot,
                  li: classes.breadcrumbLi,
                  ol: classes.breadcrumbOl,
                  separator: classes.breadcrumbSeparator,
                }}
              >
                <Link
                  color="inherit"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  <Box
                    component={Home}
                    width="1.25rem!important"
                    height="1.25rem!important"
                    position="relative"
                  />
                </Link>
                <Link
                  color="inherit"
                  href="/getting-started/installation/"
                  onClick={(e) => e.preventDefault()}
                >
                  {subsection}
                </Link>
                <Typography
                  component="span"
                  className={classes.breadcrumbActive}
                >
                  {section}
                </Typography>
              </Breadcrumbs>
            </Grid>
            
          </Grid>
          <Grid container>
            <Grid item xl={3} lg={6} xs={12}>
              <CardStats
                subtitle="Conseils publiés"
                title="123"
                icon={InsertChartOutlined}
                color="bgError"
                footer={
                  <>
                    
                  </>
                }
              />
            </Grid>
            <Grid item xl={3} lg={6} xs={12}>
              <CardStats
                subtitle="Entrepreuneurs"
                title="243"
                icon={PieChart}
                color="bgWarning"
                footer={
                  <>
                    
                  </>
                }
              />
            </Grid>
            <Grid item xl={3} lg={6} xs={12}>
              <CardStats
                subtitle="Conseillers"
                title="87"
                icon={GroupAdd}
                color="bgSuccess"
                footer={
                  <>
                    
                  </>
                }
              />
            </Grid>
            <Grid item xl={3} lg={6} xs={12}>
              <CardStats
                subtitle="Taux de satisfaction"
                title="81%"
                icon={EmojiEvents}
                color="bgPrimary"
                footer={
                  <>
                   
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

StatsHeader.propTypes = {
  section: PropTypes.string,
  subsection: PropTypes.string,
};

export default StatsHeader;

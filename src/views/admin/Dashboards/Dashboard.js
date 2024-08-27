import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components

// core components
import StatsHeader from "components/Headers/StatsHeader.js";
import CardSalesValue from "components/Cards/Dashboard/CardSalesValue.js";
import CardTotalOrders from "components/Cards/Charts/CardTotalOrders.js";


import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck.js";

const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);

function Dashboard() {
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  return (
    <>
      <StatsHeader section="Default" subsection="Dashboards" />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid item xs={12} xl={8} classes={{ root: classes.gridItemRoot }}>
            <CardSalesValue />
          </Grid>
          <Grid item xs={12} xl={4}>
            <CardTotalOrders />
          </Grid>
        </Grid>
       
      </Container>
    </>
  );
}

export default Dashboard;

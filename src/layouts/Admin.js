import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// @material-ui/icons components

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminNavbarAlternative from "components/Navbars/AdminNavbarAlternative.js";
// import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import componentStyles from "assets/theme/layouts/admin.js";
import NewArticle from "views/artciles/NewArticle";

const useStyles = makeStyles(componentStyles);

const Admin = () => {
  const classes = useStyles();
  const location = useLocation();
  const [sidebarOpenResponsive, setSidebarOpenResponsive] = React.useState(
    false
  );

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
             <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
         

        );
      } else {
        return null;
      }
    });
  };

  const getRoutesForSidebar = (routes) => {
    return routes.map((route) => {
      if (route.collapse) {
        // Recursively process nested views and remove null values
        route.views = getRoutesForSidebar(route.views).filter(view => view !== null);
        return route;
      }
      if (route.name && route.layout === "/admin") {
        return route;
      } else {
        return null;
      }
    }).filter(route => route !== null); // Filter out null values from the top-level array
  };
  
  // Example usage
  
  


  return (
    <>
      <Box display="flex">
        <Sidebar
          routes={getRoutesForSidebar(routes)}
          openResponsive={sidebarOpenResponsive}
          closeSidebarResponsive={() => setSidebarOpenResponsive(false)}
          logo={{
            innerLink: "/index",
            imgSrc: require("../assets/img/brand/argon-react.png").default,
            imgAlt: "...",
          }}
        />
        <Box position="relative" flex="1" className={classes.mainContent}>
          {location.pathname === "/admin/alternative-dashboard" ? (
            <AdminNavbarAlternative
              openSidebarResponsive={() => setSidebarOpenResponsive(true)}
            />
          ) : (
            <AdminNavbar
              openSidebarResponsive={() => setSidebarOpenResponsive(true)}
            />
          )}
          <Switch>
            {getRoutes(routes)}
            <Route path="/admin/article/new" component={NewArticle} />
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            {/* <AdminFooter /> */}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Admin;

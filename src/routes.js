// core components
// admin pages
// // // // // admin dashboards
import Dashboard from "views/admin/Dashboards/Dashboard.js";
// // // // // admin examples

import House from "@material-ui/icons/House";

import PermMedia from "@material-ui/icons/PermMedia";
import { Group } from "@material-ui/icons";
import ArticleList from "views/artciles/ArticleList";
import NewArticle from "views/artciles/NewArticle";
import SectionEdit from "views/artciles/SectionEdit";
import AdminList from "views/users/Admin";
import Login from "views/auth/Login";
import Register from "views/auth/Register";
import AgriList from "views/users/Agricu";
import ExpertList from "views/users/Espert";


    





var routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: House,
    iconColor: "Primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Conseils",
    icon: PermMedia,
    iconColor: "Primary",
    state: "articlesCollapse",
    views: [
      {
        path: "/articles",
        name: "Listes",
        miniName: "A",
        component: ArticleList,
        layout: "/admin",
      },  
      {
        path: "/article/new",
        layout: "/admin",
        component: NewArticle,
      },
      {
        path: "/section-edit",
        layout: "/admin",
        component: SectionEdit,

      },
      {
        path: "/login",
      
        component: Login,
        layout: "/auth",
      },
      {
        path: "/register",
      
        component: Register,
        layout: "/auth",
      },

    ],
  },
  {
    collapse: true,
    name: "Utilisateurs",
    icon: Group,
    iconColor: "Warning",
    state: "examplesCollapse",
    views: [
      {
        path: "/conseillers",
        name: "Conseillers",
        miniName: "P",
        component: ExpertList,
        layout: "/admin",
      },
      {
        path: "/agriculteurs",
        name: "Agriculteurs",
        miniName: "P",
        component: AgriList,
        layout: "/admin",
      },
      {
        path: "/admin-users",
        name: "Administrateurs",
        miniName: "P",
        component: AdminList,
        layout: "/admin",
      },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: Dns,
  //   iconColor: "Info",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       miniName: "B",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/cards",
  //       name: "Cards",
  //       miniName: "C",
  //       component: Cards,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid",
  //       name: "Grid",
  //       miniName: "G",
  //       component: Grid,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       miniName: "N",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       miniName: "I",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       miniName: "T",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //     {
  //       collapse: true,
  //       name: "Multi Level",
  //       miniName: "M",
  //       state: "multiCollapse",
  //       multiStates: ["componentsCollapse"],
  //       views: [
  //         {
  //           path: "#pablo",
  //           name: "Third level menu",
  //           component: () => {},
  //           miniName: "T",
  //           layout: "/",
  //         },
  //         {
  //           path: "#pablo",
  //           name: "Just another link",
  //           miniName: "J",
  //           component: () => {},
  //           layout: "/",
  //         },
  //         {
  //           path: "#pablo",
  //           name: "One last link",
  //           miniName: "O",
  //           component: () => {},
  //           layout: "/",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: ListAlt,
  //   iconColor: "ErrorLight",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/elements",
  //       name: "Elements",
  //       miniName: "E",
  //       component: Elements,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/components",
  //       name: "Components",
  //       miniName: "C",
  //       component: Components,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation",
  //       name: "Validation",
  //       miniName: "V",
  //       component: Validation,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: Toc,
  //   iconColor: "Default",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/tables",
  //       name: "Tables",
  //       miniName: "T",
  //       component: Tables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sortable",
  //       name: "Sortable",
  //       miniName: "S",
  //       component: Sortable,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-bs-table",
  //       name: "React BS Table",
  //       miniName: "R",
  //       component: ReactBSTable,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: Map,
  //   iconColor: "Primary",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/maps",
  //       name: "Google",
  //       miniName: "G",
  //       component: Google,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector",
  //       name: "Vector",
  //       miniName: "V",
  //       component: Vector,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: WidgetsIcon,
  //   iconColor: "Success",
  //   component: Widgets,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: PieChart,
  //   iconColor: "Info",
  //   component: Charts,
  //   layout: "/admin",
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: Event,
  //   iconColor: "Error",
  //   component: Calendar,
  //   layout: "/admin",
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: "Documentation",
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Getting started",
  //   icon: FlashOn,
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Foundation",
  //   icon: Palette,
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Components",
  //   icon: Dns,
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/google-maps/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Plugins",
  //   icon: BubbleChart,
  // },
];
export default routes;

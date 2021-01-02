import { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as FullCycle } from "./../assets/full-cycle.svg";
import { ReactComponent as CustomApp } from "./../assets/custom-app.svg";
import { ReactComponent as ReadyToUse } from "./../assets/readyToUse.svg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Team from "./../assets/ball@2x.cae3730.png";
import Tech from "./../assets/gear️@2x.815757c.png";

const useStyles = makeStyles((theme) => ({
  ///////////////////////////////// main
  homeMain: {
    minHeight: 630,
    height: "calc(100vh - 100px)",
    padding: "143px 0 40px",
    overflow: "hidden",
    maxWidth: "100vw",
  },
  container: {
    width: "100%",
    maxWidth: 1152,
    padding: "0 16px",
    boxSizing: "border-box",
    margin: "0 auto",
    height: "100%",
  },
  MainRow: {
    display: "flex",
    position: "relative",
    height: "100%",
  },
  MainCol: {
    position: "relative",
    zIndex: 5,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
    alignItems: "flex-end",
  },
  MainImage: {
    position: "absolute",
    width: 1241,
    height: 900,
    maxWidth: "120%",
    top: 0,
    right: 0,
    zIndex: 4,
    transform: "translateY(-4.15%) translateX(36.23%)",
  },

  ///////////////////////////////// second
  homeSecond: {
    minHeight: 803,
    height: 803,
    padding: "220px 0 40px",
    overflow: "hidden",
    backgroundImage: "linear-gradient(180deg,#f8f9fc,#fff 30%)",
  },

  SecondRow: {
    display: "flex",
    justifyContent: "flex-end",
  },
  SecondCol: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  SecondImage: {
    position: "absolute",
    width: 1200,
    height: 900,
    maxWidth: "120%",
    top: 0,
    left: 0,
    zIndex: 4,
    transform: "translateX(-75.8%) translateY(-15%)",
  },

  ///////////////////////////////// third

  homeThird: {
    minHeight: 803,
    height: 803,
    padding: "140px 0 40px",
    overflow: "hidden",
    backgroundImage: "linear-gradient(180deg,#f8fafc,#fff 30%)",
  },
  ThirdRow: {
    display: "flex",
    position: "relative",
  },
  ThirdCol: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "flex-end",
  },
  ThirdImage: {
    position: "absolute",
    width: 1490,
    height: 1000,
    //top: 0,
    left: 0,
    zIndex: 4,
    transform: "translateY(-10.5%) translateX(8.8%)",
  },
  ///////////////////////////////// third
  featureTech: {
    display: "flex",
    flexDirection: "column",
    padding: "120px 0 125px",
    minWidth: "50%",
    maxWidth: " 50%",
    textDecoration: "none",
    cursor: "pointer",
    transition: ".2s",
    paddingLeft: "16px",
    paddingRight: "200px",
    backgroundColor: "#f6f8fe",

    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  featureTeam: {
    display: "flex",
    flexDirection: "column",
    padding: "120px 0 125px",
    minWidth: "50%",
    maxWidth: " 50%",
    textDecoration: "none",
    cursor: "pointer",
    transition: ".2s",
    paddingLeft: "16px",
    paddingRight: "350px",
    backgroundColor: "#fafbfe",

    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  sharedContacts: {
    padding: "120px 0",
    backgroundColor: "#fff",
    transition: ".2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f7f8fc",
    },
  },

  //////////////////////////////////////////////homeSlider
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>

    </Fragment>
  );
};

export default HomePage;

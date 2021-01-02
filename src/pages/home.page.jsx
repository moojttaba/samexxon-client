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

}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      home
    </Fragment>
  );
};

export default HomePage;

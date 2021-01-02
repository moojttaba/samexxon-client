import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ///////////////////////////////// main
  homeMain: {
    minHeight: 630,
    height: "calc(100vh - 100px)",
    padding: "143px 0 40px",
    overflow: "hidden",
    maxWidth: "100vw",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return <Fragment>home</Fragment>;
};

export default HomePage;

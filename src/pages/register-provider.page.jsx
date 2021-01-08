import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  ///////////////////////////////// main
  homeMain: {
    height: "100vh",
    maxWidth: "1152px",
  },
}));

const RegisterProvider = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.homeMain}>register provider</Container>
    </Fragment>
  );
};

export default RegisterProvider;

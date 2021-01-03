import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AboutUsContainer from "./../containers/about-us.container";

const useStyles = makeStyles((theme) => ({
  homeMain: {},
}));

const AbooutUsPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.homeMain}>
        <AboutUsContainer />
      </Container>
    </Fragment>
  );
};

export default AbooutUsPage;

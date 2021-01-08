import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ImageGridList from "../containers/project-list.container";

const useStyles = makeStyles((theme) => ({
  ///////////////////////////////// main
  homeMain: {
    maxWidth: "1152px",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.homeMain}>
        <ImageGridList />
      </Container>
    </Fragment>
  );
};

export default HomePage;

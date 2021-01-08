import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactList from "./../containers/contact-list.container";

const useStyles = makeStyles((theme) => ({
  homeMain: {
    maxWidth: "1152px",
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.homeMain}>
        <ContactList />
      </Container>
    </Fragment>
  );
};

export default ContactPage;

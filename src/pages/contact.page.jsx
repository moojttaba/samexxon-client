import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactList from "./../containers/contact-list.container";

const useStyles = makeStyles((theme) => ({
  homeMain: {

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

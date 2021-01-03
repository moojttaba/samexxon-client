import { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactList from "./../containers/contact-list.container";

const useStyles = makeStyles((theme) => ({
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
}));

const ContactPage = () => {
  //const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <ContactList />
      </Container>
    </Fragment>
  );
};

export default ContactPage;

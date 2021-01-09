import { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProviderRegisterForm from "./../components/form/provider-register.form";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  Container: {
    [theme.breakpoints.up("md")]: {
      marginRight: 240,
    },
  },
}));

const ProviderRegisterPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Box className={classes.Container}>
        <Container maxWidth="sm" >
          <Box style={{ height: "85vh", maxWidth: 600, marginTop: 100 }}>
            <ProviderRegisterForm />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ProviderRegisterPage;

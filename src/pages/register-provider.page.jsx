import { Fragment } from "react";

//import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import RegisterProviderForm from "../containers/register-provider-from.container";

// const useStyles = makeStyles((theme) => ({
//   ///////////////////////////////// main
//   homeMain: {
//     height: "100vh",
//     maxWidth: "1152px",
//   },
// }));

const RegisterProvider = () => {
  // const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box style={{ height: "85vh", maxWidth: 500, marginTop: 50 }}>
          <RegisterProviderForm/>
        </Box>
      </Container>
    </Fragment>
  );
};

export default RegisterProvider;

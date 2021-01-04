import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import SignIn from "./../containers/sign-in.container";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box style={{ height: "85vh", maxWidth: 500, marginTop: 200 }}>
          <SignIn />
        </Box>
      </Container>
    </React.Fragment>
  );
}

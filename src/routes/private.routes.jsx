import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./../redux/user/user.selectors";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log(`PrivateRoute: ${isAuthenticated}`);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

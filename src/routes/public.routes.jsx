import { Route, Redirect } from "react-router-dom";
import { selectCurrentUser } from "./../redux/user/user.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const PublicRoute = ({ isAuthenticated, component: Component, restricted, ...rest }) => {
  console.log(`PublicRoute: ${isAuthenticated}`);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);

import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";

import PrivateRoute from "./routes/private.routes";
import PublicRoute from "./routes/public.routes";

import Header from "./layouts/header.layouts";
import ProviderHeader from "./layouts/provider-header.layouts";
import Footer from "./layouts/footer.layouts";
// import AdminHeader from "./layouts/admin-header.layouts";

import HomePage from "./pages/home.page";
import ContactPage from "./pages/contact.page";
import AboutUsPage from "./pages/about-us.page";
import SignInPage from "./pages/sign-in.page";
import RegisterProvider from "./pages/register-provider.page";

import DashboardPage from "./pages/dashboard.page";

const App = ({ isAuthenticated }) => {
  return (
    <ThemeProvider theme={theme}>
      {isAuthenticated ? <ProviderHeader /> : <Header />}

      <Switch>
        <PublicRoute restricted={true} component={HomePage} path="/" exact />
        <PublicRoute
          restricted={true}
          component={AboutUsPage}
          path="/about"
          exact
        />
        <PublicRoute
          restricted={true}
          component={ContactPage}
          path="/contact"
          exact
        />
        <PublicRoute
          restricted={true}
          component={SignInPage}
          path="/signin"
          exact
        />
        <PublicRoute
          restricted={true}
          component={RegisterProvider}
          path="/register-provider"
          exact
        />

        <PrivateRoute component={DashboardPage} path="/dashboard" exact />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

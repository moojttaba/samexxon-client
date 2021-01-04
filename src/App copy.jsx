//////////////////////////////////////////// React - Redux
import { lazy, Suspense, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserStatus } from "./redux/user/user.selectors";
//////////////////////////////////////////// styles
import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
//////////////////////////////////////////// Route
import { Route, Switch } from "react-router-dom";
//////////////////////////////////////////// Layouts
import Header from "./layouts/header.layouts";
import AdminHeader from "./layouts/admin-header.layouts";
import Footer from "./layouts/footer.layouts";
//////////////////////////////////////////// COMPONENTS
import Spinner from "./components/spinner.component";
//////////////////////////////////////////// PAGES
import HomePage from "./pages/home.page";
import ContactPage from "./pages/contact.page";
import AboutUsPage from "./pages/about-us.page";
import SignInPage from "./pages/sign-in.page";
import ProfilePage from "./pages/profile.page";
import AdminHomePage from "./pages/dashboard.page";

const App = ({ isAuthenticated }) => {
  return (
    <ThemeProvider theme={theme}>
   
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
          <Footer />
   
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUserStatus,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);



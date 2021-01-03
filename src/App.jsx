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

const HomePage = lazy(() => import("./pages/home.page"));
const ContactPage = lazy(() => import("./pages/contact.page"));
const AboutUsPage = lazy(() => import("./pages/about-us.page"));
const SignInPage = lazy(() => import("./pages/sign-in.page"));

const ProfilePage = lazy(() => import("./pages/profile.page"));

const App = ({ isAuthenticated }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {isAuthenticated === "success" ? (
          <Suspense fallback={<Spinner />}>
            <AdminHeader />
            <Switch>
              <Route exact path="/" component={ProfilePage} />
            </Switch>
            <Footer />
          </Suspense>
        ) : (
          <Fragment>
            <Header />
            <Switch>
              <Suspense fallback={<Spinner />}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutUsPage} />
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/contact" component={ContactPage} />
              </Suspense>
            </Switch>
            <Footer />
          </Fragment>
        )}
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUserStatus,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
    <ThemeProvider theme={theme}>
      <Fragment>
        <AdminHeader />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Suspense>
        </Switch>

        
        <Footer />
      </Fragment>
    </ThemeProvider>


    */

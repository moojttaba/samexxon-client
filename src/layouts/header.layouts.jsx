/////Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawerHidden } from "./../redux/ui/ui.actions";
import { cloneElement, Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  //useTheme
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "../containers/drawer.container";
import logo from "./../assets/samexxon.logo.jpg";
import { createStructuredSelector } from "reselect";
import { selectToolbarRoute } from "../redux/ui/ui.selectors";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

////////////////////////////////////////////////////

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    //boxShadow: "0 15px 40px 0 rgba(0,0,0,.17)",

    //alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
  },
  toolbar: {
    //height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    //position: "relative",
    zIndex: 5,

    width: "100%",
    maxWidth: "1152px",
    padding: "0 16px",
    boxSizing: "border-box",
    margin: "0 auto",
  },
  tolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "5em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5em",
    },
  },
  tabContainer: {
    //marginRight: "auto",
  },
  tab: {
    fontSize: "1rem",
    fontWeight: 300,
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 50,
    color: "white",
  },
  logoContainer: {
    padding: 10,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    //marginRight: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Header = ({ toggleDrawerHidden, routes }) => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  // const handelChange = (e, value) => {
  //   setValue(value);
  // };

  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });
  }, [value, selectedIndex, routes]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to="/signin">
        ورود اعضا
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>ارسال رزومه شغلی</MenuItem>
      <MenuItem onClick={handleMenuClose}>ثبت نام تامین کنندگان</MenuItem>
      <MenuItem onClick={handleMenuClose}>ثبت نام مشاوره های املاک</MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar} color="secondary">
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="لگو بیاره" className={classes.logo} />
            </Button>
            <IconButton
              onClick={toggleDrawerHidden}
              className={classes.drawerIconContainer}
            >
              <MenuIcon />
            </IconButton>

            {/* {matches ? (
              <IconButton
                onClick={toggleDrawerHidden}
                className={classes.drawerIconContainer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              tabs
            )} */}
            <Drawer value={value} setValue={setValue} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderMenu}
      <div className={classes.tolbarMargin} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDrawerHidden: () => dispatch(toggleDrawerHidden()),
});
const mapStateToProps = createStructuredSelector({
  routes: selectToolbarRoute,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

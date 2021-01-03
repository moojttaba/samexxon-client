import { Fragment } from "react";
import { Link } from "react-router-dom";
/////REDUX
import { connect } from "react-redux";
import { toggleDrawerAdminHidden } from "../redux/ui/ui.actions";

////Route
import { withRouter } from "react-router-dom";

/////Selector
import { createStructuredSelector } from "reselect";

import {
  selectDrawerAdminHidden,
  selectToolbarRoute,
} from "../redux/ui/ui.selectors";

////Icons

/////Styles
import { makeStyles } from "@material-ui/core/styles";

///// Component
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerItem: {
    textAlign: "right",
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

const DrawerCart = ({
  hiddenAdmin,
  toggleDrawerAdminHidden,
  value,
  setValue,
  routes,
}) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={hiddenAdmin}
        onClose={toggleDrawerAdminHidden}
        onOpen={toggleDrawerAdminHidden}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <List className={classes.list}>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                toggleDrawerAdminHidden();
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hiddenAdmin: selectDrawerAdminHidden,
  routes: selectToolbarRoute,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDrawerHidden: () => dispatch(toggleDrawerAdminHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerCart)
);

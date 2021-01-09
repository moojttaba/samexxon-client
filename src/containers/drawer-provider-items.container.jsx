import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,

    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  ListItemChild: {
    paddingRight: theme.spacing(9),
    color: theme.palette.grey[500],
  },
  channel: {
    paddingRight: theme.spacing(3),
    color: theme.palette.grey[500],
  },
  Store: {
    paddingRight: theme.spacing(2),
  },
  selected: {
    color: "red",
  },
}));

const DrawerItems = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <List component="nav" className={classes.root}>
      {/*///////////////////// HOME ////////////////////////*/}
      <Box flexGrow={1}>
        <ListItem
          button
          onClick={() => {
            setValue(1);
          }}
          selected={value === 1}
          component={Link}
          to="/dashboard"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="خانه" align="right" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setValue(2);
          }}
          selected={value === 2}
          component={Link}
          to="/dashboard/provider-register"
        >
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="ثبت نام تامین کننده" align="right" />
        </ListItem>
      </Box>
      <Box>
        <ListItem
          disabled
          button
          onClick={() => {
            setValue(100);
          }}
          selected={value === 100}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="تنظیمات" align="right" />
        </ListItem>
      </Box>
    </List>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(DrawerItems);

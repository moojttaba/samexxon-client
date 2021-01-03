import { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContactData } from "../redux/ui/ui.selectors";
import bg from './../assets/images/buildings/'

const useStyles = makeStyles((theme) => ({
  ContactList: {
    maxWidth: 1152,
    width: "100%",
    minHeight: 900,
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  Card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  headerTitle: {
    marginBottom: theme.spacing(1),
  },
  paper: {
    //backgroundColor: 'red'
    boxShadow: "none",
    borderRadius: 0,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 * 
 * {
  offices: "Westbank Head Office",
  address: "Suite 601 - 1067 West Cordova St",
  city: "Vancouver, BC",
  tel: " 604-685-8986",
  fax: "604-893-1708",
  email: "emilie@westbankcorp.com",
  featured: true,
},
 */

const ContactList = ({ tileData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Box className={classes.ContactList}>
        <CardHeader
          title="درباره ما"
          subheader="شرکت سام اکسون"
          classes={{
            title: classes.headerTitle,
          }}
        />
        <CardMedia
          component="img"
          //alt={tile.title}
          height="340"
          //image={tile.img}
          title="Contemplative Reptile"
        />
      </Box>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = createStructuredSelector({
  tileData: selectContactData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

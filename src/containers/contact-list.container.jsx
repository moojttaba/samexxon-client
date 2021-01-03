import { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContactData } from "../redux/ui/ui.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
  },
  gridList: {
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
      <CardHeader
        title="تماس با"
        subheader="دفترهای  سام اکسون"
        classes={{
          title: classes.headerTitle,
        }}
      />

      <div className={classes.root}>
        <GridList
          cellHeight={240}
          spacing={1}
          className={classes.gridList}
          cols={matches ? 2 : 4}
        >
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={matches ? 1 : 1}
              rows={matches ? 1 : 1}
            >
              <Card className={classes.Card} classes={{ root: classes.paper }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tile.offices}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {tile.city}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {tile.address}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {`تلفن : ${tile.tel}`}
                    <br />
                    {`فکس : ${tile.fax}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{tile.email}</Button>
                </CardActions>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = createStructuredSelector({
  tileData: selectContactData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

/*
     <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
*/

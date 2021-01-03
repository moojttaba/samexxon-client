import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

/////Selector
import { createStructuredSelector } from "reselect";
import { selectTileData } from "../redux/ui/ui.selectors";

const useStyles = makeStyles((theme) => ({
  GridListTile: {},
  Card: {
    padding: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    //backgroundColor: 'red'
    boxShadow: "none",
    borderRadius: 0,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ImageGridList = ({ tileData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={500}
        className={classes.gridList}
        cols={matches ? 3 : 6}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            className={classes.GridListTile}
          >
            <Card
              className={classes.Card}
              key={tile.img}
              classes={{ root: classes.paper }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={tile.title}
                  height="340"
                  image={tile.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tile.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tile.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = createStructuredSelector({
  tileData: selectTileData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGridList);

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  GridListTile:{
    

  },
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
  // gridList: {
  //   width: "100%",
  //   height: "100%",
  // },
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
const ImageGridList = () => {
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
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.GridListTile}>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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

export default ImageGridList;

//cols={tile.cols || 1}

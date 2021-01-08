import { Fragment } from "react";
import {
   makeStyles, 
  // useTheme 
  } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
//import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContactData } from "../redux/ui/ui.selectors";
import bg from "./../assets/images/buildings/westbank-building-artistry (1).jpg";

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
  CardContent: {
    padding: 30,
    marginTop: theme.spacing(3),
  },
  CardMedia: {
    marginTop: theme.spacing(3),
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
  //const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

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
          className={classes.CardMedia}
          component="img"
          //alt={tile.title}
          height="340"
          image={bg}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.CardContent}>
          {/* <Typography gutterBottom variant="h5" component="h2">
        ss
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
       ss
          </Typography>
          <Typography color="textSecondary" gutterBottom>
           ss
          </Typography> */}

          <Typography variant="body2" component="p" align="center" color='textSecondary'>
            {`ارائه بیوگرافی دقیق Westbank چالش برانگیز است. ما بسته به نوع پروژه
            هایی که در حال کار هستیم ، مکان هایی که در آن کار می کنیم و آنچه که
            می خواهیم انجام دهیم ، چیزهای زیادی هستیم. ما تصور نمی کنیم که یک
            شرکت معمولی در املاک و مستغلات باشد ، بلکه عملی است که در تلاش است
            تا عناصری را که ظاهراً متفاوت هستند جمع کند و در تلاش برای کمک قابل
            توجه باشد. Westbank عملی را پیرامون تعهدات بلند مدت در زمینه هنر ،
            پایداری و شهرسازی ایجاد کرده است. این تعهدات زمینه ای برای پروژه
            هایی مانند وودواردز ، خانه ونکوور ، دهکده میرویش ، باغ تلوس و اوکریج
            است - کاتالیزورهایی برای تغییرات بزرگتر که فراتر از مرزهای پروژه ها
            هستند. ما اینجا هستیم تا خلق کنیم. دامن زدن. شعله ور شدن ما وسیله
            حرکت جدیدی برای بیان فرهنگی هستیم. در هر زمان ، تیم از هر سطح ، از
            سطح کلان تا کلان ، درگیر پروژه ها است. ما در چندین کمیسیون هنری
            عمومی شرکت می کنیم ، با تقریباً 30 نصب توسط برخی از هنرمندان برجسته
            جهان که تکمیل شده اند یا در حال انجام هستند. ما در حال اجرای برنامه
            پیانوی خود با Fazioli هستیم ، و مجموعه ای از سازها را ساختیم که
            تلفیق هنر و معماری را مثال می زند. ما پروژه هایی مانند تفسیر مجدد یک
            خیابان معمولی در شهر ونکوور را که در حال اجرا در باغ تلوس هستیم ، در
            پیش می گیریم. در عین حال در مقیاس بزرگتر ، ما به یکی از بزرگترین
            توسعه دهندگان پلاتین LEED جهان و همچنین مالک و مجری سیستم انرژی
            منطقه ونکوور تبدیل شده ایم. با توجه به اینکه بخش عمده ای از تمرکز ما
            استفاده از این سیستم برای تحریک کاهش گسترده اثر کربن در ونکوور است.`}
          </Typography>
        </CardContent>
      </Box>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = createStructuredSelector({
  tileData: selectContactData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

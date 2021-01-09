import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  homePageStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      paddingRight: 340,
      
    },
  },
  Box: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    
  },
}));

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.homePageStyles}>
        <CardHeader
          title="خوش آمدید"
          //subheader="صفحه اصلی"
          classes={{
            title: classes.headerTitle,
          }}
        />
      </Box>
    </Fragment>
  );
};

export default DashboardPage;

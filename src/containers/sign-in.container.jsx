import { Fragment } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { renderTextField } from "./../components/form/material-ui.form";
import { createStructuredSelector } from "reselect";
import {
  emailSignInStart,
  switchSignUpSignIn,
} from "../redux/user/user.actions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(6),
    margin: "auto",
    minWidth: 400,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SignIN = ({ emailSignInStart, switchSignUpSignIn, handleSubmit }) => {
  const classes = useStyles();

  const onSubmit = ({ email, password }) => {
    emailSignInStart(email, password);
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Box
          mb={2}
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            ورود
          </Typography>
        </Box>

        <Box>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <Field
                name="email"
                type="email"
                label="ایمیل"
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <Field
                type="password"
                name="password"
                label="رمز عبور"
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth={true}
                size="large"
                color="primary"
              >
                ورود
              </Button>
            </Box>

            <Box display="flex" style={{ justifyContent: "space-between" }}>
              <Box>
                <Button color="primary">رمز را فراموش کردید؟</Button>
              </Box>
              <Box>
                <Button color="primary">ثبت نام</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "you must begozii";
  }

  if (!formValues.password) {
    errors.password = "you must berini";
  }

  return errors;
};

//////////////// REDUX MANAGER

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  switchSignUpSignIn: () => dispatch(switchSignUpSignIn()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default reduxForm({
  validate,
  form: "SignInWithEmailAndPassword",
})(connect(mapStateToProps, mapDispatchToProps)(SignIN));

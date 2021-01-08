import { Fragment } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import MenuItem from '@material-ui/core/MenuItem';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  renderTextField,
  renderCheckbox,
  radioButton,
  renderFromHelper,
  renderSelectField,
} from "../components/form/material-ui.form";
import { createStructuredSelector } from "reselect";
import {
  emailSignInStart,
  switchSignUpSignIn,
} from "../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(6),
    margin: "auto",
    minWidth: 400,
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <Field
              component={renderSelectField}
              label="Color"
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Field>
          </Box>
          <Box mb={2}>
            <Field
              component={renderTextField}
              variant="outlined"
              label="Favorite Color"
            />
          </Box>

          <Box>
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
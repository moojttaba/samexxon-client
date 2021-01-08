import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const MyTextField = withStyles({
  root: {
    "& input": {},
    "& p": {
      textAlign: "right !important",
    },

    "& label": {
      right: "0 !important",
      transform: "translate(-10px, 18px)",
      transformOrigin: "top right",
    },

    "& .MuiInputLabel-shrink": {
      paddingRight: "8px",
      transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
      color: "#00897b",
      transform: "translate(-10px, -7px) scale(0.75)",
      transformOrigin: "top right",
    },

    "& input:valid + fieldset": {
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      //borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderRightWidth: 6,
    },

    "& fieldset": {
      "& legend": {
        textAlign: "right !important",

        "& span": {},
      },
    },
  },
})(TextField);

export const MyFormControl = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    minWidth: 120,
    "& input": {},
    "& p": {
      textAlign: "right !important",
    },

    "& label": {
      right: "0 !important",
      transform: "translate(-10px, 18px)",
      transformOrigin: "top right",
      paddingRight: theme.spacing(3),
    },

    "& .MuiInputLabel-shrink": {
      paddingRight: "8px",
      transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
      color: "#00897b",
      transform: "translate(-10px, -7px) scale(0.75)",
      transformOrigin: "top right",
    },

    "& input:valid + fieldset": {
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      //borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderRightWidth: 6,
    },

    "& fieldset": {
      borderWidth:  '2px',
      "& legend": {
        textAlign: "right !important",

        "& span": {},
      },
    },
  },
}))(FormControl);

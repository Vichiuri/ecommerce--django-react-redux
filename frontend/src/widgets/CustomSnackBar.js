import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

/** Snack bar to inform distributor  */
export default function CustomSnackBar(props) {
  const { values, closeSnackBar } = props;

  return (
    <Snackbar
      open={values.openSnackBar}
      anchorOrigin={values.snackPosition}
      onClose={() => closeSnackBar()}
      autoHideDuration={4000}
      TransitionComponent={TransitionLeft}
    >
      {values.isError === true ? (
        <Alert onClose={() => closeSnackBar()} severity="error">
          {values.responseMessage}
        </Alert>
      ) : (
        <Alert onClose={() => closeSnackBar()} severity="success">
          {values.responseMessage}
        </Alert>
      )}
    </Snackbar>
  );
}

import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import { AlertTitle, Alert } from "@material-ui/lab";
import "./widget.css";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

/** Snack bar to inform distributor  */
export default function NotificationTab(props) {
  const { values, closeSnackBar } = props;
  const { responseMessage, openSnackBar, snackPosition } = values;

  return (
    <Snackbar
      open={openSnackBar}
      anchorOrigin={snackPosition}
      onClose={() => closeSnackBar()}
      autoHideDuration={20000}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        action={
          <div className="d-flex">
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeSnackBar();
              }}
            >
              <i
                style={{
                  fontSize: "13px",
                  marginRight: "10px",
                  fontWeight: "600",
                }}
                className="text-success fas fa-eye"
              ></i>
            </IconButton>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeSnackBar();
              }}
            >
              <i
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                }}
                className="text-danger fas fa-times"
              ></i>
            </IconButton>
          </div>
        }
        onClose={() => closeSnackBar()}
        severity="info"
      >
        <AlertTitle>{responseMessage?.title ?? ""}</AlertTitle>
        <div className="notification_pop_text">{responseMessage.message}</div>
        <div className="btn btn-icon"></div>
      </Alert>
    </Snackbar>
  );
}

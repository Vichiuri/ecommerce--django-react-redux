import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForgotPasswordDialog(props) {
    const { open, forgotPassword, onchange, closeWindow } = props;

    return (
        <div>
            <Dialog
                open={open}
                maxWidth="sm"
                onClose={closeWindow}
                aria-labelledby="form-dialog-title"
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="form-dialog-title">
                    Forgot Password
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To reset your password, please enter your email address
                        here. We will an email to request reset password.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={e => onchange(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={forgotPassword} color="secondary">
                        Reset
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

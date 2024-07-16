import React, { Component } from "react";
import Login from "./Login";
import { login, forgotPassword } from "../../redux/Actions/Auth";
import "./Auth.css";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import getCookie from "../../utils/GetCookie";

class AuthBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.status === 401) {
        let responseMessage = {
          message: "Authentication details are not correct",
        };
        let isError = true;
        this.setResponse({ responseMessage, isError });
      } else if (error.status === 307) {
        // ! Redirecting for netbot auth is done on this line
        let form = document.getElementById("login_form");
        var input = document.createElement("input");
        let csrf_token = getCookie("csrftoken");
        input.type = "hidden";
        input.name = "csrfmiddlewaretoken";
        input.value = csrf_token;

        // attach field to the form
        form.appendChild(input);
        form.submit();
      } else {
        this.setResponse(error);
      }
    } else if (message !== prevProps.message) this.setResponse(message);
  }

  setResponse(response) {
    let value = Object.keys(response.responseMessage)[0];
    const responseMessage = response.responseMessage[value];
    if (responseMessage instanceof Array)
      this.setState({
        responseMessage: responseMessage[0],
        isError: response.isError,
        openSnackBar: true,
      });
    else
      this.setState({
        responseMessage: responseMessage,
        isError: response.isError,
        openSnackBar: true,
      });
  }

  closeSnackBar() {
    this.setState({ openSnackBar: false });
  }

  render() {
    const { login, auth, forgotPassword } = this.props;
    const { openSnackBar, isError, responseMessage } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition: { vertical: "top", horizontal: "center" },
    };

    if (auth.isAuthenticated && auth.account && !auth.account.first_time) {
      return <Redirect to="/" />;
    } else if (auth.account && auth.account.first_time) {
      return <Redirect to="/onboard" />;
    }

    return (
      <div>
        <SimpleBackdrop open={auth.isLoading} />
        <Login login={login} forgotPassword={forgotPassword} />
        <CustomSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});
/**  * Retailer authentication view for distributor and redirect for netbot auth */
export default connect(mapStateToProps, { login, forgotPassword })(AuthBody);

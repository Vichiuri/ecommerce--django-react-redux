import React, { Component } from "react";
import { connect } from "react-redux";
import ViewOnBoarding from "./ViewOnBoarding";
import "./OnBoarding.css";
import { Redirect } from "react-router";

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
  }

  componentDidMount() {}

  changePage(page) {
    if (page == 2) {
      this.props.fetchCategories();
      this.props.fetchProductUnits();
    }
    this.setState({ currentPage: page });
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
    const { auth } = this.props;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    if (auth.account && !auth.account.first_time) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <ViewOnBoarding permissions={auth.group.permission} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Onboarding page for distributors */
export default connect(mapStateToProps)(OnBoarding);

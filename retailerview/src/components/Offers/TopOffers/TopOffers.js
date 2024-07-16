import React, { Component } from "react";
import { connect } from "react-redux";
import ViewTopOffers from "./ViewTopOffers";
import "./Offers.css";

class TopOffers extends Component {
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
    const { offersReducer } = this.props;
    const { offers } = offersReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    console.log(offers);
    return (
      <div>
        {offers.length > 0 ? <ViewTopOffers offers={offers} /> : <div />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offersReducer: state.retailerOffersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

export default connect(mapStateToProps)(TopOffers);

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPartialDelivery } from "../../redux/Actions/Delivery";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewPartialDeliveries from "./ViewPartialDeliveries";

class PartialDeliveries extends Component {
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

  componentDidMount() {
    this.props.fetchPartialDelivery(1);
  }

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
    const { deliveryReducer } = this.props;
    const { isLoading, partial_deliveries } = deliveryReducer;
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
    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <ViewPartialDeliveries deliveries={partial_deliveries} />
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
  deliveryReducer: state.deliveryReducer,
  ordersReducer: state.ordersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Partial deliveries view for distributor  */
export default connect(mapStateToProps, { fetchPartialDelivery })(
  PartialDeliveries
);

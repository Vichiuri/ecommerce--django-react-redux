import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeliveries } from "../../redux/Actions/Delivery";
import { fetchOrderLogs } from "../../redux/Actions/Orders";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewOrderLogs from "../Orders/ViewOrderLogs";
import ViewDeliveries from "./ViewDeliveries";

class Deliveries extends Component {
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
    this.viewOrderLogs = this.viewOrderLogs.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {
    this.props.fetchDeliveries(1);
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

  changePage(page) {
    this.setState({ currentPage: page });
  }

  viewOrderLogs(id) {
    this.props.fetchOrderLogs(id);
    this.setState({ currentPage: 2 });
  }

  closeSnackBar() {
    this.setState({ openSnackBar: false });
  }

  render() {
    const { deliveryReducer, auth, ordersReducer } = this.props;
    const { deliveries, isLoading } = deliveryReducer;
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

    if (!auth.group.permission.can_view_orders) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading || ordersReducer.isLoading} />
            <ViewDeliveries
              deliveries={deliveries}
              viewOrderLogs={this.viewOrderLogs}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <SimpleBackdrop open={isLoading || ordersReducer.isLoading} />
            <ViewOrderLogs
              order_logs={ordersReducer.order_logs}
              changePage={this.changePage}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );
      default:
        return (
          <div>
            <SimpleBackdrop open={isLoading || ordersReducer.isLoading} />
            <ViewDeliveries deliveries={deliveries} />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  deliveryReducer: state.deliveryReducer,
  ordersReducer: state.ordersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View for distributors deliveries and confirmations */
export default connect(mapStateToProps, { fetchDeliveries, fetchOrderLogs })(
  Deliveries
);

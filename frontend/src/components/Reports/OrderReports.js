import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrdersStatics } from "../../redux/Actions/Reports";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import formatInputDate from "../../utils/FormatInputDate";
import ViewOrderReports from "./ViewOrderReports";
class OrderReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      productItem: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {
    let from_date = formatInputDate(
      new Date().setDate(new Date().getDate() - 6)
    );
    let to_date = formatInputDate(new Date());
    this.props.fetchOrdersStatics(from_date, to_date);
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
    const { reportsReducer, fetchOrdersStatics } = this.props;
    const { isLoading, order_reports } = reportsReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <ViewOrderReports
          reports={order_reports}
          fetchOrdersStatics={fetchOrdersStatics}
        />
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
  reportsReducer: state.reportsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Distributor order statics view screen */
export default connect(mapStateToProps, { fetchOrdersStatics })(OrderReports);

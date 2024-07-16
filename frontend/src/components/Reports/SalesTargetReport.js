import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSalesTargetReport,
  fetchIndividualSalesManStatics,
} from "../../redux/Actions/Reports";
import formatInputDate from "../../utils/FormatInputDate";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewSalesTargetReport from "./ViewSalesTargetReport";
import "./Reports.css";

class SalesTargetReport extends Component {
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

  componentDidMount() {
    let from_date = formatInputDate(new Date());
    this.props.fetchSalesTargetReport(from_date);
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
    const {
      reportsReducer,
      fetchSalesTargetReport,
      fetchIndividualSalesManStatics,
    } = this.props;
    const { isLoading, sales_target_report, sales_men_reports } =
      reportsReducer;
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
        <ViewSalesTargetReport
          fetchSalesTargetReport={fetchSalesTargetReport}
          fetchIndividualSalesManStatics={fetchIndividualSalesManStatics}
          reports={sales_target_report}
          sales_men_reports={sales_men_reports}
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

/** Sales target report view */
export default connect(mapStateToProps, {
  fetchSalesTargetReport,
  fetchIndividualSalesManStatics,
})(SalesTargetReport);

import React, { Component } from "react";
import "./DashBoard.css";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import { connect } from "react-redux";
import {
  fetchDashBoard,
  fetchDashBoardMapStats,
} from "../../redux/Actions/DashBoard";
import {
  fetchOrdersStatics,
  fetchRetailersStatics,
  fetchProductStatics,
} from "../../redux/Actions/Reports";
import formatInputDate from "../../utils/FormatInputDate";
import PermissionHandler from "../../utils/PermissionHandler";
import ViewNewDashoard from "./new_dashboard/view_new_dashboard";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
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
    const country_config = localStorage.getItem("country_config") ?? "Kenya";
    this.props.fetchDashBoard();
    let from_date = formatInputDate(
      new Date().setDate(new Date().getDate() - 6)
    );
    let to_date = formatInputDate(new Date().setDate(new Date().getDate()));
    this.props.fetchOrdersStatics(from_date, to_date);
    this.props.fetchRetailersStatics(from_date, to_date);
    this.props.fetchProductStatics(from_date, to_date);
    this.props.fetchDashBoardMapStats(country_config);
    localStorage.setItem("country_config", country_config);
  }

  changePage(page) {
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
    const { dashboardReducer, reportsReducer, fetchOrdersStatics, auth } =
      this.props;
    const {
      isLoading,
      dashBoardCount,
      view_retailers,
      view_products,
      map_data,
    } = dashboardReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    if (!auth.group.permission.can_view_dashboard) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    return (
      <div>
        <SimpleBackdrop open={isLoading || reportsReducer.isLoading} />
        <ViewNewDashoard
          order_reports={reportsReducer.order_reports}
          fetchOrdersStatics={fetchOrdersStatics}
          dashBoardCount={dashBoardCount}
          view_retailers={view_retailers}
          view_products={view_products}
          product_reports={reportsReducer.product_reports}
          map_data={map_data}
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
  dashboardReducer: state.dashboardReducer,
  reportsReducer: state.reportsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Retailer View Dashboard */
export default connect(mapStateToProps, {
  fetchDashBoard,
  fetchOrdersStatics,
  fetchRetailersStatics,
  fetchProductStatics,
  fetchDashBoardMapStats,
})(DashBoard);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSalesTarget,
  addSalesTarget,
  fetchSalesPeople,
  deleteSalesTarget,
  updateSalesTarget,
} from "../../redux/Actions/Sales";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import AddSaleTargetGroup from "./AddSaleTargetGroup";
import EditSalesTargetGroup from "./EditSalesTargetGroup";
import ViewSalesTarget from "./ViewSalesTarget";
import "../Sales/sales.css";

class SalesTarget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentSalesTarget: null,
      currentPage: 1,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.viewEditSalesTarget = this.viewEditSalesTarget.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  viewEditSalesTarget(salesTarget) {
    this.setState({ currentSalesTarget: salesTarget, currentPage: 3 });
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
    this.props.fetchSalesTarget(1);
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
      salesReducer,
      addSalesTarget,
      fetchSalesPeople,
      auth,
      updateSalesTarget,
      deleteSalesTarget,
      fetchSalesTarget,
    } = this.props;
    const {
      isLoading,
      sales_target,
      sales_people,
      target_current_page,
      target_last_page,
    } = salesReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      currentSalesTarget,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (
      !auth.group.permission.can_view_salesmen ||
      !auth.account.dist_options.use_sales_target
    ) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    let pageDetails = {
      current_page: target_current_page,
      last_page: target_last_page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewSalesTarget
              sales_target={sales_target}
              changePage={this.changePage}
              sales_people={sales_people}
              canManage={auth.group.permission.can_manage_salesmen}
              viewEditSalesTarget={this.viewEditSalesTarget}
              deleteSalesTarget={deleteSalesTarget}
              pageDetails={pageDetails}
              fetchSalesTarget={fetchSalesTarget}
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
            <SimpleBackdrop open={isLoading} />
            <AddSaleTargetGroup
              sales_target={sales_target}
              addSalesTarget={addSalesTarget}
              canManage={auth.group.permission.can_manage_salesmen}
              changePage={this.changePage}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <EditSalesTargetGroup
              target={currentSalesTarget}
              updateSalesTarget={updateSalesTarget}
              canManage={auth.group.permission.can_manage_salesmen}
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
            <SimpleBackdrop open={isLoading} />
            <ViewSalesTarget
              sales_target={sales_target}
              addSalesTarget={addSalesTarget}
              fetchSalesPeople={fetchSalesPeople}
              sales_people={sales_people}
              canManage={auth.group.permission.can_manage_salesmen}
              updateSalesTarget={updateSalesTarget}
              deleteSalesTarget={deleteSalesTarget}
            />
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
  salesReducer: state.salesReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Sales target view for sales people  */
export default connect(mapStateToProps, {
  fetchSalesTarget,
  addSalesTarget,
  fetchSalesPeople,
  deleteSalesTarget,
  updateSalesTarget,
})(SalesTarget);

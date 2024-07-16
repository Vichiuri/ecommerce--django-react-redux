import React, { Component } from "react";
import ViewRetailers from "./ViewRetailers";
import "./Retailers.css";
import AddRetailers from "./AddRetailers";
import { connect } from "react-redux";
import {
  fetchRetailers,
  addRetailer,
  updateRetailer,
  deleteRetailer,
} from "../../redux/Actions/Retailer";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import EditRetailer from "./EditRetailer";
import PermissionHandler from "../../utils/PermissionHandler";
import ViewRetailerPage from "./ViewRetailerPage";

class Retailers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      retailerItem: {},
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.editRetailer = this.editRetailer.bind(this);
    this.viewRetailerPage = this.viewRetailerPage.bind(this);
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
    this.props.fetchRetailers(1);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  editRetailer(retailer) {
    this.setState({ retailerItem: retailer, currentPage: 3 });
  }

  viewRetailerPage(retailer) {
    this.setState({ retailerItem: retailer, currentPage: 4 });
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
      retailersReducer,
      addRetailer,
      updateRetailer,
      deleteRetailer,
      fetchRetailers,
      auth,
    } = this.props;
    const { retailers, isLoading, retailer_current_page, retailer_last_page } =
      retailersReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      retailerItem,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_view_retailer) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    let pageDetails = {
      current_page: retailer_current_page,
      last_page: retailer_last_page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewRetailers
              changePage={this.changePage}
              retailers={retailers}
              deleteRetailer={deleteRetailer}
              editRetailer={this.editRetailer}
              canManage={auth.group.permission.can_manage_retailer}
              viewRetailerPage={this.viewRetailerPage}
              fetchRetailers={fetchRetailers}
              pageDetails={pageDetails}
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
            <AddRetailers
              changePage={this.changePage}
              addRetailer={addRetailer}
              setResponse={this.setResponse}
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
            <EditRetailer
              changePage={this.changePage}
              retailer={retailerItem}
              updateRetailer={updateRetailer}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 4:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewRetailerPage
              retailer={retailerItem}
              changePage={this.changePage}
              editRetailer={this.editRetailer}
              canManage={auth.group.permission.can_manage_retailer}
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
            <ViewRetailers
              changePage={this.changePage}
              retailers={retailers}
              deleteRetailer={deleteRetailer}
              editRetailer={this.editRetailer}
              canManage={auth.group.permission.can_manage_retailer}
              viewRetailerPage={this.viewRetailerPage}
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
  retailersReducer: state.retailersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Distributor view for managing retailers */
export default connect(mapStateToProps, {
  fetchRetailers,
  addRetailer,

  updateRetailer,
  deleteRetailer,
})(Retailers);

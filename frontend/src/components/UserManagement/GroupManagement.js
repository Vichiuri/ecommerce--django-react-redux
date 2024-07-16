import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchManagementGroups,
  addManagementGroup,
  deleteManagementGroup,
  updateManagementGroup,
} from "../../redux/Actions/Management";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewGroupManagement from "./ViewGroupManagement";
import "./management.css";

class GroupManagement extends Component {
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
    this.props.fetchManagementGroups();
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
    const {
      managementReducer,
      addManagementGroup,
      deleteManagementGroup,
      updateManagementGroup,
      auth,
    } = this.props;
    const { isLoading, dist_users, groups } = managementReducer;
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

    if (!auth.group.permission.can_view_users) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <ViewGroupManagement
          groups={groups}
          addManagementGroup={addManagementGroup}
          deleteManagementGroup={deleteManagementGroup}
          updateManagementGroup={updateManagementGroup}
          canManage={auth.group.permission.can_manage_users}
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
  managementReducer: state.managementReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Management page for adding dist groups */
export default connect(mapStateToProps, {
  fetchManagementGroups,
  addManagementGroup,
  deleteManagementGroup,
  updateManagementGroup,
})(GroupManagement);

import React, { Component } from "react";
import ViewSalesPeople from "./ViewSalesPeople";
import "./sales.css";
import { connect } from "react-redux";
import {
  fetchSalesPeople,
  addSalesPerson,
  editSalesPerson,
  deleteSalesPerson,
} from "../../redux/Actions/Sales";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import AddSalesPerson from "./AddSalesPerson";
import PermissionHandler from "../../utils/PermissionHandler";

class Sales extends Component {
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
    this.props.fetchSalesPeople(1);
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
    const {
      salesReducer,
      addSalesPerson,
      deleteSalesPerson,
      editSalesPerson,
      fetchSalesPeople,
      auth,
    } = this.props;
    const { isLoading, sales_people, sales_current_page, sales_last_page } =
      salesReducer;
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

    if (!auth.group.permission.can_view_salesmen) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    let pageDetails = {
      current_page: sales_current_page,
      last_page: sales_last_page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewSalesPeople
              sales_people={sales_people}
              changePage={this.changePage}
              deleteSalesPerson={deleteSalesPerson}
              editSalesPerson={editSalesPerson}
              fetchSalesPeople={fetchSalesPeople}
              canManage={auth.group.permission.can_manage_salesmen}
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
            <AddSalesPerson
              changePage={this.changePage}
              addSalesPerson={addSalesPerson}
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
            <ViewSalesPeople
              sales_people={sales_people}
              changePage={this.changePage}
              deleteSalesPerson={deleteSalesPerson}
              editSalesPerson={editSalesPerson}
              canManage={auth.group.permission.can_manage_salesmen}
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

/** View for adding and managing retailers */
export default connect(mapStateToProps, {
  fetchSalesPeople,
  addSalesPerson,
  editSalesPerson,
  deleteSalesPerson,
})(Sales);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMobileNotifications,
  addMobileNotification,
  updateMobileNotification,
  deleteMobileNotification,
} from "../../redux/Actions/Notification";
import { fetchProducts } from "../../redux/Actions/Products";
import { fetchPriceOffers } from "../../redux/Actions/Offers";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewNotifications from "./ViewNotifications";
import AddNotification from "./AddNotification";
import EditNotifcation from "./EditNotifcation";
import "./Notification.css";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewNotification: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.vieweditNotification = this.vieweditNotification.bind(this);
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
    this.props.fetchMobileNotifications(1);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  vieweditNotification(notification) {
    this.setState({ viewNotification: notification, currentPage: 3 });
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
      notificationsReducer,
      addMobileNotification,
      updateMobileNotification,
      deleteMobileNotification,
      auth,
      offersReducer,
      productsReducer,
      fetchProducts,
      fetchPriceOffers,
    } = this.props;
    const { isLoading, notifications } = notificationsReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      viewNotification,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_manage_mobile) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewNotifications
              notifications={notifications}
              changePage={this.changePage}
              editNotification={this.vieweditNotification}
              deleteMobileNotification={deleteMobileNotification}
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
            <AddNotification
              changePage={this.changePage}
              addMobileNotification={addMobileNotification}
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
            <EditNotifcation
              changePage={this.changePage}
              updateMobileNotification={updateMobileNotification}
              notification={viewNotification}
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
            <ViewNotifications
              notifications={notifications}
              changePage={this.changePage}
              updateMobileNotification={updateMobileNotification}
              deleteMobileNotification={deleteMobileNotification}
              products={productsReducer.products}
              offers={offersReducer.offers}
              fetchProducts={fetchProducts}
              fetchPriceOffers={fetchPriceOffers}
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
  notificationsReducer: state.notificationsReducer,
  productsReducer: state.productsReducer,
  offersReducer: state.offersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Distributors notifications view */
export default connect(mapStateToProps, {
  fetchMobileNotifications,
  addMobileNotification,
  updateMobileNotification,
  deleteMobileNotification,
  fetchProducts,
  fetchPriceOffers,
})(Notifications);

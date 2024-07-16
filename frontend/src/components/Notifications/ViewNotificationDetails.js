import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchViewDistNotification } from "../../redux/Actions/Notification";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import "./Notification.css";
import ViewNotificationDescription from "./ViewNotificationDescription";

class ViewNotificationDetails extends Component {
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
    const view_id = this.props.match.params.id;
    if (view_id) {
      this.props.fetchViewDistNotification(view_id);
    }
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
    const { notificationsReducer } = this.props;
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
    const { isLoading, view_notification } = notificationsReducer;
    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        {view_notification ? (
          <ViewNotificationDescription notification={view_notification} />
        ) : (
          <div />
        )}
        <CustomSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notificationsReducer: state.notificationsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

export default connect(mapStateToProps, { fetchViewDistNotification })(
  ViewNotificationDetails
);

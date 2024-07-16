import React, { Component } from "react";
import { fetchDashBoardProgress } from "../../redux/Actions/DashBoard";
import { connect } from "react-redux";
import "./ProgressBar.css";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewProgressBar from "./ViewProgressBar";
import CustomSnackBar from "../../widgets/CustomSnackBar";

class CustomProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      visible: true,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
  }

  componentDidMount() {
    this.props.fetchDashBoardProgress();
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

  updateVisibility(visibility) {
    this.setState({ visible: visibility });
  }

  render() {
    const { dashboardReducer } = this.props;
    const { isLoading, dashboardProgress } = dashboardReducer;
    const { openSnackBar, isError, responseMessage, snackPosition, visible } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    return (
      <div>
        {visible ? (
          <div className="progress_bar_layout bg_themed pl-2 pr-2">
            <SimpleBackdrop open={isLoading} />
            <ViewProgressBar
              dashboardProgress={dashboardProgress}
              updateVisibility={this.updateVisibility}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dashboardReducer: state.dashboardReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Track distributor current progess */
export default connect(mapStateToProps, { fetchDashBoardProgress })(
  CustomProgressBar
);

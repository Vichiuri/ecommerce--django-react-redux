import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/Actions/Auth";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import EditProfile from "./EditProfile";

class Profile extends Component {
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
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {}

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
    const { auth, updateUser } = this.props;
    const { user, account } = auth;
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
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <EditProfile
                        user={user}
                        account={account}
                        updateUser={updateUser}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View and edit distributor profile view */
export default connect(mapStateToProps, { updateUser })(Profile);

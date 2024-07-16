import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import "./Settings.css";
import ViewSettings from "./ViewSettings";
import {
  fetchDistributorSettings,
  fetchCitiesData,
  fetchCountriesData,
  editDistributorSettings,
  fetchEmailSettings,
  addEmailSettings,
  updateEmailSettings,
  fetchDistributorOptions,
  updateDistOptions,
  updateCompanyStatus,
} from "../../redux/Actions/Settings";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import PermissionHandler from "../../utils/PermissionHandler";

class Settings extends Component {
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
    this.props.fetchDistributorSettings();
    this.props.fetchDistributorOptions();
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
      auth,
      settingsReducer,
      fetchCitiesData,
      fetchCountriesData,
      editDistributorSettings,
      fetchEmailSettings,
      addEmailSettings,
      updateEmailSettings,
      updateDistOptions,
      updateCompanyStatus,
    } = this.props;
    const {
      distributor,
      isLoading,
      countries,
      cities,
      email_settings,
      dist_settings,
    } = settingsReducer;
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

    if (!auth.group.permission.can_view_settings) {
      return PermissionHandler(auth.group.permission);
    }

    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <ViewSettings
          distributor={distributor}
          fetchCitiesData={fetchCitiesData}
          fetchCountriesData={fetchCountriesData}
          countries={countries}
          cities={cities}
          editDistributorSettings={editDistributorSettings}
          fetchEmailSettings={fetchEmailSettings}
          addEmailSettings={addEmailSettings}
          updateEmailSettings={updateEmailSettings}
          email_settings={email_settings}
          dist_settings={dist_settings}
          updateDistOptions={updateDistOptions}
          updateCompanyStatus={updateCompanyStatus}
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
  settingsReducer: state.settingsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/**Seting view for distributor settings page */
export default connect(mapStateToProps, {
  fetchDistributorSettings,
  fetchCitiesData,
  fetchCountriesData,
  editDistributorSettings,
  fetchEmailSettings,
  addEmailSettings,
  updateEmailSettings,
  fetchDistributorOptions,
  updateDistOptions,
  updateCompanyStatus,
})(Settings);

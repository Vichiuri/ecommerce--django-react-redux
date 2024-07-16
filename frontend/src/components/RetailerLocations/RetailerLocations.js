import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchRetailRegions,
  addRetailRegions,
  fetchRetailAreas,
  addRetailAreas,
  fetchRetailerCities,
  updateRetailerAreas,
  deleteRetailerArea,
  updateRetailerRegions,
  deleteRetailerRegions,
  addRetailerCity,
  updateRetailerCity,
  deleteRetailerCity,
} from "../../redux/Actions/Retailer";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ViewAreas from "./ViewAreas";
import ViewRegions from "./ViewRegions";

class RetailerLocations extends Component {
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

  componentDidMount() {
    this.props.fetchRetailRegions(1);
    this.props.fetchRetailAreas(1);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) this.setResponse(message);
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
      addRetailRegions,
      addRetailAreas,
      fetchRetailerCities,
      auth,
      updateRetailerAreas,
      deleteRetailerArea,
      updateRetailerRegions,
      deleteRetailerRegions,
      addRetailerCity,
      updateRetailerCity,
      deleteRetailerCity,
    } = this.props;
    const { retailer_regions, isLoading, areas, cities } = retailersReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_view_retailer) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <ViewRegions
          retailer_regions={retailer_regions}
          addRetailRegions={addRetailRegions}
          canManage={auth.group.permission.can_manage_retailer}
          updateRetailerRegions={updateRetailerRegions}
          deleteRetailerRegions={deleteRetailerRegions}
          addRetailerCity={addRetailerCity}
          updateRetailerCity={updateRetailerCity}
          deleteRetailerCity={deleteRetailerCity}
        />
        <ViewAreas
          areas={areas}
          addRetailAreas={addRetailAreas}
          cities={cities}
          fetchRetailerCities={fetchRetailerCities}
          canManage={auth.group.permission.can_manage_retailer}
          updateRetailerAreas={updateRetailerAreas}
          deleteRetailerArea={deleteRetailerArea}
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
  retailersReducer: state.retailersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Distributor retailer locations view */
export default connect(mapStateToProps, {
  fetchRetailRegions,
  addRetailRegions,
  fetchRetailAreas,
  addRetailAreas,
  fetchRetailerCities,
  updateRetailerAreas,
  deleteRetailerArea,
  updateRetailerRegions,
  deleteRetailerRegions,
  addRetailerCity,
  updateRetailerCity,
  deleteRetailerCity,
})(RetailerLocations);

import React, { Component } from "react";
import { connect } from "react-redux";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import ExchangeRates from "./ExchangeRates";
import ExchangeUnits from "./ExchangeUnits";
import PriceLevels from "./PriceLevels";
import {
  fetchProductUnits,
  addProductUnits,
  fetchProductCompoundUnits,
  addProductCompoundUnits,
  fetchProductPriceLevels,
  addProductLevels,
  updateProductUnits,
  deleteUnit,
  updateProductCompoundUnit,
  deleteProductCompoundUnit,
  updatePriceLevel,
  deletePriceLevel,
  fetchProductBrands,
  addProductBrand,
  updateProductBrand,
  deleteProductBrand,
} from "../../redux/Actions/Products";
import PermissionHandler from "../../utils/PermissionHandler";
import ProductBrands from "./ProductBrands";

class ProductMaster extends Component {
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
    this.props.fetchProductUnits(1);
    this.props.fetchProductCompoundUnits();
    this.props.fetchProductPriceLevels(1);
    this.props.fetchProductBrands(1);
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
      productsReducer,
      addProductUnits,
      addProductCompoundUnits,
      addProductLevels,
      updateProductUnits,
      deleteUnit,
      updateProductCompoundUnit,
      deleteProductCompoundUnit,
      updatePriceLevel,
      deletePriceLevel,
      auth,
      fetchProductUnits,
      fetchProductPriceLevels,
      fetchProductCompoundUnits,
      fetchProductBrands,
      addProductBrand,
      updateProductBrand,
      deleteProductBrand,
    } = this.props;
    const {
      isLoading,
      units,
      c_units,
      price_levels,
      product_brands,
      units_current_page,
      units_last_page,
      levels_current_page,
      levels_last_page,
      c_current_page,
      c_last_page,
      product_brand_current_page,
      product_brand_last_page,
    } = productsReducer;

    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_view_products) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    const unitsPageDetails = {
      current_page: units_current_page,
      last_page: units_last_page,
    };
    const levelPageDetails = {
      current_page: levels_current_page,
      last_page: levels_last_page,
    };
    const cPageDetails = {
      current_page: c_current_page,
      last_page: c_last_page,
    };

    const brandPageDetails = {
      current_page: product_brand_current_page,
      last_page: product_brand_last_page,
    };

    return (
      <div>
        <SimpleBackdrop open={isLoading} />
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2">
            <ExchangeUnits
              units={units}
              addProductUnits={addProductUnits}
              deleteUnit={deleteUnit}
              updateProductUnits={updateProductUnits}
              canManage={auth.group.permission.can_manage_product}
              pageDetails={unitsPageDetails}
              fetchProductUnits={fetchProductUnits}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2">
            <PriceLevels
              price_levels={price_levels}
              addProductLevels={addProductLevels}
              updatePriceLevel={updatePriceLevel}
              deletePriceLevel={deletePriceLevel}
              levelDetails={levelPageDetails}
              fetchProductPriceLevels={fetchProductPriceLevels}
              canManage={auth.group.permission.can_manage_product}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2">
            <ExchangeRates
              c_units={c_units}
              units={units}
              addProductCompoundUnits={addProductCompoundUnits}
              updateProductCompoundUnit={updateProductCompoundUnit}
              deleteProductCompoundUnit={deleteProductCompoundUnit}
              fetchProductCompoundUnits={fetchProductCompoundUnits}
              cPageDetails={cPageDetails}
              canManage={auth.group.permission.can_manage_product}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2">
            <ProductBrands
              brands={product_brands}
              addProductBrand={addProductBrand}
              updateProductBrand={updateProductBrand}
              deleteProductBrand={deleteProductBrand}
              pageDetails={brandPageDetails}
              fetchProductBrand={fetchProductBrands}
              canManage={auth.group.permission.can_manage_product}
            />
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
  productsReducer: state.productsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Init product master view for distributor */
export default connect(mapStateToProps, {
  fetchProductUnits,
  addProductUnits,
  fetchProductCompoundUnits,
  addProductCompoundUnits,
  fetchProductPriceLevels,
  addProductLevels,
  updateProductUnits,
  deleteUnit,
  updateProductCompoundUnit,
  deleteProductCompoundUnit,
  updatePriceLevel,
  deletePriceLevel,
  fetchProductBrands,
  addProductBrand,
  updateProductBrand,
  deleteProductBrand,
})(ProductMaster);

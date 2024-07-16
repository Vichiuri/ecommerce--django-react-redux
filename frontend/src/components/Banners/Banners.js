import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBanners,
  addBanner,
  updateBanner,
  deleteBanner,
  updateBannerPosition,
} from "../../redux/Actions/Banners";
import { fetchProducts } from "../../redux/Actions/Products";
import { fetchPriceOffers } from "../../redux/Actions/Offers";
import PermissionHandler from "../../utils/PermissionHandler";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import "./Banners.css";
import ViewBanners from "./ViewBanners";

class Banners extends Component {
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
    this.props.fetchBanners();
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
      bannersReducer,
      addBanner,
      deleteBanner,
      updateBanner,
      auth,
      offersReducer,
      productsReducer,
      fetchProducts,
      fetchPriceOffers,
      updateBannerPosition,
    } = this.props;
    const { banners, isLoading } = bannersReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_manage_mobile) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    return (
      <div>
        <SimpleBackdrop
          open={
            isLoading || offersReducer.isLoading || productsReducer.isLoading
          }
        />
        <ViewBanners
          banners={banners}
          deleteBanner={deleteBanner}
          updateBanner={updateBanner}
          addBanner={addBanner}
          products={productsReducer.products}
          offers={offersReducer.offers}
          fetchProducts={fetchProducts}
          fetchPriceOffers={fetchPriceOffers}
          updateBannerPosition={updateBannerPosition}
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
  bannersReducer: state.bannersReducer,
  productsReducer: state.productsReducer,
  offersReducer: state.offersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View and add banners view */
export default connect(mapStateToProps, {
  fetchBanners,
  addBanner,
  updateBanner,
  deleteBanner,
  fetchProducts,
  fetchPriceOffers,
  updateBannerPosition,
})(Banners);

import Axios from "axios";
import { createErrorMessage } from "../../../../frontend/src/redux/Actions/Messages";
import TokenConfig from "../../../../frontend/src/utils/TokenConfig";
import {
  RETAILER_PRODUCTS_LOADING,
  RETAILER_PRODUCTS_ERROR,
  RETAILER_CATEGORIES_LOADED,
  RETAILER_BANNERS_LOADED,
  RETAILER_OFFERS_LOADED,
  RETAILER_NEW_ARRIVALS,
} from "./types";

export const retailerDashBoardItems =
  (distributor_id) => (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });

    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/retailer_dashboard_view/?distributor_id=${distributor_id}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_CATEGORIES_LOADED,
          payload: { categories: res.data.categories },
        });
        dispatch({
          type: RETAILER_BANNERS_LOADED,
          payload: { banners: res.data.banners },
        });
        dispatch({
          type: RETAILER_OFFERS_LOADED,
          payload: { offers: res.data.offers },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

export const fetchCategoryProducts = (category_id) => (dispatch, getState) => {
  dispatch({
    type: RETAILER_PRODUCTS_LOADING,
  });

  const config = TokenConfig(getState);

  Axios.get("../retailer/api/retailer_category_products/", config)
    .then((res) => {})
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const retailerNewArrivalProducts =
  (distributor_id) => (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/retailer_new_arrivals/?distributor_id=${distributor_id}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_NEW_ARRIVALS,
          payload: { products: res.data.products },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

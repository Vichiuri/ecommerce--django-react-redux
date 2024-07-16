import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import { createErrorMessage } from "./Messages";
import {
  ORDER_REPORTS_ERROR,
  ORDER_REPORTS_LOADED,
  ORDER_REPORTS_LOADING,
  PRODUCT_REPORTS_LOADED,
  RETAILER_REPORTS_LOADED,
  SALES_TARGET_INDIVIDUAL_LOADED,
  SALES_TARGET_REPORT_LOADED,
} from "./types";

export const fetchOrdersStatics =
  (from_date, to_date) => (dispatch, getState) => {
    dispatch({ type: ORDER_REPORTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/order_statics/?from_date=${from_date}&to_date=${to_date}`,
      config
    )
      .then((res) => {
        dispatch({ type: ORDER_REPORTS_LOADED, payload: res.data });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: ORDER_REPORTS_ERROR });
      });
  };

export const fetchRetailersStatics =
  (from_date, to_date) => (dispatch, getState) => {
    dispatch({ type: ORDER_REPORTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/retailer_statics/?from_date=${from_date}&to_date=${to_date}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_REPORTS_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: ORDER_REPORTS_ERROR });
      });
  };

export const fetchProductStatics =
  (from_date, to_date) => (dispatch, getState) => {
    dispatch({ type: ORDER_REPORTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/dist_statics/?from_date=${from_date}&to_date=${to_date}`,
      config
    )
      .then((res) => {
        dispatch({
          type: PRODUCT_REPORTS_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: ORDER_REPORTS_ERROR });
      });
  };

export const fetchSalesTargetReport =
  (from_date, period) => (dispatch, getState) => {
    dispatch({ type: ORDER_REPORTS_LOADING });
    const config = TokenConfig(getState);

    const url = period
      ? `../retailer/api/sales_group_statics/?from_date=${from_date}&period=${period}`
      : `../retailer/api/sales_group_statics/?from_date=${from_date}`;

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: SALES_TARGET_REPORT_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: ORDER_REPORTS_ERROR });
      });
  };

export const fetchIndividualSalesManStatics =
  (from_date, sales_group) => (dispatch, getState) => {
    dispatch({ type: ORDER_REPORTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `../retailer/api/sales_man_statics/?from_date=${from_date}&salegroup_id=${sales_group}`,
      config
    )
      .then((res) => {
        dispatch({
          type: SALES_TARGET_INDIVIDUAL_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: ORDER_REPORTS_ERROR });
      });
  };

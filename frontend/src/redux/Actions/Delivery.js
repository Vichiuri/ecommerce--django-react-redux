import TokenConfig from "../../utils/TokenConfig";
import {
  DELIVERY_ADD,
  DELIVERY_ERROR,
  DELIVERY_LOADED,
  DELIVERY_LOADING,
  ORDER_DISPATCHED,
  ORDER_PARTIAL_DISPATCHED,
  PARTIAL_DELIVERY_LOADED,
} from "./types";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import Axios from "axios";

export const fetchDeliveries = (page) => (dispatch, getState) => {
  dispatch({ type: DELIVERY_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/delivery?page=${page}`, config)
    .then((res) => {
      dispatch({
        type: DELIVERY_LOADED,
        payload: {
          deliveries: res.data.deliveries,
          currentPage: page,
          lastPage: res.data.last_page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      if (errors.status == 401) {
        dispatch({ type: AUTH_ERRORS });
      }

      dispatch(createErrorMessage(errors));
      dispatch({ type: DELIVERY_ERROR });
    });
};

export const dispatchOrder = (body) => (dispatch, getState) => {
  dispatch({ type: DELIVERY_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/delivery/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DELIVERY_LOADED,
        payload: res.data,
      });
      dispatch({
        type: ORDER_DISPATCHED,
        payload: body.order_id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      if (errors.status == 401) {
        dispatch({ type: AUTH_ERRORS });
      }

      dispatch(createErrorMessage(errors));
      dispatch({ type: DELIVERY_ERROR });
    });
};

export const fetchPartialDelivery = (page) => (dispatch, getState) => {
  dispatch({ type: DELIVERY_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/partial_delivery/?page=${page}`, config)
    .then((res) => {
      dispatch({
        type: PARTIAL_DELIVERY_LOADED,
        payload: {
          deliveries: res.data.deliveries,
          currentPage: page,
          lastPage: res.data.last_page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      if (errors.status == 401) {
        dispatch({ type: AUTH_ERRORS });
      }

      dispatch(createErrorMessage(errors));
      dispatch({ type: DELIVERY_ERROR });
    });
};

export const dispatchPartialOrder = (body) => (dispatch, getState) => {
  dispatch({ type: DELIVERY_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/partial_delivery/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DELIVERY_ADD,
        payload: res.data,
      });
      dispatch({
        type: ORDER_PARTIAL_DISPATCHED,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      if (errors.status == 401) {
        dispatch({ type: AUTH_ERRORS });
      }

      dispatch(createErrorMessage(errors));
      dispatch({ type: DELIVERY_ERROR });
    });
};

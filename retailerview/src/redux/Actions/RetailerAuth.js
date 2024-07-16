import Axios from "axios";
import TokenConfig from "../../../../frontend/src/utils/TokenConfig";
import {
  AUTH_ERRORS,
  GET_USER,
  LOGIN_SUCCESS,
  USER_LOADING,
  UPDATE_USER,
  USER_ERRORS,
} from "./types";
import {
  createErrorMessage,
  createSuccessMessage,
} from "../../../../frontend/src/redux/Actions/Messages";

export const retailerLogin = (email, password) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  let config = TokenConfig(getState);

  Axios.post(
    "../retailer/api/auth/retailer_login/",
    { email, password },
    config
  )
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: AUTH_ERRORS });
    });
};

export const retailerForgotPassword = (email) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  let config = TokenConfig(getState);

  Axios.post("../retailer/api/auth/forgot/", { email }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: AUTH_ERRORS,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));

      dispatch({ type: AUTH_ERRORS });
    });
};

export const fetchRetailUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  let config = TokenConfig(getState);

  Axios.get("../retailer/api/auth/retail_user/", config)
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));

      dispatch({ type: AUTH_ERRORS });
    });
};

export const logOutRetailer = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  let config = TokenConfig(getState);
  Axios.post("../retailer/api/auth/logout", null, config)
    .then((res) => {
      dispatch({
        type: AUTH_ERRORS,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: AUTH_ERRORS });
    });
};

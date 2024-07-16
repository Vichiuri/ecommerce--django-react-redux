import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  AUTH_ERRORS,
  GET_USER,
  LOGIN_SUCCESS,
  USER_LOADING,
  UPDATE_USER,
  USER_ERRORS,
} from "./types";

/**  login and load user */
export const login = (email, password) => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  let config = TokenConfig(getState);
  Axios.post("../retailer/api/auth/login", { email, password }, config)
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
      if (errors.status == 402) {
        window.location.assign("../subscription_expired");
      }
    });
};

/** Forgot password url call */
export const forgotPassword = (email) => (dispatch, getState) => {
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

/**fetch User Details */
export const fetchUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  let config = TokenConfig(getState);

  Axios.get("../retailer/api/auth/user/", config)
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
      if (errors.status != 401) {
        dispatch(createErrorMessage(errors));
      }

      dispatch({ type: AUTH_ERRORS });
      if (errors.status == 402) {
        window.location.assign("../subscription_expired");
      }
    });
};

export const updateUser = (body) => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  let config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/auth/user/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: USER_ERRORS });
    });
};

export const updateUserToken = (body) => (dispatch, getState) => {
  let config = TokenConfig(getState);

  Axios.patch("../retailer/api/auth/user/", body, config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      console.log(errors);
    });
};

//LogOut User
export const logOutUser = () => (dispatch, getState) => {
  //User Loading
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

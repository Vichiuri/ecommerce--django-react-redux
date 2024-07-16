import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  DIST_ADD,
  DIST_DELETE,
  DIST_EDIT,
  DIST_LOADED,
  GROUPS_ADD,
  GROUPS_DELETE,
  GROUPS_EDIT,
  GROUPS_ERROR,
  GROUPS_LOADED,
  GROUPS_LOADING,
} from "./types";

export const fetchManagementGroups = () => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/permission_management/", config)
    .then((res) => {
      dispatch({ type: GROUPS_LOADED, payload: res.data });
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const addManagementGroup = (body) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/permission_management/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: GROUPS_ADD,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const updateManagementGroup = (body) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/permission_management/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: GROUPS_EDIT,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const deleteManagementGroup = (id) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/permission_management/?group_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: GROUPS_DELETE,
        payload: id,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const fetchDistUser = () => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/user_management/", config)
    .then((res) => {
      dispatch({
        type: DIST_LOADED,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const addDistUser = (body) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/user_management/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DIST_ADD,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const updateDistUser = (body) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/user_management/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DIST_EDIT,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

export const deleteDistUser = (id) => (dispatch, getState) => {
  dispatch({ type: GROUPS_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/user_management/?user_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DIST_DELETE,
        payload: id,
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
      dispatch({ type: GROUPS_ERROR });
    });
};

import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  NOTIFICATION_ERROR,
  NOTIFICATION_LOADED,
  NOTIFICATION_LOADING,
  NOTIFICATION_ADD,
  NOTIFICATION_EDIT,
  NOTIFICATION_DELETE,
  DIST_NOTIFICATION_LOADED,
  DIST_VIEW_NOTIFICATION,
  DIST_NOTIFICATION_ADDED,
} from "./types";

export const fetchMobileNotifications = (page) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/notifications/?page=${page}`, config)
    .then((res) => {
      dispatch({
        type: NOTIFICATION_LOADED,
        payload: {
          notifications: res.data.notifications,
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

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const addMobileNotification = (body) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/notifications/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: NOTIFICATION_ADD,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const updateMobileNotification = (body) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/notifications/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: NOTIFICATION_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const deleteMobileNotification = (id) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/notifications/?notification_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: NOTIFICATION_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const fetchDistNotifications = (page) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/dist_notifications/?page=${page}`, config)
    .then((res) => {
      dispatch({
        type: DIST_NOTIFICATION_LOADED,
        payload: {
          notifications: res.data.notifications,
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

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const fetchViewDistNotification = (id) => (dispatch, getState) => {
  dispatch({ type: NOTIFICATION_LOADING });
  const config = TokenConfig(getState);

  Axios.get(
    `../retailer/api/view_dist_notification/?notification_id=${id}`,
    config
  )
    .then((res) => {
      dispatch({
        type: DIST_VIEW_NOTIFICATION,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: NOTIFICATION_ERROR });
    });
};

export const updateDistNotificationList =
  (notifications) => (dispatch, getState) => {
    dispatch({
      type: DIST_NOTIFICATION_ADDED,
      payload: notifications,
    });
  };

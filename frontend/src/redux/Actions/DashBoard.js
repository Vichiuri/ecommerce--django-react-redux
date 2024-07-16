import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import {
  AUTH_ERRORS,
  DASHBOARD_ERROR,
  DASHBOARD_LOADED,
  DASHBOARD_LOADING,
  DASHBOARD_MAP_DATA,
  DASHBOARD_PROGRESS,
} from "./types";

export const fetchDashBoard = () => (dispatch, getState) => {
  dispatch({ type: DASHBOARD_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/dashboard/", config)
    .then((res) => {
      dispatch({
        type: DASHBOARD_LOADED,
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
      dispatch({ type: DASHBOARD_ERROR });
    });
};

export const fetchDashBoardProgress = () => (dispatch, getState) => {
  dispatch({ type: DASHBOARD_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/check_progress/", config)
    .then((res) => {
      dispatch({
        type: DASHBOARD_PROGRESS,
        payload: res.data.view_complete,
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
      dispatch({ type: DASHBOARD_ERROR });
    });
};

export const fetchDashBoardMapStats = (country) => (dispatch, getState) => {
  dispatch({ type: DASHBOARD_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/retailer_map_view/?country=${country}`, config)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: DASHBOARD_MAP_DATA,
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
      dispatch({ type: DASHBOARD_ERROR });
    });
};

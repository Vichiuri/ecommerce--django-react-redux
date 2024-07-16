import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  COUNTRIES_LOADED,
  SETTINGS_ERROR,
  SETTINGS_LOADED,
  SETTINGS_LOADING,
  SETTINGS_EDIT,
  CITIES_LOADED,
  EMAIL_SETTINGS_LOADED,
  DASHBOARD_PROGRESS,
  DIST_OPTIONS_SETTINGS,
  UPDATE_USER_DIST_OPTIONS,
} from "./types";

export const fetchDistributorSettings = () => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);
  Axios.get("../retailer/api/dist_settings/", config)
    .then((res) => {
      dispatch({
        type: SETTINGS_LOADED,
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const editDistributorSettings = (body) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/dist_settings/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: SETTINGS_EDIT, payload: res.data });
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const fetchCountriesData = (query) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);
  const url = query
    ? `../retailer/api/world_country/?query=${query}`
    : "../retailer/api/world_country/";

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: COUNTRIES_LOADED,
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const fetchCitiesData = (query, country) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);
  const url = query
    ? `../retailer/api/world_cities/?query=${query}`
    : country
    ? `../retailer/api/world_cities/?country_id=${country}`
    : "../retailer/api/world_cities/";

  Axios.get(url, config)
    .then((res) => {
      dispatch({ type: CITIES_LOADED, payload: res.data });
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const fetchEmailSettings = () => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/email_settings/", config)
    .then((res) => {
      dispatch({ type: EMAIL_SETTINGS_LOADED, payload: res.data });
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const addEmailSettings = (body) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/email_settings/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: EMAIL_SETTINGS_LOADED, payload: res.data });
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const updateEmailSettings = (body) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/email_settings/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: EMAIL_SETTINGS_LOADED, payload: res.data });
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const fetchDistributorOptions = () => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/dist_options/", config)
    .then((res) => {
      dispatch({
        type: DIST_OPTIONS_SETTINGS,
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const updateDistOptions = (body) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/dist_options/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DIST_OPTIONS_SETTINGS,
        payload: res.data,
      });
      dispatch({
        type: UPDATE_USER_DIST_OPTIONS,
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

export const updateCompanyStatus = (body) => (dispatch, getState) => {
  dispatch({ type: SETTINGS_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("../retailer/api/dist_options/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: DIST_OPTIONS_SETTINGS,
        payload: res.data,
      });
      dispatch({
        type: UPDATE_USER_DIST_OPTIONS,
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
      dispatch({ type: SETTINGS_ERROR });
    });
};

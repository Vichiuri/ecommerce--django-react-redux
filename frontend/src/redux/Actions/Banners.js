import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  BANNERS_ADD,
  BANNERS_DELETE,
  BANNERS_EDIT,
  BANNERS_ERROR,
  BANNERS_LOADED,
  BANNERS_LOADING,
  BANNERS_POSITION_EDIT,
} from "./types";

export const fetchBanners = () => (dispatch, getState) => {
  dispatch({ type: BANNERS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("../retailer/api/dist_banners", config)
    .then((res) => {
      dispatch({ type: BANNERS_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: BANNERS_ERROR });
    });
};

export const addBanner = (body) => (dispatch, getState) => {
  dispatch({ type: BANNERS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/dist_banners/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: BANNERS_ADD,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: BANNERS_ERROR });
    });
};

export const updateBanner = (body) => (dispatch, getState) => {
  dispatch({ type: BANNERS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/dist_banners/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: BANNERS_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: BANNERS_ERROR });
    });
};

export const updateBannerPosition = (body) => (dispatch, getState) => {
  dispatch({ type: BANNERS_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("../retailer/api/dist_banners/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({ type: BANNERS_POSITION_EDIT });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: BANNERS_ERROR });
    });
};

export const deleteBanner = (id) => (dispatch, getState) => {
  dispatch({ type: BANNERS_LOADING });
  const config = TokenConfig(getState);
  Axios.delete(`../retailer/api/dist_banners/?banner_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: BANNERS_DELETE, payload: id });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: BANNERS_ERROR });
    });
};

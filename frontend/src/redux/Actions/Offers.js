import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  OFFERS_ERROR,
  OFFERS_LOADED,
  OFFERS_LOADING,
  OFFERS_ADD,
  OFFERS_EDIT,
  OFFERS_DELETE,
  DASHBOARD_PROGRESS,
} from "./types";

export const fetchPriceOffers =
  (page, product, query, rows) => (dispatch, getState) => {
    dispatch({ type: OFFERS_LOADING });
    const config = TokenConfig(getState);
    let url = `../retailer/api/priceOffer?page=${page}`;

    if (product) {
      url = url + `&product_id=${product}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }
    if (rows) {
      url = url + `&rows=${rows}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: OFFERS_LOADED,
          payload: {
            offers: res.data.price_offers,
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
        dispatch({ type: OFFERS_ERROR });
      });
  };

export function fetchSelectOffers(search, loadOptions, { page }) {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/priceOffer/?page=${page}&query=${search}`
    : `../retailer/api/priceOffer/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_offers = res.data.price_offers.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_offers,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addPriceOffer = (body) => (dispatch, getState) => {
  dispatch({ type: OFFERS_LOADING });
  const config = TokenMultiPartConfig(getState);
  Axios.post("../retailer/api/priceOffer/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: OFFERS_ADD, payload: res.data });
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

      dispatch(createErrorMessage(errors));
      dispatch({ type: OFFERS_ERROR });
    });
};

export const updateOffers = (body) => (dispatch, getState) => {
  dispatch({ type: OFFERS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/priceOffer/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: OFFERS_EDIT, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: OFFERS_ERROR });
    });
};

export const deleteOffer = (id) => (dispatch, getState) => {
  dispatch({ type: OFFERS_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.delete(`../retailer/api/priceOffer?offer_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: OFFERS_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: OFFERS_ERROR });
    });
};

import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  SALES_LOADING,
  SALES_LOADED,
  SALES_ERROR,
  SALES_ADD,
  SALES_TARGET_LOADED,
  SALES_ADD_TARGET_LOADED,
  SALES_EDIT,
  SALES_DELETE,
  SALES_EDIT_TARGET,
  SALES_DELETE_TARGET,
  DASHBOARD_PROGRESS,
} from "./types";

export const fetchSalesPeople = (page, query, rows) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);
  let url = `../retailer/api/saleman?page=${page}`;

  if (query) {
    url = url + `&query=${query}`;
  }
  if (rows) {
    url = url + `&rows=${rows}`;
  }

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: SALES_LOADED,
        payload: {
          sales_people: res.data.sales_people,
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
      dispatch({ type: SALES_ERROR });
    });
};

export function fetchSelectSalesPeople(search, loadOptions, { page }) {
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
    ? `../retailer/api/saleman?page=${page}&query=${search}`
    : `../retailer/api/saleman?page=${page}`;
  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_sales = res.data.sales_people.map((item) => {
          return {
            value: item,
            label: item.last_name
              ? `${item.first_name} ${item.last_name}`
              : item.first_name,
          };
        });

        resolve({
          options: view_sales,
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

export const addSalesPerson = (body) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/saleman/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_ADD,
        payload: res.data,
      });
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
      dispatch({ type: SALES_ERROR });
    });
};

export const editSalesPerson = (body) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/saleman/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: SALES_ERROR });
    });
};

export const deleteSalesPerson = (id) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/saleman?salesman_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: SALES_ERROR });
    });
};

//
export const fetchSalesTarget = (page, query, rows) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);
  let url = `../retailer/api/sales_target?page=${page}`

  if (query) {
    url = url + `&query=${query}`;
  }
  if (rows) {
    url = url + `&rows=${rows}`;
  }


  Axios.get(url, config)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SALES_TARGET_LOADED,
        payload: {
          sales_target: res.data.sales_target,
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
      dispatch({ type: SALES_ERROR });
    });
};

export const addSalesTarget = (body) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);
  Axios.post("../retailer/api/sales_target/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_ADD_TARGET_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: SALES_ERROR });
    });
};

export const updateSalesTarget = (body) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/sales_target/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_EDIT_TARGET,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: SALES_ERROR });
    });
};

export const deleteSalesTarget = (id) => (dispatch, getState) => {
  dispatch({ type: SALES_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/sales_target?salestarget_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: SALES_DELETE_TARGET,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: SALES_ERROR });
    });
};

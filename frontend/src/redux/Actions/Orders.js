import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  ORDER_ADD,
  ORDER_ADD_PLACED,
  ORDER_ADD_RET_DIST,
  ORDER_DELETE,
  ORDER_DELETE_RET_DIST,
  ORDER_DISPATCH_RET_ORDER,
  ORDER_EDIT,
  ORDER_EDIT_RET_DIST,
  ORDER_ERROR,
  ORDER_ITEM_LOADED,
  ORDER_LOADED,
  ORDER_LOADING,
  ORDER_LOGS,
  ORDER_PLACED,
  ORDER_PLACED_DELETE,
  ORDER_PLACED_EDIT,
  ORDER_RET_DIST,
  ORDER_UPDATE_RET_DIST,
  ORDER_UPDATE_STATUS,
} from "./types";

export const fetchOrders =
  (page, status, rows, query) => (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING });
    const config = TokenConfig(getState);
    let url = `../retailer/api/retailer_dist_orders?page=${page}`;
    if (status) {
      url = url + `&status=${status}`;
    }
    if (rows) {
      url = url + `&rows=${rows}`;
    }
    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: ORDER_LOADED,
          payload: {
            orders: res.data.orders,
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
        dispatch({ type: ORDER_ERROR });
      });
  };

export const searchOrders = (query) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);
  Axios.get(`../retailer/api/retailer_search_orders/?query=${query}`, config)
    .then((res) => {
      dispatch({
        type: ORDER_LOADED,
        payload: {
          orders: res.data.orders,
          currentPage: 1,
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
      dispatch({ type: ORDER_ERROR });
    });
};

export const addRetailerOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/retailer_dist_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_ADD,
        payload: res.data,
      });
      dispatch({
        type: ORDER_PLACED,
        payload: {
          place_orders: [],
          currentPage: 1,
          lastPage: 1,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const clearPlaceOrderTable = () => (dispatch, getState) => {
  dispatch({
    type: ORDER_PLACED,
    payload: {
      place_orders: [],
      currentPage: 1,
      lastPage: 1,
    },
  });
};

export const editRetailerOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);
  Axios.put("../retailer/api/retailer_dist_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_EDIT,
        payload: res.data,
      });
      dispatch({
        type: ORDER_PLACED,
        payload: {
          place_orders: [],
          currentPage: 1,
          lastPage: 1,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const updateRetailerOrderStatus = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("../retailer/api/retailer_dist_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_UPDATE_STATUS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const clearRetailOrderApproved = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/change_approved_order/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_UPDATE_STATUS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const cancelRetailOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("../retailer/api/change_approved_order/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_UPDATE_STATUS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const deleteRetailOrder = (id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/retailer_dist_orders?order_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const fetchPlaceOrders = (page, retailer) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);
  const url = retailer
    ? `../retailer/api/distOrder?page=${page}&retailer_id=${retailer}`
    : `../retailer/api/distOrder?page=${page}`;

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: ORDER_PLACED,
        payload: {
          place_orders: res.data.orders,
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
      dispatch({ type: ORDER_ERROR });
    });
};

export const fetchRetDistOrder = (page, id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/ret_dist_orders/?page=${page}&id=${id}`, config)
    .then((res) => {
      dispatch({
        type: ORDER_RET_DIST,
        payload: {
          id: id,
          dist_orders: res.data.dist_orders,
          lastPage: res.data.last_page,
          currentPage: page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const fetchEditRetDistOrders = (page, id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/ret_dist_orders/?page=${page}&id=${id}`, config)
    .then((res) => {
      dispatch({
        type: ORDER_EDIT_RET_DIST,
        payload: {
          id: id,
          dist_orders: res.data.dist_orders,
          lastPage: res.data.last_page,
          currentPage: page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const addOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/distOrder/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: ORDER_ADD_PLACED,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const updateOrder = (body, index) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/distOrder/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: ORDER_PLACED_EDIT,
        payload: { order: res.data.order, index: index },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const deleteOrder = (id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/distOrder?order_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: ORDER_PLACED_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};
export const fetchOrderLogs = (id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../history/distributor/RetailOrders/${id}/show`, config)
    .then((res) => {
      dispatch({ type: ORDER_LOGS, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const fetchRetailOrder = (id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/update_orders/?order_id=${id}`, config)
    .then((res) => {
      dispatch({ type: ORDER_ITEM_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const updateAddRetailOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/update_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: ORDER_ADD_RET_DIST,
        payload: res.data,
      });
      dispatch({ type: ORDER_ITEM_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const updateEditRetailOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);
  console.log(body);
  Axios.put("../retailer/api/update_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));

      dispatch({
        type: ORDER_UPDATE_RET_DIST,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const updateDeleteRetailOrder = (body) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("../retailer/api/update_orders/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: ORDER_DELETE_RET_DIST,
        payload: res.data,
      });
      dispatch({ type: ORDER_ITEM_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

export const fetchRetDispatchOrder = (id) => (dispatch, getState) => {
  dispatch({ type: ORDER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/update_dispatch_retorder/?id=${id}`, config)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ORDER_DISPATCH_RET_ORDER,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: ORDER_ERROR });
    });
};

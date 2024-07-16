(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Orders_ViewOrderLogs_js-frontend_src_redux_Actions_Delivery_js-fronte-05118b"],{

/***/ "./frontend/src/components/Orders/ViewOrderLogs.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Orders/ViewOrderLogs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOrderLogs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Capitalize */ "./frontend/src/utils/Capitalize.js");
/* harmony import */ var _utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatDate */ "./frontend/src/utils/FormatDate.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");




function ViewOrderLogs(_ref) {
  var order_logs = _ref.order_logs,
      changePage = _ref.changePage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "View Logs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Orders",
    propsName: "View Logs",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, order_logs && order_logs.length > 0 ? order_logs.map(function (log, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index,
      className: "border-bottom p-2"
    }, log.changes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, log.changes.map(function (change, index) {
      var typeName = change.field.split("_");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        className: "col-lg-3 col-md-6 col-sm-12 col-xs-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, typeName[1] ? "".concat((0,_utils_Capitalize__WEBPACK_IMPORTED_MODULE_1__.default)(typeName[0]), " ").concat((0,_utils_Capitalize__WEBPACK_IMPORTED_MODULE_1__.default)(typeName[1])) : (0,_utils_Capitalize__WEBPACK_IMPORTED_MODULE_1__.default)(typeName[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "From: "), Date.parse(change.from) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ml-2"
      }, (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__.default)(change.from)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ml-2"
      }, change.from)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "To: "), Date.parse(change.to) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ml-2"
      }, (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__.default)(change.to)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ml-2"
      }, change.to))));
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row justify-content-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "By: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "text-success ml-2"
    }, log.user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Type: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "text-danger ml-2"
    }, log.type))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "On: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "text-warning ml-2"
    }, (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__.default)(log.date)))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))));
}

/***/ }),

/***/ "./frontend/src/redux/Actions/Delivery.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/Actions/Delivery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDeliveries": () => (/* binding */ fetchDeliveries),
/* harmony export */   "dispatchOrder": () => (/* binding */ dispatchOrder),
/* harmony export */   "fetchPartialDelivery": () => (/* binding */ fetchPartialDelivery),
/* harmony export */   "dispatchPartialOrder": () => (/* binding */ dispatchPartialOrder)
/* harmony export */ });
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var fetchDeliveries = function fetchDeliveries(page) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_0__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("../retailer/api/delivery?page=".concat(page), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADED,
        payload: {
          deliveries: res.data.deliveries,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: AUTH_ERRORS
        });
      }

      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_ERROR
      });
    });
  };
};
var dispatchOrder = function dispatchOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_0__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("../retailer/api/delivery/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADED,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.ORDER_DISPATCHED,
        payload: body.order_id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: AUTH_ERRORS
        });
      }

      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_ERROR
      });
    });
  };
};
var fetchPartialDelivery = function fetchPartialDelivery(page) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_0__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("../retailer/api/partial_delivery/?page=".concat(page), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.PARTIAL_DELIVERY_LOADED,
        payload: {
          deliveries: res.data.deliveries,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: AUTH_ERRORS
        });
      }

      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_ERROR
      });
    });
  };
};
var dispatchPartialOrder = function dispatchPartialOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_0__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("../retailer/api/partial_delivery/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_ADD,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.ORDER_PARTIAL_DISPATCHED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: AUTH_ERRORS
        });
      }

      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DELIVERY_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/redux/Actions/Orders.js":
/*!**********************************************!*\
  !*** ./frontend/src/redux/Actions/Orders.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrders": () => (/* binding */ fetchOrders),
/* harmony export */   "searchOrders": () => (/* binding */ searchOrders),
/* harmony export */   "addRetailerOrder": () => (/* binding */ addRetailerOrder),
/* harmony export */   "clearPlaceOrderTable": () => (/* binding */ clearPlaceOrderTable),
/* harmony export */   "editRetailerOrder": () => (/* binding */ editRetailerOrder),
/* harmony export */   "updateRetailerOrderStatus": () => (/* binding */ updateRetailerOrderStatus),
/* harmony export */   "clearRetailOrderApproved": () => (/* binding */ clearRetailOrderApproved),
/* harmony export */   "cancelRetailOrder": () => (/* binding */ cancelRetailOrder),
/* harmony export */   "deleteRetailOrder": () => (/* binding */ deleteRetailOrder),
/* harmony export */   "fetchPlaceOrders": () => (/* binding */ fetchPlaceOrders),
/* harmony export */   "fetchRetDistOrder": () => (/* binding */ fetchRetDistOrder),
/* harmony export */   "fetchEditRetDistOrders": () => (/* binding */ fetchEditRetDistOrders),
/* harmony export */   "addOrder": () => (/* binding */ addOrder),
/* harmony export */   "updateOrder": () => (/* binding */ updateOrder),
/* harmony export */   "deleteOrder": () => (/* binding */ deleteOrder),
/* harmony export */   "fetchOrderLogs": () => (/* binding */ fetchOrderLogs),
/* harmony export */   "fetchRetailOrder": () => (/* binding */ fetchRetailOrder),
/* harmony export */   "updateAddRetailOrder": () => (/* binding */ updateAddRetailOrder),
/* harmony export */   "updateEditRetailOrder": () => (/* binding */ updateEditRetailOrder),
/* harmony export */   "updateDeleteRetailOrder": () => (/* binding */ updateDeleteRetailOrder),
/* harmony export */   "fetchRetDispatchOrder": () => (/* binding */ fetchRetDispatchOrder)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");




var fetchOrders = function fetchOrders(page, status, rows, query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/retailer_dist_orders?page=".concat(page);

    if (status) {
      url = url + "&status=".concat(status);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADED,
        payload: {
          orders: res.data.orders,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var searchOrders = function searchOrders(query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_search_orders/?query=".concat(query), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADED,
        payload: {
          orders: res.data.orders,
          currentPage: 1,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var addRetailerOrder = function addRetailerOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/retailer_dist_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ADD,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED,
        payload: {
          place_orders: [],
          currentPage: 1,
          lastPage: 1
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var clearPlaceOrderTable = function clearPlaceOrderTable() {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED,
      payload: {
        place_orders: [],
        currentPage: 1,
        lastPage: 1
      }
    });
  };
};
var editRetailerOrder = function editRetailerOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/retailer_dist_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_EDIT,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED,
        payload: {
          place_orders: [],
          currentPage: 1,
          lastPage: 1
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var updateRetailerOrderStatus = function updateRetailerOrderStatus(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch("../retailer/api/retailer_dist_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_UPDATE_STATUS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var clearRetailOrderApproved = function clearRetailOrderApproved(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/change_approved_order/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_UPDATE_STATUS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var cancelRetailOrder = function cancelRetailOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch("../retailer/api/change_approved_order/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_UPDATE_STATUS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var deleteRetailOrder = function deleteRetailOrder(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/retailer_dist_orders?order_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchPlaceOrders = function fetchPlaceOrders(page, retailer) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = retailer ? "../retailer/api/distOrder?page=".concat(page, "&retailer_id=").concat(retailer) : "../retailer/api/distOrder?page=".concat(page);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED,
        payload: {
          place_orders: res.data.orders,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchRetDistOrder = function fetchRetDistOrder(page, id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/ret_dist_orders/?page=".concat(page, "&id=").concat(id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_RET_DIST,
        payload: {
          id: id,
          dist_orders: res.data.dist_orders,
          lastPage: res.data.last_page,
          currentPage: page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchEditRetDistOrders = function fetchEditRetDistOrders(page, id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/ret_dist_orders/?page=".concat(page, "&id=").concat(id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_EDIT_RET_DIST,
        payload: {
          id: id,
          dist_orders: res.data.dist_orders,
          lastPage: res.data.last_page,
          currentPage: page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var addOrder = function addOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/distOrder/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ADD_PLACED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var updateOrder = function updateOrder(body, index) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/distOrder/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED_EDIT,
        payload: {
          order: res.data.order,
          index: index
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var deleteOrder = function deleteOrder(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/distOrder?order_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_PLACED_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchOrderLogs = function fetchOrderLogs(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../history/distributor/RetailOrders/".concat(id, "/show"), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOGS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchRetailOrder = function fetchRetailOrder(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/update_orders/?order_id=".concat(id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ITEM_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var updateAddRetailOrder = function updateAddRetailOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/update_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ADD_RET_DIST,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ITEM_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var updateEditRetailOrder = function updateEditRetailOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    console.log(body);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/update_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_UPDATE_RET_DIST,
        payload: res.data
      });
    })["catch"](function (error) {
      console.log(error);
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var updateDeleteRetailOrder = function updateDeleteRetailOrder(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch("../retailer/api/update_orders/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_DELETE_RET_DIST,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ITEM_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};
var fetchRetDispatchOrder = function fetchRetDispatchOrder(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/update_dispatch_retorder/?id=".concat(id), config).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_DISPATCH_RET_ORDER,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/utils/Capitalize.js":
/*!******************************************!*\
  !*** ./frontend/src/utils/Capitalize.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./frontend/src/utils/FormatCommas.js":
/*!********************************************!*\
  !*** ./frontend/src/utils/FormatCommas.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input) {
  var parts = input.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/***/ })

}]);
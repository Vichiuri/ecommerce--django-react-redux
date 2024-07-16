(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["main-frontend_src_r"],{

/***/ "./frontend/src/redux/Actions/Auth.js":
/*!********************************************!*\
  !*** ./frontend/src/redux/Actions/Auth.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "forgotPassword": () => (/* binding */ forgotPassword),
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser),
/* harmony export */   "updateUserToken": () => (/* binding */ updateUserToken),
/* harmony export */   "logOutUser": () => (/* binding */ logOutUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





/**  login and load user */

var login = function login(email, password) {
  return function (dispatch, getState) {
    //User Loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/auth/login", {
      email: email,
      password: password
    }, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.LOGIN_SUCCESS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });

      if (errors.status == 402) {
        window.location.assign("../subscription_expired");
      }
    });
  };
};
/** Forgot password url call */

var forgotPassword = function forgotPassword(email) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/auth/forgot/", {
      email: email
    }, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });
    });
  };
};
/**fetch User Details */

var fetchUser = function fetchUser() {
  return function (dispatch, getState) {
    //User Loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/auth/user/", config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.GET_USER,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status != 401) {
        dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      }

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });

      if (errors.status == 402) {
        window.location.assign("../subscription_expired");
      }
    });
  };
};
var updateUser = function updateUser(body) {
  return function (dispatch, getState) {
    //User Loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/auth/user/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.UPDATE_USER,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_ERRORS
      });
    });
  };
};
var updateUserToken = function updateUserToken(body) {
  return function (dispatch, getState) {
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch("../retailer/api/auth/user/", body, config).then(function (res) {
      console.log(res.data);
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      console.log(errors);
    });
  };
}; //LogOut User

var logOutUser = function logOutUser() {
  return function (dispatch, getState) {
    //User Loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.USER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/auth/logout", null, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.AUTH_ERRORS
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/redux/Actions/DashBoard.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/Actions/DashBoard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDashBoard": () => (/* binding */ fetchDashBoard),
/* harmony export */   "fetchDashBoardProgress": () => (/* binding */ fetchDashBoardProgress),
/* harmony export */   "fetchDashBoardMapStats": () => (/* binding */ fetchDashBoardMapStats)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");



var fetchDashBoard = function fetchDashBoard() {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/dashboard/", config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_2__.AUTH_ERRORS
        });
      }

      dispatch(createErrorMessage(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_ERROR
      });
    });
  };
};
var fetchDashBoardProgress = function fetchDashBoardProgress() {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/check_progress/", config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_PROGRESS,
        payload: res.data.view_complete
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_2__.AUTH_ERRORS
        });
      }

      dispatch(createErrorMessage(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_ERROR
      });
    });
  };
};
var fetchDashBoardMapStats = function fetchDashBoardMapStats(country) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_map_view/?country=".concat(country), config).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_MAP_DATA,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };

      if (errors.status == 401) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_2__.AUTH_ERRORS
        });
      }

      dispatch(createErrorMessage(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/redux/Actions/Messages.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/Actions/Messages.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSuccessMessage": () => (/* binding */ createSuccessMessage),
/* harmony export */   "createErrorMessage": () => (/* binding */ createErrorMessage)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");
 //Create Messages

var createSuccessMessage = function createSuccessMessage(responseMessage, status) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_MESSAGES,
      payload: {
        responseMessage: responseMessage,
        isError: false,
        status: status
      }
    });
  };
};
var createErrorMessage = function createErrorMessage(errors) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_ERRORS,
      payload: errors
    });
  };
};

/***/ }),

/***/ "./frontend/src/redux/Actions/Notification.js":
/*!****************************************************!*\
  !*** ./frontend/src/redux/Actions/Notification.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMobileNotifications": () => (/* binding */ fetchMobileNotifications),
/* harmony export */   "addMobileNotification": () => (/* binding */ addMobileNotification),
/* harmony export */   "updateMobileNotification": () => (/* binding */ updateMobileNotification),
/* harmony export */   "deleteMobileNotification": () => (/* binding */ deleteMobileNotification),
/* harmony export */   "fetchDistNotifications": () => (/* binding */ fetchDistNotifications),
/* harmony export */   "fetchViewDistNotification": () => (/* binding */ fetchViewDistNotification),
/* harmony export */   "updateDistNotificationList": () => (/* binding */ updateDistNotificationList)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchMobileNotifications = function fetchMobileNotifications(page) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/notifications/?page=".concat(page), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADED,
        payload: {
          notifications: res.data.notifications,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var addMobileNotification = function addMobileNotification(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/notifications/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ADD,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var updateMobileNotification = function updateMobileNotification(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/notifications/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var deleteMobileNotification = function deleteMobileNotification(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/notifications/?notification_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var fetchDistNotifications = function fetchDistNotifications(page) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/dist_notifications/?page=".concat(page), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.DIST_NOTIFICATION_LOADED,
        payload: {
          notifications: res.data.notifications,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var fetchViewDistNotification = function fetchViewDistNotification(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/view_dist_notification/?notification_id=".concat(id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.DIST_VIEW_NOTIFICATION,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATION_ERROR
      });
    });
  };
};
var updateDistNotificationList = function updateDistNotificationList(notifications) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.DIST_NOTIFICATION_ADDED,
      payload: notifications
    });
  };
};

/***/ }),

/***/ "./frontend/src/redux/Actions/types.js":
/*!*********************************************!*\
  !*** ./frontend/src/redux/Actions/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ERRORS": () => (/* binding */ GET_ERRORS),
/* harmony export */   "GET_MESSAGES": () => (/* binding */ GET_MESSAGES),
/* harmony export */   "USER_LOADING": () => (/* binding */ USER_LOADING),
/* harmony export */   "USER_LOADED": () => (/* binding */ USER_LOADED),
/* harmony export */   "GET_USER": () => (/* binding */ GET_USER),
/* harmony export */   "REFRESH_AUTH": () => (/* binding */ REFRESH_AUTH),
/* harmony export */   "AUTH_ERRORS": () => (/* binding */ AUTH_ERRORS),
/* harmony export */   "LOGIN_SUCCESS": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "LOG_OUT": () => (/* binding */ LOG_OUT),
/* harmony export */   "UPDATE_USER": () => (/* binding */ UPDATE_USER),
/* harmony export */   "USER_ERRORS": () => (/* binding */ USER_ERRORS),
/* harmony export */   "UPDATE_USER_DIST_OPTIONS": () => (/* binding */ UPDATE_USER_DIST_OPTIONS),
/* harmony export */   "PRODUCT_LOADING": () => (/* binding */ PRODUCT_LOADING),
/* harmony export */   "PRODUCT_LOADED": () => (/* binding */ PRODUCT_LOADED),
/* harmony export */   "PRODUCT_PAGINATION_LOADED": () => (/* binding */ PRODUCT_PAGINATION_LOADED),
/* harmony export */   "PRODUCT_ERROR": () => (/* binding */ PRODUCT_ERROR),
/* harmony export */   "PRODUCT_ADD": () => (/* binding */ PRODUCT_ADD),
/* harmony export */   "PRODUCT_EDIT": () => (/* binding */ PRODUCT_EDIT),
/* harmony export */   "PRODUCT_DELETE": () => (/* binding */ PRODUCT_DELETE),
/* harmony export */   "PRODUCT_STATS": () => (/* binding */ PRODUCT_STATS),
/* harmony export */   "PRODUCT_STATS_ADD": () => (/* binding */ PRODUCT_STATS_ADD),
/* harmony export */   "PRODUCT_CATEGORIES": () => (/* binding */ PRODUCT_CATEGORIES),
/* harmony export */   "PRODUCT_CATEGORIES_ADD": () => (/* binding */ PRODUCT_CATEGORIES_ADD),
/* harmony export */   "PRODUCT_CATEGORIES_EDIT": () => (/* binding */ PRODUCT_CATEGORIES_EDIT),
/* harmony export */   "PRODUCT_CATEGORIES_DELETE": () => (/* binding */ PRODUCT_CATEGORIES_DELETE),
/* harmony export */   "PRODUCT_UNITS": () => (/* binding */ PRODUCT_UNITS),
/* harmony export */   "PRODUCT_UNITS_ADD": () => (/* binding */ PRODUCT_UNITS_ADD),
/* harmony export */   "PRODUCT_UNITS_UPDATE": () => (/* binding */ PRODUCT_UNITS_UPDATE),
/* harmony export */   "PRODUCT_UNITS_DELETE": () => (/* binding */ PRODUCT_UNITS_DELETE),
/* harmony export */   "PRODUCT_COMPOUND_UNITS": () => (/* binding */ PRODUCT_COMPOUND_UNITS),
/* harmony export */   "PRODUCT_ADD_COMPOUND_UNITS": () => (/* binding */ PRODUCT_ADD_COMPOUND_UNITS),
/* harmony export */   "PRODUCT_COMPOUND_UNITS_UPDATE": () => (/* binding */ PRODUCT_COMPOUND_UNITS_UPDATE),
/* harmony export */   "PRODUCT_COMPOUND_UNITS_DELETE": () => (/* binding */ PRODUCT_COMPOUND_UNITS_DELETE),
/* harmony export */   "PRODUCT_PRICE_LEVELS": () => (/* binding */ PRODUCT_PRICE_LEVELS),
/* harmony export */   "PRODUCT_ADD_PRICE_LEVELS": () => (/* binding */ PRODUCT_ADD_PRICE_LEVELS),
/* harmony export */   "PRODUCT_PRICE_LEVELS_UPDATE": () => (/* binding */ PRODUCT_PRICE_LEVELS_UPDATE),
/* harmony export */   "PRODUCT_PRICE_LEVELS_DELETE": () => (/* binding */ PRODUCT_PRICE_LEVELS_DELETE),
/* harmony export */   "PRODUCT_VIEW_PRICE_LIST": () => (/* binding */ PRODUCT_VIEW_PRICE_LIST),
/* harmony export */   "PRODUCT_PRICE_LIST": () => (/* binding */ PRODUCT_PRICE_LIST),
/* harmony export */   "PRODUCT_ADD_PRICE_LIST": () => (/* binding */ PRODUCT_ADD_PRICE_LIST),
/* harmony export */   "PRODUCT_EDIT_PRICE_LIST": () => (/* binding */ PRODUCT_EDIT_PRICE_LIST),
/* harmony export */   "PRODUCT_DELETE_PRICE_LIST": () => (/* binding */ PRODUCT_DELETE_PRICE_LIST),
/* harmony export */   "PRODUCT_BRANDS": () => (/* binding */ PRODUCT_BRANDS),
/* harmony export */   "PRODUCT_BRANDS_ADD": () => (/* binding */ PRODUCT_BRANDS_ADD),
/* harmony export */   "PRODUCT_BRANDS_UPDATE": () => (/* binding */ PRODUCT_BRANDS_UPDATE),
/* harmony export */   "PRODUCT_BRANDS_DELETE": () => (/* binding */ PRODUCT_BRANDS_DELETE),
/* harmony export */   "ORDER_LOADING": () => (/* binding */ ORDER_LOADING),
/* harmony export */   "ORDER_LOADED": () => (/* binding */ ORDER_LOADED),
/* harmony export */   "ORDER_ITEM_LOADED": () => (/* binding */ ORDER_ITEM_LOADED),
/* harmony export */   "ORDER_ERROR": () => (/* binding */ ORDER_ERROR),
/* harmony export */   "ORDER_ADD": () => (/* binding */ ORDER_ADD),
/* harmony export */   "ORDER_DELETE": () => (/* binding */ ORDER_DELETE),
/* harmony export */   "ORDER_EDIT": () => (/* binding */ ORDER_EDIT),
/* harmony export */   "ORDER_UPDATE_STATUS": () => (/* binding */ ORDER_UPDATE_STATUS),
/* harmony export */   "ORDER_STATS": () => (/* binding */ ORDER_STATS),
/* harmony export */   "ORDER_STATS_ADD": () => (/* binding */ ORDER_STATS_ADD),
/* harmony export */   "ORDER_PLACED": () => (/* binding */ ORDER_PLACED),
/* harmony export */   "ORDER_ADD_RET_DIST": () => (/* binding */ ORDER_ADD_RET_DIST),
/* harmony export */   "ORDER_EDIT_RET_DIST": () => (/* binding */ ORDER_EDIT_RET_DIST),
/* harmony export */   "ORDER_RET_DIST": () => (/* binding */ ORDER_RET_DIST),
/* harmony export */   "ORDER_UPDATE_RET_DIST": () => (/* binding */ ORDER_UPDATE_RET_DIST),
/* harmony export */   "ORDER_DELETE_RET_DIST": () => (/* binding */ ORDER_DELETE_RET_DIST),
/* harmony export */   "ORDER_DISPATCH_RET_ORDER": () => (/* binding */ ORDER_DISPATCH_RET_ORDER),
/* harmony export */   "ORDER_ADD_PLACED": () => (/* binding */ ORDER_ADD_PLACED),
/* harmony export */   "ORDER_PLACED_DELETE": () => (/* binding */ ORDER_PLACED_DELETE),
/* harmony export */   "ORDER_PLACED_EDIT": () => (/* binding */ ORDER_PLACED_EDIT),
/* harmony export */   "ORDER_DISPATCHED": () => (/* binding */ ORDER_DISPATCHED),
/* harmony export */   "ORDER_PARTIAL_DISPATCHED": () => (/* binding */ ORDER_PARTIAL_DISPATCHED),
/* harmony export */   "ORDER_LOGS": () => (/* binding */ ORDER_LOGS),
/* harmony export */   "RETAILER_LOADING": () => (/* binding */ RETAILER_LOADING),
/* harmony export */   "RETAILER_LOADED": () => (/* binding */ RETAILER_LOADED),
/* harmony export */   "RETAILER_ITEM_LOADED": () => (/* binding */ RETAILER_ITEM_LOADED),
/* harmony export */   "RETAILER_ERROR": () => (/* binding */ RETAILER_ERROR),
/* harmony export */   "RETAILER_ADD": () => (/* binding */ RETAILER_ADD),
/* harmony export */   "RETAILER_LOCATION_LOADED": () => (/* binding */ RETAILER_LOCATION_LOADED),
/* harmony export */   "RETAILER_LOCATION_ADD": () => (/* binding */ RETAILER_LOCATION_ADD),
/* harmony export */   "RETAILER_LOCATION_EDIT": () => (/* binding */ RETAILER_LOCATION_EDIT),
/* harmony export */   "RETAILER_LOCATION_DELETE": () => (/* binding */ RETAILER_LOCATION_DELETE),
/* harmony export */   "RETAILER_CITY_ADD": () => (/* binding */ RETAILER_CITY_ADD),
/* harmony export */   "RETAILER_CITY_EDIT": () => (/* binding */ RETAILER_CITY_EDIT),
/* harmony export */   "RETAILER_CITY_DELETE": () => (/* binding */ RETAILER_CITY_DELETE),
/* harmony export */   "RETAILER_AREA_LOADED": () => (/* binding */ RETAILER_AREA_LOADED),
/* harmony export */   "RETAILER_AREA_ADD": () => (/* binding */ RETAILER_AREA_ADD),
/* harmony export */   "RETAILER_AREA_EDIT": () => (/* binding */ RETAILER_AREA_EDIT),
/* harmony export */   "RETAILER_AREA_DELETE": () => (/* binding */ RETAILER_AREA_DELETE),
/* harmony export */   "RETAILER_CITIES": () => (/* binding */ RETAILER_CITIES),
/* harmony export */   "RETAILER_EDIT": () => (/* binding */ RETAILER_EDIT),
/* harmony export */   "RETAILER_DELETE": () => (/* binding */ RETAILER_DELETE),
/* harmony export */   "SALES_LOADING": () => (/* binding */ SALES_LOADING),
/* harmony export */   "SALES_LOADED": () => (/* binding */ SALES_LOADED),
/* harmony export */   "SALES_TARGET_LOADED": () => (/* binding */ SALES_TARGET_LOADED),
/* harmony export */   "SALES_ADD_TARGET_LOADED": () => (/* binding */ SALES_ADD_TARGET_LOADED),
/* harmony export */   "SALES_EDIT_TARGET": () => (/* binding */ SALES_EDIT_TARGET),
/* harmony export */   "SALES_DELETE_TARGET": () => (/* binding */ SALES_DELETE_TARGET),
/* harmony export */   "SALES_ERROR": () => (/* binding */ SALES_ERROR),
/* harmony export */   "SALES_ADD": () => (/* binding */ SALES_ADD),
/* harmony export */   "SALES_EDIT": () => (/* binding */ SALES_EDIT),
/* harmony export */   "SALES_DELETE": () => (/* binding */ SALES_DELETE),
/* harmony export */   "OFFERS_LOADING": () => (/* binding */ OFFERS_LOADING),
/* harmony export */   "OFFERS_LOADED": () => (/* binding */ OFFERS_LOADED),
/* harmony export */   "OFFERS_ERROR": () => (/* binding */ OFFERS_ERROR),
/* harmony export */   "OFFERS_ADD": () => (/* binding */ OFFERS_ADD),
/* harmony export */   "OFFERS_EDIT": () => (/* binding */ OFFERS_EDIT),
/* harmony export */   "OFFERS_DELETE": () => (/* binding */ OFFERS_DELETE),
/* harmony export */   "DASHBOARD_LOADING": () => (/* binding */ DASHBOARD_LOADING),
/* harmony export */   "DASHBOARD_LOADED": () => (/* binding */ DASHBOARD_LOADED),
/* harmony export */   "DASHBOARD_ERROR": () => (/* binding */ DASHBOARD_ERROR),
/* harmony export */   "DASHBOARD_ADD": () => (/* binding */ DASHBOARD_ADD),
/* harmony export */   "DASHBOARD_PROGRESS": () => (/* binding */ DASHBOARD_PROGRESS),
/* harmony export */   "DASHBOARD_MAP_DATA": () => (/* binding */ DASHBOARD_MAP_DATA),
/* harmony export */   "DELIVERY_LOADING": () => (/* binding */ DELIVERY_LOADING),
/* harmony export */   "DELIVERY_LOADED": () => (/* binding */ DELIVERY_LOADED),
/* harmony export */   "DELIVERY_ERROR": () => (/* binding */ DELIVERY_ERROR),
/* harmony export */   "DELIVERY_ADD": () => (/* binding */ DELIVERY_ADD),
/* harmony export */   "PARTIAL_DELIVERY_LOADED": () => (/* binding */ PARTIAL_DELIVERY_LOADED),
/* harmony export */   "PARTIAL_DELIVERY_ADD": () => (/* binding */ PARTIAL_DELIVERY_ADD),
/* harmony export */   "BANNERS_LOADING": () => (/* binding */ BANNERS_LOADING),
/* harmony export */   "BANNERS_LOADED": () => (/* binding */ BANNERS_LOADED),
/* harmony export */   "BANNERS_ERROR": () => (/* binding */ BANNERS_ERROR),
/* harmony export */   "BANNERS_ADD": () => (/* binding */ BANNERS_ADD),
/* harmony export */   "BANNERS_EDIT": () => (/* binding */ BANNERS_EDIT),
/* harmony export */   "BANNERS_POSITION_EDIT": () => (/* binding */ BANNERS_POSITION_EDIT),
/* harmony export */   "BANNERS_DELETE": () => (/* binding */ BANNERS_DELETE),
/* harmony export */   "GROUPS_LOADING": () => (/* binding */ GROUPS_LOADING),
/* harmony export */   "GROUPS_LOADED": () => (/* binding */ GROUPS_LOADED),
/* harmony export */   "GROUPS_ERROR": () => (/* binding */ GROUPS_ERROR),
/* harmony export */   "GROUPS_ADD": () => (/* binding */ GROUPS_ADD),
/* harmony export */   "GROUPS_EDIT": () => (/* binding */ GROUPS_EDIT),
/* harmony export */   "GROUPS_DELETE": () => (/* binding */ GROUPS_DELETE),
/* harmony export */   "DIST_LOADING": () => (/* binding */ DIST_LOADING),
/* harmony export */   "DIST_LOADED": () => (/* binding */ DIST_LOADED),
/* harmony export */   "DIST_ADD": () => (/* binding */ DIST_ADD),
/* harmony export */   "DIST_EDIT": () => (/* binding */ DIST_EDIT),
/* harmony export */   "DIST_DELETE": () => (/* binding */ DIST_DELETE),
/* harmony export */   "ORDER_REPORTS_LOADING": () => (/* binding */ ORDER_REPORTS_LOADING),
/* harmony export */   "ORDER_REPORTS_LOADED": () => (/* binding */ ORDER_REPORTS_LOADED),
/* harmony export */   "ORDER_REPORTS_ERROR": () => (/* binding */ ORDER_REPORTS_ERROR),
/* harmony export */   "RETAILER_REPORTS_LOADED": () => (/* binding */ RETAILER_REPORTS_LOADED),
/* harmony export */   "PRODUCT_REPORTS_LOADED": () => (/* binding */ PRODUCT_REPORTS_LOADED),
/* harmony export */   "SALES_TARGET_REPORT_LOADED": () => (/* binding */ SALES_TARGET_REPORT_LOADED),
/* harmony export */   "SALES_TARGET_INDIVIDUAL_LOADED": () => (/* binding */ SALES_TARGET_INDIVIDUAL_LOADED),
/* harmony export */   "NOTIFICATION_LOADING": () => (/* binding */ NOTIFICATION_LOADING),
/* harmony export */   "NOTIFICATION_LOADED": () => (/* binding */ NOTIFICATION_LOADED),
/* harmony export */   "NOTIFICATION_ERROR": () => (/* binding */ NOTIFICATION_ERROR),
/* harmony export */   "NOTIFICATION_ADD": () => (/* binding */ NOTIFICATION_ADD),
/* harmony export */   "NOTIFICATION_EDIT": () => (/* binding */ NOTIFICATION_EDIT),
/* harmony export */   "NOTIFICATION_DELETE": () => (/* binding */ NOTIFICATION_DELETE),
/* harmony export */   "DIST_NOTIFICATION_LOADED": () => (/* binding */ DIST_NOTIFICATION_LOADED),
/* harmony export */   "DIST_NOTIFICATION_ADDED": () => (/* binding */ DIST_NOTIFICATION_ADDED),
/* harmony export */   "DIST_VIEW_NOTIFICATION": () => (/* binding */ DIST_VIEW_NOTIFICATION),
/* harmony export */   "CUSTOM_COLORS_LOADING": () => (/* binding */ CUSTOM_COLORS_LOADING),
/* harmony export */   "CUSTOM_COLORS_LOADED": () => (/* binding */ CUSTOM_COLORS_LOADED),
/* harmony export */   "CUSTOM_COLORS_ERROR": () => (/* binding */ CUSTOM_COLORS_ERROR),
/* harmony export */   "SETTINGS_LOADING": () => (/* binding */ SETTINGS_LOADING),
/* harmony export */   "SETTINGS_LOADED": () => (/* binding */ SETTINGS_LOADED),
/* harmony export */   "SETTINGS_EDIT": () => (/* binding */ SETTINGS_EDIT),
/* harmony export */   "SETTINGS_ERROR": () => (/* binding */ SETTINGS_ERROR),
/* harmony export */   "COUNTRIES_LOADED": () => (/* binding */ COUNTRIES_LOADED),
/* harmony export */   "CITIES_LOADED": () => (/* binding */ CITIES_LOADED),
/* harmony export */   "EMAIL_SETTINGS_LOADED": () => (/* binding */ EMAIL_SETTINGS_LOADED),
/* harmony export */   "DIST_OPTIONS_SETTINGS": () => (/* binding */ DIST_OPTIONS_SETTINGS),
/* harmony export */   "API_LOADING": () => (/* binding */ API_LOADING),
/* harmony export */   "API_LOADED": () => (/* binding */ API_LOADED),
/* harmony export */   "INTEGRATION_ERROR": () => (/* binding */ INTEGRATION_ERROR),
/* harmony export */   "TOKEN_LOADING": () => (/* binding */ TOKEN_LOADING),
/* harmony export */   "TOKEN_GENERATED": () => (/* binding */ TOKEN_GENERATED)
/* harmony export */ });
//! Core Types
var GET_ERRORS = "GET_ERRORS";
var GET_MESSAGES = "GET_MESSAGES"; //! Auth types

var USER_LOADING = "ADMIN_LOADING";
var USER_LOADED = "ADMIN_LOADED";
var GET_USER = "GET_USER";
var REFRESH_AUTH = "REFRESH_AUTH";
var AUTH_ERRORS = "AUTH_ERRORS";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOG_OUT = "LOG_OUT";
var UPDATE_USER = "UPDATE_USER";
var USER_ERRORS = "USER_ERRORS";
var UPDATE_USER_DIST_OPTIONS = "UPDATE_USER_DIST_OPTIONS"; //! Product types

var PRODUCT_LOADING = "PRODUCT_LOADING";
var PRODUCT_LOADED = "PRODUCT_LOADED";
var PRODUCT_PAGINATION_LOADED = "PRODUCT_PAGINATION_LOADED";
var PRODUCT_ERROR = "PRODUCT_ERROR";
var PRODUCT_ADD = "PRODUCT_ADD";
var PRODUCT_EDIT = "PRODUCT_EDIT";
var PRODUCT_DELETE = "PRODUCT_DELETE";
var PRODUCT_STATS = "PRODUCT_STATS";
var PRODUCT_STATS_ADD = "PRODUCT_STATS_ADD";
var PRODUCT_CATEGORIES = "PRODUCT_CATEGORIES";
var PRODUCT_CATEGORIES_ADD = "PRODUCT_CATEGORIES_ADD";
var PRODUCT_CATEGORIES_EDIT = "PRODUCT_CATEGORIES_EDIT";
var PRODUCT_CATEGORIES_DELETE = "PRODUCT_CATEGORIES_DELETE";
var PRODUCT_UNITS = "PRODUCT_UNITS";
var PRODUCT_UNITS_ADD = "PRODUCT_UNITS_ADD";
var PRODUCT_UNITS_UPDATE = "PRODUCT_UNITS_UPDATE";
var PRODUCT_UNITS_DELETE = "PRODUCT_UNITS_DELETE";
var PRODUCT_COMPOUND_UNITS = "PRODUCT_COMPOUND_UNITS";
var PRODUCT_ADD_COMPOUND_UNITS = "PRODUCT_ADD_COMPOUND_UNITS";
var PRODUCT_COMPOUND_UNITS_UPDATE = "PRODUCT_COMPOUND_UNITS_UPDATE";
var PRODUCT_COMPOUND_UNITS_DELETE = "PRODUCT_COMPOUND_UNITS_DELETE";
var PRODUCT_PRICE_LEVELS = "PRODUCT_PRICE_LEVELS";
var PRODUCT_ADD_PRICE_LEVELS = "PRODUCT_ADD_PRICE_LEVELS";
var PRODUCT_PRICE_LEVELS_UPDATE = "PRODUCT_PRICE_LEVELS_UPDATE";
var PRODUCT_PRICE_LEVELS_DELETE = "PRODUCT_PRICE_LEVELS_DELETE";
var PRODUCT_VIEW_PRICE_LIST = "PRODUCT_VIEW_PRICE_LIST";
var PRODUCT_PRICE_LIST = "PRODUCT_PRICE_LIST";
var PRODUCT_ADD_PRICE_LIST = "PRODUCT_ADD_PRICE_LIST";
var PRODUCT_EDIT_PRICE_LIST = "PRODUCT_EDIT_PRICE_LIST";
var PRODUCT_DELETE_PRICE_LIST = "PRODUCT_DELETE_PRICE_LIST";
var PRODUCT_BRANDS = "PRODUCT_BRANDS";
var PRODUCT_BRANDS_ADD = "PRODUCT_BRANDS_ADD";
var PRODUCT_BRANDS_UPDATE = "PRODUCT_BRANDS_UPDATE";
var PRODUCT_BRANDS_DELETE = "PRODUCT_BRANDS_DELETE"; //!Orders types

var ORDER_LOADING = "ORDER_LOADING";
var ORDER_LOADED = "ORDER_LOADED";
var ORDER_ITEM_LOADED = "ORDER_ITEM_LOADED";
var ORDER_ERROR = "ORDER_ERROR";
var ORDER_ADD = "ORDER_ADD";
var ORDER_DELETE = "ORDER_DELETE";
var ORDER_EDIT = "ORDER_EDIT";
var ORDER_UPDATE_STATUS = "ORDER_UPDATE_STATUS";
var ORDER_STATS = "ORDER_STATS";
var ORDER_STATS_ADD = "RDER_STATS_ADD";
var ORDER_PLACED = "ORDER_PLACED";
var ORDER_ADD_RET_DIST = "ORDER_ADD_RET_DIST";
var ORDER_EDIT_RET_DIST = "ORDER_EDIT_RET_DIST";
var ORDER_RET_DIST = "ORDER_RET_DIST";
var ORDER_UPDATE_RET_DIST = "ORDER_UPDATE_RET_DIST";
var ORDER_DELETE_RET_DIST = "ORDER_DELETE_RET_DIST";
var ORDER_DISPATCH_RET_ORDER = "ORDER_DISPATCH_RET_ORDER";
var ORDER_ADD_PLACED = "ORDER_ADD_PLACED";
var ORDER_PLACED_DELETE = "ORDER_PLACED_DELETE";
var ORDER_PLACED_EDIT = "ORDER_PLACED_EDIT";
var ORDER_DISPATCHED = "ORDER_DISPATCHED";
var ORDER_PARTIAL_DISPATCHED = "ORDER_PARTIAL_DISPATCHED";
var ORDER_LOGS = "ORDER_LOGS"; //!Retailers types

var RETAILER_LOADING = "RETAILER_LOADING";
var RETAILER_LOADED = "RETAILER_LOADED";
var RETAILER_ITEM_LOADED = "RETAILER_ITEM_LOADED";
var RETAILER_ERROR = "RETAILER_ERROR";
var RETAILER_ADD = "RETAILER_ADD";
var RETAILER_LOCATION_LOADED = "RETAILER_LOCATION_LOADED";
var RETAILER_LOCATION_ADD = "RETAILER_LOCATION_ADD";
var RETAILER_LOCATION_EDIT = "RETAILER_LOCATION_EDIT";
var RETAILER_LOCATION_DELETE = "RETAILER_LOCATION_DELETE";
var RETAILER_CITY_ADD = "RETAILER_CITY_ADD";
var RETAILER_CITY_EDIT = "RETAILER_CITY_EDIT";
var RETAILER_CITY_DELETE = "RETAILER_CITY_DELETE";
var RETAILER_AREA_LOADED = "RETAILER_AREA_LOADED";
var RETAILER_AREA_ADD = "RETAILER_AREA_ADD";
var RETAILER_AREA_EDIT = "RETAILER_AREA_EDIT";
var RETAILER_AREA_DELETE = "RETAILER_AREA_DELETE";
var RETAILER_CITIES = "RETAILER_CITIES";
var RETAILER_EDIT = "RETAILER_EDIT";
var RETAILER_DELETE = "RETAILER_DELETE"; // !Sales types

var SALES_LOADING = "SALES_LOADING";
var SALES_LOADED = "SALES_LOADED";
var SALES_TARGET_LOADED = "SALES_TARGET_LOADED";
var SALES_ADD_TARGET_LOADED = "SALES_ADD_TARGET_LOADED";
var SALES_EDIT_TARGET = "SALES_EDIT_TARGET";
var SALES_DELETE_TARGET = "SALES_DELETE_TARGET";
var SALES_ERROR = "SALES_ERROR";
var SALES_ADD = "SALES_ADD";
var SALES_EDIT = "SALES_EDIT";
var SALES_DELETE = "SALES_DELETE"; // !Offer types

var OFFERS_LOADING = "OFFERS_LOADING";
var OFFERS_LOADED = "OFFERS_LOADED";
var OFFERS_ERROR = "OFFERS_ERROR";
var OFFERS_ADD = "OFFERS_ADD";
var OFFERS_EDIT = "OFFERS_EDIT";
var OFFERS_DELETE = "OFFERS_DELETE"; // !DashBoard types

var DASHBOARD_LOADING = "DASHBOARD_LOADING";
var DASHBOARD_LOADED = "DASHBOARD_LOADED";
var DASHBOARD_ERROR = "DASHBOARD_ERROR";
var DASHBOARD_ADD = "DASHBOARD_ADD";
var DASHBOARD_PROGRESS = "DASHBOARD_PROGRESS";
var DASHBOARD_MAP_DATA = "DASHBOARD_MAP_DATA"; // !Delivery types

var DELIVERY_LOADING = "DELIVERY_LOADING";
var DELIVERY_LOADED = "DELIVERY_LOADED";
var DELIVERY_ERROR = "DELIVERY_ERROR";
var DELIVERY_ADD = "DELIVERY_ADD";
var PARTIAL_DELIVERY_LOADED = "PARTIAL_DELIVERY_LOADED";
var PARTIAL_DELIVERY_ADD = "PARTIAL_DELIVERY_ADD"; // !Banner types

var BANNERS_LOADING = "BANNERS_LOADING";
var BANNERS_LOADED = "BANNERS_LOADED";
var BANNERS_ERROR = "BANNERS_ERROR";
var BANNERS_ADD = "BANNERS_ADD";
var BANNERS_EDIT = "BANNERS_EDIT";
var BANNERS_POSITION_EDIT = "BANNERS_POSITION_EDIT";
var BANNERS_DELETE = "BANNERS_DELETE"; // !Management Types

var GROUPS_LOADING = "GROUPS_LOADING";
var GROUPS_LOADED = "GROUPS_LOADED";
var GROUPS_ERROR = "GROUPS_ERROR";
var GROUPS_ADD = "GROUPS_ADD";
var GROUPS_EDIT = "GROUPS_EDIT";
var GROUPS_DELETE = "GROUPS_DELETE";
var DIST_LOADING = "DIST_LOADING";
var DIST_LOADED = "DIST_LOADED";
var DIST_ADD = "DIST_ADD";
var DIST_EDIT = "DIST_EDIT";
var DIST_DELETE = "DIST_DELETE"; // !ORDER_REPORTS Types

var ORDER_REPORTS_LOADING = "ORDER_REPORTS_LOADING";
var ORDER_REPORTS_LOADED = "ORDER_REPORTS_LOADED";
var ORDER_REPORTS_ERROR = "ORDER_REPORTS_ERROR";
var RETAILER_REPORTS_LOADED = "RETAILER_REPORTS_LOADED";
var PRODUCT_REPORTS_LOADED = "PRODUCT_REPORTS_LOADED";
var SALES_TARGET_REPORT_LOADED = "SALES_TARGET_REPORT_LOADED";
var SALES_TARGET_INDIVIDUAL_LOADED = "SALES_TARGET_INDIVIDUAL_LOADED"; // ! Notificattion Types

var NOTIFICATION_LOADING = "NOTIFICATION_LOADING";
var NOTIFICATION_LOADED = "NOTIFICATION_LOADED";
var NOTIFICATION_ERROR = "NOTIFICATION_ERROR";
var NOTIFICATION_ADD = "NOTIFICATION_ADD";
var NOTIFICATION_EDIT = "NOTIFICATION_EDIT";
var NOTIFICATION_DELETE = "NOTIFICATION_DELETE";
var DIST_NOTIFICATION_LOADED = "DIST_NOTIFICATION_LOADED";
var DIST_NOTIFICATION_ADDED = "DIST_NOTIFICATION_ADDED";
var DIST_VIEW_NOTIFICATION = "DIST_VIEW_NOTIFICATION"; // ! Custom Color Types

var CUSTOM_COLORS_LOADING = "CUSTOM_COLORS_LOADING";
var CUSTOM_COLORS_LOADED = "CUSTOM_COLORS_LOADED";
var CUSTOM_COLORS_ERROR = "CUSTOM_COLORS_ERROR"; // !Distributor Types

var SETTINGS_LOADING = "SETTINGS_LOADING";
var SETTINGS_LOADED = "SETTINGS_LOADED";
var SETTINGS_EDIT = "SETTINGS_EDIT";
var SETTINGS_ERROR = "SETTINGS_ERROR";
var COUNTRIES_LOADED = "COUNTRIES_LOADED";
var CITIES_LOADED = "CITIES_LOADED";
var EMAIL_SETTINGS_LOADED = "EMAIL_SETTINGS_LOADED";
var DIST_OPTIONS_SETTINGS = "DIST_OPTIONS_SETTINGS"; // API INTEGRATION TYPES

var API_LOADING = "API_LOADING";
var API_LOADED = "API_LOADED";
var INTEGRATION_ERROR = "INTEGRATION_ERROR"; // TOKEN GENERATION TYPES

var TOKEN_LOADING = "TOKEN_LOADING";
var TOKEN_GENERATED = "GENERATE_TOKEN";

/***/ }),

/***/ "./frontend/src/redux/reducers/Auth.js":
/*!*********************************************!*\
  !*** ./frontend/src/redux/reducers/Auth.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user")),
  account: JSON.parse(localStorage.getItem("account")),
  group: null,
  logo: null
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.USER_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.USER_LOADED:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        account: action.payload.account,
        group: action.payload.group,
        logo: action.payload.logo
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.REFRESH_AUTH:
      localStorage.setItem("token", action.payload.token);
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        token: action.payload.token,
        isAuthenticated: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.AUTH_ERRORS:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("account");
      localStorage.removeItem("last_route");
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        user: null,
        token: null,
        isAuthenticated: false
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.USER_ERRORS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
        isAuthenticated: true,
        group: action.payload.group,
        logo: action.payload.logo
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
        isAuthenticated: true,
        token: action.payload.token,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
        group: action.payload.group,
        logo: action.payload.logo
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER_DIST_OPTIONS:
      var v_account = state.account;
      v_account.dist_options = action.payload.dist_option;
      localStorage.setItem("account", JSON.stringify(v_account));
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        account: v_account
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Banners.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/reducers/Banners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  banners: [],
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        banners: action.payload.banners
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        banners: [action.payload.banner].concat(_toConsumableArray(state.banners))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_EDIT:
      var bannerArray = state.banners.filter(function (item) {
        return item.id != action.payload.banner.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        banners: [action.payload.banner].concat(_toConsumableArray(bannerArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_POSITION_EDIT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        banners: state.banners.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.BANNERS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/DashBoard.js":
/*!**************************************************!*\
  !*** ./frontend/src/redux/reducers/DashBoard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  dashBoardCount: null,
  dashboardProgress: null,
  view_retailers: [],
  isLoading: false,
  view_products: [],
  map_data: []
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DASHBOARD_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DASHBOARD_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dashBoardCount: action.payload.dashBoardCount,
        view_retailers: action.payload.view_retailers,
        view_products: action.payload.view_products
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DASHBOARD_PROGRESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dashboardProgress: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DASHBOARD_MAP_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        map_data: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DASHBOARD_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Delivery.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/reducers/Delivery.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  deliveries: [],
  partial_deliveries: [],
  partial_current_page: 1,
  partial_last_page: 1,
  isLoading: false,
  currentPage: 1,
  lastPage: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DELIVERY_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DELIVERY_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        deliveries: action.payload.deliveries,
        currentPage: action.payload.currentPage,
        lastPage: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DELIVERY_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PARTIAL_DELIVERY_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        partial_deliveries: action.payload.deliveries,
        partial_current_page: action.payload.currentPage,
        partial_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PARTIAL_DELIVERY_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        partial_deliveries: [action.payload.delivery].concat(_toConsumableArray(state.partial_deliveries))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DELIVERY_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Errors.js":
/*!***********************************************!*\
  !*** ./frontend/src/redux/reducers/Errors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  responseMessage: {},
  isError: false,
  status: null
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_ERRORS:
      return _objectSpread(_objectSpread({}, state), {}, {
        responseMessage: action.payload.responseMessage,
        isError: true,
        status: action.payload.status
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Index.js":
/*!**********************************************!*\
  !*** ./frontend/src/redux/reducers/Index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ "./frontend/src/redux/reducers/Auth.js");
/* harmony import */ var _Banners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banners */ "./frontend/src/redux/reducers/Banners.js");
/* harmony import */ var _DashBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashBoard */ "./frontend/src/redux/reducers/DashBoard.js");
/* harmony import */ var _Delivery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Delivery */ "./frontend/src/redux/reducers/Delivery.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "./frontend/src/redux/reducers/Errors.js");
/* harmony import */ var _Management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Management */ "./frontend/src/redux/reducers/Management.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/reducers/Messages.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Notification */ "./frontend/src/redux/reducers/Notification.js");
/* harmony import */ var _Offers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Offers */ "./frontend/src/redux/reducers/Offers.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Orders */ "./frontend/src/redux/reducers/Orders.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Products */ "./frontend/src/redux/reducers/Products.js");
/* harmony import */ var _Reports__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reports */ "./frontend/src/redux/reducers/Reports.js");
/* harmony import */ var _Retailer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Retailer */ "./frontend/src/redux/reducers/Retailer.js");
/* harmony import */ var _Sales__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sales */ "./frontend/src/redux/reducers/Sales.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Settings */ "./frontend/src/redux/reducers/Settings.js");
/* harmony import */ var _Integration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Integration */ "./frontend/src/redux/reducers/Integration.js");

















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_16__.combineReducers)({
  authReducer: _Auth__WEBPACK_IMPORTED_MODULE_0__.default,
  messagesReducer: _Messages__WEBPACK_IMPORTED_MODULE_6__.default,
  errorsReducer: _Errors__WEBPACK_IMPORTED_MODULE_4__.default,
  productsReducer: _Products__WEBPACK_IMPORTED_MODULE_10__.default,
  ordersReducer: _Orders__WEBPACK_IMPORTED_MODULE_9__.default,
  retailersReducer: _Retailer__WEBPACK_IMPORTED_MODULE_12__.default,
  salesReducer: _Sales__WEBPACK_IMPORTED_MODULE_13__.default,
  offersReducer: _Offers__WEBPACK_IMPORTED_MODULE_8__.default,
  dashboardReducer: _DashBoard__WEBPACK_IMPORTED_MODULE_2__.default,
  deliveryReducer: _Delivery__WEBPACK_IMPORTED_MODULE_3__.default,
  bannersReducer: _Banners__WEBPACK_IMPORTED_MODULE_1__.default,
  managementReducer: _Management__WEBPACK_IMPORTED_MODULE_5__.default,
  reportsReducer: _Reports__WEBPACK_IMPORTED_MODULE_11__.default,
  notificationsReducer: _Notification__WEBPACK_IMPORTED_MODULE_7__.default,
  settingsReducer: _Settings__WEBPACK_IMPORTED_MODULE_14__.default,
  integrationReducer: _Integration__WEBPACK_IMPORTED_MODULE_15__.default
}));

/***/ }),

/***/ "./frontend/src/redux/reducers/Integration.js":
/*!****************************************************!*\
  !*** ./frontend/src/redux/reducers/Integration.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  apiData: [],
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.API_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.API_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        apiData: action.payload.apiData
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.INTEGRATION_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Management.js":
/*!***************************************************!*\
  !*** ./frontend/src/redux/reducers/Management.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  groups: [],
  isLoading: false,
  dist_users: []
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        groups: action.payload.groups
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        groups: [action.payload.group].concat(_toConsumableArray(state.groups))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_EDIT:
      var group_array = state.groups.filter(function (item) {
        return item.id != action.payload.group.id;
      });
      console.log(action.payload.group);
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        groups: [action.payload.group].concat(_toConsumableArray(group_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        groups: state.groups.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_users: action.payload.dist_users
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_users: [action.payload.dist_user].concat(_toConsumableArray(state.dist_users))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_EDIT:
      var dist_array = state.dist_users.filter(function (item) {
        return item.id != action.payload.dist_user.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_users: [action.payload.dist_user].concat(_toConsumableArray(dist_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_users: state.dist_users.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GROUPS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Messages.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/reducers/Messages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  responseMessage: {},
  isError: false,
  status: null
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_MESSAGES:
      return _objectSpread(_objectSpread({}, state), {}, {
        responseMessage: action.payload.responseMessage,
        isError: action.payload.isError,
        status: action.payload.status
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Notification.js":
/*!*****************************************************!*\
  !*** ./frontend/src/redux/reducers/Notification.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  notifications: [],
  current_page: 1,
  last_page: 1,
  dist_notifications: [],
  dist_current_page: 1,
  dist_last_page: 1,
  view_notification: null,
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        notifications: action.payload.notifications,
        current_page: action.payload.currentPage,
        last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        notifications: [action.payload.notification].concat(_toConsumableArray(state.notifications))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_EDIT:
      var notificationArray = state.notifications.filter(function (item) {
        return item.id != action.payload.notification.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        notifications: [action.payload.notification].concat(_toConsumableArray(notificationArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        notifications: state.notifications.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_NOTIFICATION_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_notifications: action.payload.notifications,
        dist_current_page: action.payload.currentPage,
        dist_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_NOTIFICATION_ADDED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_notifications: [action.payload].concat(_toConsumableArray(state.dist_notifications))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_VIEW_NOTIFICATION:
      var v_notifications = state.dist_notifications.map(function (n_item) {
        var view_item = n_item;

        if (view_item.id == action.payload.notification.id) {
          view_item = action.payload.notification;
        }

        return view_item;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_notifications: v_notifications,
        view_notification: action.payload.notification
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Offers.js":
/*!***********************************************!*\
  !*** ./frontend/src/redux/reducers/Offers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  offers: [],
  isLoading: false,
  offers_current_page: 1,
  offers_last_page: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        offers: action.payload.offers,
        offers_current_page: action.payload.currentPage,
        offers_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        offers: [action.payload.price_offer].concat(_toConsumableArray(state.offers))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_EDIT:
      var newArray = state.offers.filter(function (item) {
        return item.id != action.payload.offer.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        offers: [action.payload.offer].concat(_toConsumableArray(newArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        offers: state.offers.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.OFFERS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Orders.js":
/*!***********************************************!*\
  !*** ./frontend/src/redux/reducers/Orders.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  orders: [],
  orders_current_page: 1,
  orders_last_Page: 1,
  place_orders: [],
  edit_placed_orders: [],
  order_logs: [],
  ret_order: null,
  isLoading: false,
  currentPage: 1,
  lastPage: 1,
  place_current_page: 1,
  place_last_page: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: action.payload.orders,
        orders_current_page: action.payload.currentPage,
        orders_last_Page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_ITEM_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        ret_order: action.payload.order
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: [action.payload.order].concat(_toConsumableArray(state.orders))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_EDIT:
      var newArray = state.orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      var orderItem = action.payload.order;
      return _objectSpread(_objectSpread({}, status), {}, {
        isLoading: false,
        orders: [orderItem].concat(_toConsumableArray(newArray)),
        place_orders: state.place_orders
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_UPDATE_STATUS:
      return _objectSpread(_objectSpread({}, status), {}, {
        isLoading: false,
        orders: state.orders.filter(function (item) {
          return item.id != action.payload.order.id;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_DISPATCHED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: state.orders.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_PARTIAL_DISPATCHED:
      var partial_array = state.orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: [action.payload.order].concat(_toConsumableArray(partial_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: state.orders.filter(function (v_order) {
          return v_order.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_PLACED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        place_orders: action.payload.place_orders,
        place_current_page: action.payload.currentPage,
        place_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_RET_DIST:
      var view_ret_order = state.orders.map(function (ret_item) {
        var view_ret_item = ret_item;

        if (view_ret_item.id == action.payload.id) {
          view_ret_item.dist_orders = action.payload.dist_orders;
          view_ret_item.dist_orders_last_page = action.payload.lastPage;
          view_ret_item.dist_orders_current_page = action.payload.currentPage;
        }

        return view_ret_item;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: view_ret_order
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADD_RET_DIST:
      var aNewArray = state.orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      var aOrderItem = action.payload.order;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: [aOrderItem].concat(_toConsumableArray(aNewArray)),
        place_orders: [action.payload.dist_order].concat(_toConsumableArray(state.place_orders))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_EDIT_RET_DIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        place_orders: action.payload.dist_orders
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_UPDATE_RET_DIST:
      var view_update_ret = state.place_orders.map(function (v_ret_item) {
        var new_v_item = v_ret_item;

        if (new_v_item.id == action.payload.dist_order.id) {
          new_v_item = action.payload.dist_order;
        }

        return new_v_item;
      });
      var vNewArray = state.orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      var vOrderItem = action.payload.order;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: [vOrderItem].concat(_toConsumableArray(vNewArray)),
        place_orders: view_update_ret
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_DELETE_RET_DIST:
      var view_del_ret = state.place_orders.filter(function (del_v_item) {
        return del_v_item.id != action.payload.order_id;
      });
      var dNewArray = state.orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      var dOrderItem = action.payload.order;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        orders: [dOrderItem].concat(_toConsumableArray(dNewArray)),
        place_orders: view_del_ret
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_DISPATCH_RET_ORDER:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        ret_order: action.payload.ret_order
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADD_PLACED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        place_orders: [].concat(_toConsumableArray(state.place_orders), [action.payload.order])
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_PLACED_EDIT:
      var placeArray = state.place_orders.filter(function (item) {
        return item.id != action.payload.order.id;
      });
      placeArray.splice(action.payload.index, 0, action.payload.order);
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        place_orders: placeArray
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_PLACED_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        place_orders: state.place_orders.filter(function (order) {
          return order.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_LOGS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        order_logs: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Products.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/reducers/Products.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  products: [],
  products_current_page: 1,
  products_last_page: 1,
  isLoading: false,
  lastPage: 1,
  currentPage: 1,
  categories: [],
  category_current_page: 1,
  category_last_page: 1,
  units: [],
  units_current_page: 1,
  units_last_page: 1,
  c_units: [],
  price_levels: [],
  price_lists: [],
  price_current_page: 1,
  price_last_page: 1,
  product_price_list: [],
  product_price_current_page: 1,
  product_price_last_page: 1,
  product_brands: [],
  product_brand_current_page: 1,
  product_brand_last_page: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        products: action.payload.products,
        products_current_page: action.payload.currentPage,
        products_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_PAGINATION_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        products: [].concat(_toConsumableArray(state.products), _toConsumableArray(action.payload.products)),
        products_current_page: action.payload.currentPage,
        products_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        products: [action.payload.product].concat(_toConsumableArray(state.products))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_EDIT:
      var newArray = state.products.filter(function (item) {
        return item.id != action.payload.product.id;
      });
      var productItem = action.payload.product;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        products: [productItem].concat(_toConsumableArray(newArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        products: state.products.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        categories: action.payload.categories,
        category_current_page: action.payload.currentPage,
        category_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_CATEGORIES_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        categories: [action.payload.category].concat(_toConsumableArray(state.categories))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_CATEGORIES_EDIT:
      var categoriesArray = state.categories.filter(function (item) {
        return item.id != action.payload.category.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        categories: [].concat(_toConsumableArray(categoriesArray), [action.payload.category])
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_CATEGORIES_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        categories: state.categories.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_UNITS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        units: action.payload.units,
        units_current_page: action.payload.currentPage,
        units_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_UNITS_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        units: [action.payload.unit].concat(_toConsumableArray(state.units))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_UNITS_UPDATE:
      var unitsArray = state.units.filter(function (item) {
        return item.id != action.payload.unit.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        units: [action.payload.unit].concat(_toConsumableArray(unitsArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_UNITS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        units: state.units.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_COMPOUND_UNITS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        c_units: action.payload.c_units,
        c_current_page: action.payload.currentPage,
        c_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ADD_COMPOUND_UNITS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        c_units: [action.payload.c_unit].concat(_toConsumableArray(state.c_units))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_COMPOUND_UNITS_UPDATE:
      var c_unitArray = state.c_units.filter(function (item) {
        return item.id != action.payload.c_unit.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        c_units: [action.payload.c_unit].concat(_toConsumableArray(c_unitArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_COMPOUND_UNITS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        c_units: state.c_units.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_PRICE_LEVELS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_levels: action.payload.price_levels,
        levels_current_page: action.payload.currentPage,
        levels_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ADD_PRICE_LEVELS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_levels: [action.payload.price_level].concat(_toConsumableArray(state.price_levels))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_PRICE_LEVELS_UPDATE:
      var price_levelArray = state.price_levels.filter(function (item) {
        return item.id != action.payload.price_level.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_levels: [action.payload.price_level].concat(_toConsumableArray(price_levelArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_PRICE_LEVELS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_levels: state.price_levels.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_VIEW_PRICE_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_lists: action.payload.price_lists,
        price_current_page: action.payload.currentPage,
        price_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_PRICE_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_price_list: action.payload.price_lists,
        product_price_current_page: action.payload.currentPage,
        product_price_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ADD_PRICE_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_lists: [action.payload.price_list].concat(_toConsumableArray(state.price_lists))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_EDIT_PRICE_LIST:
      var priceListArray = state.price_lists.filter(function (item) {
        return item.id != action.payload.price_list.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_lists: [action.payload.price_list].concat(_toConsumableArray(priceListArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_DELETE_PRICE_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        price_lists: state.price_lists.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_BRANDS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_brands: action.payload.brands,
        product_brand_current_page: action.payload.currentPage,
        product_brand_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_BRANDS_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_brands: [action.payload.brand].concat(_toConsumableArray(state.product_brands))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_BRANDS_UPDATE:
      var brands_array = state.product_brands.filter(function (b_item) {
        return b_item.id != action.payload.brand.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_brands: [action.payload.brand].concat(_toConsumableArray(brands_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_BRANDS_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_brands: state.product_brands.filter(function (d_item) {
          return d_item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Reports.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/reducers/Reports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  order_reports: [],
  retailer_reports: [],
  product_reports: [],
  sales_target_report: [],
  sales_men_reports: [],
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_REPORTS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_REPORTS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        order_reports: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_REPORTS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_reports: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_REPORTS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        product_reports: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_TARGET_REPORT_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_target_report: action.payload.sales_report
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_TARGET_INDIVIDUAL_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_men_reports: action.payload.sales_people_report
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.ORDER_REPORTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Retailer.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/reducers/Retailer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  retailers: [],
  retailer_regions: [],
  areas: [],
  cities: [],
  isLoading: false,
  retailer_current_page: 1,
  retailer_last_page: 1,
  region_current_page: 1,
  region_last_page: 1,
  area_current_page: 1,
  area_last_page: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailers: action.payload.retailers,
        retailer_current_page: action.payload.region_current_page,
        retailer_last_page: action.payload.region_last_page
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_ADD:
      var add_retailer_array = state.retailers.filter(function (a_item) {
        return a_item.id != action.payload.retailer.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailers: [action.payload.retailer].concat(_toConsumableArray(add_retailer_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_EDIT:
      var newArray = state.retailers.filter(function (item) {
        return item.id != action.payload.retailer.id;
      });
      var viewRetailer = action.payload.retailer;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailers: [viewRetailer].concat(_toConsumableArray(newArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailers: state.retailers.filter(function (viewRetailer) {
          return viewRetailer.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOCATION_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: action.payload.retailer_regions,
        region_current_page: action.payload.region_current_page,
        region_last_page: action.payload.region_last_page
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOCATION_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: [action.payload.retailer_region].concat(_toConsumableArray(state.retailer_regions))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOCATION_EDIT:
      var locations_array = state.retailer_regions.filter(function (item) {
        return item.id != action.payload.retailer_region.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: [action.payload.retailer_region].concat(_toConsumableArray(locations_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_LOCATION_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: state.retailer_regions.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_AREA_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        areas: action.payload.areas,
        area_current_page: action.payload.currentPage,
        area_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_AREA_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        areas: [action.payload.area].concat(_toConsumableArray(state.areas))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_AREA_EDIT:
      var area_array = state.areas.filter(function (item) {
        return item.id != action.payload.area.id;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        areas: [action.payload.area].concat(_toConsumableArray(area_array))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_AREA_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        areas: state.areas.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_CITIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        cities: action.payload
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_CITY_ADD:
      var regions_array = state.retailer_regions.map(function (item) {
        var viewItem = item;

        if (viewItem.id == action.payload.region_id) {
          viewItem.region_cities.push(action.payload.dist_city);
        }

        return viewItem;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: regions_array
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_CITY_EDIT:
      var regions_edit_array = state.retailer_regions.map(function (item) {
        var viewItem = item;

        if (viewItem.id == action.payload.region_id) {
          var regionsArray = viewItem.region_cities.filter(function (item) {
            return item.id != action.payload.dist_city.id;
          });
          regionsArray.push(action.payload.dist_city);
          viewItem.region_cities = regionsArray;
        }

        return viewItem;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: regions_edit_array
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_CITY_DELETE:
      var regions_delete_array = state.retailer_regions.map(function (item) {
        var viewItem = item;

        if (viewItem.id == action.payload.region_id) {
          viewItem.region_cities = viewItem.region_cities.filter(function (item) {
            return item.id != action.payload.id;
          });
        }

        return viewItem;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        retailer_regions: regions_delete_array
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.RETAILER_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Sales.js":
/*!**********************************************!*\
  !*** ./frontend/src/redux/reducers/Sales.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  sales_people: [],
  sales_current_page: 1,
  sales_last_page: 1,
  sales_target: [],
  target_current_page: 1,
  target_last_page: 1,
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_people: action.payload.sales_people,
        sales_current_page: action.payload.currentPage,
        sales_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_people: [action.payload.sale_person].concat(_toConsumableArray(state.sales_people))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_EDIT:
      var newArray = state.sales_people.filter(function (item) {
        return item.id != action.payload.sale_person.id;
      });
      var saleItem = action.payload.sale_person;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_people: [saleItem].concat(_toConsumableArray(newArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_DELETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_people: state.sales_people.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_TARGET_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_target: action.payload.sales_target,
        target_current_page: action.payload.currentPage,
        target_last_page: action.payload.lastPage
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_ADD_TARGET_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_target: [action.payload.sale_target].concat(_toConsumableArray(state.sales_target))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_EDIT_TARGET:
      var viewArray = state.sales_target.filter(function (item) {
        return item.id != action.payload.sale_target.id;
      });
      var targetItem = action.payload.sale_target;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_target: [targetItem].concat(_toConsumableArray(viewArray))
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_DELETE_TARGET:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        sales_target: state.sales_target.filter(function (item) {
          return item.id != action.payload;
        })
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SALES_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/reducers/Settings.js":
/*!*************************************************!*\
  !*** ./frontend/src/redux/reducers/Settings.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/types */ "./frontend/src/redux/Actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  distributor: {},
  email_settings: {},
  dist_settings: {},
  countries: [],
  cities: [],
  isLoading: false
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        distributor: action.payload.distributor
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_EDIT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        distributor: action.payload.distributor
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.COUNTRIES_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        countries: action.payload.countries
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.CITIES_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        cities: action.payload.cities
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.EMAIL_SETTINGS_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        email_settings: action.payload.email_settings
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.DIST_OPTIONS_SETTINGS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        dist_settings: action.payload.dist_option
      });

    case _Actions_types__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./frontend/src/redux/store.js":
/*!*************************************!*\
  !*** ./frontend/src/redux/store.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/Index */ "./frontend/src/redux/reducers/Index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");




var initialState = {};
var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default];
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers_Index__WEBPACK_IMPORTED_MODULE_1__.default, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)(redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware.apply(void 0, middleware)));
/** ! Distributor redux store for state management */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./frontend/src/utils/ControlMenu.js":
/*!*******************************************!*\
  !*** ./frontend/src/utils/ControlMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlMenu": () => (/* binding */ ControlMenu),
/* harmony export */   "changeMenu": () => (/* binding */ changeMenu)
/* harmony export */ });
function ControlMenu() {
  var checkName = "view_item_menu";
  var viewMenu = localStorage.getItem(checkName);
  var homeWrapper = document.getElementById("home_wrapper");
  var homeContainer = document.getElementById("home_container");
  var nav_horizontal = document.getElementById("nav_horizontal_bar");
  var nav_side = document.getElementById("nav_side_bar");
  var nav_view_bars = document.getElementById("nav_view_bars");

  if (viewMenu && viewMenu == "horizontal") {
    homeWrapper.classList.remove("wrapper_size");
    homeContainer.classList.remove("mt-2");
    nav_horizontal.style.display = "block";
    nav_side.style.display = "none";
    nav_view_bars.style.display = "none";
  } else {
    viewMenu = "vertical";
    localStorage.setItem(checkName, viewMenu);
    homeWrapper.classList.add("wrapper_size");
    homeContainer.classList.add("mt-2");
    nav_horizontal.style.display = "none";
    nav_side.style.display = "block";
    nav_view_bars.style.display = "block";
  }
}
function changeMenu(view) {
  var checkName = "view_item_menu";
  var homeWrapper = document.getElementById("home_wrapper");
  var homeContainer = document.getElementById("home_container");
  var nav_horizontal = document.getElementById("nav_horizontal_bar");
  var nav_side = document.getElementById("nav_side_bar");

  if (view && view == "horizontal") {
    homeWrapper.classList.remove("wrapper_size");
    homeContainer.classList.remove("mt-2");
    nav_horizontal.style.display = "block";
    nav_side.style.display = "none";
    nav_view_bars.style.display = "none";
    localStorage.setItem(checkName, "horizontal");
  } else {
    localStorage.setItem(checkName, "vertical");
    homeWrapper.classList.add("wrapper_size");
    homeContainer.classList.add("mt-2");
    nav_horizontal.style.display = "none";
    nav_side.style.display = "block";
    nav_view_bars.style.display = "block";
  }
}

/***/ }),

/***/ "./frontend/src/utils/FireBaseConfig.js":
/*!**********************************************!*\
  !*** ./frontend/src/utils/FireBaseConfig.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTokenConfig": () => (/* binding */ getTokenConfig),
/* harmony export */   "onMessageListener": () => (/* binding */ onMessageListener)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyC0sai-_zXxl5WkgWaxUSXdpIPgX1a0gVg",
  authDomain: "bizapp-f9375.firebaseapp.com",
  projectId: "bizapp-f9375",
  storageBucket: "bizapp-f9375.appspot.com",
  messagingSenderId: "141856256082",
  appId: "1:141856256082:web:792bcdcf8324e552016f8b",
  measurementId: "G-YGN2JRLMCD"
};
(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var getTokenConfig = function getTokenConfig(swRegistration) {
  var messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getMessaging)();
  return (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getToken)(messaging, {
    vapidKey: "BJoKEt9ezPdo5R1oyZeAoJE-FnedeuLXQj6pyJkfzkJ7MTV4JWz-W0rCX9gvZvC655zkpNAO_dgmKhCkZogGcM8",
    serviceWorkerRegistration: swRegistration
  }).then(function (currentToken) {
    if (currentToken) {
      return {
        status: true,
        token: currentToken,
        messaging: messaging
      };
    } else {
      return {
        status: false
      };
    }
  })["catch"](function (err) {
    return {
      status: false
    };
  });
};
var onMessageListener = function onMessageListener(setResponseMessage, setOpenTab, viewNotificationType, messaging) {
  return new Promise(function (resolve) {
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.onMessage)(messaging, function (payload) {
      var _notification$title, _notification$body;

      var notification = payload.notification,
          data = payload.data;
      setResponseMessage({
        title: (_notification$title = notification === null || notification === void 0 ? void 0 : notification.title) !== null && _notification$title !== void 0 ? _notification$title : "",
        message: (_notification$body = notification === null || notification === void 0 ? void 0 : notification.body) !== null && _notification$body !== void 0 ? _notification$body : "",
        data: data !== null && data !== void 0 ? data : {}
      });
      setOpenTab(true);
      viewNotificationType(data);
      resolve(payload);
    });
  });
};

/***/ }),

/***/ "./frontend/src/utils/FormatDate.js":
/*!******************************************!*\
  !*** ./frontend/src/utils/FormatDate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(mdate) {
  var date = new Date(mdate);
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return monthNames[monthIndex] + "," + " " + day + " " + year;
}

/***/ }),

/***/ "./frontend/src/utils/GetCookie.js":
/*!*****************************************!*\
  !*** ./frontend/src/utils/GetCookie.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCookie)
/* harmony export */ });
/**  ! Tricky snippet for fetching csrf token for form data */
function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  var xsrfCookies = document.cookie.split(";").map(function (c) {
    return c.trim();
  }).filter(function (c) {
    return c.startsWith(name + "=");
  });

  if (xsrfCookies.length === 0) {
    return null;
  }

  return decodeURIComponent(xsrfCookies[0].split("=")[1]);
}

/***/ }),

/***/ "./frontend/src/utils/HomeRoutes.js":
/*!******************************************!*\
  !*** ./frontend/src/utils/HomeRoutes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveHomeRoute": () => (/* binding */ SaveHomeRoute),
/* harmony export */   "getHomeRoute": () => (/* binding */ getHomeRoute)
/* harmony export */ });
function SaveHomeRoute(path) {
  if (path) {
    localStorage.setItem("last_route", path);
  }
}
function getHomeRoute() {
  return localStorage.getItem("last_route");
}

/***/ }),

/***/ "./frontend/src/utils/NavItems.js":
/*!****************************************!*\
  !*** ./frontend/src/utils/NavItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NavItems(group, account) {
  var view_nav_bar = [];

  if (group) {
    view_nav_bar = [group.permission.can_view_dashboard ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-tachometer-alt"
      }),
      name: "Dashboard",
      link: "/home/dashboard"
    } : null, group.permission.can_view_products ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-store"
      }),
      name: "Products",
      v_component: [{
        name: "View Products",
        link: "/home/products"
      }, {
        name: "View Categories",
        link: "/home/categories"
      }, {
        name: "Product Master",
        link: "/home/product_master"
      }, {
        name: "Price List",
        link: "/home/price_list"
      }]
    } : null, group.permission.can_view_salesmen ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-bullhorn"
      }),
      name: "Sales",
      v_component: [{
        name: "Sales People",
        link: "/home/sales"
      }, {
        name: "Sales Target",
        link: "/home/sales_target"
      }]
    } : null, group.permission.can_view_retailer ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-business-time"
      }),
      name: "Retailers",
      v_component: [{
        name: "Retailers",
        link: "/home/retailers"
      }, {
        name: "Retailers Location",
        link: "/home/retailer_location"
      }]
    } : null, group.permission.can_view_orders ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-shopping-cart"
      }),
      name: "Orders",
      link: "/home/orders"
    } : null, group.permission.can_view_deliveries ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-truck"
      }),
      name: "Deliveries",
      v_component: [{
        name: "View Deliveries",
        link: "/home/deliveries"
      }, {
        name: "Partial Deliveries",
        link: "/home/partial/deliveries"
      }]
    } : null, group.permission.can_view_offers ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-shopping-cart"
      }),
      name: "Offers",
      link: "/home/offers"
    } : null, group.permission.can_manage_mobile ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-mobile"
      }),
      name: "Mobile App",
      v_component: [{
        name: "View Banners",
        link: "/home/banners"
      }, {
        name: "Push Notifications",
        link: "/home/notifications"
      }]
    } : null, group.permission.can_view_reports ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-chart-line"
      }),
      name: "Reports",
      v_component: [{
        name: "Order Reports",
        link: "/home/order/reports"
      }, account.dist_options && account.dist_options.use_sales_target ? {
        name: "Sales Target Report",
        link: "/home/sales_group/reports"
      } : null]
    } : null, group && group.dist_super ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-book-open"
      }),
      name: "Management",
      v_component: [{
        name: "View Groups",
        link: "/home/groups"
      }, {
        name: "View Users",
        link: "/home/staff"
      }]
    } : null, group.permission.can_view_settings ? {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-cog"
      }),
      name: "Settings",
      link: "/home/settings"
    } : null];
  }

  return view_nav_bar;
}

/***/ }),

/***/ "./frontend/src/utils/PrivateRoutes.js":
/*!*********************************************!*\
  !*** ./frontend/src/utils/PrivateRoutes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var PrivateRoutes = function PrivateRoutes(_ref) {
  var Component = _ref.component,
      auth = _ref.auth,
      rest = _objectWithoutProperties(_ref, ["component", "auth"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, _extends({}, rest, {
    render: function render(props) {
      if (auth.isLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_2__.default, {
        open: true
      });else if (!auth.isAuthenticated) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
        to: "/login"
      });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props);
    }
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PrivateRoutes));

/***/ }),

/***/ "./frontend/src/utils/ResetScroll.js":
/*!*******************************************!*\
  !*** ./frontend/src/utils/ResetScroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");


function ResetScroll() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)(),
      pathname = _useLocation.pathname;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/***/ }),

/***/ "./frontend/src/utils/TokenConfig.js":
/*!*******************************************!*\
  !*** ./frontend/src/utils/TokenConfig.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(getState) {
  //const token
  var token = getState().authReducer.token;
  var config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = "Token ".concat(token);
  }

  return config;
}

/***/ }),

/***/ "./frontend/src/utils/TokenMultiPartConfig.js":
/*!****************************************************!*\
  !*** ./frontend/src/utils/TokenMultiPartConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(getState) {
  //const token
  var token = getState().authReducer.token;
  var config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  };

  if (token) {
    config.headers["Authorization"] = "Token ".concat(token);
  }

  return config;
}

/***/ }),

/***/ "./frontend/src/utils/routes.js":
/*!**************************************!*\
  !*** ./frontend/src/utils/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Categories = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_buffer_index_js-node_modules_domhandler_index_js-node_modules_domutils_i-15e13b"), __webpack_require__.e("vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_ieee754_i-207e65"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_utils_Debouncer_js-frontend_src_utils_ImageCompress_js-frontend_src_widgets_Cust-8e6af6"), __webpack_require__.e("frontend_src_components_Categories_Categories_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Categories/Categories */ "./frontend/src/components/Categories/Categories.js"));
});
var DashBoard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_apexcharts_dist_apexcharts_common_js"), __webpack_require__.e("vendors-node_modules_south-paw_react-vector-maps_dist_react-vector-maps_esm_js-node_modules_r-26ca7a"), __webpack_require__.e("frontend_src_components_DashBoard_DashBoard_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/DashBoard/DashBoard */ "./frontend/src/components/DashBoard/DashBoard.js"));
});
var Deliveries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("frontend_src_components_Orders_ViewOrderLogs_js-frontend_src_redux_Actions_Delivery_js-fronte-05118b"), __webpack_require__.e("frontend_src_components_Deliveries_Deliveries_js-frontend_src_widgets_CustomBreadCrumbs_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Deliveries/Deliveries */ "./frontend/src/components/Deliveries/Deliveries.js"));
}); // const Api = React.lazy(() => import("../components/Api/Api"));

var Offers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_components_Offers_Offers_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Offers/Offers */ "./frontend/src/components/Offers/Offers.js"));
});
var Orders = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("vendors-node_modules_export-to-csv_build_index_js-node_modules_react-bootstrap_esm_Dropdown_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_redux_Actions_Retailer_js-frontend_src_utils_PermissionHandler_js-frontend_src_w-54693e"), __webpack_require__.e("frontend_src_redux_Actions_Sales_js-frontend_src_utils_Debouncer_js-frontend_src_widgets_Cust-44c891"), __webpack_require__.e("frontend_src_components_Orders_ViewOrderLogs_js-frontend_src_redux_Actions_Delivery_js-fronte-05118b"), __webpack_require__.e("frontend_src_components_Orders_Orders_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Orders/Orders */ "./frontend/src/components/Orders/Orders.js"));
});
var PriceList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("node_modules_babel_runtime_helpers_esm_classCallCheck_js-frontend_src_components_Prices_Price-737dfe")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Prices/PriceList */ "./frontend/src/components/Prices/PriceList.js"));
});
var ProductMaster = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_utils_Debouncer_js-frontend_src_utils_ImageCompress_js-frontend_src_widgets_Cust-8e6af6"), __webpack_require__.e("frontend_src_components_ProductMaster_ProductMaster_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/ProductMaster/ProductMaster */ "./frontend/src/components/ProductMaster/ProductMaster.js"));
});
var Products = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("vendors-node_modules_buffer_index_js-node_modules_domhandler_index_js-node_modules_domutils_i-15e13b"), __webpack_require__.e("vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_ieee754_i-207e65"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Checkbox_Checkbox_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_FormControlLabel_FormControlLabel_js-node_modules_m-6f6c2c"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_utils_FormatCommas_js-frontend_src_utils_PermissionHandler_js-frontend_src_utils-9bab60"), __webpack_require__.e("frontend_src_components_products_Products_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/products/Products */ "./frontend/src/components/products/Products.js"));
});
var Profile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("frontend_src_components_Profile_Profile_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Profile/Profile */ "./frontend/src/components/Profile/Profile.js"));
});
var RetailerLocations = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("frontend_src_redux_Actions_Retailer_js-frontend_src_utils_PermissionHandler_js-frontend_src_w-54693e"), __webpack_require__.e("frontend_src_components_RetailerLocations_RetailerLocations_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/RetailerLocations/RetailerLocations */ "./frontend/src/components/RetailerLocations/RetailerLocations.js"));
});
var Retailers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_redux_Actions_Retailer_js-frontend_src_utils_PermissionHandler_js-frontend_src_w-54693e"), __webpack_require__.e("frontend_src_redux_Actions_Sales_js-frontend_src_utils_Debouncer_js-frontend_src_widgets_Cust-44c891"), __webpack_require__.e("frontend_src_components_Retailers_Retailers_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Retailers/Retailers */ "./frontend/src/components/Retailers/Retailers.js"));
});
var Sales = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("frontend_src_redux_Actions_Sales_js-frontend_src_utils_Debouncer_js-frontend_src_widgets_Cust-44c891"), __webpack_require__.e("frontend_src_components_Sales_Sales_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Sales/Sales */ "./frontend/src/components/Sales/Sales.js"));
});
var SalesTarget = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("frontend_src_redux_Actions_Sales_js-frontend_src_utils_Debouncer_js-frontend_src_widgets_Cust-44c891"), __webpack_require__.e("frontend_src_utils_FormatCommas_js-frontend_src_utils_PermissionHandler_js-frontend_src_utils-9bab60"), __webpack_require__.e("frontend_src_components_SalesTarget_SalesTarget_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/SalesTarget/SalesTarget */ "./frontend/src/components/SalesTarget/SalesTarget.js"));
});
var Banners = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_react-beautiful-dnd_dist_react-beautiful-dnd_esm_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_components_Banners_Banners_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Banners/Banners */ "./frontend/src/components/Banners/Banners.js"));
});
var UserManagement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("frontend_src_redux_Actions_Management_js-frontend_src_utils_PermissionHandler_js-frontend_src-b6e144"), __webpack_require__.e("frontend_src_components_UserManagement_UserManagement_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/UserManagement/UserManagement */ "./frontend/src/components/UserManagement/UserManagement.js"));
});
var GroupManagement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Checkbox_Checkbox_js"), __webpack_require__.e("frontend_src_redux_Actions_Management_js-frontend_src_utils_PermissionHandler_js-frontend_src-b6e144"), __webpack_require__.e("frontend_src_components_UserManagement_GroupManagement_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/UserManagement/GroupManagement */ "./frontend/src/components/UserManagement/GroupManagement.js"));
});
var OrderReports = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-chartist_dist_index_js"), __webpack_require__.e("frontend_src_components_Reports_OrderReports_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Reports/OrderReports */ "./frontend/src/components/Reports/OrderReports.js"));
});
var Notifications = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Breadcrumbs_Breadcrumbs_js-node_modules_material-ui-702fbc"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-3923a5"), __webpack_require__.e("vendors-node_modules_react-select-async-paginate_es_index_js"), __webpack_require__.e("vendors-node_modules_stylis_src_Middleware_js-node_modules_stylis_src_Parser_js"), __webpack_require__.e("frontend_src_redux_Actions_Products_js"), __webpack_require__.e("frontend_src_redux_Actions_Retailer_js-frontend_src_utils_PermissionHandler_js-frontend_src_w-54693e"), __webpack_require__.e("node_modules_babel_runtime_helpers_esm_classCallCheck_js-frontend_src_components_Notification-34283b")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Notifications/Notifications */ "./frontend/src/components/Notifications/Notifications.js"));
});
var PartialDeliveries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_ListItemIcon_ListItemIcon_js-node_modules_material--895b13"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Collap-720fd1"), __webpack_require__.e("frontend_src_components_PartialDeliveries_PartialDeliveries_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/PartialDeliveries/PartialDeliveries */ "./frontend/src/components/PartialDeliveries/PartialDeliveries.js"));
});
var Settings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-tooltip_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js-node_modules_react-image-file-resizer_bu-8d8b42"), __webpack_require__.e("vendors-node_modules_buffer_index_js-node_modules_domhandler_index_js-node_modules_domutils_i-15e13b"), __webpack_require__.e("vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_ieee754_i-207e65"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Checkbox_Checkbox_js"), __webpack_require__.e("frontend_src_components_Settings_Settings_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Settings/Settings */ "./frontend/src/components/Settings/Settings.js"));
});
var DistNotifications = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "frontend_src_components_Notifications_DistNotifications_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Notifications/DistNotifications */ "./frontend/src/components/Notifications/DistNotifications.js"));
});
var SalesTargetReport = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "frontend_src_components_Reports_SalesTargetReport_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Reports/SalesTargetReport */ "./frontend/src/components/Reports/SalesTargetReport.js"));
});
var ViewNotificationDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "frontend_src_components_Notifications_ViewNotificationDetails_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Notifications/ViewNotificationDetails */ "./frontend/src/components/Notifications/ViewNotificationDetails.js"));
});
var dashBoardRoutes = [{
  path: "/dashboard",
  name: "DashBoard",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: DashBoard,
  layout: "/home"
}, // {
//   path: "/api-intergration",
//   name: "ApiIntegration",
//   icon: <i className="fas fa-code"></i>,
//   component: ApiIntegration,
//   layout: "/home",
// },
{
  path: "/products",
  name: "Products",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Products,
  layout: "/home"
}, {
  path: "/categories",
  name: "Categories",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Categories,
  layout: "/home"
}, {
  path: "/product_master",
  name: "Product Master",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: ProductMaster,
  layout: "/home"
}, {
  path: "/price_list",
  name: "Price List",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: PriceList,
  layout: "/home"
}, {
  path: "/orders",
  name: "Orders",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Orders,
  layout: "/home"
}, {
  path: "/retailers",
  name: "Retailers",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Retailers,
  layout: "/home"
}, {
  path: "/retailer_location",
  name: "Retailer Locations",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: RetailerLocations,
  layout: "/home"
}, {
  path: "/sales",
  name: "Sales",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Sales,
  layout: "/home"
}, {
  path: "/sales_target",
  name: "Sales Target",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: SalesTarget,
  layout: "/home"
}, {
  path: "/offers",
  name: "Offers",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Offers,
  layout: "/home"
}, {
  path: "/deliveries",
  name: "deliveries",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Deliveries,
  layout: "/home"
}, {
  path: "/partial/deliveries",
  name: "part_deliveries",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: PartialDeliveries,
  layout: "/home"
}, {
  path: "/profile",
  name: "Profile",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Profile,
  layout: "/home"
}, {
  path: "/banners",
  name: "Banners",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  }),
  component: Banners,
  layout: "/home"
}, {
  path: "/staff",
  name: "Staff",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: UserManagement,
  layout: "/home"
}, {
  path: "/groups",
  name: "Groups",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: GroupManagement,
  layout: "/home"
}, {
  path: "/order/reports",
  name: "Reports",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: OrderReports,
  layout: "/home"
}, {
  path: "/notifications",
  name: "Notifications",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: Notifications,
  layout: "/home"
}, {
  path: "/view_notification/:id",
  name: "View Notification",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: ViewNotificationDetails,
  layout: "/home"
}, {
  path: "/settings",
  name: "Settings",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: Settings,
  layout: "/home"
}, {
  path: "/dist_notification",
  name: "DIstNotification",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: DistNotifications,
  layout: "/home"
}, {
  path: "/sales_group/reports",
  name: "Sales Group Report",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-users"
  }),
  component: SalesTargetReport,
  layout: "/home"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashBoardRoutes);

/***/ }),

/***/ "./frontend/src/widgets/CustomAlertDialog.js":
/*!***************************************************!*\
  !*** ./frontend/src/widgets/CustomAlertDialog.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAlertBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function CustomAlertBar(props) {
  var isError = props.isError,
      responseMessage = props.responseMessage;
  var myAlertDialog;

  if (isError === false) {
    myAlertDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert-success": "true",
      className: "alert alert-form alert-success text-xs-center"
    }, responseMessage));
  } else if (isError === true) {
    myAlertDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert-success": "true",
      className: "alert alert-form alert-danger text-xs-center"
    }, responseMessage));
  } else if (isError === "warning") {
    myAlertDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "data-form-alert-success": "true",
      className: "alert alert-form alert-warning text-xs-center"
    }, responseMessage));
  } else {
    myAlertDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, myAlertDialog);
}

/***/ }),

/***/ "./frontend/src/widgets/CustomSnackBar.js":
/*!************************************************!*\
  !*** ./frontend/src/widgets/CustomSnackBar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomSnackBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function TransitionLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_1__.default, _extends({}, props, {
    direction: "left"
  }));
}
/** Snack bar to inform distributor  */


function CustomSnackBar(props) {
  var values = props.values,
      closeSnackBar = props.closeSnackBar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: values.openSnackBar,
    anchorOrigin: values.snackPosition,
    onClose: function onClose() {
      return closeSnackBar();
    },
    autoHideDuration: 4000,
    TransitionComponent: TransitionLeft
  }, values.isError === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClose: function onClose() {
      return closeSnackBar();
    },
    severity: "error"
  }, values.responseMessage) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClose: function onClose() {
      return closeSnackBar();
    },
    severity: "success"
  }, values.responseMessage));
}

/***/ }),

/***/ "./frontend/src/widgets/NotificationTabView.js":
/*!*****************************************************!*\
  !*** ./frontend/src/widgets/NotificationTabView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.css */ "./frontend/src/widgets/widget.css");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function TransitionLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, props, {
    direction: "left"
  }));
}
/** Snack bar to inform distributor  */


function NotificationTab(props) {
  var _responseMessage$titl;

  var values = props.values,
      closeSnackBar = props.closeSnackBar;
  var responseMessage = values.responseMessage,
      openSnackBar = values.openSnackBar,
      snackPosition = values.snackPosition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__.default, {
    open: openSnackBar,
    anchorOrigin: snackPosition,
    onClose: function onClose() {
      return closeSnackBar();
    },
    autoHideDuration: 20000,
    TransitionComponent: TransitionLeft
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__.default, {
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        closeSnackBar();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      style: {
        fontSize: "13px",
        marginRight: "10px",
        fontWeight: "600"
      },
      className: "text-success fas fa-eye"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        closeSnackBar();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      style: {
        fontSize: "13px",
        fontWeight: "600"
      },
      className: "text-danger fas fa-times"
    }))),
    onClose: function onClose() {
      return closeSnackBar();
    },
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__.default, null, (_responseMessage$titl = responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.title) !== null && _responseMessage$titl !== void 0 ? _responseMessage$titl : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification_pop_text"
  }, responseMessage.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn btn-icon"
  })));
}

/***/ }),

/***/ "./frontend/src/widgets/SimpleBackDrop.js":
/*!************************************************!*\
  !*** ./frontend/src/widgets/SimpleBackDrop.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleBackdrop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    }
  };
});
/** Simple loading screen for app  */

function SimpleBackdrop(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classes.backdrop,
    open: props.open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__.default, {
    color: "inherit"
  })));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/widgets/widget.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/widgets/widget.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tool_tip {\n    cursor: help;\n    position: relative;\n}\n\n.tool_tip {\n    font-size: 14px;\n}\n\n.notification_pop_text {\n    max-width: 200px;\n    max-height: 55px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/widgets/widget.css":
/*!*****************************************!*\
  !*** ./frontend/src/widgets/widget.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./widget.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/widgets/widget.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
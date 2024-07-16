(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_redux_Actions_Sales_js-frontend_src_utils_Debouncer_js-frontend_src_utils_Permis-0b92d7"],{

/***/ "./frontend/src/redux/Actions/Sales.js":
/*!*********************************************!*\
  !*** ./frontend/src/redux/Actions/Sales.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSalesPeople": () => (/* binding */ fetchSalesPeople),
/* harmony export */   "fetchSelectSalesPeople": () => (/* binding */ fetchSelectSalesPeople),
/* harmony export */   "addSalesPerson": () => (/* binding */ addSalesPerson),
/* harmony export */   "editSalesPerson": () => (/* binding */ editSalesPerson),
/* harmony export */   "deleteSalesPerson": () => (/* binding */ deleteSalesPerson),
/* harmony export */   "fetchSalesTarget": () => (/* binding */ fetchSalesTarget),
/* harmony export */   "addSalesTarget": () => (/* binding */ addSalesTarget),
/* harmony export */   "updateSalesTarget": () => (/* binding */ updateSalesTarget),
/* harmony export */   "deleteSalesTarget": () => (/* binding */ deleteSalesTarget)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchSalesPeople = function fetchSalesPeople(page, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/saleman?page=".concat(page);

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADED,
        payload: {
          sales_people: res.data.sales_people,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
function fetchSelectSalesPeople(search, loadOptions, _ref) {
  var page = _ref.page;
  var token = localStorage.getItem("token");
  var config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = "Token ".concat(token);
  }

  var url = search ? "../retailer/api/saleman?page=".concat(page, "&query=").concat(search) : "../retailer/api/saleman?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_sales = res.data.sales_people.map(function (item) {
        return {
          value: item,
          label: item.last_name ? "".concat(item.first_name, " ").concat(item.last_name) : item.first_name
        };
      });
      resolve({
        options: view_sales,
        hasMore: viewLastPage,
        additional: {
          page: page + 1
        }
      });
    })["catch"](function (error) {
      reject(error.response.data);
    });
  });
}
var addSalesPerson = function addSalesPerson(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/saleman/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ADD,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.DASHBOARD_PROGRESS,
        payload: res.data.view_complete
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
var editSalesPerson = function editSalesPerson(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/saleman/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
var deleteSalesPerson = function deleteSalesPerson(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/saleman?salesman_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
}; //

var fetchSalesTarget = function fetchSalesTarget(page, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/sales_target?page=".concat(page);

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_TARGET_LOADED,
        payload: {
          sales_target: res.data.sales_target,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
var addSalesTarget = function addSalesTarget(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/sales_target/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ADD_TARGET_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
var updateSalesTarget = function updateSalesTarget(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/sales_target/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_EDIT_TARGET,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};
var deleteSalesTarget = function deleteSalesTarget(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/sales_target?salestarget_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_DELETE_TARGET,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.SALES_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/utils/Debouncer.js":
/*!*****************************************!*\
  !*** ./frontend/src/utils/Debouncer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Debouncer)
/* harmony export */ });
function Debouncer(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

/***/ }),

/***/ "./frontend/src/utils/PermissionHandler.js":
/*!*************************************************!*\
  !*** ./frontend/src/utils/PermissionHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(permission) {
  if (permission.can_view_dashboard) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/dashboard"
    });
  } else if (permission.can_view_products) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/products"
    });
  } else if (permission.can_view_product_category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/categories"
    });
  } else if (permission.can_view_orders) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/orders"
    });
  } else if (permission.can_view_salesmen) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/sales"
    });
  } else if (permission.can_view_retailer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/retailers"
    });
  } else if (permission.can_view_deliveries) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/deliveries"
    });
  } else if (permission.can_view_offers) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/offers"
    });
  } else if (permission.can_view_users) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/groups"
    });
  } else if (permission.can_manage_mobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/banners"
    });
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    window.location.assign("../forbidden");
  }
}

/***/ }),

/***/ "./frontend/src/widgets/CustomBreadCrumbs.js":
/*!***************************************************!*\
  !*** ./frontend/src/widgets/CustomBreadCrumbs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomBreadcrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {
    link: {
      display: "flex"
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    }
  };
});
function CustomBreadcrumbs(props) {
  var classes = useStyles();
  var propsName = props.propsName,
      changePage = props.changePage,
      prevPropsName = props.prevPropsName;

  function handleClick(event) {
    event.preventDefault();
    changePage(1);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.default, {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    style: {
      color: "grey"
    },
    className: classes.link
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
    color: "initial",
    href: "/product",
    onClick: handleClick,
    className: "side_nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, prevPropsName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    color: "initial",
    className: "side_nav_item"
  }, propsName));
}

/***/ }),

/***/ "./frontend/src/widgets/CustomPagination.js":
/*!**************************************************!*\
  !*** ./frontend/src/widgets/CustomPagination.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function CustomPagination(props) {
  var rows = props.rows,
      changeRows = props.changeRows,
      pageDetails = props.pageDetails,
      changePage = props.changePage,
      customViewRows = props.customViewRows;
  var current_page = pageDetails.current_page,
      last_page = pageDetails.last_page;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  function handlePopUp(e) {
    if (anchorEl != null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  }

  function handlePopUpClick(value) {
    changeRows(value);
    handlePopUp(value);
  }

  var popUpItems = customViewRows ? customViewRows : [{
    name: 25,
    value: 25
  }, {
    name: 50,
    value: 50
  }, {
    name: 100,
    value: 100
  }];
  var popUpValues = {
    popUpItems: popUpItems,
    anchorEl: anchorEl
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid mt-3 mr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end align-items-center bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mr-4"
  }, "Rows per page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return handlePopUp(e);
    },
    className: "bg_themed btn"
  }, rows), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return handlePopUp(e);
    },
    className: "ml-1 btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-caret-down bg_themed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-4"
  }, current_page), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " ml-1"
  }, "of"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " ml-1"
  }, last_page), current_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return changePage(current_page - 1);
    },
    className: " ml-4 btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-chevron-left bg_themed"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), current_page < last_page ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return changePage(current_page + 1);
    },
    className: " ml-4 btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-chevron-right bg_themed"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    popUpValues: popUpValues,
    handlePopUp: handlePopUp,
    handlePopUpClick: handlePopUpClick
  }));
}

/***/ }),

/***/ "./frontend/src/widgets/CustomPopUpMenu.js":
/*!*************************************************!*\
  !*** ./frontend/src/widgets/CustomPopUpMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomPopUpMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__.default, _extends({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, props));
});
var StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  };
})(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__.default);
function CustomPopUpMenu(props) {
  var popUpValues = props.popUpValues,
      handlePopUp = props.handlePopUp,
      handlePopUpClick = props.handlePopUpClick;
  var anchorEl = popUpValues.anchorEl,
      popUpItems = popUpValues.popUpItems;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: function onClose(e) {
      return handlePopUp(e);
    }
  }, popUpItems.map(function (popUpItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledMenuItem, {
      key: index,
      onClick: function onClick() {
        return handlePopUpClick(popUpItem.value);
      }
    }, popUpItem.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "drop_down_image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "../".concat(popUpItem.image),
      alt: ""
    }))) : popUpItem.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__.default, null, popUpItem.icon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__.default, {
      primary: popUpItem.name
    }));
  }));
}

/***/ }),

/***/ "./frontend/src/widgets/CustomRowsPopUp.js":
/*!*************************************************!*\
  !*** ./frontend/src/widgets/CustomRowsPopUp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomRowsPopUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__.default, _extends({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, props));
});
var StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {};
})(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__.default);
function CustomRowsPopUp(props) {
  var popUpValues = props.popUpValues,
      handlePopUp = props.handlePopUp,
      handlePopUpClick = props.handlePopUpClick;
  var anchorEl = popUpValues.anchorEl,
      popUpItems = popUpValues.popUpItems;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: function onClose(e) {
      return handlePopUp(e);
    }
  }, popUpItems.map(function (popUpItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledMenuItem, {
      key: index,
      onClick: function onClick() {
        return handlePopUpClick(popUpItem.name, !popUpItem.value);
      },
      className: "py-0"
    }, popUpItem.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
      checked: popUpItem.value,
      color: "primary",
      inputProps: {
        "aria-label": "primary checkbox"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {
      primary: popUpItem.name
    })) : popUpItem);
  }));
}

/***/ }),

/***/ "./frontend/src/widgets/CustomToolTip.js":
/*!***********************************************!*\
  !*** ./frontend/src/widgets/CustomToolTip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomToolTip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.css */ "./frontend/src/widgets/widget.css");



function CustomToolTip(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tool_tip",
    tabIndex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "data-tip": message !== null && message !== void 0 ? message : "",
    className: "fas fa-info-circle ml-2 text-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__.default, {
    type: "success",
    effect: "float"
  }));
}

/***/ })

}]);
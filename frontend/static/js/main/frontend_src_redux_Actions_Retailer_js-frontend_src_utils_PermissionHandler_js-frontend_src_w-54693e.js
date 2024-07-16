(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_redux_Actions_Retailer_js-frontend_src_utils_PermissionHandler_js-frontend_src_w-54693e"],{

/***/ "./frontend/src/redux/Actions/Retailer.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/Actions/Retailer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRetailers": () => (/* binding */ fetchRetailers),
/* harmony export */   "fetchSelectRetailer": () => (/* binding */ fetchSelectRetailer),
/* harmony export */   "addRetailer": () => (/* binding */ addRetailer),
/* harmony export */   "updateRetailer": () => (/* binding */ updateRetailer),
/* harmony export */   "deleteRetailer": () => (/* binding */ deleteRetailer),
/* harmony export */   "fetchRetailRegions": () => (/* binding */ fetchRetailRegions),
/* harmony export */   "fetchSelectRetailRegions": () => (/* binding */ fetchSelectRetailRegions),
/* harmony export */   "addRetailRegions": () => (/* binding */ addRetailRegions),
/* harmony export */   "updateRetailerRegions": () => (/* binding */ updateRetailerRegions),
/* harmony export */   "deleteRetailerRegions": () => (/* binding */ deleteRetailerRegions),
/* harmony export */   "fetchRetailAreas": () => (/* binding */ fetchRetailAreas),
/* harmony export */   "fetchSelectArea": () => (/* binding */ fetchSelectArea),
/* harmony export */   "addRetailAreas": () => (/* binding */ addRetailAreas),
/* harmony export */   "updateRetailerAreas": () => (/* binding */ updateRetailerAreas),
/* harmony export */   "deleteRetailerArea": () => (/* binding */ deleteRetailerArea),
/* harmony export */   "fetchRetailerCities": () => (/* binding */ fetchRetailerCities),
/* harmony export */   "fetchSelectCity": () => (/* binding */ fetchSelectCity),
/* harmony export */   "addRetailerCity": () => (/* binding */ addRetailerCity),
/* harmony export */   "updateRetailerCity": () => (/* binding */ updateRetailerCity),
/* harmony export */   "deleteRetailerCity": () => (/* binding */ deleteRetailerCity)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchRetailers = function fetchRetailers(page, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/retailers?page=".concat(page);

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADED,
        payload: {
          retailers: res.data.retailers,
          region_current_page: page,
          region_last_page: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
function fetchSelectRetailer(search, loadOptions, _ref) {
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

  var url = search ? "../retailer/api/search_retailer/?page=".concat(page, "&query=").concat(search) : "../retailer/api/search_retailer/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_retailers = res.data.retailers.map(function (item) {
        return {
          value: item,
          label: item.contact_name
        };
      });
      resolve({
        options: view_retailers,
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
var addRetailer = function addRetailer(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/retailers/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ADD,
        payload: res.data
      }); // dispatch({
      //   type: DASHBOARD_PROGRESS,
      //   payload: res.data.view_complete,
      // });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var updateRetailer = function updateRetailer(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/retailers/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var deleteRetailer = function deleteRetailer(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/retailers?retailer_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_DELETE,
        payload: id
      });
    });
  };
};
var fetchRetailRegions = function fetchRetailRegions(page) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/distributionRegion?page=".concat(page), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOCATION_LOADED,
        payload: {
          retailer_regions: res.data.retailer_regions,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
function fetchSelectRetailRegions(search, loadOptions, _ref2) {
  var page = _ref2.page;
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

  var url = search ? "../retailer/api/distributionRegion/?page=".concat(page, "&query=").concat(search) : "../retailer/api/distributionRegion/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_regions = res.data.retailer_regions.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_regions,
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
var addRetailRegions = function addRetailRegions(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/distributionRegion/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOCATION_ADD,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var updateRetailerRegions = function updateRetailerRegions(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/distributionRegion/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOCATION_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var deleteRetailerRegions = function deleteRetailerRegions(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/distributionRegion/?region_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOCATION_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var fetchRetailAreas = function fetchRetailAreas(page, city) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = city ? "../retailer/api/distribution_area?page=".concat(page, "&city=").concat(city) : "../retailer/api/distribution_area?page=".concat(page);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_AREA_LOADED,
        payload: {
          areas: res.data.areas,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
function fetchSelectArea(search, loadOptions, _ref3) {
  var page = _ref3.page,
      city = _ref3.city;
  console.log(city);
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

  var url = "../retailer/api/distribution_area/?page=".concat(page);

  if (search) {
    url = url + "&query=".concat(search);
  }

  if (city) {
    url = url + "&city=".concat(city);
  }

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_areas = res.data.areas.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_areas,
        hasMore: viewLastPage,
        additional: {
          page: page + 1,
          city: city
        }
      });
    })["catch"](function (error) {
      reject(error.response.data);
    });
  });
}
var addRetailAreas = function addRetailAreas(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/distribution_area/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_AREA_ADD,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var updateRetailerAreas = function updateRetailerAreas(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/distribution_area/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_AREA_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var deleteRetailerArea = function deleteRetailerArea(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/distribution_area/?area_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_AREA_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var fetchRetailerCities = function fetchRetailerCities(region) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = region ? "../retailer/api/distribution_city_api?region=".concat(region) : "../retailer/api/distribution_city_api";
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_CITIES,
        payload: res.data.cities
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
function fetchSelectCity(search, loadOptions, _ref4) {
  var page = _ref4.page,
      region = _ref4.region;
  console.log(region);
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

  var url = "../retailer/api/distribution_city_api/?page=".concat(page);

  if (search) {
    url = url + "&query=".concat(search);
  }

  if (region) {
    url = url + "region=".concat(region);
  }

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_cities = res.data.cities.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_cities,
        hasMore: viewLastPage,
        additional: {
          page: page + 1,
          region: region
        }
      });
    })["catch"](function (error) {
      reject(error.response.data);
    });
  });
}
var addRetailerCity = function addRetailerCity(body, region_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/distribution_city_api/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_CITY_ADD,
        payload: {
          dist_city: res.data.dist_city,
          region_id: region_id
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var updateRetailerCity = function updateRetailerCity(body, region_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/distribution_city_api/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_CITY_EDIT,
        payload: {
          dist_city: res.data.dist_city,
          region_id: region_id
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};
var deleteRetailerCity = function deleteRetailerCity(id, region_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/distribution_city_api/?city_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_CITY_DELETE,
        payload: {
          id: id,
          region_id: region_id
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.RETAILER_ERROR
      });
    });
  };
};

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
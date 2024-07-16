(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_redux_Actions_Products_js"],{

/***/ "./frontend/src/redux/Actions/Products.js":
/*!************************************************!*\
  !*** ./frontend/src/redux/Actions/Products.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProducts": () => (/* binding */ fetchProducts),
/* harmony export */   "fetchPaginatedProducts": () => (/* binding */ fetchPaginatedProducts),
/* harmony export */   "fetchSelectProduct": () => (/* binding */ fetchSelectProduct),
/* harmony export */   "searchProducts": () => (/* binding */ searchProducts),
/* harmony export */   "addProduct": () => (/* binding */ addProduct),
/* harmony export */   "updateProduct": () => (/* binding */ updateProduct),
/* harmony export */   "updateProductState": () => (/* binding */ updateProductState),
/* harmony export */   "deleteProduct": () => (/* binding */ deleteProduct),
/* harmony export */   "fetchCategories": () => (/* binding */ fetchCategories),
/* harmony export */   "fetchSelectCategory": () => (/* binding */ fetchSelectCategory),
/* harmony export */   "addCategory": () => (/* binding */ addCategory),
/* harmony export */   "updateCategories": () => (/* binding */ updateCategories),
/* harmony export */   "deleteCategory": () => (/* binding */ deleteCategory),
/* harmony export */   "fetchProductUnits": () => (/* binding */ fetchProductUnits),
/* harmony export */   "fetchSelectProductUnits": () => (/* binding */ fetchSelectProductUnits),
/* harmony export */   "addProductUnits": () => (/* binding */ addProductUnits),
/* harmony export */   "updateProductUnits": () => (/* binding */ updateProductUnits),
/* harmony export */   "deleteUnit": () => (/* binding */ deleteUnit),
/* harmony export */   "fetchProductCompoundUnits": () => (/* binding */ fetchProductCompoundUnits),
/* harmony export */   "addProductCompoundUnits": () => (/* binding */ addProductCompoundUnits),
/* harmony export */   "updateProductCompoundUnit": () => (/* binding */ updateProductCompoundUnit),
/* harmony export */   "deleteProductCompoundUnit": () => (/* binding */ deleteProductCompoundUnit),
/* harmony export */   "fetchProductPriceLevels": () => (/* binding */ fetchProductPriceLevels),
/* harmony export */   "fetchSelectPriceLevel": () => (/* binding */ fetchSelectPriceLevel),
/* harmony export */   "addProductLevels": () => (/* binding */ addProductLevels),
/* harmony export */   "updatePriceLevel": () => (/* binding */ updatePriceLevel),
/* harmony export */   "deletePriceLevel": () => (/* binding */ deletePriceLevel),
/* harmony export */   "fetchPriceLists": () => (/* binding */ fetchPriceLists),
/* harmony export */   "fetchAddPriceList": () => (/* binding */ fetchAddPriceList),
/* harmony export */   "addPriceList": () => (/* binding */ addPriceList),
/* harmony export */   "updatePriceList": () => (/* binding */ updatePriceList),
/* harmony export */   "deletePriceList": () => (/* binding */ deletePriceList),
/* harmony export */   "fetchProductBrands": () => (/* binding */ fetchProductBrands),
/* harmony export */   "fetchSelectProductBrand": () => (/* binding */ fetchSelectProductBrand),
/* harmony export */   "addProductBrand": () => (/* binding */ addProductBrand),
/* harmony export */   "updateProductBrand": () => (/* binding */ updateProductBrand),
/* harmony export */   "deleteProductBrand": () => (/* binding */ deleteProductBrand)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchProducts = function fetchProducts(page, category_id, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/products/?page=".concat(page);

    if (category_id) {
      url = url + "&category_id=".concat(category_id);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADED,
        payload: {
          products: res.data.products,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchPaginatedProducts = function fetchPaginatedProducts(page, category_id, query) {
  return function (dispatch, getState) {
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/products/?page=".concat(page);

    if (category_id) {
      url = url + "&category_id=".concat(category_id);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_PAGINATION_LOADED,
        payload: {
          products: res.data.products,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
function fetchSelectProduct(search, loadOptions, _ref) {
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

  var url = search ? "../retailer/api/search_product/?page=".concat(page, "&query=").concat(search) : "../retailer/api/search_product/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_products = res.data.products.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_products,
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
var searchProducts = function searchProducts(query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/search_product/?query=".concat(query), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADED,
        payload: {
          products: res.data.products,
          currentPage: 1,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var addProduct = function addProduct(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/products/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ADD,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateProduct = function updateProduct(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/products/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateProductState = function updateProductState(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch("../retailer/api/products/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deleteProduct = function deleteProduct(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/products?product_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchCategories = function fetchCategories(page, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/product_category/?page=".concat(page);

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_CATEGORIES,
        payload: {
          categories: res.data.categories,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
function fetchSelectCategory(search, loadOptions, _ref2) {
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

  var url = search ? "../retailer/api/product_category/?page=".concat(page, "&query=").concat(search) : "../retailer/api/product_category/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_categories = res.data.categories.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_categories,
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
var addCategory = function addCategory(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/product_category/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_CATEGORIES_ADD,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateCategories = function updateCategories(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/product_category/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_CATEGORIES_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deleteCategory = function deleteCategory(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/product_category?category_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_CATEGORIES_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchProductUnits = function fetchProductUnits(page, rows, query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/mUnit/?page=".concat(page);

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_UNITS,
        payload: {
          units: res.data.units,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchSelectProductUnits = function fetchSelectProductUnits(search, loadOptions, _ref3) {
  var page = _ref3.page;
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

  var url = search ? "../retailer/api/mUnit/?page=".concat(page, "&query=").concat(search) : "../retailer/api/mUnit/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_units = res.data.units.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_units,
        hasMore: viewLastPage,
        additional: {
          page: page + 1
        }
      });
    })["catch"](function (error) {
      reject(error.response.data);
    });
  });
};
var addProductUnits = function addProductUnits(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/mUnit/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_UNITS_ADD,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateProductUnits = function updateProductUnits(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/mUnit/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_UNITS_UPDATE,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deleteUnit = function deleteUnit(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/mUnit/?unit_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_UNITS_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchProductCompoundUnits = function fetchProductCompoundUnits(page, rows, query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/compoundUnit/?page=".concat(page);

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_COMPOUND_UNITS,
        payload: {
          c_units: res.data.c_units,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var addProductCompoundUnits = function addProductCompoundUnits(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/compoundUnit/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ADD_COMPOUND_UNITS,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateProductCompoundUnit = function updateProductCompoundUnit(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/compoundUnit/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_COMPOUND_UNITS_UPDATE,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deleteProductCompoundUnit = function deleteProductCompoundUnit(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/compoundUnit/?c_unit_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_COMPOUND_UNITS_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchProductPriceLevels = function fetchProductPriceLevels(page, rows, query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/priceLevel/?page=".concat(page);

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_PRICE_LEVELS,
        payload: {
          price_levels: res.data.price_levels,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
function fetchSelectPriceLevel(search, loadOptions, _ref4) {
  var page = _ref4.page;
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

  var url = search ? "../retailer/api/priceLevel?page=".concat(page, "&query=").concat(search) : "../retailer/api/priceLevel?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_levels = res.data.price_levels.map(function (item) {
        return {
          value: item,
          label: item.level_name
        };
      });
      resolve({
        options: view_levels,
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
var addProductLevels = function addProductLevels(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/priceLevel/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ADD_PRICE_LEVELS,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updatePriceLevel = function updatePriceLevel(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/priceLevel/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_PRICE_LEVELS_UPDATE,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deletePriceLevel = function deletePriceLevel(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/priceLevel/?level_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_PRICE_LEVELS_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchPriceLists = function fetchPriceLists(page, product_id, applicable_from, price_level) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/view_price_list/?page=".concat(page);

    if (product_id) {
      url = url + "&product_id=".concat(product_id);
    }

    if (applicable_from) {
      url = url + "&applicable_from=".concat(applicable_from);
    }

    if (price_level) {
      url = url + "&price_level=".concat(price_level);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_VIEW_PRICE_LIST,
        payload: {
          price_lists: res.data.price_lists,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchAddPriceList = function fetchAddPriceList(page, category_id, applicable_from, price_level) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/priceList/?page=".concat(page);

    if (category_id) {
      url = url + "&category_id=".concat(category_id);
    }

    if (applicable_from) {
      url = url + "&applicable_from=".concat(applicable_from);
    }

    if (price_level) {
      url = url + "&price_level=".concat(price_level);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_PRICE_LIST,
        payload: {
          price_lists: res.data.price_lists,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var addPriceList = function addPriceList(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/priceList/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ADD_PRICE_LIST,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updatePriceList = function updatePriceList(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/priceList/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_EDIT_PRICE_LIST,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deletePriceList = function deletePriceList(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/priceList/?price_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_DELETE_PRICE_LIST,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var fetchProductBrands = function fetchProductBrands(page, rows, query) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/dist_brands/?page=".concat(page);

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_BRANDS,
        payload: {
          brands: res.data.brands,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
function fetchSelectProductBrand(search, loadOptions, _ref5) {
  var page = _ref5.page;
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

  var url = search ? "../retailer/api/dist_brands/?page=".concat(page, "&query=").concat(search) : "../retailer/api/dist_brands/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_brands = res.data.brands.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_brands,
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
var addProductBrand = function addProductBrand(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/dist_brands/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_BRANDS_ADD,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var updateProductBrand = function updateProductBrand(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/dist_brands/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_BRANDS_UPDATE,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};
var deleteProductBrand = function deleteProductBrand(brand_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/dist_brands/?brand_id=".concat(brand_id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_BRANDS_DELETE,
        payload: brand_id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_ERROR
      });
    });
  };
};

/***/ })

}]);
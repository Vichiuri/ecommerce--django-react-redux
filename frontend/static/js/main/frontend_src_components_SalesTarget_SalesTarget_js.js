(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_SalesTarget_SalesTarget_js"],{

/***/ "./frontend/src/components/SalesTarget/AddSaleTargetGroup.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/components/SalesTarget/AddSaleTargetGroup.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddSaleTargetGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _utils_currencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/currencies */ "./frontend/src/utils/currencies.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomViewCurrenciesPopUp */ "./frontend/src/widgets/CustomViewCurrenciesPopUp.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function AddSaleTargetGroup(props) {
  var changePage = props.changePage,
      sales_people = props.sales_people,
      addSalesTarget = props.addSalesTarget;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      target_name = _useState2[0],
      setTargetName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      salesMen = _useState4[0],
      setSaleMen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      viewSalesPeople = _useState6[0],
      setViewSalesPeople = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      sales = _useState8[0],
      setSales = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      reward = _useState10[0],
      setReward = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      perc = _useState12[0],
      setPerc = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      period = _useState14[0],
      setPeriod = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      viewCurrency = _useState16[0],
      setViewCurrency = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      anchorEl = _useState18[0],
      setAnchorEl = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      isError = _useState20[0],
      setIsError = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState22 = _slicedToArray(_useState21, 2),
      responseMessage = _useState22[0],
      setResponseMessage = _useState22[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setViewSalesPeople(sales_people);
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default.filter(function (currency) {
      return currency.cc === "KES";
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    } else {
      setViewCurrency(_utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default[0]);
    }
  }, [sales_people]);
  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: _utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default
  };

  function uploadSalesTarget() {
    setIsError(null);
    setResponseMessage("");

    if (target_name && salesMen.length > 0 && period && sales) {
      var sales_ids = salesMen.map(function (item) {
        return item.value.id;
      });
      addSalesTarget({
        name: target_name,
        sale_people: JSON.stringify(sales_ids),
        period: period,
        target_sales: sales,
        reward_money: reward,
        reward_per: perc
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all stared fields");
    }
  }

  function handleCurrencyPopUpClick(value) {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default.filter(function (currency) {
      return currency.cc === value;
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Sales Target")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_1__.default, {
    prevPropsName: "Groups",
    propsName: "Add Group",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Target Name*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "Input the best name"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter target name",
    value: target_name,
    name: "target_name",
    onChange: function onChange(e) {
      return setTargetName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Salesperson*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "choose a saleperson"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: true,
    value: salesMen,
    setValue: function setValue(value) {
      return setSaleMen(value);
    },
    fetchData: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_6__.fetchSelectSalesPeople,
    closeMenuOnSelect: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Target Period*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "Choose the timeframe"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: period,
    onChange: function onChange(e) {
      return setPeriod(e.target.value);
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Daily"
  }, "Daily"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Weekly"
  }, "Weekly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Monthly"
  }, "Monthly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Yearly"
  }, "Yearly"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Target Sales* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "Input the right target"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text btn_type"
  }, _utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default && viewCurrency ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrency.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: sales,
    name: "sales",
    onChange: function onChange(e) {
      return setSales(e.target.value);
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Monetary Reward ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "Enter the reward amount"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text btn_type"
  }, _utils_currencies__WEBPACK_IMPORTED_MODULE_2__.default && viewCurrency ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrency.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: reward,
    name: "sales",
    onChange: function onChange(e) {
      return setReward(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Percentage Reward ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_7__.default, {
    message: "Enter the reward %"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: perc,
    name: "sales",
    onChange: function onChange(e) {
      return setPerc(e.target.value);
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadSalesTarget();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Add SalesGroup"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_4__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handleCurrencyPopUpClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/SalesTarget/EditSalesTargetGroup.js":
/*!*********************************************************************!*\
  !*** ./frontend/src/components/SalesTarget/EditSalesTargetGroup.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditSalesTargetGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ "./node_modules/react-select-async-paginate/es/index.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _utils_currencies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/currencies */ "./frontend/src/utils/currencies.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomViewCurrenciesPopUp */ "./frontend/src/widgets/CustomViewCurrenciesPopUp.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function EditSalesTargetGroup(props) {
  var target = props.target,
      updateSalesTarget = props.updateSalesTarget,
      changePage = props.changePage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      target_name = _useState2[0],
      setTargetName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      salesMen = _useState4[0],
      setSaleMen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      viewSalesPeople = _useState6[0],
      setViewSalesPeople = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      sales = _useState8[0],
      setSales = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      reward = _useState10[0],
      setReward = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      perc = _useState12[0],
      setPerc = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      period = _useState14[0],
      setPeriod = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      viewCurrency = _useState16[0],
      setViewCurrency = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      anchorEl = _useState18[0],
      setAnchorEl = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      isError = _useState20[0],
      setIsError = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState22 = _slicedToArray(_useState21, 2),
      responseMessage = _useState22[0],
      setResponseMessage = _useState22[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (target) {
      setTargetName(target.name);
      var salesArray = target.salesmen.map(function (item) {
        return {
          value: item,
          label: item.last_name ? "".concat(item.first_name, " ").concat(item.last_name) : item.first_name
        };
      });
      setSaleMen(salesArray);
      setPeriod(target.period);
      setSales(target.target_sales);
      setReward(target.reward_money);
      setPerc(target.reward_per);
    }

    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default.filter(function (currency) {
      return currency.cc === "KES";
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    } else {
      setViewCurrency(_utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default[0]);
    }
  }, [target]);

  function uploadSalesTarget() {
    setIsError(null);
    setResponseMessage("");

    if (target_name && salesMen.length > 0 && period && sales) {
      var sales_ids = salesMen.map(function (item) {
        return item.value.id;
      });
      updateSalesTarget({
        name: target_name,
        sale_people: JSON.stringify(sales_ids),
        period: period,
        target_sales: sales,
        reward_money: reward,
        reward_per: perc,
        id: target.id
      });
    } else {
      setIsError(false);
      setResponseMessage("Please input all stared fields");
    }
  }

  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: _utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default
  };

  function handleCurrencyPopUpClick(value) {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default.filter(function (currency) {
      return currency.cc === value;
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Sales Target")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__.default, {
    prevPropsName: "Groups",
    propsName: "Edit Group",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Target Name*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Input the best name"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter target name",
    value: target_name,
    name: "target_name",
    onChange: function onChange(e) {
      return setTargetName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Salesperson* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "choose a salesperson"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_6__.default, {
    isMulti: true,
    value: salesMen,
    setValue: function setValue(value) {
      return setSaleMen(value);
    },
    fetchData: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_7__.fetchSelectSalesPeople,
    closeMenuOnSelect: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Target Period* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose the timeframe"
  }), "    "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: period,
    onChange: function onChange(e) {
      return setPeriod(e.target.value);
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Daily"
  }, "Daily"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Weekly"
  }, "Weekly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Monthly"
  }, "Monthly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Yearly"
  }, "Yearly"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Target Sales* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Input the right target"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text btn_type"
  }, _utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default && viewCurrency ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrency.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: sales,
    name: "sales",
    onChange: function onChange(e) {
      return setSales(e.target.value);
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Monetary Reward ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Enter the reward amount"
  }), "     "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text btn_type"
  }, _utils_currencies__WEBPACK_IMPORTED_MODULE_3__.default && viewCurrency ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrency.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: reward,
    name: "sales",
    onChange: function onChange(e) {
      return setReward(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Percentage Reward ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Enter the reward %"
  }), "     "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)",
    placeholder: "Please input target sales",
    value: perc,
    name: "sales",
    onChange: function onChange(e) {
      return setPerc(e.target.value);
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadSalesTarget();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Save SalesGroup"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handleCurrencyPopUpClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/SalesTarget/SalesTarget.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/SalesTarget/SalesTarget.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _AddSaleTargetGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddSaleTargetGroup */ "./frontend/src/components/SalesTarget/AddSaleTargetGroup.js");
/* harmony import */ var _EditSalesTargetGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditSalesTargetGroup */ "./frontend/src/components/SalesTarget/EditSalesTargetGroup.js");
/* harmony import */ var _ViewSalesTarget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ViewSalesTarget */ "./frontend/src/components/SalesTarget/ViewSalesTarget.js");
/* harmony import */ var _Sales_sales_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Sales/sales.css */ "./frontend/src/components/Sales/sales.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var SalesTarget = /*#__PURE__*/function (_Component) {
  _inherits(SalesTarget, _Component);

  var _super = _createSuper(SalesTarget);

  function SalesTarget(props) {
    var _this;

    _classCallCheck(this, SalesTarget);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      currentSalesTarget: null,
      currentPage: 1
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.viewEditSalesTarget = _this.viewEditSalesTarget.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SalesTarget, [{
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "viewEditSalesTarget",
    value: function viewEditSalesTarget(salesTarget) {
      this.setState({
        currentSalesTarget: salesTarget,
        currentPage: 3
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) {
        if (message.status == 201) {
          this.setState({
            currentPage: 1
          });
        }

        this.setResponse(message);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchSalesTarget(1);
    }
  }, {
    key: "setResponse",
    value: function setResponse(response) {
      var value = Object.keys(response.responseMessage)[0];
      var responseMessage = response.responseMessage[value];
      if (responseMessage instanceof Array) this.setState({
        responseMessage: responseMessage[0],
        isError: response.isError,
        openSnackBar: true
      });else this.setState({
        responseMessage: responseMessage,
        isError: response.isError,
        openSnackBar: true
      });
    }
  }, {
    key: "closeSnackBar",
    value: function closeSnackBar() {
      this.setState({
        openSnackBar: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          salesReducer = _this$props2.salesReducer,
          addSalesTarget = _this$props2.addSalesTarget,
          fetchSalesPeople = _this$props2.fetchSalesPeople,
          auth = _this$props2.auth,
          updateSalesTarget = _this$props2.updateSalesTarget,
          deleteSalesTarget = _this$props2.deleteSalesTarget,
          fetchSalesTarget = _this$props2.fetchSalesTarget;
      var isLoading = salesReducer.isLoading,
          sales_target = salesReducer.sales_target,
          sales_people = salesReducer.sales_people,
          target_current_page = salesReducer.target_current_page,
          target_last_page = salesReducer.target_last_page;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          currentSalesTarget = _this$state.currentSalesTarget;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_salesmen || !auth.account.dist_options.use_sales_target) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.auth.group.permission);
      }

      var pageDetails = {
        current_page: target_current_page,
        last_page: target_last_page
      };

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesTarget__WEBPACK_IMPORTED_MODULE_8__.default, {
            sales_target: sales_target,
            changePage: this.changePage,
            sales_people: sales_people,
            canManage: auth.group.permission.can_manage_salesmen,
            viewEditSalesTarget: this.viewEditSalesTarget,
            deleteSalesTarget: deleteSalesTarget,
            pageDetails: pageDetails,
            fetchSalesTarget: fetchSalesTarget
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddSaleTargetGroup__WEBPACK_IMPORTED_MODULE_6__.default, {
            sales_target: sales_target,
            addSalesTarget: addSalesTarget,
            canManage: auth.group.permission.can_manage_salesmen,
            changePage: this.changePage
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditSalesTargetGroup__WEBPACK_IMPORTED_MODULE_7__.default, {
            target: currentSalesTarget,
            updateSalesTarget: updateSalesTarget,
            canManage: auth.group.permission.can_manage_salesmen,
            changePage: this.changePage
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesTarget__WEBPACK_IMPORTED_MODULE_8__.default, {
            sales_target: sales_target,
            addSalesTarget: addSalesTarget,
            fetchSalesPeople: fetchSalesPeople,
            sales_people: sales_people,
            canManage: auth.group.permission.can_manage_salesmen,
            updateSalesTarget: updateSalesTarget,
            deleteSalesTarget: deleteSalesTarget
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return SalesTarget;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    salesReducer: state.salesReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Sales target view for sales people  */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSalesTarget: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__.fetchSalesTarget,
  addSalesTarget: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__.addSalesTarget,
  fetchSalesPeople: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__.fetchSalesPeople,
  deleteSalesTarget: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__.deleteSalesTarget,
  updateSalesTarget: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_2__.updateSalesTarget
})(SalesTarget));

/***/ }),

/***/ "./frontend/src/components/SalesTarget/ViewSalesTarget.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/SalesTarget/ViewSalesTarget.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewSalesTarget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
/* harmony import */ var _ViewSalesTargetRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewSalesTargetRow */ "./frontend/src/components/SalesTarget/ViewSalesTargetRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewSalesTarget(props) {
  var sales_target = props.sales_target,
      changePage = props.changePage,
      canManage = props.canManage,
      deleteSalesTarget = props.deleteSalesTarget,
      viewEditSalesTarget = props.viewEditSalesTarget,
      pageDetails = props.pageDetails,
      fetchSalesTarget = props.fetchSalesTarget;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  function onChangeRows(viewRows) {
    fetchSalesTarget(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchSalesTarget(page, query, rows);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg_themed container-fluid align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6 form-group p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group p-0 m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control border-right-0 m-0 p-0 ",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
      if (query) {
        fetchSalesTarget(1, query, rows);
      } else {
        fetchSalesTarget(1, "", rows);
      }
    }, 2000),
    placeholder: "Search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text border-left-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return changePage(2);
    },
    className: "btn btn-primary btn-lg table_menu_btn mr-3"
  }, "Add Sales Target") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "10%",
    className: "text-right"
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "30%",
    className: "text-right"
  }, "Target Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "10%",
    className: "text-right"
  }, "Period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "30%",
    className: "text-right"
  }, "Target Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "10%",
    className: "text-right"
  }, "Sales People"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    width: "10%",
    className: "text-right"
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, sales_target.map(function (target, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesTargetRow__WEBPACK_IMPORTED_MODULE_3__.default, {
      target: target,
      index: index,
      key: index,
      canManage: canManage,
      viewEditSalesTarget: viewEditSalesTarget,
      deleteSalesTarget: deleteSalesTarget
    });
  }))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_2__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))));
}

/***/ }),

/***/ "./frontend/src/components/SalesTarget/ViewSalesTargetRow.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/components/SalesTarget/ViewSalesTargetRow.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewSalesTargetRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function ViewSalesTargetRow(props) {
  var index = props.index,
      target = props.target,
      canManage = props.canManage,
      deleteSalesTarget = props.deleteSalesTarget,
      viewEditSalesTarget = props.viewEditSalesTarget;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var popUpItems = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-edit btn_type"
    }),
    name: "Edit",
    value: "Edit"
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-trash btn_type"
    }),
    name: "Delete",
    value: "Delete"
  }];
  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: popUpItems
  };

  function handlePopClick(value) {
    if (value == "Delete") {
      deleteSalesTarget(target.id);
    } else if (value == "Edit") {
      viewEditSalesTarget(target);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: "ml-2",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "30%",
    className: "text-right"
  }, target.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, target.period), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "30%",
    className: "text-right"
  }, target.target_sales_currency, ". ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(target.target_sales)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-up bg_themed"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-down bg_themed"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__.default, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Sales People"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Email"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, null, target.salesmen.map(function (person, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "sale_target_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: person.pic ? "..".concat(person.pic) : "../static/images/login.jpg",
      alt: "offer logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.first_name, " ", person.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.email));
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Sales/sales.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Sales/sales.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sales_round_img {\n    width: 70px;\n    height: 70px;\n    overflow: hidden;\n    border-radius: 5px;\n}\n\n.sales_round_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.add_sales_img {\n    width: 80px;\n    height: 80px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.add_sales_img img {\n    height: 100%;\n    width: 100%;\n    object-fit: contain;\n}\n\n.sale_target_img {\n    height: 40px;\n    width: 40px;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.sale_target_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Sales/sales.css":
/*!*************************************************!*\
  !*** ./frontend/src/components/Sales/sales.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sales_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sales.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Sales/sales.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sales_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sales_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Reports_SalesTargetReport_js"],{

/***/ "./frontend/src/components/Reports/SalesTargetReport.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/Reports/SalesTargetReport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Reports */ "./frontend/src/redux/Actions/Reports.js");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _ViewSalesTargetReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewSalesTargetReport */ "./frontend/src/components/Reports/ViewSalesTargetReport.js");
/* harmony import */ var _Reports_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reports.css */ "./frontend/src/components/Reports/Reports.css");
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










var SalesTargetReport = /*#__PURE__*/function (_Component) {
  _inherits(SalesTargetReport, _Component);

  var _super = _createSuper(SalesTargetReport);

  function SalesTargetReport(props) {
    var _this;

    _classCallCheck(this, SalesTargetReport);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      currentPage: 1
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SalesTargetReport, [{
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
      var from_date = (0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_3__.default)(new Date());
      this.props.fetchSalesTargetReport(from_date);
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
          reportsReducer = _this$props2.reportsReducer,
          fetchSalesTargetReport = _this$props2.fetchSalesTargetReport,
          fetchIndividualSalesManStatics = _this$props2.fetchIndividualSalesManStatics;
      var isLoading = reportsReducer.isLoading,
          sales_target_report = reportsReducer.sales_target_report,
          sales_men_reports = reportsReducer.sales_men_reports;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
        open: isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesTargetReport__WEBPACK_IMPORTED_MODULE_6__.default, {
        fetchSalesTargetReport: fetchSalesTargetReport,
        fetchIndividualSalesManStatics: fetchIndividualSalesManStatics,
        reports: sales_target_report,
        sales_men_reports: sales_men_reports
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return SalesTargetReport;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    reportsReducer: state.reportsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Sales target report view */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSalesTargetReport: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_2__.fetchSalesTargetReport,
  fetchIndividualSalesManStatics: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_2__.fetchIndividualSalesManStatics
})(SalesTargetReport));

/***/ }),

/***/ "./frontend/src/components/Reports/SalesTargetReportTable.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/components/Reports/SalesTargetReportTable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesTargetReportTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");


function SalesTargetReportTable(props) {
  var reports = props.reports,
      getIndivialReports = props.getIndivialReports;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Target Group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Target"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Reward Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Reward Perc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reports ? reports.map(function (report, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.period, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.target_sales_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(report.target_sales)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.reward_money_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(report.reward_money ? report.reward_money : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.reward_per ? report.reward_per : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: function onClick() {
        return getIndivialReports(report.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary"
    }, "View")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))));
}

/***/ }),

/***/ "./frontend/src/components/Reports/ViewIndividualSaleReports.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/components/Reports/ViewIndividualSaleReports.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewIndividualSaleReports)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");


function ViewIndividualSaleReports(props) {
  var reports = props.reports,
      viewSalesTable = props.viewSalesTable;

  function calculateStatus(complete, target) {
    var difference = complete - target;
    return difference > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "dot"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "bg-success"
    }), "Completed") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "dot"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "bg-warning"
    }), "Pending");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return viewSalesTable();
    },
    className: "badge badge-danger btn_type mr-2 mb-2"
  }, "Groups")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Target"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reports.map(function (report, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "report_sales_round_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: report.pic ? "..".concat(report.pic) : "../static/images/login.jpg",
      alt: "customer image"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.first_name, " ", report.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.target_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(report.statics)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.target_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(report.target)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, calculateStatus(report.statics, report.target)));
  }))));
}

/***/ }),

/***/ "./frontend/src/components/Reports/ViewSalesTargetReport.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/Reports/ViewSalesTargetReport.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewSalesTargetReport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var _utils_PrintOutScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PrintOutScreen */ "./frontend/src/utils/PrintOutScreen.js");
/* harmony import */ var _SalesTargetReportTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SalesTargetReportTable */ "./frontend/src/components/Reports/SalesTargetReportTable.js");
/* harmony import */ var _ViewIndividualSaleReports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewIndividualSaleReports */ "./frontend/src/components/Reports/ViewIndividualSaleReports.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ViewSalesTargetReport(props) {
  var reports = props.reports,
      sales_men_reports = props.sales_men_reports,
      fetchSalesTargetReport = props.fetchSalesTargetReport,
      fetchIndividualSalesManStatics = props.fetchIndividualSalesManStatics;
  var options = [{
    name: "All",
    value: ""
  }, {
    name: "Daily",
    value: "Daily"
  }, {
    name: "Weekly",
    value: "Weekly"
  }, {
    name: "Monthly",
    value: "Monthly"
  }, {
    name: "Yearly",
    value: "Yearly"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options[0].value),
      _useState2 = _slicedToArray(_useState, 2),
      period = _useState2[0],
      setPeriod = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_1__.default)(new Date())),
      _useState4 = _slicedToArray(_useState3, 2),
      date_from = _useState4[0],
      setDateFrom = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      currentSalesGroup = _useState6[0],
      setCurrentSalesGroup = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      currentIndex = _useState8[0],
      setCurrentIndex = _useState8[1];

  var currentPage = currentIndex == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SalesTargetReportTable__WEBPACK_IMPORTED_MODULE_3__.default, {
    reports: reports,
    getIndivialReports: function getIndivialReports(salesgroup_id) {
      return viewIndivialReports(date_from, salesgroup_id);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewIndividualSaleReports__WEBPACK_IMPORTED_MODULE_4__.default, {
    reports: sales_men_reports,
    viewSalesTable: viewSalesTable
  });

  function viewFilteredReports(from, status) {
    fetchSalesTargetReport(from, status);
  }

  function viewSalesTable() {
    setCurrentIndex(1);
  }

  function viewIndivialReports(from, salesgroup) {
    fetchIndividualSalesManStatics(from, salesgroup);
    setCurrentIndex(2);
    setCurrentSalesGroup(salesgroup);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-items-center p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "SalesTarget Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return (0,_utils_PrintOutScreen__WEBPACK_IMPORTED_MODULE_2__.default)("sales_print_out");
    },
    className: "btn btn-primary btn-lg reports_btn ml-2"
  }, "Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn btn-success btn-lg reports_btn ml-2"
  }, "Chart")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "sales_print_out",
    className: "col-lg-8 col-md-6 col-sm-12 col-xs-12 border-right"
  }, currentPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "font-weight-bold"
  }, "Select Period")), currentIndex == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: period,
    onChange: function onChange(e) {
      setPeriod(e.target.value);
      viewFilteredReports(date_from, e.target.value);
    }
  }, options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: option.value
    }, option.name);
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Date From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control",
    type: "date",
    tabIndex: "3",
    name: "date_from",
    value: date_from || "",
    onChange: function onChange(e) {
      setDateFrom(e.target.value);

      if (currentIndex == 1) {
        viewFilteredReports(e.target.value, period);
      } else {
        if (currentSalesGroup) {
          viewIndivialReports(e.target.value, currentSalesGroup);
        }
      }
    },
    dateformat: "yyyy-mm-dd",
    max: new Date()
  })))))))));
}

/***/ }),

/***/ "./frontend/src/redux/Actions/Reports.js":
/*!***********************************************!*\
  !*** ./frontend/src/redux/Actions/Reports.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrdersStatics": () => (/* binding */ fetchOrdersStatics),
/* harmony export */   "fetchRetailersStatics": () => (/* binding */ fetchRetailersStatics),
/* harmony export */   "fetchProductStatics": () => (/* binding */ fetchProductStatics),
/* harmony export */   "fetchSalesTargetReport": () => (/* binding */ fetchSalesTargetReport),
/* harmony export */   "fetchIndividualSalesManStatics": () => (/* binding */ fetchIndividualSalesManStatics)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");




var fetchOrdersStatics = function fetchOrdersStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/order_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchRetailersStatics = function fetchRetailersStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchProductStatics = function fetchProductStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/dist_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchSalesTargetReport = function fetchSalesTargetReport(from_date, period) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = period ? "../retailer/api/sales_group_statics/?from_date=".concat(from_date, "&period=").concat(period) : "../retailer/api/sales_group_statics/?from_date=".concat(from_date);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.SALES_TARGET_REPORT_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchIndividualSalesManStatics = function fetchIndividualSalesManStatics(from_date, sales_group) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/sales_man_statics/?from_date=".concat(from_date, "&salegroup_id=").concat(sales_group), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.SALES_TARGET_INDIVIDUAL_LOADED,
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
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};

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

/***/ }),

/***/ "./frontend/src/utils/FormatInputDate.js":
/*!***********************************************!*\
  !*** ./frontend/src/utils/FormatInputDate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatInputDate)
/* harmony export */ });
function formatInputDate(mdate) {
  var date = new Date(mdate);
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var monthIndex = date.getMonth() + 1;
  var month = monthIndex < 10 ? "0".concat(monthIndex) : monthIndex;
  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
}

/***/ }),

/***/ "./frontend/src/utils/PrintOutScreen.js":
/*!**********************************************!*\
  !*** ./frontend/src/utils/PrintOutScreen.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elementId) {
  var newWindow = window.open("", "", "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");
  newWindow.document.write(document.getElementById(elementId).innerHTML);
  newWindow.document.close();
  newWindow.focus();
  newWindow.print();
  newWindow.close();
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Reports/Reports.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Reports/Reports.css ***!
  \*******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".reports_btn {\n    border-radius: 10px;\n}\n\n.view_report_graph {\n    min-height: 500px;\n}\n\n.report_sales_round_img {\n    width: 75px;\n    height: 75px;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.report_sales_round_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Reports/Reports.css":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Reports/Reports.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Reports_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Reports.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Reports/Reports.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Reports_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Reports_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
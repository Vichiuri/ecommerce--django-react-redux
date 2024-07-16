(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Reports_OrderReports_js"],{

/***/ "./frontend/src/components/Reports/OrderReports.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Reports/OrderReports.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Reports */ "./frontend/src/redux/Actions/Reports.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var _ViewOrderReports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewOrderReports */ "./frontend/src/components/Reports/ViewOrderReports.js");
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









var OrderReports = /*#__PURE__*/function (_Component) {
  _inherits(OrderReports, _Component);

  var _super = _createSuper(OrderReports);

  function OrderReports(props) {
    var _this;

    _classCallCheck(this, OrderReports);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      productItem: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OrderReports, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) this.setResponse(message);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var from_date = (0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_5__.default)(new Date().setDate(new Date().getDate() - 6));
      var to_date = (0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_5__.default)(new Date());
      this.props.fetchOrdersStatics(from_date, to_date);
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
          fetchOrdersStatics = _this$props2.fetchOrdersStatics;
      var isLoading = reportsReducer.isLoading,
          order_reports = reportsReducer.order_reports;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_3__.default, {
        open: isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOrderReports__WEBPACK_IMPORTED_MODULE_6__.default, {
        reports: order_reports,
        fetchOrdersStatics: fetchOrdersStatics
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return OrderReports;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    reportsReducer: state.reportsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Distributor order statics view screen */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchOrdersStatics: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_2__.fetchOrdersStatics
})(OrderReports));

/***/ }),

/***/ "./frontend/src/components/Reports/OrderReportsTable.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/Reports/OrderReportsTable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderReportsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
/* harmony import */ var _utils_FormatDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatDay */ "./frontend/src/utils/FormatDay.js");
/* harmony import */ var _utils_FormatMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/FormatMonth */ "./frontend/src/utils/FormatMonth.js");
/* harmony import */ var _utils_FormatMonthlyWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/FormatMonthlyWeek */ "./frontend/src/utils/FormatMonthlyWeek.js");
/* harmony import */ var _utils_FormatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/FormatDate */ "./frontend/src/utils/FormatDate.js");






function OrderReportsTable(props) {
  var period = props.period,
      reports = props.reports;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "badge badge-primary btn_type mr-2 mb-2"
  }, period)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Aproved Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Sold Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "row justify-content-end"
  }, "Total revenue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reports ? reports.map(function (report, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, period == "Daily" ? (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_5__.default)(report.date) : period == "Weekly" ? (0,_utils_FormatMonthlyWeek__WEBPACK_IMPORTED_MODULE_4__.default)(report.date) : period == "Monthly" ? (0,_utils_FormatMonth__WEBPACK_IMPORTED_MODULE_3__.default)(report.date) : report.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.count, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, report.product_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "row justify-content-end"
    }, "Ksh. ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(report.revenue_count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "   "));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))));
}

/***/ }),

/***/ "./frontend/src/components/Reports/ViewOrderReportChart.js":
/*!*****************************************************************!*\
  !*** ./frontend/src/components/Reports/ViewOrderReportChart.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOrderReportChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatMonthlyWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatMonthlyWeek */ "./frontend/src/utils/FormatMonthlyWeek.js");
/* harmony import */ var _utils_FormatDateNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatDateNames */ "./frontend/src/utils/FormatDateNames.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartist */ "./node_modules/react-chartist/dist/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ViewOrderReportChart(props) {
  var reports = props.reports,
      period = props.period;
  var chartTypes = ["Line", "Bar"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(chartTypes[0]),
      _useState2 = _slicedToArray(_useState, 2),
      viewType = _useState2[0],
      setViewType = _useState2[1];

  var delays = 80,
      durations = 500;
  var delays2 = 80,
      durations2 = 500;
  var chartData = {
    data: {
      labels: period == "Daily" ? reports.map(function (item) {
        return (0,_utils_FormatDateNames__WEBPACK_IMPORTED_MODULE_2__.getDateName)(item.date);
      }) : period == "Weekly" ? reports.map(function (item) {
        return (0,_utils_FormatMonthlyWeek__WEBPACK_IMPORTED_MODULE_1__.default)(item.date);
      }) : period == "Monthly" ? reports.map(function (item) {
        return (0,_utils_FormatDateNames__WEBPACK_IMPORTED_MODULE_2__.getMonthIndexName)(item.date);
      }) : reports.map(function (item) {
        return item.date;
      }),
      series: [reports.map(function (item) {
        return item.count;
      })]
    },
    options: {
      lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3___default().Interpolation.cardinal({
        tension: 0
      }),
      height: 400,
      low: 0,
      high: Math.max.apply(Math, _toConsumableArray(reports.map(function (item) {
        return item.count;
      }))) + 20,
      // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    //   // for animation
    animation: {
      draw: function draw(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: (chartist__WEBPACK_IMPORTED_MODULE_3___default().Svg.Easing.easeOutQuint)
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header card_header_success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartist__WEBPACK_IMPORTED_MODULE_4__.default, {
    data: chartData.data,
    type: viewType,
    options: chartData.options,
    listener: chartData.animation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Approved Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between pl-3 pr-3 btn_type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, period))));
}

/***/ }),

/***/ "./frontend/src/components/Reports/ViewOrderReports.js":
/*!*************************************************************!*\
  !*** ./frontend/src/components/Reports/ViewOrderReports.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOrderReports)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Reports_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.css */ "./frontend/src/components/Reports/Reports.css");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var _OrderReportsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderReportsTable */ "./frontend/src/components/Reports/OrderReportsTable.js");
/* harmony import */ var _ViewOrderReportChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewOrderReportChart */ "./frontend/src/components/Reports/ViewOrderReportChart.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ViewOrderReports(props) {
  var reports = props.reports,
      fetchOrdersStatics = props.fetchOrdersStatics;
  var options = ["Daily", "Weekly", "Monthly", "Yearly"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      period = _useState2[0],
      setPeriod = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_2__.default)(new Date().setDate(new Date().getDate() - 6))),
      _useState4 = _slicedToArray(_useState3, 2),
      date_from = _useState4[0],
      setDateFrom = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_2__.default)(new Date().setDate(new Date().getDate()))),
      _useState6 = _slicedToArray(_useState5, 2),
      date_to = _useState6[0],
      setDateTo = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      currentView = _useState8[0],
      setCurrentView = _useState8[1];

  function calculatePeriod(date_from, date_to) {
    var diffTime = Math.abs(new Date(date_to) - new Date(date_from));
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 14) {
      setPeriod(options[0]);
    } else if (diffDays <= 31) {
      setPeriod(options[1]);
    } else if (diffDays <= 365) {
      setPeriod(options[2]);
    } else {
      setPeriod(options[3]);
    }
  }

  var currentPage = currentView == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrderReportsTable__WEBPACK_IMPORTED_MODULE_3__.default, {
    period: period,
    reports: reports
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOrderReportChart__WEBPACK_IMPORTED_MODULE_4__.default, {
    period: period,
    reports: reports
  });
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Orders Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn btn-primary btn-lg reports_btn"
  }, "Export"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      if (currentView == 0) {
        setCurrentView(1);
      } else {
        setCurrentView(0);
      }
    },
    className: "btn btn-success btn-chartjs btn-lg reports_btn ml-2 justify-content-center align-items-center"
  }, currentView == 0 ? "Chart" : "Table")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-8 col-md-6 col-sm-12 col-xs-12 border-right"
  }, currentPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Date From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control",
    type: "date",
    tabIndex: "3",
    name: "date_from",
    value: date_from || "",
    onChange: function onChange(e) {
      setDateFrom(e.target.value);
      fetchOrdersStatics(e.target.value, date_to);
      calculatePeriod(e.target.value, date_to);
    },
    dateformat: "yyyy-mm-dd",
    max: new Date()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Date From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control",
    type: "date",
    tabIndex: "3",
    name: "date_from",
    value: date_to || "",
    onChange: function onChange(e) {
      setDateTo(e.target.value);
      fetchOrdersStatics(date_from, date.target.value);
      calculatePeriod(date_from, date.target.value);
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

/***/ "./frontend/src/utils/FormatDateNames.js":
/*!***********************************************!*\
  !*** ./frontend/src/utils/FormatDateNames.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateName": () => (/* binding */ getDateName),
/* harmony export */   "getMonthName": () => (/* binding */ getMonthName),
/* harmony export */   "getMonthIndexName": () => (/* binding */ getMonthIndexName),
/* harmony export */   "getSlashedDate": () => (/* binding */ getSlashedDate)
/* harmony export */ });
function getDateName(mDate) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  var date = new Date(mDate);
  return days[date.getDay()];
}
function getMonthName(mDate) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var date = new Date(mDate);
  return monthNames[date.getMonth()];
}
function getMonthIndexName(index) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return monthNames[index - 1];
}
function getSlashedDate(mDate) {
  var date = new Date(mDate);
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var month = date.getMonth() < 10 ? "0".concat(date.getMonth()) : date.getMonth();
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

/***/ }),

/***/ "./frontend/src/utils/FormatDay.js":
/*!*****************************************!*\
  !*** ./frontend/src/utils/FormatDay.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDay)
/* harmony export */ });
function formatDay(mdate) {
  var date = new Date(mdate);
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = date.getDay();
  return days[day];
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

/***/ "./frontend/src/utils/FormatMonth.js":
/*!*******************************************!*\
  !*** ./frontend/src/utils/FormatMonth.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(index) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[index - 1];
}

/***/ }),

/***/ "./frontend/src/utils/FormatMonthlyWeek.js":
/*!*************************************************!*\
  !*** ./frontend/src/utils/FormatMonthlyWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(mdate) {
  var date = new Date(mdate);
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthIndex = date.getMonth();
  var firstWeekday = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
  if (firstWeekday < 0) firstWeekday = 6;
  var offsetDate = date.getDate() + firstWeekday - 1;
  var week = Math.floor(offsetDate / 7);
  return week + " week of " + monthNames[monthIndex];
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
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["main-frontend_src_c"],{

/***/ "./frontend/src/components/Auth/AuthBody.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/Auth/AuthBody.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./frontend/src/components/Auth/Login.js");
/* harmony import */ var _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Auth */ "./frontend/src/redux/Actions/Auth.js");
/* harmony import */ var _Auth_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth.css */ "./frontend/src/components/Auth/Auth.css");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_GetCookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/GetCookie */ "./frontend/src/utils/GetCookie.js");
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











var AuthBody = /*#__PURE__*/function (_Component) {
  _inherits(AuthBody, _Component);

  var _super = _createSuper(AuthBody);

  function AuthBody(props) {
    var _this;

    _classCallCheck(this, AuthBody);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: ""
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AuthBody, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;

      if (error !== prevProps.error) {
        if (error.status === 401) {
          var responseMessage = {
            message: "Authentication details are not correct"
          };
          var isError = true;
          this.setResponse({
            responseMessage: responseMessage,
            isError: isError
          });
        } else if (error.status === 307) {
          // ! Redirecting for netbot auth is done on this line
          var form = document.getElementById("login_form");
          var input = document.createElement("input");
          var csrf_token = (0,_utils_GetCookie__WEBPACK_IMPORTED_MODULE_7__.default)("csrftoken");
          input.type = "hidden";
          input.name = "csrfmiddlewaretoken";
          input.value = csrf_token; // attach field to the form

          form.appendChild(input);
          form.submit();
        } else {
          this.setResponse(error);
        }
      } else if (message !== prevProps.message) this.setResponse(message);
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
          login = _this$props2.login,
          auth = _this$props2.auth,
          forgotPassword = _this$props2.forgotPassword;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: {
          vertical: "top",
          horizontal: "center"
        }
      };

      if (auth.isAuthenticated && auth.account && !auth.account.first_time) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/"
        });
      } else if (auth.account && auth.account.first_time) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/onboard"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
        open: auth.isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login__WEBPACK_IMPORTED_MODULE_1__.default, {
        login: login,
        forgotPassword: forgotPassword
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return AuthBody;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/**  * Retailer authentication view for distributor and redirect for netbot auth */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, {
  login: _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_2__.login,
  forgotPassword: _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_2__.forgotPassword
})(AuthBody));

/***/ }),

/***/ "./frontend/src/components/Auth/ForgotPasswordModal.js":
/*!*************************************************************!*\
  !*** ./frontend/src/components/Auth/ForgotPasswordModal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/** Modal for reseting distributor password */

function ForgotPasswordModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      forgotPassword = props.forgotPassword;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      f_email = _useState2[0],
      setFEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      responseMessage = _useState6[0],
      setResponseMessage = _useState6[1];

  function sendForgotPassword() {
    setIsError(null);
    setResponseMessage("");

    if (f_email) {
      forgotPassword(f_email);
      setFEmail("");
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input email address");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: show,
    onHide: handleModal,
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Forgot Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "sr-only"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text border-right-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-envelope"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    name: "f_email",
    className: "form-control border-left-0",
    value: f_email,
    onChange: function onChange(e) {
      return setFEmail(e.target.value);
    },
    placeholder: "Email address",
    required: true
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return sendForgotPassword();
    }
  }, "Submit Email")));
}

/***/ }),

/***/ "./frontend/src/components/Auth/Login.js":
/*!***********************************************!*\
  !*** ./frontend/src/components/Auth/Login.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPasswordModal */ "./frontend/src/components/Auth/ForgotPasswordModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/** Login view for distributor */

function Login(props) {
  var login = props.login,
      forgotPassword = props.forgotPassword;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      responseMessage = _useState8[0],
      setResponseMessage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      passVisibility = _useState10[0],
      setPassVisibility = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showModal = _useState12[0],
      setShowModal = _useState12[1];

  function authenticateUser() {
    setIsError(null);
    setResponseMessage("");

    if (email && password) {
      login(email, password);
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center min-vh-100 py-3 py-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card login-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/3955595.webp",
    alt: "login",
    className: "login-card-img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "brand-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/login.png",
    alt: "logo",
    className: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "ml-3"
  }, "NetBot Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "login-card-description"
  }, "Sign into your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "sr-only"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text border-right-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "btn_type fas fa-envelope"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    name: "email",
    className: "form-control border-left-0",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "Email address",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "sr-only"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text border-right-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-lock"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: passVisibility ? "text" : "password",
    name: "password",
    id: "password",
    className: "form-control border-right-0 border-left-0",
    placeholder: "***********",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter") {
        if (e.target.value && email) {
          authenticateUser();
        }
      }
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return setPassVisibility(!passVisibility);
    },
    className: "input-group-text border-left-0 btn_type"
  }, passVisibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-eye p-0 bg_themed",
    id: "eye",
    "aria-hidden": "true"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-eye-slash p-0 bg_themed",
    id: "eye",
    "aria-hidden": "true"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "visibily_none",
    action: "../accounts/login",
    method: "POST",
    id: "login_form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "hidden",
    id: "var2",
    name: "email",
    value: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: password,
    name: "password",
    type: "hidden",
    id: "var1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-block login-btn mb-4",
    onClick: function onClick() {
      return authenticateUser();
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "forgot-password-link btn_type",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, "Forgot password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "login-card-footer-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "mr-3",
    href: "#!"
  }, "Terms of use."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#!"
  }, "Privacy policy"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    forgotPassword: forgotPassword
  }));
}

/***/ }),

/***/ "./frontend/src/components/Home.js":
/*!*****************************************!*\
  !*** ./frontend/src/components/Home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _NavBar_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar/Navigation */ "./frontend/src/components/NavBar/Navigation.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routes */ "./frontend/src/utils/routes.js");
/* harmony import */ var _utils_HomeRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/HomeRoutes */ "./frontend/src/utils/HomeRoutes.js");
/* harmony import */ var _ProgressBar_CustomProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar/CustomProgressBar */ "./frontend/src/components/ProgressBar/CustomProgressBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _utils_ControlMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ControlMenu */ "./frontend/src/utils/ControlMenu.js");
/* harmony import */ var _utils_FireBaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/FireBaseConfig */ "./frontend/src/utils/FireBaseConfig.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/Actions/Auth */ "./frontend/src/redux/Actions/Auth.js");
/* harmony import */ var _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/Actions/Notification */ "./frontend/src/redux/Actions/Notification.js");
/* harmony import */ var _widgets_NotificationTabView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/NotificationTabView */ "./frontend/src/widgets/NotificationTabView.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function usePageViews() {
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (location && location.pathname != "/home") {
      (0,_utils_HomeRoutes__WEBPACK_IMPORTED_MODULE_3__.SaveHomeRoute)(location.pathname);
    }
  }, [location]);
}
/** Authenticated user home page */


function Home(props) {
  usePageViews();
  var lastRoute = (0,_utils_HomeRoutes__WEBPACK_IMPORTED_MODULE_3__.getHomeRoute)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openTab = _useState2[0],
      setOpenTab = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: "",
    message: "",
    data: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      responseMessage = _useState4[0],
      setResponseMessage = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_utils_ControlMenu__WEBPACK_IMPORTED_MODULE_6__.ControlMenu)();
    window.addEventListener("resize", function (e) {
      if (window.innerWidth <= 1200) {
        (0,_utils_ControlMenu__WEBPACK_IMPORTED_MODULE_6__.changeMenu)("vertical");
      }
    });
    initFirebaseMessaging();
  }, []);

  function viewNotificationType(notification_data) {
    try {
      var type = notification_data.type,
          dist_notification = notification_data.dist_notification;

      if (dist_notification) {
        var notifications = JSON.parse(dist_notification);
        props.updateDistNotificationList(notifications);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function initFirebaseMessaging() {
    return _initFirebaseMessaging.apply(this, arguments);
  }

  function _initFirebaseMessaging() {
    _initFirebaseMessaging = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _navigator, _navigator$serviceWor, swRegistration, _yield$getTokenConfig, status, token, messaging;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!("serviceWorker" in navigator)) {
                _context.next = 13;
                break;
              }

              _context.next = 4;
              return (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$serviceWor = _navigator.serviceWorker) === null || _navigator$serviceWor === void 0 ? void 0 : _navigator$serviceWor.register("/static/js/firebase-messaging-sw.js");

            case 4:
              swRegistration = _context.sent;

              if (!swRegistration) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return (0,_utils_FireBaseConfig__WEBPACK_IMPORTED_MODULE_7__.getTokenConfig)(swRegistration);

            case 8:
              _yield$getTokenConfig = _context.sent;
              status = _yield$getTokenConfig.status;
              token = _yield$getTokenConfig.token;
              messaging = _yield$getTokenConfig.messaging;

              if (status) {
                props.updateUserToken({
                  token: token
                });
                (0,_utils_FireBaseConfig__WEBPACK_IMPORTED_MODULE_7__.onMessageListener)(setResponseMessage, setOpenTab, viewNotificationType, messaging);
              }

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));
    return _initFirebaseMessaging.apply(this, arguments);
  }

  var switchRoutes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
      open: true
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_12__.Switch, null, _utils_routes__WEBPACK_IMPORTED_MODULE_2__.default.map(function (prop, key) {
    if (prop.layout === "/home") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_12__.Route, {
        exact: true,
        path: prop.layout + prop.path,
        component: prop.component,
        key: key
      });
    }

    return null;
  }), lastRoute ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_12__.Redirect, {
    from: "/home",
    to: lastRoute
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_12__.Redirect, {
    from: "/home",
    to: "/home/dashboard"
  })));
  var snackValues = {
    responseMessage: responseMessage,
    openSnackBar: openTab,
    snackPosition: {
      vertical: "top",
      horizontal: "right"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavBar_Navigation__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "home_wrapper",
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "home_container",
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgressBar_CustomProgressBar__WEBPACK_IMPORTED_MODULE_4__.default, null), switchRoutes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_NotificationTabView__WEBPACK_IMPORTED_MODULE_11__.default, {
    values: snackValues,
    closeSnackBar: function closeSnackBar() {
      return setOpenTab(!openTab);
    }
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, {
  updateUserToken: _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_9__.updateUserToken,
  updateDistNotificationList: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_10__.updateDistNotificationList
})(Home));

/***/ }),

/***/ "./frontend/src/components/NavBar/HorizontalNavBar.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/NavBar/HorizontalNavBar.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalNavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_NavItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/NavItems */ "./frontend/src/utils/NavItems.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/** Horizontal change for sidebar */

function HorizontalNavBar(_ref) {
  var group = _ref.group,
      account = _ref.account;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      nav_view = _useState2[0],
      setNavView = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var view_nav = (0,_utils_NavItems__WEBPACK_IMPORTED_MODULE_1__.default)(group, account);
    setNavView(view_nav);
  }, [group, account]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "horizontal-menu",
    id: "nav_horizontal_bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar active pt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "site-width"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: "side-menu",
    className: "sidebar-menu"
  }, nav_view.map(function (view, index) {
    if (view) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: index,
        className: "dropdown view_h_item"
      }, view.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: view.link,
        className: "side_nav_item"
      }, view.icon, view.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "#",
        className: "side_nav_item row",
        style: {
          pointerEvents: "none"
        }
      }, view.icon, " ", view.name), view.v_component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "inner_menu mt-0 pt-0"
      }, view.v_component.map(function (component, v_index) {
        if (component) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            key: v_index,
            className: "border-top mt-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            className: "ml-2 p-0 row justify-content-start "
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            className: "p-2 ",
            to: component.link
          }, component.name)));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: v_index
          });
        }
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: index
      });
    }
  })))));
}

/***/ }),

/***/ "./frontend/src/components/NavBar/NavBar.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/NavBar/NavBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_ControlMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ControlMenu */ "./frontend/src/utils/ControlMenu.js");
/* harmony import */ var _utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatDate */ "./frontend/src/utils/FormatDate.js");




/** Top Navbar view  */

function NavBar(_ref) {
  var _account$distributor$, _account$distributor;

  var logOutUser = _ref.logOutUser,
      user = _ref.user,
      notifications = _ref.notifications,
      account = _ref.account,
      logo = _ref.logo;

  // function switchTheme() {
  //   const themeCookieName = "theme";
  //   const themeDark = "dark";
  //   const themeLight = "light";
  //   const body = document.getElementsByTagName("body")[0];
  //   if (body.classList.contains(themeLight)) {
  //     body.classList.remove(themeLight);
  //     body.classList.add(themeDark);
  //     setCookie(themeCookieName, themeDark);
  //   } else {
  //     body.classList.remove(themeDark);
  //     body.classList.add(themeLight);
  //     setCookie(themeCookieName, themeLight);
  //   }
  // }
  // function setCookie(cname, cvalue, exdays) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  //   var expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }
  function collapseSidebar() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("sidebar-expand");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    id: "nav_view_bars",
    className: "fas fa-bars",
    onClick: function onClick() {
      return collapseSidebar();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item",
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }, logo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "..".concat(logo),
    alt: "ATPro logo",
    className: "logo ml-4"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    style: {
      marginTop: "10px",
      fontWeight: "700"
    }
  }, (_account$distributor$ = account === null || account === void 0 ? void 0 : (_account$distributor = account.distributor) === null || _account$distributor === void 0 ? void 0 : _account$distributor.name) !== null && _account$distributor$ !== void 0 ? _account$distributor$ : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "navbar-nav nav-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-bell dropdown-toggle",
    "data-toggle": "notification-menu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "navbar-badge"
  }, notifications.filter(function (item) {
    return item.seen == false;
  }).length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: "notification-menu",
    className: "dropdown_menu notification-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-menu-content overlay-scrollbar scrollbar-hover"
  }, notifications.map(function (notification, index) {
    var _notification$action_, _notification$action_2;

    var viewClassName = notification.seen ? "dropdown-menu-item side_nav_item " : "dropdown-menu-item side_nav_item nav_notification_v";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: viewClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/home/view_notification/".concat(notification.id),
      className: "dropdown-menu-link align-items-center side_nav_item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "avt mb-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: notification !== null && notification !== void 0 && (_notification$action_ = notification.action_by) !== null && _notification$action_ !== void 0 && _notification$action_.pic ? notification === null || notification === void 0 ? void 0 : (_notification$action_2 = notification.action_by) === null || _notification$action_2 === void 0 ? void 0 : _notification$action_2.pic : "../static/images/user.png",
      alt: "User image",
      className: "dropdown-toggle",
      "data-toggle": "user-menu"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, notification.display_text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_2__.default)(notification.when_created)))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-menu-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/home/dist_notification",
    className: "row justify-content-center side_nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "View all notifications"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item avt-wrapper ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row align-items-center",
    "data-toggle": "user-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav_user_img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: account !== null && account !== void 0 && account.pic ? account === null || account === void 0 ? void 0 : account.pic : "../static/images/user.png",
    alt: "User image",
    className: "dropdown-toggle",
    "data-toggle": "user-menu"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "dropdown-toggle",
    "data-toggle": "user-menu"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: "user-menu",
    className: "dropdown_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "dropdown-menu-item border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav_user_img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/user.png",
    alt: "User image",
    className: "dropdown-toggle",
    "data-toggle": "user-menu"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, user.email ? user.email : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "dropdown-menu-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "dropdown-menu-link side_nav_item",
    to: "/home/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-user-tie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "dropdown-menu-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-menu-link side_nav_item",
    onClick: function onClick() {
      var viewMenu = localStorage.getItem("view_item_menu");

      if (viewMenu && viewMenu == "vertical") {
        (0,_utils_ControlMenu__WEBPACK_IMPORTED_MODULE_1__.changeMenu)("horizontal");
      } else {
        (0,_utils_ControlMenu__WEBPACK_IMPORTED_MODULE_1__.changeMenu)("vertical");
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-user-tie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Change Navbar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "dropdown-menu-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return logOutUser();
    },
    className: "dropdown-menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sign-out-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Logout"))))))));
}

/***/ }),

/***/ "./frontend/src/components/NavBar/Navigation.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/NavBar/Navigation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./frontend/src/components/NavBar/NavBar.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./frontend/src/components/NavBar/SideBar.js");
/* harmony import */ var _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Auth */ "./frontend/src/redux/Actions/Auth.js");
/* harmony import */ var _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/Actions/Notification */ "./frontend/src/redux/Actions/Notification.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation.css */ "./frontend/src/components/NavBar/Navigation.css");
/* harmony import */ var _HorizontalNavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HorizontalNavBar */ "./frontend/src/components/NavBar/HorizontalNavBar.js");
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










var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _super.apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchDistNotifications(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logOutUser = _this$props.logOutUser,
          auth = _this$props.auth,
          notificationsReducer = _this$props.notificationsReducer;
      var dist_notifications = notificationsReducer.dist_notifications;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__.default, {
        logOutUser: logOutUser,
        user: auth.user,
        account: auth.account,
        logo: auth.logo,
        notifications: dist_notifications
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HorizontalNavBar__WEBPACK_IMPORTED_MODULE_7__.default, {
        group: auth.group,
        account: auth.account
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_2__.default, {
        group: auth.group,
        account: auth.account
      }));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    notificationsReducer: state.notificationsReducer
  };
};
/** Navigation view class for distrbutor */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {
  logOutUser: _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_3__.logOutUser,
  fetchDistNotifications: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_4__.fetchDistNotifications
})(Navigation));

/***/ }),

/***/ "./frontend/src/components/NavBar/SideBar.js":
/*!***************************************************!*\
  !*** ./frontend/src/components/NavBar/SideBar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


/** Distributor Side bar view */

function SideBar(_ref) {
  var group = _ref.group,
      account = _ref.account;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var dropdown = document.getElementsByClassName("dropdown_btn");
    var body = document.getElementsByTagName("body")[0];
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

    var side = document.getElementById("side_nav");

    side.onmouseleave = function () {
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].classList.remove("active");
        var dropdownContent = dropdown[i].nextElementSibling;

        if (dropdownContent != null) {
          dropdownContent.style.display = "none";
        }

        body.classList.remove("sidebar-expand");
      }
    };

    side.onmouseenter = function () {
      body.classList.add("sidebar-expand");
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar",
    id: "nav_side_bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: "side_nav",
    className: "sidebar-nav mt-4 overflow-auto"
  }, group.permission.can_view_dashboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-tachometer-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item",
    to: "/home/dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Dashboard")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_products ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Products"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/products"
  }, "View Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/categories"
  }, "View Categories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/product_master"
  }, "Product Master")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/price_list"
  }, "Price List"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_salesmen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-bullhorn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sales"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/sales"
  }, "Sales People")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/sales_target"
  }, "Sales Target"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_retailer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-business-time"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/retailers"
  }, "Retailers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/retailer_location"
  }, "Retailers Location"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_orders ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-shopping-cart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item",
    to: "/home/orders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Orders")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_deliveries ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-truck"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Deliveries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/deliveries"
  }, "View Deliveries")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/partial/deliveries"
  }, "Partial Deliveries"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_view_offers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-bullhorn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item",
    to: "/home/offers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Offers")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group.permission.can_manage_mobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-mobile"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Mobile App"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/banners"
  }, "View Banners")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/notifications"
  }, "Push Notification"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-chart-line"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Reports"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/order/reports"
  }, "Order Reports")), account.dist_options && account.dist_options.use_sales_target ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/sales_group/reports"
  }, "Sales Target Report")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null)))), group && group.dist_super ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-book-open"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Management"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/groups"
  }, "View Groups")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "list-group-item row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12",
    to: "/home/staff"
  }, "View Users"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), group && group.permission.can_view_settings ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-cog"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "side_nav_item",
    to: "/home/settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Settings")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null)));
}

/***/ }),

/***/ "./frontend/src/components/OnBoarding/OnBoarding.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/OnBoarding/OnBoarding.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ViewOnBoarding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewOnBoarding */ "./frontend/src/components/OnBoarding/ViewOnBoarding.js");
/* harmony import */ var _OnBoarding_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OnBoarding.css */ "./frontend/src/components/OnBoarding/OnBoarding.css");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
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







var OnBoarding = /*#__PURE__*/function (_Component) {
  _inherits(OnBoarding, _Component);

  var _super = _createSuper(OnBoarding);

  function OnBoarding(props) {
    var _this;

    _classCallCheck(this, OnBoarding);

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
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OnBoarding, [{
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
    value: function componentDidMount() {}
  }, {
    key: "changePage",
    value: function changePage(page) {
      if (page == 2) {
        this.props.fetchCategories();
        this.props.fetchProductUnits();
      }

      this.setState({
        currentPage: page
      });
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
      var auth = this.props.auth;
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

      if (auth.account && !auth.account.first_time) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
          to: "/home"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOnBoarding__WEBPACK_IMPORTED_MODULE_2__.default, {
        permissions: auth.group.permission
      }));
    }
  }]);

  return OnBoarding;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Onboarding page for distributors */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(OnBoarding));

/***/ }),

/***/ "./frontend/src/components/OnBoarding/ViewOnBoarding.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/OnBoarding/ViewOnBoarding.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOnBoarding)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_HomeRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/HomeRoutes */ "./frontend/src/utils/HomeRoutes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ViewOnBoarding(_ref) {
  var permissions = _ref.permissions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      slideLength = _useState4[0],
      setSlidelength = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var slides = document.getElementsByClassName("slide");
    setSlidelength(slides.length);
    toggleSlides(0);
  }, []);

  function toggleSlides(v_index) {
    var slides = document.getElementsByClassName("slide");
    slides.forEach(function (slide, index) {
      if (index != v_index) {
        slide.style.display = "none";
      } else {
        slide.style.display = "block";
      }
    });
  }

  function createDots(length) {
    var rows = [];

    for (var i = 0; i < length; i++) {
      rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: i,
        className: "paginationDot"
      }));
    }

    return rows;
  }

  function markDots(position) {
    var paginationDots = document.getElementsByClassName("paginationDot");
    paginationDots.forEach(function (dot, index) {
      if (position != index) {
        dot.classList.remove("paginationDot--active");
      } else {
        dot.classList.add("paginationDot--active");
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slides-container"
  }, currentIndex > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      if (currentIndex > 0) {
        var viewIndex = currentIndex - 1;
        toggleSlides(viewIndex);
        markDots(viewIndex);
        setCurrentIndex(viewIndex);
      }
    },
    className: "onboard_btn onboard_btn__absolute onboard_btn__prev onboard_btn--muted"
  }, "Back") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      if (currentIndex < slideLength - 1) {
        var viewIndex = currentIndex + 1;
        toggleSlides(viewIndex);
        markDots(viewIndex);
        setCurrentIndex(viewIndex);
      } else {
        window.location.assign("/");
      }
    },
    className: "onboard_btn onboard_btn__absolute onboard_btn__next onboard_btn--highlighted"
  }, currentIndex < slideLength - 1 ? "Next" : "Done"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_container container--slide-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container__stripe container__stripe--long"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container__stripe container__stripe--short"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Welcome To Biz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Platform to manage your retailers and market your products. Do it all with Netbot App Platform."))), permissions.can_manage_salesmen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "Kevin Badge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "413")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "221")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile profile--pink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "Billy Bob"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "13")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile profile--yellow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "John Mayer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "13")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Manage Sales People"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Add your sales team and monitor their sales"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), permissions.can_manage_retailer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "Kevin Badge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "413")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "221")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile profile--pink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "Billy Bob"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "13")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--profile profile--yellow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo card--profile__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info card--profile__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name card--profile__info__name"
  }, "Kate Mate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data card--profile__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-copy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "13")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-user-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data__stats card--profile__data__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Retailers")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Recruit Retailers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Access your current retailers and add new ones."))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), permissions.can_manage_retailer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "city-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "view_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window window-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center-door"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "base"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building building1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-door"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building building2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-door"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "base"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "base"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-main-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-main-window"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-base-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-window"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house2-door"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building building2 building3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "building-door"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "base"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1 house1a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center-roof"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-window window-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "house1-center-door"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Manage Retail Locations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Access your retailers locations"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), permissions.can_manage_product ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_container container--slide-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header--slide-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "header__nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__nav__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "LOGO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__nav__cta"
  }, "Lorem")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__hero__table"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__hero__chair"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main--slide-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "section--about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__stripe"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__stripe"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "section--testimonials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons"
  }, "person")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__stripe section__info__stripe"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__stripe section__info__stripe"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Manage Units "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Custimize your units as per your business needs"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), permissions.can_manage_product ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "slide slide-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--store"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-microphone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name store__info"
  }, "Microphones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__supplier"
  }, "James"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__callout"
  }, "Grab it soon..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__price"
  }, "\u20AC 15.95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "onboard_btn onboard_btn__storage onboard_btn--active"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__storage"
  }, "12 left"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--store"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-laptop"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name store__info"
  }, "Computers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__supplier"
  }, "James"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__callout"
  }, "Grab it soon..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__price"
  }, "\u20AC 315"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "onboard_btn onboard_btn__storage onboard_btn--active"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__storage"
  }, "9 left"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "onboard_card card--store"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons fas fa-mobile"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card__info__name store__info"
  }, "Mobile phones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__supplier"
  }, "James"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__data__callout"
  }, "Grab it soon..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__price"
  }, "\u20AC 215"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "onboard_btn onboard_btn__storage onboard_btn--active"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card__price__storage"
  }, "4 left")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "slide__inner slide--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Check Store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Make it easy for retailers to find your products"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    id: "onboard_pagination",
    className: "pagination"
  }, createDots(slideLength)));
}

/***/ }),

/***/ "./frontend/src/components/ProgressBar/CustomProgressBar.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/ProgressBar/CustomProgressBar.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_DashBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/DashBoard */ "./frontend/src/redux/Actions/DashBoard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProgressBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar.css */ "./frontend/src/components/ProgressBar/ProgressBar.css");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _ViewProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewProgressBar */ "./frontend/src/components/ProgressBar/ViewProgressBar.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
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









var CustomProgressBar = /*#__PURE__*/function (_Component) {
  _inherits(CustomProgressBar, _Component);

  var _super = _createSuper(CustomProgressBar);

  function CustomProgressBar(props) {
    var _this;

    _classCallCheck(this, CustomProgressBar);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      visible: true
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.updateVisibility = _this.updateVisibility.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomProgressBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchDashBoardProgress();
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
    key: "updateVisibility",
    value: function updateVisibility(visibility) {
      this.setState({
        visible: visibility
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dashboardReducer = this.props.dashboardReducer;
      var isLoading = dashboardReducer.isLoading,
          dashboardProgress = dashboardReducer.dashboardProgress;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          visible = _this$state.visible;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "progress_bar_layout bg_themed pl-2 pr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProgressBar__WEBPACK_IMPORTED_MODULE_5__.default, {
        dashboardProgress: dashboardProgress,
        updateVisibility: this.updateVisibility
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
    }
  }]);

  return CustomProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    dashboardReducer: state.dashboardReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Track distributor current progess */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  fetchDashBoardProgress: _redux_Actions_DashBoard__WEBPACK_IMPORTED_MODULE_1__.fetchDashBoardProgress
})(CustomProgressBar));

/***/ }),

/***/ "./frontend/src/components/ProgressBar/ViewProgressBar.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/ProgressBar/ViewProgressBar.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProgressBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ViewProgressBar(props) {
  var dashboardProgress = props.dashboardProgress,
      updateVisibility = props.updateVisibility;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      viewComplete = _useState2[0],
      setViewComplete = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasStarted = _useState4[0],
      setHasStarted = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dashboardProgress) {
      var viewArray = [];
      Object.keys(dashboardProgress).map(function (prop, key) {
        var name = prop;
        var value = dashboardProgress[prop];
        viewArray.push({
          name: name,
          value: value
        });
      });
      var view_false = viewArray.filter(function (item) {
        return item.value != true;
      });
      var view_true = viewArray.filter(function (viewItem) {
        return viewItem.value == true;
      });

      if (view_false.length > 0) {
        updateVisibility(true);
      } else {
        updateVisibility(false);
      }

      if (view_true.length > 0) {
        setHasStarted(true);
      } else {
        setHasStarted(false);
      }

      setViewComplete(viewArray);
    }
  }, [dashboardProgress]);

  function goToView(name) {
    switch (name) {
      case "Settings":
        return "/home/settings";

      case "Products":
        return "/home/products";

      case "Sales People":
        return "/home/sales";

      case "Regions":
        return "/home/retailer_location";

      case "Retailers":
        return "/home/retailers";

      case "Units":
        return "/home/product_master";

      case "Categories":
        return "/home/categories";

      case "Offers":
        return "/home/offers";

      default:
        return "/home/dashboard";
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: "custom-progress-bar"
  }, hasStarted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "is-complete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), viewComplete.map(function (view, index) {
    var viewClass = view.value ? "is-complete is-active" : "in-complete";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: viewClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "side_nav_item justify-content-start",
      to: goToView(view.name)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, view.name)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)));
}

/***/ }),

/***/ "./frontend/src/components/app.js":
/*!****************************************!*\
  !*** ./frontend/src/components/app.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Auth_AuthBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth/AuthBody */ "./frontend/src/components/Auth/AuthBody.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ "./frontend/src/components/Home.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./frontend/src/redux/store.js");
/* harmony import */ var _redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/Actions/Auth */ "./frontend/src/redux/Actions/Auth.js");
/* harmony import */ var _utils_ResetScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ResetScroll */ "./frontend/src/utils/ResetScroll.js");
/* harmony import */ var _utils_PrivateRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/PrivateRoutes */ "./frontend/src/utils/PrivateRoutes.js");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-app-polyfill/ie9 */ "./node_modules/react-app-polyfill/ie9.js");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-app-polyfill/stable */ "./node_modules/react-app-polyfill/stable.js");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _OnBoarding_OnBoarding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OnBoarding/OnBoarding */ "./frontend/src/components/OnBoarding/OnBoarding.js");














/** Initial capture page when website loads */

function App() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _redux_store__WEBPACK_IMPORTED_MODULE_5__.default.dispatch((0,_redux_Actions_Auth__WEBPACK_IMPORTED_MODULE_6__.fetchUser)()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_ResetScroll__WEBPACK_IMPORTED_MODULE_7__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_PrivateRoutes__WEBPACK_IMPORTED_MODULE_8__.default, {
    path: "/home",
    component: _Home__WEBPACK_IMPORTED_MODULE_4__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/login",
    component: _Auth_AuthBody__WEBPACK_IMPORTED_MODULE_3__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_PrivateRoutes__WEBPACK_IMPORTED_MODULE_8__.default, {
    path: "/onboard",
    component: _OnBoarding_OnBoarding__WEBPACK_IMPORTED_MODULE_12__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Redirect, {
    from: "/",
    to: "/home"
  })))));
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById("app"));

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ "./frontend/src/components/app.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Auth/Auth.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Auth/Auth.css ***!
  \*************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".login_container {\n    min-height: 80vh;\n    align-items: center;\n}\n\n.form_view_card {\n    background: white;\n}\n\n.login-card {\n    border: 0;\n    border-radius: 27.5px;\n    overflow: hidden;\n}\n\n.login-card-img {\n    border-radius: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n}\n\n.login-card .card-body {\n    padding: 85px 60px 60px;\n}\n\n@media (max-width: 422px) {\n    .login-card .card-body {\n        padding: 35px 24px;\n    }\n}\n\n.login-card-description {\n    font-size: 25px;\n    font-weight: normal;\n    margin-bottom: 23px;\n}\n\n.login-card form {\n    max-width: 326px;\n}\n\n.login-card .form-control {\n    border: 1px solid #d5dae2;\n    outline: none;\n    outline-color: white;\n    padding: 15px 25px;\n    margin-bottom: 20px;\n    min-height: 45px;\n    font-size: 18px;\n    line-height: 15;\n    font-weight: normal;\n}\n\n.login-card .form-control:focus {\n    border: 1px solid #d5dae2;\n    outline: none !important;\n    outline-color: white !important;\n    outline-style: none;\n    box-shadow: none;\n}\n\n.login-card .input-group-text {\n    margin-bottom: 20px;\n    font-size: 20px;\n}\n\n.login-card .form-control::-webkit-input-placeholder {\n    color: #919aa3;\n}\n\n.login-card .form-control::-moz-placeholder {\n    color: #919aa3;\n}\n\n.login-card .form-control:-ms-input-placeholder {\n    color: #919aa3;\n}\n\n.login-card .form-control::-ms-input-placeholder {\n    color: #919aa3;\n}\n\n.login-card .form-control::placeholder {\n    color: #919aa3;\n}\n\n.login-card .login-btn {\n    padding: 13px 20px 12px;\n    background-color: #000;\n    border-radius: 4px;\n    font-size: 17px;\n    font-weight: bold;\n    line-height: 20px;\n    color: #fff;\n    margin-bottom: 24px;\n}\n\n.login-card .login-btn:hover {\n    border: 1px solid #000;\n    background-color: transparent;\n    color: #000;\n}\n\n.login-card .forgot-password-link {\n    font-size: 14px;\n    color: #919aa3;\n    margin-bottom: 12px;\n}\n\n.login-card .forgot-password-link:hover {\n    color: black;\n}\n\n.login-card-footer-text {\n    font-size: 16px;\n    color: #0d2366;\n    margin-bottom: 60px;\n}\n\n@media (max-width: 767px) {\n    .login-card-footer-text {\n        margin-bottom: 24px;\n    }\n}\n\n.login-card-footer-nav a {\n    font-size: 14px;\n    color: #919aa3;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/NavBar/Navigation.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/NavBar/Navigation.css ***!
  \*********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sidenav {\n    height: 100%;\n    width: 200px;\n    position: fixed;\n    z-index: 5;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n\n.sidenav a,\n.dropdown_btn {\n    text-decoration: none;\n    font-size: 20px;\n    color: #818181;\n    display: block;\n    border: none;\n    background: none;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    outline: none;\n}\n\n.nav_user_img {\n    width: 60px;\n    height: 40px;\n    overflow: hidden;\n}\n\n.nav_user_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.sidenav a:hover,\n.dropdown_btn:hover {\n    color: #f1f1f1;\n}\n\n.main {\n    margin-left: 200px;\n    font-size: 20px;\n    padding: 0px 10px;\n}\n\n.dropdown_container {\n    display: none;\n    padding-left: 8px;\n}\n\n.fa-caret-down {\n    float: right;\n    padding-right: 8px;\n}\n\n.horizontal-menu {\n    --sidebarbg: #f6f6f7;\n    --sidebarcolor: #6c757d;\n    --sidebarbordercolor: rgba(72, 94, 144, 0.16);\n    --headerbordercolor: rgba(72, 94, 144, 0.16);\n    --bodybackground: #fff;\n    --sidebarheadingbackground: #fff;\n}\n\n.horizontal-menu .site-width {\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n    display: inherit;\n}\n\n\n/* .horizontal-menu .sidebar .sidebar-menu>li ul {\n    list-style: none;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 10px;\n} */\n\n.horizontal-menu .sidebar {\n    background: var(--sidebarbg);\n    position: relative;\n    width: 100%;\n    padding: 25px 20px 0px 20px;\n    display: flex;\n    overflow: inherit;\n    z-index: 5;\n    align-items: center;\n    border-bottom: 1px solid var(--sidebarbordercolor);\n    border-right: none;\n    height: 80px;\n    justify-content: center;\n}\n\n.horizontal-menu .sidebar .sidebar-menu {\n    margin-bottom: -1px;\n    padding: 0px;\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li {\n    display: inline-block;\n    position: relative;\n    -webkit-border-top-left-radius: 5px;\n    -webkit-border-top-right-radius: 5px;\n    -moz-border-radius-topleft: 5px;\n    -moz-border-radius-topright: 5px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border: 1px solid var(--sidebarbg);\n    border-bottom: none;\n}\n\n.view_h_item {\n    padding: 10px 15px 0px 15px;\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li>a {\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    /* pointer-events: inherit; */\n    font-size: 15px;\n    text-transform: initial;\n    color: var(--sidebarcolor);\n    box-shadow: none;\n    background: transparent;\n    padding: 0px;\n    margin: 0px;\n    height: 100%;\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li>a i {\n    margin-right: 5px;\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li ul {\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    background: var(--sidebarheadingbackground);\n    border: 1px solid var(--sidebarbordercolor);\n    left: -1px;\n    min-width: 200px;\n    transition: all 0.5s;\n    top: 120%;\n    margin-top: 0px;\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li ul li a {\n    font-weight: 500;\n    color: var(--dropdowncolor);\n}\n\n.horizontal-menu .sidebar .sidebar-menu>li:hover ul {\n    visibility: visible;\n    opacity: 1;\n}\n\n.horizontal-menu .inner_menu li a {\n    font-weight: 500;\n    font-size: 14px;\n    text-decoration: none;\n    color: var(--dropdowncolor);\n}\n\n.horizontal-menu .sidebar.active {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    margin-left: 0px;\n    z-index: 5;\n}\n\n\n/* .hide-sidebar .sidebar {\n    margin-left: -250px;\n} */\n\n.sidebar::-webkit-scrollbar {\n    display: none;\n}\n\n.sidebar .sidebar-menu {\n    padding: 0px;\n    padding-top: 20px;\n    /* padding-bottom: 20px; */\n    list-style: none;\n}\n\n\n/* .sidebar .sidebar-menu>li {\n    padding: 5px 15px;\n} */\n\n.sidebar .sidebar-menu>li>a {\n    font-weight: 600;\n    /* pointer-events: none; */\n    font-size: 12px;\n    text-transform: uppercase;\n    background: var(--sidebarheadingbackground);\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    border-radius: 6px;\n    display: block;\n    /* padding: 10px; */\n    /* margin: 15px 0px; */\n    color: var(--sidebarheadingcolor);\n}\n\n.sidebar .sidebar-menu>li>a:after {\n    display: none;\n}\n\n.sidebar .sidebar-menu>li ul {\n    list-style: none;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 10px;\n}\n\n.horizontal-menu .dropdown:hover {\n    background-color: white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/OnBoarding/OnBoarding.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/OnBoarding/OnBoarding.css ***!
  \*************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n.slides-container {\n    position: relative;\n    width: 800px;\n    height: 450px;\n    margin: 50px auto;\n    font-family: \"Open Sans\", sans-serif;\n    border: 1px solid #eee;\n    box-shadow: 0px 0px 15px 1px #ebebeb;\n}\n\n.slide {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n\n.slide__inner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 50%;\n    float: left;\n    overflow: hidden;\n}\n\n.slide--left {\n    background: #eee;\n}\n\n.slide--right {\n    position: relative;\n    background: #fff;\n    padding: 3%;\n    animation: fadeUp 1s forwards;\n}\n\n.slide--right h1 {\n    width: 100%;\n    margin-bottom: 5px;\n    font-weight: 400;\n    font-size: 24px;\n    text-align: left;\n    letter-spacing: 0.4px;\n}\n\n.slide--right p {\n    font-size: 14px;\n    color: #666;\n    line-height: 1.8;\n}\n\n.onboard_btn {\n    height: 30px;\n    width: 60px;\n    font-weight: 400;\n    letter-spacing: 0.6px;\n    border-radius: 5px;\n    border: 0;\n    outline: none;\n}\n\n.onboard_btn__absolute {\n    position: absolute;\n    z-index: 10;\n}\n\n.onboard_btn--highlighted {\n    bottom: 40px;\n    right: 60px;\n    background-color: #10a5de;\n    color: #fff;\n}\n\n.onboard_btn--muted {\n    bottom: 40px;\n    right: 120px;\n    background-color: transparent;\n    color: #ddd;\n}\n\n.pagination {\n    height: 10px;\n    max-width: 140px;\n    display: flex;\n    justify-content: center;\n    margin: 0 auto;\n    clear: both;\n}\n\n.paginationDot {\n    width: 10px;\n    height: 10px;\n    margin: 0 3px;\n    border: 2px solid #ddd;\n    border-radius: 50%;\n    transition: 0.4s all;\n}\n\n.paginationDot--active {\n    background: #10a5de;\n    border-color: #10a5de;\n}\n\n.slide-1 .slide--left {\n    background: #75d0cd;\n}\n\n.onboard_container {\n    height: 250px;\n    width: 200px;\n    background: white;\n}\n\n.container__logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 130px;\n    height: 130px;\n    margin: 30px auto;\n    border-radius: 50%;\n    background: #75d0cd;\n    box-shadow: 0px 0px 0px 5px #e5e5e5;\n    animation: 0.8s bounceUp forwards;\n}\n\n.container__logo .material-icons {\n    font-size: 72px;\n    color: rgba(255, 255, 255, 0.8);\n    animation: 0.6s bounceUpOnce 0s forwards;\n}\n\n.container__stripe,\n.section__stripe {\n    height: 10px;\n    margin: 13px auto;\n    border-radius: 10px;\n    background: #e5e5e5;\n}\n\n.container__stripe--long {\n    width: 0;\n    animation: 0.3s growRightLong 0.7s forwards;\n}\n\n.container__stripe--short {\n    width: 0;\n    animation: 0.3s growRightShort 0.7s forwards;\n}\n\n.slide-2 .slide--left {\n    background: #83cedb;\n}\n\n.onboard_card {\n    height: 76px;\n    width: 80%;\n    padding: 5px;\n    margin: 6px 0;\n    border-radius: 3px;\n    background: white;\n}\n\n.onboard_card>* {\n    float: left;\n}\n\n.card--profile:nth-child(2) {\n    animation-delay: 0.3s;\n}\n\n.card--profile:last-child {\n    animation-delay: 0.6s;\n}\n\n.card--profile {\n    box-shadow: -5px 5px 0px 0px rgba(235, 235, 235, 0.4);\n    opacity: 0;\n    animation: fadeRight 1s forwards;\n}\n\n.profile--yellow .card--profile__logo {\n    background: #efe2b0;\n}\n\n.profile--pink .card--profile__logo {\n    background: #c8bfe7;\n}\n\n.card__logo,\n.section__logo {\n    width: 21%;\n    background: #83cedb;\n    text-align: center;\n    border-radius: 4px;\n    height: 100%;\n}\n\n.card__logo i,\n.section__logo i {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 62px;\n    padding: 0;\n    margin: 0;\n}\n\n.card__logo i {\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.card__info,\n.section__info {\n    width: 79%;\n    padding: 2%;\n}\n\n.card__info__name {\n    margin: 6px 0 2px;\n    letter-spacing: 0.5px;\n    color: #2ca8da;\n}\n\n.card__data__stats {\n    display: inline-block;\n    margin-right: 5px;\n}\n\n.card__data__stats i,\n.card__data__stats span {\n    font-size: 12px;\n    margin-right: 2px;\n}\n\n.card__data__stats i {\n    color: #444;\n}\n\n.card__data__stats span {\n    color: #777;\n}\n\n.slide-3 .slide--left {\n    background: #83cedb;\n}\n\n.container--slide-3 {\n    width: 80%;\n    height: 90%;\n    animation: fadeUp 0.3s forwards;\n    overflow: hidden;\n}\n\n.header--slide-3 {\n    height: 50%;\n    animation: 0.5s slideInRight forwards;\n}\n\n.header__nav {\n    position: relative;\n    height: 50px;\n}\n\n.header__nav__logo {\n    position: absolute;\n    z-index: 10;\n    top: 15%;\n    left: 20px;\n    width: 20%;\n    height: 70px;\n    border-radius: 6px;\n    background: #f77b83;\n}\n\n.header__nav__logo p {\n    font-weight: 600;\n    color: white;\n    text-align: center;\n    font-size: 14px;\n    line-height: 70px;\n    letter-spacing: 1px;\n    margin: 0;\n}\n\n.header__nav__cta {\n    position: absolute;\n    top: 15%;\n    right: 20px;\n    width: 15%;\n    padding: 2px 7px;\n    border-radius: 4px;\n    background: #4dc684;\n    color: white;\n    font-size: 11px;\n}\n\n.header__hero {\n    position: relative;\n    overflow: hidden;\n    height: 75%;\n    background: #e7eff7;\n}\n\n.header__hero__table {\n    position: absolute;\n    z-index: 20;\n    bottom: -5%;\n    left: 0;\n    right: 0;\n    height: 40%;\n    transform: rotate(-2deg);\n    background: #d6dede;\n}\n\n.header__hero__chair {\n    position: absolute;\n    bottom: 30%;\n    right: 20%;\n    width: 40%;\n    height: 40%;\n    transform: rotate(-2deg);\n    border-radius: 5px;\n    box-shadow: -5px -5px 0px 0px #f7f7f7;\n    background: #efefef;\n}\n\n.section--about {\n    padding: 0 5%;\n    margin-bottom: 20px;\n    transform: translateX(100%);\n    animation: 0.5s slideInLeft 0.2s forwards;\n}\n\n.section--about .section__stripe:last-child {\n    width: 40%;\n    margin: 0;\n}\n\n.section--about h5 {\n    font-size: 12px;\n    margin: 10px 0 0;\n}\n\n.section--testimonials {\n    padding: 2% 5%;\n    clear: both;\n    transform: translateX(-100%);\n    animation: 0.5s slideInRight 0.4s forwards;\n}\n\n.section--testimonials>* {\n    float: left;\n}\n\n.section__logo {\n    border-radius: 10px;\n}\n\n.section__info {\n    padding: 0 5%;\n}\n\n.section__info__stripe:last-child {\n    width: 70%;\n    margin: 0;\n}\n\n.slide-4 .slide--left {\n    background: #75d0cd;\n}\n\n.card--store {\n    animation: 1.5s fadeRight forwards;\n}\n\n.card--store .card__logo i {\n    font-size: 36px;\n    color: #666;\n}\n\n.card--store .card__info {\n    width: 55%;\n}\n\n.store__info {\n    margin: 0;\n    color: #333;\n}\n\n.card--store .card__data {\n    width: 60%;\n}\n\n.card__data__supplier,\n.card__data__callout {\n    margin: 0;\n    padding: 0;\n    font-size: 11px;\n}\n\n.card__data__supplier {\n    color: #d6d6d6;\n}\n\n.card__price {\n    position: relative;\n    float: left;\n    width: 24%;\n    background: #e7fff7;\n}\n\n.card__price__price {\n    font-size: 13px;\n    margin: 15px 0 0;\n    padding: 0;\n    color: #333;\n    font-weight: 600;\n    text-align: center;\n}\n\n.card__price__storage {\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 35px;\n    height: 15px;\n    background: #000;\n    color: white;\n    font-size: 10px;\n    text-align: center;\n}\n\n.onboard_btn__storage {\n    height: 24px;\n    margin: 5px auto;\n    color: white;\n    background: #4dc684;\n    display: block;\n}\n\n@keyframes fadeUp {\n    0% {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes bounceUp {\n    0% {\n        transform: translateY(100%);\n    }\n    60% {\n        transform: translateY(-18%);\n    }\n    70% {\n        transform: translateY(8%);\n    }\n    85% {\n        transform: translateY(-6%);\n    }\n    100% {\n        transform: translateY(0%);\n    }\n}\n\n@keyframes bounceUpOnce {\n    0% {\n        transform: translateY(0%);\n    }\n    35% {\n        transform: translateY(45%);\n    }\n    70% {\n        transform: translateY(-16%);\n    }\n    90% {\n        transform: translateY(10%);\n    }\n    100% {\n        transform: translateY(0%);\n    }\n}\n\n@keyframes growRightLong {\n    from {\n        width: 0%;\n    }\n    to {\n        width: 60%;\n    }\n}\n\n@keyframes growRightShort {\n    from {\n        width: 0%;\n    }\n    to {\n        width: 35%;\n    }\n}\n\n@keyframes fadeRight {\n    0% {\n        opacity: 0;\n        transform: translateX(-30%);\n    }\n    50% {\n        transform: translateX(0%);\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes slideInRight {\n    0% {\n        transform: translateX(-100%);\n    }\n    100% {\n        transform: translateX(0%);\n    }\n}\n\n@keyframes slideInLeft {\n    0% {\n        transform: translateX(100%);\n    }\n    100% {\n        transform: translateX(0%);\n    }\n}\n\n\n/* City css */\n\n.city-wrapper {\n    margin: 30px auto;\n    width: 660px;\n}\n\n.view_wrapper {\n    padding: 30px 15px;\n    text-align: left;\n}\n\n\n/* HOUSE */\n\n.house-wrapper {\n    display: inline-block;\n}\n\n.house1 {\n    margin: 0 2px 0 10px;\n    width: 120px;\n    height: 80px;\n    background-color: #eee;\n    position: relative;\n    border-bottom: 5px solid #ccc;\n}\n\n.house1a {\n    margin: 0 2px 0 -20px;\n    border-bottom-color: #eee;\n}\n\n.house1-roof {\n    width: 140px;\n    height: 0;\n    border-bottom: 25px solid #eee;\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    position: absolute;\n    top: -25px;\n    left: -10px;\n}\n\n.house1a .house1-roof {\n    border-bottom-color: #ccc;\n}\n\n.house1-center {\n    width: 50px;\n    height: 95px;\n    background-color: #ccc;\n    -webkit-transform: translate(35px, -15px);\n    -ms-transform: translate(35px, -15px);\n    -o-transform: translate(35px, -15px);\n    transform: translate(35px, -15px);\n    position: relative;\n}\n\n.house1a .house1-center {\n    background-color: #eee;\n}\n\n.house1-center-roof {\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: -25px;\n    left: 0;\n    border-bottom: 25px solid #ccc;\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n}\n\n.house1a .house1-center-roof {\n    border-bottom-color: #eee;\n}\n\n.house1-center-roof:before {\n    content: \"\";\n    width: 40px;\n    height: 4px;\n    position: absolute;\n    top: 0;\n    left: -40px;\n    background-color: #eee;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    -webkit-transform-origin: right;\n    -moz-transform-origin: right;\n    -ms-transform-origin: right;\n    -o-transform-origin: right;\n    transform-origin: right;\n}\n\n.house1-center-roof:after {\n    content: \"\";\n    width: 40px;\n    height: 4px;\n    position: absolute;\n    top: 0;\n    right: -40px;\n    background-color: #eee;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transform-origin: left;\n    -moz-transform-origin: left;\n    -ms-transform-origin: left;\n    -o-transform-origin: left;\n    transform-origin: left;\n}\n\n.house1a .house1-center-roof:before,\n.house1a .house1-center-roof:after {\n    background-color: #ccc;\n}\n\n.house1-window,\n.house2-window {\n    width: 25px;\n    height: 25px;\n    border: 2px solid #ccc;\n    position: absolute;\n    background-color: lightblue;\n    overflow: hidden;\n}\n\n.house1-window:before,\n.house2-main-window:before,\n.house2-window:before {\n    content: \"\";\n    position: absolute;\n    width: 1px;\n    height: 22px;\n    background-color: #fff;\n    left: 10px;\n    top: 0px;\n}\n\n.house1-window:after,\n.house2-main-window:after,\n.house2-window:after {\n    content: \"\";\n    position: absolute;\n    width: 1px;\n    height: 22px;\n    background-color: #fff;\n    right: -1px;\n    top: 10px;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-transform-origin: top;\n    -moz-transform-origin: top;\n    -ms-transform-origin: top;\n    -o-transform-origin: top;\n    transform-origin: top;\n}\n\n.house1-window:nth-child(1) {\n    left: 5px;\n    top: 5px;\n}\n\n.house1-window:nth-child(2) {\n    right: 5px;\n    top: 5px;\n}\n\n.house1-window:nth-child(3) {\n    left: 5px;\n    top: 40px;\n}\n\n.house1-window:nth-child(4) {\n    right: 5px;\n    top: 40px;\n}\n\n.house1-window.window-center {\n    height: 30px;\n    left: 12.5px;\n    border: 2px solid #eee;\n}\n\n.house1a .house1-window.window-center {\n    border-color: #ccc;\n}\n\n.house1-window.window-center:before {\n    height: 30px;\n}\n\n.house1-window.window-center:after {\n    top: 13px;\n}\n\n.house1-center-door {\n    width: 25px;\n    height: 40px;\n    background-color: #eee;\n    position: absolute;\n    left: 12.5px;\n    bottom: 0;\n}\n\n.house1a .house1-center-door {\n    background-color: #ccc;\n}\n\n\n/* TREE */\n\n.tree-wrapper {\n    display: inline-block;\n    margin-left: -15px;\n}\n\n.tree {\n    position: relative;\n    width: 0px;\n    height: 0px;\n    border-bottom: 25px solid #ccc;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    z-index: 700;\n}\n\n.tree:before {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: -15px;\n    width: 0;\n    height: 0;\n    border-bottom: 25px solid #bbb;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n}\n\n.tree:after {\n    content: \"\";\n    position: absolute;\n    top: -20px;\n    left: -15px;\n    width: 0;\n    height: 0;\n    border-bottom: 25px solid #aaa;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n}\n\n.base {\n    position: absolute;\n    width: 5px;\n    height: 8px;\n    bottom: -32px;\n    left: -2.5px;\n    background-color: #555;\n}\n\n\n/* BUILDING */\n\n.building-wrapper {\n    display: inline-block;\n}\n\n.building1 {\n    z-index: 100;\n}\n\n.building {\n    margin-left: -8px;\n    width: 80px;\n    height: 120px;\n    background-color: #eee;\n    position: relative;\n    border-top: 5px solid #ccc;\n}\n\n.building-window {\n    width: 15px;\n    height: 25px;\n    border: 2px solid #ccc;\n    position: absolute;\n    background-color: lightblue;\n    overflow: hidden;\n}\n\n.building-window:after {\n    content: \"\";\n    position: absolute;\n    width: 1px;\n    height: 25px;\n    background-color: #fff;\n    right: -1px;\n    top: 6px;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-transform-origin: top;\n    -moz-transform-origin: top;\n    -ms-transform-origin: top;\n    -o-transform-origin: top;\n    transform-origin: top;\n}\n\n.building-window:nth-child(1) {\n    left: 11.5px;\n    top: 10px;\n}\n\n.building-window:nth-child(2) {\n    right: 32.5px;\n    top: 10px;\n}\n\n.building-window:nth-child(3) {\n    right: 11.5px;\n    top: 10px;\n}\n\n.building-window:nth-child(4) {\n    left: 11.5px;\n    top: 45px;\n}\n\n.building-window:nth-child(5) {\n    right: 32.5px;\n    top: 45px;\n}\n\n.building-window:nth-child(6) {\n    right: 11.5px;\n    top: 45px;\n}\n\n.building-door {\n    width: 20px;\n    height: 35px;\n    background-color: #ccc;\n    position: absolute;\n    right: 11.5px;\n    bottom: 0;\n}\n\n\n/* BUILDING 2 */\n\n.building2 {\n    border-top: 5px solid #eee;\n    margin-left: -8px;\n    width: 60px;\n    height: 150px;\n    background-color: #ccc;\n}\n\n.building3 {\n    margin-left: 2px !important;\n    z-index: 600;\n}\n\n.building2 .building-window {\n    border: 2px solid #eee;\n}\n\n.building2 .building-window:nth-child(2) {\n    right: 11.5px;\n    top: 10px;\n}\n\n.building2 .building-window:nth-child(3) {\n    left: 11.5px;\n    top: 45px;\n}\n\n.building2 .building-window:nth-child(4) {\n    left: auto;\n    right: 11.5px;\n    top: 45px;\n}\n\n.building2 .building-window:nth-child(5) {\n    left: 11.5px;\n    right: auto;\n    top: 80px;\n}\n\n.building2 .building-window:nth-child(6) {\n    right: 11.5px;\n    top: 80px;\n}\n\n.building2 .building-door {\n    width: 20px;\n    height: 30px;\n    right: 20px;\n    background-color: #eee;\n}\n\n\n/* HOUSE 2 */\n\n.house2 {\n    position: relative;\n    margin-left: -28px;\n}\n\n.house2-base {\n    width: 120px;\n    height: 60px;\n    background-color: #eee;\n    position: relative;\n}\n\n.house2-base-roof {\n    width: 120px;\n    height: 0;\n    border-bottom: 30px solid #ccc;\n    border-left: 30px solid transparent;\n    border-right: 30px solid transparent;\n    border-radius: 8px;\n    position: absolute;\n    top: -30px;\n    right: -10px;\n}\n\n.house2-main {\n    width: 60px;\n    height: 30px;\n    background-color: #eee;\n    position: absolute;\n    left: 0px;\n    bottom: 50px;\n    z-index: 200;\n}\n\n.house2-main-roof {\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: -30px;\n    left: 0;\n    border-bottom: 30px solid #eee;\n    border-left: 30px solid transparent;\n    border-right: 30px solid transparent;\n}\n\n.house2-main-roof:before {\n    content: \"\";\n    width: 50px;\n    height: 4px;\n    position: absolute;\n    top: -2px;\n    left: -50px;\n    background-color: #ccc;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    -webkit-transform-origin: right;\n    -moz-transform-origin: right;\n    -ms-transform-origin: right;\n    -o-transform-origin: right;\n    transform-origin: right;\n}\n\n.house2-main-roof:after {\n    content: \"\";\n    width: 50px;\n    height: 4px;\n    position: absolute;\n    top: -2px;\n    right: -50px;\n    background-color: #ccc;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transform-origin: left;\n    -moz-transform-origin: left;\n    -ms-transform-origin: left;\n    -o-transform-origin: left;\n    transform-origin: left;\n}\n\n.house2-main-window {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    border: 2px solid #ccc;\n    background-color: lightblue;\n    position: absolute;\n    left: 20px;\n    top: 5px;\n    overflow: hidden;\n}\n\n.house2-main-window:before {\n    left: 8px;\n}\n\n.house2-main-window:after {\n    top: 8px;\n}\n\n.house2-door {\n    width: 20px;\n    height: 30px;\n    left: 20px;\n    position: absolute;\n    bottom: 0;\n    background-color: #ccc;\n}\n\n.house2-window {\n    width: 20px;\n    height: 20px;\n}\n\n.house2-window:nth-child(1) {\n    right: 35px;\n    top: 5px;\n}\n\n.house2-window:nth-child(2) {\n    right: 5px;\n    top: 5px;\n}\n\n.house2-window:nth-child(3) {\n    right: 35px;\n    top: 35px;\n}\n\n.house2-window:nth-child(4) {\n    right: 5px;\n    top: 35px;\n}\n\n.house2-window:before {\n    left: 7.5px;\n}\n\n.house2-window:after {\n    top: 7.5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/ProgressBar/ProgressBar.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/ProgressBar/ProgressBar.css ***!
  \***************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".progress_bar_layout {\n    height: 70px;\n    width: 100%;\n    align-items: center;\n}\n\nsection {\n    margin-bottom: 2rem;\n  }\n\n.custom-progress-bar {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    padding: 0;\n    margin: 0 0 1rem 0;\n  }\n  .custom-progress-bar li {\n    flex: 2;\n    position: relative;\n    padding: 0 0 14px 0;\n    font-size: .875rem;\n    line-height: 1.5;\n    color: #53a318;\n    font-weight: 600;\n    white-space: nowrap;\n    overflow: visible;\n    min-width: 0;\n    text-align: center;\n    border-bottom: 2px solid  #e8e8e8;\n  }\n  .custom-progress-bar li:first-child,\n  .custom-progress-bar li:last-child {\n    flex: 1;\n  }\n  .custom-progress-bar li:last-child {\n    text-align: right;\n  }\n  .custom-progress-bar li:before {\n    content: \"\";\n    display: block;\n    width: 8px;\n    height: 8px;\n    /* background-color: #e8e8e8; */\n    border-radius: 50%;\n    border: 2px solid #fff;\n    position: absolute;\n    left: calc(50% - 6px);\n    bottom: -7px;\n    z-index: 3;\n    transition: all .2s ease-in-out;\n  }\n  .custom-progress-bar li:first-child:before {\n    left: 0;\n  }\n  .custom-progress-bar li:last-child:before {\n    right: 0;\n    left: auto;\n  }\n  .custom-progress-bar span {\n    transition: opacity .3s ease-in-out;\n  }\n  /* .custom-progress-bar li:not(.is-active) span {\n    opacity: 0; */\n  /* } */\n  .custom-progress-bar .is-complete:not(:first-child):after,\n  .custom-progress-bar .is-active:not(:first-child):after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    position: absolute;\n    bottom: -2px;\n    left: -50%;\n    z-index: 2;\n    border-bottom: 2px solid #53a318;\n  }\n  .custom-progress-bar li:last-child span {\n    width: 200%;\n    display: inline-block;\n    position: absolute;\n    left: -100%;\n  }\n  \n  .custom-progress-bar .is-complete:last-child:after,\n  .custom-progress-bar .is-active:last-child:after {\n    width: 200%;\n    left: -100%;\n  }\n  \n  .custom-progress-bar .is-complete:before {\n    background-color: #53a318;\n  }\n\n  .custom-progress-bar a {\n    color: #53a318;\n  }\n  \n  .custom-progress-bar .is-active:before,\n  .custom-progress-bar li:hover:before,\n  .custom-progress-bar .is-hovered:before {\n    /* background-color: #fff; */\n    border-color: #53a318;\n  }\n  .custom-progress-bar li:hover:before,\n  .custom-progress-bar .is-hovered:before {\n    transform: scale(1.33);\n  }\n  \n  .custom-progress-bar li:hover span,\n  .custom-progress-bar li.is-hovered span {\n    opacity: 1;\n  }\n  \n  .custom-progress-bar:hover li:not(:hover) span {\n    opacity: 0;\n  }\n  \n  .x-ray .custom-progress-bar,\n  .x-ray .custom-progress-bar li {\n    border: 1px dashed red;\n  }\n  \n  .custom-progress-bar .has-changes {\n    opacity: 1 !important;\n  }\n  .custom-progress-bar .has-changes:before {\n    content: \"\";\n    display: block;\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    left: calc(50% - 4px);\n    bottom: -20px;\n    background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%3E%3Cpath%20fill%3D%22%23ed1c24%22%20d%3D%22M4%200l4%208H0z%22%2F%3E%3C%2Fsvg%3E');\n  }\n\n  .in-complete span {\n    color: #bbb;\n  }\n\n  .in-complete span:hover {\n    color: #53a318;\n  }\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Auth/Auth.css":
/*!***********************************************!*\
  !*** ./frontend/src/components/Auth/Auth.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Auth_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Auth.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Auth/Auth.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Auth_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Auth_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./frontend/src/components/NavBar/Navigation.css":
/*!*******************************************************!*\
  !*** ./frontend/src/components/NavBar/Navigation.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Navigation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Navigation.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/NavBar/Navigation.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Navigation_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Navigation_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./frontend/src/components/OnBoarding/OnBoarding.css":
/*!***********************************************************!*\
  !*** ./frontend/src/components/OnBoarding/OnBoarding.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_OnBoarding_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./OnBoarding.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/OnBoarding/OnBoarding.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_OnBoarding_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_OnBoarding_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./frontend/src/components/ProgressBar/ProgressBar.css":
/*!*************************************************************!*\
  !*** ./frontend/src/components/ProgressBar/ProgressBar.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ProgressBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ProgressBar.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/ProgressBar/ProgressBar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ProgressBar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ProgressBar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
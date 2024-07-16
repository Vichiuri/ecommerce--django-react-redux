(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_UserManagement_GroupManagement_js"],{

/***/ "./frontend/src/components/UserManagement/EditGroupManagement.js":
/*!***********************************************************************!*\
  !*** ./frontend/src/components/UserManagement/EditGroupManagement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditGroupManagement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _utils_CustomPermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/CustomPermissions */ "./frontend/src/utils/CustomPermissions.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomCheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomCheckBox */ "./frontend/src/widgets/CustomCheckBox.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function EditGroupManagement(props) {
  var show = props.show,
      handleModal = props.handleModal,
      group = props.group,
      updateManagementGroup = props.updateManagementGroup;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_CustomPermissions__WEBPACK_IMPORTED_MODULE_1__.default),
      _useState4 = _slicedToArray(_useState3, 2),
      permissions = _useState4[0],
      setPermissions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      responseMessage = _useState8[0],
      setResponseMessage = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (group) {
      setName(group.name);
      var permissionArray = [];
      Object.keys(group.permission).map(function (prop, key) {
        if (prop != "id" && prop != "distributor") {
          var viewPerm = permissions.filter(function (item) {
            return item.label == prop;
          })[0];

          if (viewPerm) {
            viewPerm.selected = group.permission[prop];
            permissionArray.push(viewPerm);
          }
        }
      });
      setPermissions(permissionArray);
    }
  }, [group]);

  function uploadPermissionGroup() {
    setIsError(null);
    setResponseMessage("");

    if (name) {
      var body = {
        name: name,
        id: group.id
      };

      for (var i = 0; i < permissions.length; i++) {
        var perm = permissions[i];
        body[perm.label] = perm.selected;
      }

      updateManagementGroup(body);
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input group name");
    }
  }

  function getChangePermission(label) {
    var d_permission = permissions.filter(function (t_permission) {
      return t_permission.label === label;
    })[0];

    if (d_permission) {
      return d_permission.selected;
    } else {
      return false;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Edit Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row p-2"
  }, permissions.map(function (permission, index) {
    if (!permission.disabled) {
      var view_primary = permission.primary ? getChangePermission(permission.primary) : false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-lg-3 col-md-6 col-sm-12 col-xs-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomCheckBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        key: index,
        option: permission,
        disabled: view_primary,
        handleChange: function handleChange(m_option) {
          var permissionsArray = permissions.filter(function (item) {
            return item.label != m_option.label;
          });
          m_option.selected = !permission.selected;
          permissionsArray.splice(index, 0, m_option);

          if (permission.secondary) {
            var v_array = permissionsArray.map(function (item) {
              var new_item = item;

              if (new_item.label === m_option.secondary && m_option.selected === true) {
                new_item.selected = true;
              }

              return new_item;
            });
            permissionsArray = v_array;
          }

          setPermissions(permissionsArray);
        }
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Group Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Enter a Group Name"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add a Group Name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadPermissionGroup();
    }
  }, "Save Group")));
}

/***/ }),

/***/ "./frontend/src/components/UserManagement/GroupManagement.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/components/UserManagement/GroupManagement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Management */ "./frontend/src/redux/Actions/Management.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _ViewGroupManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewGroupManagement */ "./frontend/src/components/UserManagement/ViewGroupManagement.js");
/* harmony import */ var _management_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management.css */ "./frontend/src/components/UserManagement/management.css");
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










var GroupManagement = /*#__PURE__*/function (_Component) {
  _inherits(GroupManagement, _Component);

  var _super = _createSuper(GroupManagement);

  function GroupManagement(props) {
    var _this;

    _classCallCheck(this, GroupManagement);

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

  _createClass(GroupManagement, [{
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
      this.props.fetchManagementGroups();
    }
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
      var _this$props2 = this.props,
          managementReducer = _this$props2.managementReducer,
          addManagementGroup = _this$props2.addManagementGroup,
          deleteManagementGroup = _this$props2.deleteManagementGroup,
          updateManagementGroup = _this$props2.updateManagementGroup,
          auth = _this$props2.auth;
      var isLoading = managementReducer.isLoading,
          dist_users = managementReducer.dist_users,
          groups = managementReducer.groups;
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

      if (!auth.group.permission.can_view_users) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.auth.group.permission);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
        open: isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewGroupManagement__WEBPACK_IMPORTED_MODULE_6__.default, {
        groups: groups,
        addManagementGroup: addManagementGroup,
        deleteManagementGroup: deleteManagementGroup,
        updateManagementGroup: updateManagementGroup,
        canManage: auth.group.permission.can_manage_users
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return GroupManagement;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    managementReducer: state.managementReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Management page for adding dist groups */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchManagementGroups: _redux_Actions_Management__WEBPACK_IMPORTED_MODULE_2__.fetchManagementGroups,
  addManagementGroup: _redux_Actions_Management__WEBPACK_IMPORTED_MODULE_2__.addManagementGroup,
  deleteManagementGroup: _redux_Actions_Management__WEBPACK_IMPORTED_MODULE_2__.deleteManagementGroup,
  updateManagementGroup: _redux_Actions_Management__WEBPACK_IMPORTED_MODULE_2__.updateManagementGroup
})(GroupManagement));

/***/ }),

/***/ "./frontend/src/components/UserManagement/GroupManagementModal.js":
/*!************************************************************************!*\
  !*** ./frontend/src/components/UserManagement/GroupManagementModal.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupManagementModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomCheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomCheckBox */ "./frontend/src/widgets/CustomCheckBox.js");
/* harmony import */ var _utils_CustomPermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/CustomPermissions */ "./frontend/src/utils/CustomPermissions.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function GroupManagementModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      addManagementGroup = props.addManagementGroup;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_CustomPermissions__WEBPACK_IMPORTED_MODULE_3__.default),
      _useState4 = _slicedToArray(_useState3, 2),
      permissions = _useState4[0],
      setPermissions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      responseMessage = _useState8[0],
      setResponseMessage = _useState8[1];

  function uploadPermissionGroup() {
    setIsError(null);
    setResponseMessage("");

    if (name) {
      var body = {
        name: name
      };

      for (var i = 0; i < permissions.length; i++) {
        var perm = permissions[i];
        body[perm.label] = perm.selected;
      }

      addManagementGroup(body);
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input group name");
    }
  }

  function clearModal() {
    setName("");
    setPermissions(_utils_CustomPermissions__WEBPACK_IMPORTED_MODULE_3__.default);
    handleModal();
  }

  function getChangePermission(label) {
    var d_permission = permissions.filter(function (t_permission) {
      return t_permission.label === label;
    })[0];

    if (d_permission) {
      return d_permission.selected;
    } else {
      return false;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row p-2"
  }, permissions.map(function (permission, index) {
    if (!permission.disabled) {
      var view_primary = permission.primary ? getChangePermission(permission.primary) : false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-lg-3 col-md-6 col-sm-12 col-xs-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomCheckBox__WEBPACK_IMPORTED_MODULE_2__.default, {
        key: index,
        option: permission,
        disabled: view_primary,
        handleChange: function handleChange(m_option) {
          var permissionsArray = permissions.filter(function (item) {
            return item.label != m_option.label;
          });
          m_option.selected = !permission.selected;
          permissionsArray.splice(index, 0, m_option);

          if (permission.secondary) {
            var v_array = permissionsArray.map(function (item) {
              var new_item = item;

              if (new_item.label === m_option.secondary && m_option.selected === true) {
                new_item.selected = true;
              }

              return new_item;
            });
            permissionsArray = v_array;
          }

          setPermissions(permissionsArray);
        }
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Group Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Enter a Group Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add a Group Name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadPermissionGroup();
    }
  }, "Add Group")));
}

/***/ }),

/***/ "./frontend/src/components/UserManagement/GroupManagementRow.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/components/UserManagement/GroupManagementRow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupManagementRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function GroupManagementRow(props) {
  var index = props.index,
      group = props.group,
      deleteManagementGroup = props.deleteManagementGroup,
      editGroup = props.editGroup,
      canManage = props.canManage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isActive = _useState4[0],
      setIsActive = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (group && group.permission) {
      Object.keys(group.permission).map(function (prop, key) {
        if (prop != "id" && prop != "distributor") {
          if (group.permission[prop]) {
            setIsActive(true);
          }
        }
      });
    }
  }, [group]);
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
      deleteManagementGroup(group.id);
    } else if (value == "Edit") {
      editGroup(group);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, group.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Active") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-danger"
  }), "In Active")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, group.view_users), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/UserManagement/ViewGroupManagement.js":
/*!***********************************************************************!*\
  !*** ./frontend/src/components/UserManagement/ViewGroupManagement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewGroupManagement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _EditGroupManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditGroupManagement */ "./frontend/src/components/UserManagement/EditGroupManagement.js");
/* harmony import */ var _GroupManagementModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupManagementModal */ "./frontend/src/components/UserManagement/GroupManagementModal.js");
/* harmony import */ var _GroupManagementRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupManagementRow */ "./frontend/src/components/UserManagement/GroupManagementRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewGroupManagement(props) {
  var groups = props.groups,
      addManagementGroup = props.addManagementGroup,
      deleteManagementGroup = props.deleteManagementGroup,
      updateManagementGroup = props.updateManagementGroup,
      canManage = props.canManage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showEditModal = _useState4[0],
      setShowEditModal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      viewGroup = _useState6[0],
      setViewGroup = _useState6[1];

  function editGroup(group) {
    setViewGroup(group);
    setShowEditModal(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Management Groups"), canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return setShowModal(true);
    },
    className: "fas fa-plus btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, groups.map(function (group, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GroupManagementRow__WEBPACK_IMPORTED_MODULE_3__.default, {
      group: group,
      index: index,
      key: index,
      deleteManagementGroup: deleteManagementGroup,
      editGroup: editGroup,
      canManage: canManage
    });
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GroupManagementModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    addManagementGroup: addManagementGroup
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditGroupManagement__WEBPACK_IMPORTED_MODULE_1__.default, {
    show: showEditModal,
    handleModal: function handleModal() {
      return setShowEditModal(!showEditModal);
    },
    updateManagementGroup: updateManagementGroup,
    group: viewGroup
  }));
}

/***/ }),

/***/ "./frontend/src/utils/CustomPermissions.js":
/*!*************************************************!*\
  !*** ./frontend/src/utils/CustomPermissions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var customPermission = [{
  name: "View User",
  label: "can_view_users",
  selected: false,
  disabled: true
}, {
  name: "View User",
  label: "can_manage_users",
  selected: false,
  disabled: true
}, {
  name: "View SalesMen",
  label: "can_view_salesmen",
  selected: false,
  primary: "can_manage_salesmen"
}, {
  name: "Manage Salemen",
  label: "can_manage_salesmen",
  selected: false,
  secondary: "can_view_salesmen"
}, {
  name: "View Orders",
  label: "can_view_orders",
  selected: false,
  primary: "can_manage_orders"
}, {
  name: "Manage Orders",
  label: "can_manage_orders",
  selected: false,
  secondary: "can_view_orders"
}, {
  name: "Post Orders",
  label: "can_post_orders",
  selected: false,
  secondary: "can_view_orders",
  disabled: true
}, {
  name: "View Retailers",
  label: "can_view_retailer",
  selected: false,
  primary: "can_manage_retailer"
}, {
  name: "Manage Retailers",
  label: "can_manage_retailer",
  selected: false,
  secondary: "can_view_retailer"
}, {
  name: "View Products",
  label: "can_view_products",
  selected: false,
  primary: "can_manage_product"
}, {
  name: "Manage Products",
  label: "can_manage_product",
  selected: false,
  secondary: "can_view_products"
}, {
  name: "View Categories",
  label: "can_view_product_category",
  selected: false,
  primary: "can_manage_product_categories"
}, {
  name: "Manage Categories",
  label: "can_manage_product_categories",
  selected: false,
  secondary: "can_view_product_category"
}, {
  name: "View Offer",
  label: "can_view_offers",
  selected: false,
  primary: "can_manage_offers"
}, {
  name: "Manage Offers",
  label: "can_manage_offers",
  selected: false,
  secondary: "can_view_offers"
}, {
  name: "Edit Company",
  label: "can_edit_company_details",
  selected: false
}, {
  name: "View Settings",
  label: "can_view_settings",
  selected: false,
  primary: "can_manage_settings"
}, {
  name: "Manage Settings",
  label: "can_manage_settings",
  selected: false,
  secondary: "can_view_settings"
}, {
  name: "View DashBoard",
  label: "can_view_dashboard",
  selected: true
}, {
  name: "View Deliveries",
  label: "can_view_deliveries",
  selected: false
}, {
  name: "Manage Mobile",
  label: "can_manage_mobile",
  selected: false
}, {
  name: "View Reports",
  label: "can_view_reports",
  selected: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customPermission);

/***/ }),

/***/ "./frontend/src/widgets/CustomCheckBox.js":
/*!************************************************!*\
  !*** ./frontend/src/widgets/CustomCheckBox.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCheckBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");


function CustomCheckBox(props) {
  var option = props.option,
      handleChange = props.handleChange,
      disabled = props.disabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "check_values"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__.default, {
    checked: option.selected,
    onChange: function onChange() {
      return handleChange(option);
    },
    inputProps: {
      "aria-label": "primary checkbox"
    },
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, option.name));
}

/***/ })

}]);
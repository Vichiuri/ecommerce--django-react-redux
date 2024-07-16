(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Categories_Categories_js"],{

/***/ "./frontend/src/components/Categories/AddCategory.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/Categories/AddCategory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomTextEditor */ "./frontend/src/widgets/CustomTextEditor.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AddCategory(props) {
  var changePage = props.changePage,
      categories = props.categories,
      addCategory = props.addCategory;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      p_category = _useState2[0],
      setPCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("../static/images/add_image.png"),
      _useState4 = _slicedToArray(_useState3, 2),
      image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      brief_description = _useState8[0],
      setBriefDescription = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      description = _useState10[0],
      _setDescription = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      logo = _useState12[0],
      setLogo = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      fileInput = _useState14[0],
      setFileInput = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      isError = _useState16[0],
      setIsError = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      responseMessage = _useState18[0],
      setResponseMessage = _useState18[1];

  function fileSelectorHandler(e) {
    var fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    var viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__.default)(fileImage).then(function (compressImage) {
      setLogo(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  function uploadCategory() {
    setIsError(null);
    setResponseMessage("");

    if (name && description) {
      var formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brief_description", brief_description);

      if (p_category) {
        formData.append("category_id", p_category);
      }

      formData.append("photo", logo);
      addCategory(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input a category name");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please input category description");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Categories",
    propsName: "Add Category",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_category_img",
    onClick: function onClick() {
      return fileInput.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "image_input",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return fileSelectorHandler(e);
    },
    ref: function ref(fileInput) {
      return setFileInput(fileInput);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    "for": "exampleFormControlSelect2"
  }, "Select Parent Category  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Choose the best parent category"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect2",
    value: p_category,
    onChange: function onChange(e) {
      return setPCategory(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: category.id
    }, category.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Category Name*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Input the appropriate name"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter category name",
    value: name,
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Brief Description(250)*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Enter a small description for your category"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    rows: 4,
    className: "form-control",
    value: brief_description,
    onChange: function onChange(e) {
      if (e.target.value.length <= 250) {
        setBriefDescription(e.target.value);
      } else {
        setResponse({
          isError: true,
          responseMessage: {
            message: "Description cannot be more than 250 words"
          }
        });
      }
    },
    placeholder: "Please input category brief description",
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Category Description*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Enter as much information as you want"
  }), "   ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__.default, {
    description: "",
    setDescription: function setDescription(e) {
      return _setDescription(e.target.getContent());
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadCategory();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Add Category"))))));
}

/***/ }),

/***/ "./frontend/src/components/Categories/Categories.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Categories/Categories.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewCategories */ "./frontend/src/components/Categories/ViewCategories.js");
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories.css */ "./frontend/src/components/Categories/Categories.css");
/* harmony import */ var _AddCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddCategory */ "./frontend/src/components/Categories/AddCategory.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _EditCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditCategory */ "./frontend/src/components/Categories/EditCategory.js");
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











var Categories = /*#__PURE__*/function (_Component) {
  _inherits(Categories, _Component);

  var _super = _createSuper(Categories);

  function Categories(props) {
    var _this;

    _classCallCheck(this, Categories);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      currentPage: 1,
      viewCategory: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.editCategory = _this.editCategory.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Categories, [{
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "editCategory",
    value: function editCategory(category) {
      this.setState({
        currentPage: 3,
        viewCategory: category
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
      this.props.fetchCategories(1);
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
          productsReducer = _this$props2.productsReducer,
          addCategory = _this$props2.addCategory,
          updateCategories = _this$props2.updateCategories,
          deleteCategory = _this$props2.deleteCategory,
          auth = _this$props2.auth,
          fetchCategories = _this$props2.fetchCategories;
      var isLoading = productsReducer.isLoading,
          categories = productsReducer.categories,
          category_current_page = productsReducer.category_current_page,
          category_last_page = productsReducer.category_last_page;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          viewCategory = _this$state.viewCategory;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_products) {
        return PermissionHandler(this.props.auth.group.permission);
      }

      var pageDetails = {
        current_page: category_current_page,
        last_page: category_last_page
      };

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewCategories__WEBPACK_IMPORTED_MODULE_1__.default, {
            changePage: this.changePage,
            categories: categories,
            editCategory: this.editCategory,
            deleteCategory: deleteCategory,
            canManage: auth.group.permission.can_manage_product,
            fetchCategories: fetchCategories,
            pageDetails: pageDetails
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddCategory__WEBPACK_IMPORTED_MODULE_3__.default, {
            changePage: this.changePage,
            categories: categories,
            addCategory: addCategory
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditCategory__WEBPACK_IMPORTED_MODULE_8__.default, {
            changePage: this.changePage,
            categories: categories,
            updateCategory: updateCategories,
            category: viewCategory
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewCategories__WEBPACK_IMPORTED_MODULE_1__.default, {
            changePage: this.changePage,
            categories: categories
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    productsReducer: state.productsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** View to add and edit distributor technologies */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {
  fetchCategories: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchCategories,
  addCategory: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.addCategory,
  updateCategories: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.updateCategories,
  deleteCategory: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.deleteCategory
})(Categories));

/***/ }),

/***/ "./frontend/src/components/Categories/EditCategory.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/Categories/EditCategory.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomTextEditor */ "./frontend/src/widgets/CustomTextEditor.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function EditCategory(props) {
  var changePage = props.changePage,
      categories = props.categories,
      updateCategory = props.updateCategory,
      category = props.category;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(category.parent_category ? category.parent_category : ""),
      _useState2 = _slicedToArray(_useState, 2),
      p_category = _useState2[0],
      setPCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(category.category_pic ? "..".concat(category.category_pic) : "../static/images/add_image.png"),
      _useState4 = _slicedToArray(_useState3, 2),
      image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(category.name),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(category.brief_description),
      _useState8 = _slicedToArray(_useState7, 2),
      brief_description = _useState8[0],
      setBriefDescription = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(category.description),
      _useState10 = _slicedToArray(_useState9, 2),
      description = _useState10[0],
      _setDescription = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      logo = _useState12[0],
      setLogo = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      fileInput = _useState14[0],
      setFileInput = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      isError = _useState16[0],
      setIsError = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      responseMessage = _useState18[0],
      setResponseMessage = _useState18[1];

  function fileSelectorHandler(e) {
    var fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    var viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__.default)(fileImage).then(function (compressImage) {
      setLogo(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  function uploadCategory() {
    setIsError(null);
    setResponseMessage("");

    if (name && description) {
      var formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brief_description", brief_description);
      formData.append("p_category", p_category);
      formData.append("photo", logo);
      formData.append("id", category.id);
      updateCategory(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input a category name");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please input category description");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Categories",
    propsName: "Edit Category",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_category_img",
    onClick: function onClick() {
      return fileInput.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "image_input",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return fileSelectorHandler(e);
    },
    ref: function ref(fileInput) {
      return setFileInput(fileInput);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    "for": "exampleFormControlSelect2"
  }, "Select Parent Category ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Choose the best parent category"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect2",
    value: p_category,
    onChange: function onChange(e) {
      return setPCategory(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: category.id
    }, category.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Category Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Input the appropriate name"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter category name",
    value: name,
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Brief description(250)*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Enter a small description for your category"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    rows: 4,
    className: "form-control",
    value: brief_description,
    onChange: function onChange(e) {
      if (e.target.value.length <= 250) {
        setBriefDescription(e.target.value);
      } else {
        setResponse({
          isError: true,
          responseMessage: {
            message: "Description cannot be more than 250 words"
          }
        });
      }
    },
    placeholder: "Please input category brief description",
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Category Description   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Enter as much information as you want"
  }), "    ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__.default, {
    description: category.description,
    setDescription: function setDescription(e) {
      return _setDescription(e.target.getContent());
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadCategory();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Edit Category"))))));
}

/***/ }),

/***/ "./frontend/src/components/Categories/ViewCategories.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/Categories/ViewCategories.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewCategories)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _ViewCategoriesRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewCategoriesRow */ "./frontend/src/components/Categories/ViewCategoriesRow.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewCategories(props) {
  var changePage = props.changePage,
      categories = props.categories,
      deleteCategory = props.deleteCategory,
      editCategory = props.editCategory,
      canManage = props.canManage,
      fetchCategories = props.fetchCategories,
      pageDetails = props.pageDetails;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  function onChangeRows(viewRows) {
    fetchCategories(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchCategories(page, query, rows);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg_themed container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6 form-group p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control border-right-0 ",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
      if (query) {
        fetchCategories(1, query, rows);
      } else {
        fetchCategories(1, "", rows);
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
  }, "Add Category") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Brief Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewCategoriesRow__WEBPACK_IMPORTED_MODULE_2__.default, {
      category: category,
      key: index,
      index: index,
      deleteCategory: deleteCategory,
      editCategory: editCategory,
      canManage: canManage
    });
  }))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_3__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))));
}

/***/ }),

/***/ "./frontend/src/components/Categories/ViewCategoriesRow.js":
/*!*****************************************************************!*\
  !*** ./frontend/src/components/Categories/ViewCategoriesRow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewCategoriesRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ViewCategoriesRow(props) {
  var category = props.category,
      index = props.index,
      deleteCategory = props.deleteCategory,
      editCategory = props.editCategory,
      canManage = props.canManage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

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
      deleteCategory(category.id);
    } else if (value == "Edit") {
      editCategory(category);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "add_category_img"
  }, category.category_pic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "..".concat(category.category_pic),
    alt: "logo"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/logo.svg",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom_table_height"
  }, category.brief_description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
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

/***/ "./frontend/src/widgets/CustomTextEditor.js":
/*!**************************************************!*\
  !*** ./frontend/src/widgets/CustomTextEditor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");


function CustomTextEditor(props) {
  var description = props.description,
      setDescription = props.setDescription;
  var themeLight = "light";
  var body = document.getElementsByTagName("body")[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__.Editor, {
    initialValue: description,
    init: {
      plugins: "autolink link image lists print preview",
      toolbar: "undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect  fontselect sizeselect ",
      fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
      width: "100%",
      height: "500px",
      skin: body.classList.contains(themeLight) ? "" : "oxide-dark",
      content_css: body.classList.contains(themeLight) ? "" : "dark"
    },
    onChange: function onChange(e) {
      return setDescription(e);
    }
  });
}

/***/ }),

/***/ "?13bc":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
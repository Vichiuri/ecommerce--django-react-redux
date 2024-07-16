(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["retailerview_src_components_DashBoard_RetailerDashBoard_js"],{

/***/ "./retailerview/src/components/Categories/TopCategories/TopCategories.js":
/*!*******************************************************************************!*\
  !*** ./retailerview/src/components/Categories/TopCategories/TopCategories.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ViewTopCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewTopCategories */ "./retailerview/src/components/Categories/TopCategories/ViewTopCategories.js");
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories.css */ "./retailerview/src/components/Categories/Categories.css");
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






var TopCategories = /*#__PURE__*/function (_Component) {
  _inherits(TopCategories, _Component);

  var _super = _createSuper(TopCategories);

  function TopCategories(props) {
    var _this;

    _classCallCheck(this, TopCategories);

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

  _createClass(TopCategories, [{
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
      var productsReducer = this.props.productsReducer;
      var categories = productsReducer.categories;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewTopCategories__WEBPACK_IMPORTED_MODULE_2__.default, {
        categories: categories
      }));
    }
  }]);

  return TopCategories;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    productsReducer: state.retailerProductsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(TopCategories));

/***/ }),

/***/ "./retailerview/src/components/Categories/TopCategories/ViewTopCategories.js":
/*!***********************************************************************************!*\
  !*** ./retailerview/src/components/Categories/TopCategories/ViewTopCategories.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewTopCategories)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewTopCategoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewTopCategoryItem */ "./retailerview/src/components/Categories/TopCategories/ViewTopCategoryItem.js");


function ViewTopCategories(_ref) {
  var categories = _ref.categories;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var scroll = document.querySelector(".category_scroll");
    var isDown = false;
    var scrollX;
    var scrollLeft; // Mouse Up Function

    scroll.addEventListener("mouseup", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Leave Function

    scroll.addEventListener("mouseleave", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Down Function

    scroll.addEventListener("mousedown", function (e) {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    }); // Mouse Move Function

    scroll.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var element = e.pageX - scroll.offsetLeft;
      var scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "section wrapper_sub_category_tabs container_horizontal_tab_postions onlyparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category-thumb-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "rokan-title  has-see-all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "module-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Popular Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    "class": "see-all",
    href: "shop"
  }, "See All"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "widget-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category_view list-category-item owl-loaded owl-drag",
    "data-nav": "false",
    "data-dots": "false",
    "data-center": "false",
    "data-loop": "false",
    "data-bigdesktop": "6",
    "data-items": "5",
    "data-smalldesktop": "4",
    "data-bigtablet": "4",
    "data-tablet": "3",
    "data-smalltablet": "3",
    "data-mobile": "2",
    "data-margin": "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category_scroll",
    style: {
      transform: "translate3d(0px, 0px, 0px)",
      transition: "all 0s ease 0s",
      width: "1734px"
    }
  }, categories.map(function (caegory, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewTopCategoryItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      category: caegory,
      key: index
    });
  })))), " ")));
}

/***/ }),

/***/ "./retailerview/src/components/Categories/TopCategories/ViewTopCategoryItem.js":
/*!*************************************************************************************!*\
  !*** ./retailerview/src/components/Categories/TopCategories/ViewTopCategoryItem.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewTopCategoryItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ViewTopCategoryItem(_ref) {
  var category = _ref.category;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "card active first-active-item",
    style: {
      width: "269px",
      marginRight: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "item-load item-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category-item"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    "class": "vertical absolute-content-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "Top Featured Products",
    "class": "vertical lazy-loaded transition",
    src: category.category_pic ? "..".concat(category.category_pic) : "../static/images/logo.svg",
    style: {
      display: "block"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "thumb-infor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "cate-name cate-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "count"
  }, "(".concat(category.productcount, " items)")), " ")))), " "));
}

/***/ }),

/***/ "./retailerview/src/components/DashBoard/RetailerDashBoard.js":
/*!********************************************************************!*\
  !*** ./retailerview/src/components/DashBoard/RetailerDashBoard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hero/Hero */ "./retailerview/src/components/Hero/Hero.js");
/* harmony import */ var _Products_FlashDeals_FlashDeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Products/FlashDeals/FlashDeals */ "./retailerview/src/components/Products/FlashDeals/FlashDeals.js");
/* harmony import */ var _Categories_TopCategories_TopCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/TopCategories/TopCategories */ "./retailerview/src/components/Categories/TopCategories/TopCategories.js");
/* harmony import */ var _Offers_TopOffers_TopOffers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Offers/TopOffers/TopOffers */ "./retailerview/src/components/Offers/TopOffers/TopOffers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/RetailerDashBoard */ "./retailerview/src/redux/Actions/RetailerDashBoard.js");
/* harmony import */ var _Products_NewArrivals_NewArrivals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Products/NewArrivals/NewArrivals */ "./retailerview/src/components/Products/NewArrivals/NewArrivals.js");
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










var RetailerDashboard = /*#__PURE__*/function (_Component) {
  _inherits(RetailerDashboard, _Component);

  var _super = _createSuper(RetailerDashboard);

  function RetailerDashboard(props) {
    var _this;

    _classCallCheck(this, RetailerDashboard);

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

  _createClass(RetailerDashboard, [{
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
      var account = this.props.auth.account;
      if (account.default_distributor != null) this.props.retailerDashBoardItems(account.default_distributor.id);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        id: "maincontent",
        "class": "page-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        "class": "columns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        "class": "column main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Categories_TopCategories_TopCategories__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Products_NewArrivals_NewArrivals__WEBPACK_IMPORTED_MODULE_7__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Offers_TopOffers_TopOffers__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Products_FlashDeals_FlashDeals__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)))));
    }
  }]);

  return RetailerDashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    error: state.errorsReducer,
    message: state.messagesReducer,
    productReducer: state.retailerProductsReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {
  retailerDashBoardItems: _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_6__.retailerDashBoardItems
})(RetailerDashboard));

/***/ }),

/***/ "./retailerview/src/components/Hero/CarouselView.js":
/*!**********************************************************!*\
  !*** ./retailerview/src/components/Hero/CarouselView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");


function CarouselView(_ref) {
  var banners = _ref.banners;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "row no-wrap-desktop col-on-top section no-wrap-desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-slide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "section no-full-width slider-wrapper theme-default "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
    controls: false
  }, banners.map(function (banner, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__.default.Item, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "container-the-blue-sky-slider nivoSlider",
      style: {
        minHeight: "100%",
        maxHeight: "400px",
        borderRadius: "30px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "shop.html",
      title: "Digital 03 - Side show carousel_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      "class": "banner-nivo-slider-mobile-and-web no-lazy ",
      alt: "Digital 03 - Side show",
      title: "#htmlcaption10",
      src: banner.pic ? "..".concat(banner.pic) : "../static/images/3955595.webp"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "container-the-blue-sky-banner-text custom_carosel_overlay",
      id: "htmlcaption10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "banner-postion-fixed the-blue-sky-banner-text left_center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      "class": "animate__animated animate__slideInUp has-bg light",
      style: {
        color: "#222222",
        marginTop: "20px"
      }
    }, banner.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      "class": "animate__animated animate__slideInUp",
      style: {
        color: "#FFFFFF"
      }
    }, banner.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "shop.html",
      title: "Discover Now",
      "class": "btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs",
      style: {
        color: "#222222"
      }
    }, "Discover Now"), " "))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-banner-beside"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "banner section row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-6 col-md-6 d-none d-lg-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-banner left center shadow radius absolute-content-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "banner-img no-animation hover-light-effect",
    style: {
      height: "190px",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-1.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "size-24 regular get-size-vw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "New Style"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Bluetooh Speaker", " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    "class": "size-16 get-size-vw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Free Shipping 20km")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-banner left center shadow radius absolute-content-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "banner-img no-animation hover-light-effect",
    style: {
      maxHeight: "190px",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-2.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "size-24 regular get-size-vw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Limited"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Top Camera "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    "class": "size-16 get-size-vw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Top Quality Products"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-6 col-md-12",
    style: {
      minHeight: "100%",
      maxHeight: "400px",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-banner space-between center middle shadow radius absolute-content-image",
    style: {
      height: "100%",
      background: "#21b792"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "banner-img no-animation hover-light-effect"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-3.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content-top",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "has-bg uppercase",
    style: {
      textAlign: "center"
    }
  }, "Hot Sale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    "class": "size-18 get-size-vw margin_0",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Xbox Wireless")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "size-26 regular get-size-vw margin_0",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#ffffff"
    }
  }, "Sale Up To 50% Off")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "button-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    "class": "btn transparent small",
    style: {
      color: "#ffffff"
    },
    title: "shop now",
    href: "#"
  }, "SHOP NOW")))))))));
}

/***/ }),

/***/ "./retailerview/src/components/Hero/Hero.js":
/*!**************************************************!*\
  !*** ./retailerview/src/components/Hero/Hero.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CarouselView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselView */ "./retailerview/src/components/Hero/CarouselView.js");
/* harmony import */ var _InfoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoSection */ "./retailerview/src/components/Hero/InfoSection.js");
/* harmony import */ var _Hero_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.css */ "./retailerview/src/components/Hero/Hero.css");
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







var Hero = /*#__PURE__*/function (_Component) {
  _inherits(Hero, _Component);

  var _super = _createSuper(Hero);

  function Hero(props) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      }
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Hero, [{
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
      var bannerReducer = this.props.bannerReducer;
      var banners = bannerReducer.banners;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CarouselView__WEBPACK_IMPORTED_MODULE_2__.default, {
        banners: banners
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InfoSection__WEBPACK_IMPORTED_MODULE_3__.default, null));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    bannerReducer: state.retailerBannerReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Hero));

/***/ }),

/***/ "./retailerview/src/components/Hero/InfoSection.js":
/*!*********************************************************!*\
  !*** ./retailerview/src/components/Hero/InfoSection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function InfoSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "section shipping-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "shipping-support"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "row space-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-auto col-lg-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-content flex-layout center_hozital no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    "class": "icon icon-shipping",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-truck"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "footer-title uppercase"
  }, "Free Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "For all orders over $120")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-auto col-lg-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-content flex-layout center_hozital no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    "class": "icon icon-payment",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-credit-card"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "footer-title uppercase"
  }, "Safe Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "If goods have problems")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-auto col-lg-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-content flex-layout center_hozital no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    "class": "icon icon-help-center",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-comments"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "footer-title uppercase"
  }, "24/7 Help Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "24/7 Customer Support")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-auto col-lg-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-content flex-layout center_hozital no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    "class": "icon icon-confidence",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-coins"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "footer-title uppercase"
  }, "Return money"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "If goods have problems")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-auto col-lg-3 col-6 hidden-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-content flex-layout center_hozital no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    "class": "icon icon-friendly-services",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-headset"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    "class": "footer-title uppercase"
  }, "Friendly Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "30 day satisfaction")))))));
}

/***/ }),

/***/ "./retailerview/src/components/Offers/TopOffers/TopOffers.js":
/*!*******************************************************************!*\
  !*** ./retailerview/src/components/Offers/TopOffers/TopOffers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ViewTopOffers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewTopOffers */ "./retailerview/src/components/Offers/TopOffers/ViewTopOffers.js");
/* harmony import */ var _Offers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Offers.css */ "./retailerview/src/components/Offers/TopOffers/Offers.css");
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






var TopOffers = /*#__PURE__*/function (_Component) {
  _inherits(TopOffers, _Component);

  var _super = _createSuper(TopOffers);

  function TopOffers(props) {
    var _this;

    _classCallCheck(this, TopOffers);

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

  _createClass(TopOffers, [{
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
      var offersReducer = this.props.offersReducer;
      var offers = offersReducer.offers;
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
      console.log(offers);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, offers.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewTopOffers__WEBPACK_IMPORTED_MODULE_2__.default, {
        offers: offers
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
    }
  }]);

  return TopOffers;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    offersReducer: state.retailerOffersReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(TopOffers));

/***/ }),

/***/ "./retailerview/src/components/Offers/TopOffers/ViewTopOfferItem.js":
/*!**************************************************************************!*\
  !*** ./retailerview/src/components/Offers/TopOffers/ViewTopOfferItem.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewTopOfferItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ViewTopOfferItem(_ref) {
  var offer = _ref.offer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "card active first-active-item",
    style: {
      width: "400px",
      marginRight: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "item-load item-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category-item"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    "class": "vertical absolute-content-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "Top Featured Products",
    "class": "vertical lazy-loaded transition",
    src: offer.pic ? "..".concat(offer.pic) : "../static/images/logo.svg",
    style: {
      display: "block"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "thumb-infor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "cate-name cate-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, offer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "count"
  }, offer.detail_name), " ")))), " ")) // <div
  //   class="owl-item cloned"
  //   style={{ width: "558px", marginRight: "20px" }}
  // >
  //   <div class="col-banner absolute-content-image left center left center shadow radius">
  //     <div class="banner-img right  no-animation hover-light-effect">
  //       <img
  //         src={
  //           "https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
  //         }
  //         alt="banner-5"
  //         style={{ display: "block" }}
  //         class="lazy-loaded transition"
  //       />
  //     </div>
  //     <div class="content">
  //       <h3 class="size-24 regular">
  //         <a href="#">
  //           <span style={{ color: "#ffffff" }}>Microsoft</span>
  //           <br />
  //           <span style={{ color: "#ffffff" }}>Surface Laptop 14” </span>
  //         </a>
  //       </h3>
  //       <p class="size-16">
  //         <span style={{ color: "#ffffff" }}>Up To -30%</span>
  //       </p>
  //     </div>
  //   </div>
  // </div>
  ;
}

/***/ }),

/***/ "./retailerview/src/components/Offers/TopOffers/ViewTopOffers.js":
/*!***********************************************************************!*\
  !*** ./retailerview/src/components/Offers/TopOffers/ViewTopOffers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewTopOffers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewTopOfferItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewTopOfferItem */ "./retailerview/src/components/Offers/TopOffers/ViewTopOfferItem.js");


function ViewTopOffers(_ref) {
  var offers = _ref.offers;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var scroll = document.querySelector(".offer_scroll");
    var isDown = false;
    var scrollX;
    var scrollLeft; // Mouse Up Function

    scroll.addEventListener("mouseup", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Leave Function

    scroll.addEventListener("mouseleave", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Down Function

    scroll.addEventListener("mousedown", function (e) {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    }); // Mouse Move Function

    scroll.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var element = e.pageX - scroll.offsetLeft;
      var scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "section wrapper_sub_category_tabs container_horizontal_tab_postions onlyparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "category-thumb-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "rokan-title  has-see-all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "module-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "New Offers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    "class": "see-all",
    href: "shop"
  }, "See All"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "widget-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "offer_view list-category-item owl-loaded owl-drag",
    "data-nav": "false",
    "data-dots": "false",
    "data-center": "false",
    "data-loop": "false",
    "data-bigdesktop": "6",
    "data-items": "5",
    "data-smalldesktop": "4",
    "data-bigtablet": "4",
    "data-tablet": "3",
    "data-smalltablet": "3",
    "data-mobile": "2",
    "data-margin": "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "offer_scroll",
    style: {
      transform: "translate3d(0px, 0px, 0px)",
      transition: "all 0s ease 0s",
      width: "1734px"
    }
  }, offers.map(function (offer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewTopOfferItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      offer: offer,
      key: index
    });
  })))), " "))) // <div class="banner section banner-middle  offer_view">
  //   <div class=" main">
  //     <div
  //       class=" offer_scroll"
  //       style={{
  //         width: "5202px",
  //       }}
  //     >
  //       {offers.map((offer, index) => {
  //         return <ViewTopOfferItem offer={offer} key={index} />;
  //       })}
  //       {/* <div class=" cloned" style={{ width: "558px", marginRight: "20px" }}>
  //         <div class="col-banner absolute-content-image left center left center shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
  //               alt="banner-5"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Surface Laptop 14”{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div> */}
  //       {/* <div
  //         class="owl-item cloned"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
  //               alt="banner-6"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Cameras </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Best Sport Edition{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     */}
  //       {/* <div
  //         class="owl-item cloned"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
  //               alt="banner-7"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //      */}
  //       {/* <div class="owl-item" style={{ width: "558px", marginRight: "20px" }}>
  //         <div class="col-banner absolute-content-image left center left center shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
  //               alt="banner-5"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Surface Laptop 14”{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       */}
  //       {/* <div
  //         class="owl-item first-active-item"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
  //               alt="banner-6"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Cameras </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Best Sport Edition{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //      */}
  //       {/* <div
  //         class="owl-item active"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
  //               alt="banner-7"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div> */}
  //       {/* <div
  //         class="owl-item cloned last-active-item active"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center left center shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
  //               alt="banner-5"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Surface Laptop 14”{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     */}
  //       {/* <div
  //         class="owl-item cloned active"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
  //               alt="banner-6"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Cameras </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>
  //                   Best Sport Edition{" "}
  //                 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       */}
  //       {/* <div
  //         class="owl-item cloned"
  //         style={{ width: "558px", marginRight: "20px" }}
  //       >
  //         <div class="col-banner absolute-content-image left center middle shadow radius">
  //           <div class="banner-img right  no-animation hover-light-effect">
  //             <img
  //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
  //               alt="banner-7"
  //               style={{ display: "block" }}
  //               class="lazy-loaded transition"
  //             />
  //           </div>
  //           <div class="content">
  //             <h3 class="size-24 regular">
  //               <a href="#">
  //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
  //                 <br />
  //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
  //               </a>
  //             </h3>
  //             <p class="size-16">
  //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     */}
  //     </div>
  //   </div>
  // </div>
  ;
}

/***/ }),

/***/ "./retailerview/src/components/Products/FlashDeals/AllFlashDeals.js":
/*!**************************************************************************!*\
  !*** ./retailerview/src/components/Products/FlashDeals/AllFlashDeals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllFlashDeals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewFlashDeals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewFlashDeals */ "./retailerview/src/components/Products/FlashDeals/ViewFlashDeals.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function AllFlashDeals(props) {
  var categories = props.categories;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      view_categories = _useState2[0],
      setViewCategories = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var v_categories = categories.filter(function (v_category) {
      return v_category.productcount > 0;
    });
    setViewCategories(v_categories);
  }, [categories]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, view_categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewFlashDeals__WEBPACK_IMPORTED_MODULE_1__.default, {
      category: category,
      index: index,
      key: index
    });
  }));
}

/***/ }),

/***/ "./retailerview/src/components/Products/FlashDeals/FlashDeals.js":
/*!***********************************************************************!*\
  !*** ./retailerview/src/components/Products/FlashDeals/FlashDeals.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewFlashDeals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewFlashDeals */ "./retailerview/src/components/Products/FlashDeals/ViewFlashDeals.js");
/* harmony import */ var _Products_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Products.css */ "./retailerview/src/components/Products/Products.css");
/* harmony import */ var _AllFlashDeals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllFlashDeals */ "./retailerview/src/components/Products/FlashDeals/AllFlashDeals.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/Actions/RetailerDashBoard */ "./retailerview/src/redux/Actions/RetailerDashBoard.js");
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








var FlashDeals = /*#__PURE__*/function (_Component) {
  _inherits(FlashDeals, _Component);

  var _super = _createSuper(FlashDeals);

  function FlashDeals(props) {
    var _this;

    _classCallCheck(this, FlashDeals);

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

  _createClass(FlashDeals, [{
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
      var productsReducer = this.props.productsReducer;
      var categories = productsReducer.categories;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AllFlashDeals__WEBPACK_IMPORTED_MODULE_3__.default, {
        categories: categories
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
    }
  }]);

  return FlashDeals;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    productsReducer: state.retailerProductsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {
  fetchCategoryProducts: _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_5__.fetchCategoryProducts
})(FlashDeals));

/***/ }),

/***/ "./retailerview/src/components/Products/FlashDeals/ViewFlashDealItem.js":
/*!******************************************************************************!*\
  !*** ./retailerview/src/components/Products/FlashDeals/ViewFlashDealItem.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewFlashDealItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function ViewFlashDealItem(_ref) {
  var product = _ref.product;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.product_images && product.product_images[0] ? "..".concat(product.product_images[0].image) : "../static/images/logo.svg"),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "item-load group-rows-fixed-supper-deal item-row card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "item product product-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "product-item-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "blue-g9-pro-2020-battery-unlocked.html",
    "class": "product photo product-item-photo",
    tabindex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": " image0 image-switch product-image-container flash_product_image "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    "class": "product-image",
    src: image,
    alt: "Blue G9 Pro 2020 Battery Unlocked"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "product details product-item-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    "class": "product name product-item-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    "class": "product-item-link",
    href: "blue-g9-pro-2020-battery-unlocked.html"
  }, product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "price-box price-final_price",
    "data-role": "priceBox",
    "data-product-id": "3",
    "data-price-box": "product-id-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "special-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": " price-container price-final_price tax weee "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "price-label"
  }, "Special Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "data-price-amount": "90",
    "data-price-type": "finalPrice",
    "class": "price-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "class": "price"
  }, product.price_currency, " ", product.price))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "product-sold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "ruler-sold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "ruler-sold-count",
    style: {
      width: "30.9%"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "count-sold-available"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "count-sold"
  }, "Stock: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " 309 ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "product-item-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "product actions product-item-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "actions-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    "data-role": "tocart-form",
    "data-product-sku": "Digital003",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "hidden",
    name: "product",
    value: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "hidden",
    name: "uenc",
    value: "aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zL2NoZWNrb3V0L2NhcnQvYWRkL3VlbmMvYUhSMGNITTZMeTl0WVdkbFlteDFaWE5yZVhSbFkyZ3VZMjl0TDJSMWEyRnRZWEpyWlhRdlpXNHpMdyUyQyUyQy9wcm9kdWN0LzMv"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: "form_key",
    type: "hidden",
    value: "OQN7Nf56FneT1t7I"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    title: "Add to Cart",
    "class": "action tocart primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Add to Cart")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-role": "add-to-links",
    "class": "actions-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    "class": "action towishlist",
    title: "",
    "aria-label": "Add to Wish List",
    "data-action": "add-to-wishlist",
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-comments"
  })))))))));
}

/***/ }),

/***/ "./retailerview/src/components/Products/FlashDeals/ViewFlashDeals.js":
/*!***************************************************************************!*\
  !*** ./retailerview/src/components/Products/FlashDeals/ViewFlashDeals.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewFlashDeals)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewFlashDealItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewFlashDealItem */ "./retailerview/src/components/Products/FlashDeals/ViewFlashDealItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ViewFlashDeals(_ref) {
  var category = _ref.category,
      index = _ref.index;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var scroll = document.getElementById("category_product_".concat(index));
    var isDown = false;
    var scrollX;
    var scrollLeft; // Mouse Up Function

    scroll.addEventListener("mouseup", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Leave Function

    scroll.addEventListener("mouseleave", function () {
      isDown = false;
      scroll.classList.remove("active");
    }); // Mouse Down Function

    scroll.addEventListener("mousedown", function (e) {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    }); // Mouse Move Function

    scroll.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var element = e.pageX - scroll.offsetLeft;
      var scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });
    fetchCategoryProducts();
  }, [category]);

  function fetchCategoryProducts() {
    var token = localStorage.getItem("retail_token");
    var config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    if (token) {
      config.headers["Authorization"] = "Token ".concat(token);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_category_products/?category_id=".concat(category.id), config).then(function (res) {
      setProducts(res.data.products);
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      console.log(errors);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "section full-width has-white-bg product_view",
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": " section hot-deal-tab-slider hot-deal-tab-slider-customcss section-product "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "rokan-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "supper-deal-title flex-layout space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    "class": "title-deal module-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, category.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "right-deal flex-layout no-wrap-desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", {
    "class": "sub-title-deal hidden-xs"
  }, "View All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "super-deal-countdown",
    "data-date": "03/26/2023"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "products wrapper grid products-grid main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": " products list items product-items scroll ",
    id: "category_product_".concat(index)
  }, products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ViewFlashDealItem__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: product,
      key: index
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null));
}

/***/ }),

/***/ "./retailerview/src/components/Products/NewArrivals/NewArrivals.js":
/*!*************************************************************************!*\
  !*** ./retailerview/src/components/Products/NewArrivals/NewArrivals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ViewNewArrivals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewNewArrivals */ "./retailerview/src/components/Products/NewArrivals/ViewNewArrivals.js");
/* harmony import */ var _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/Actions/RetailerDashBoard */ "./retailerview/src/redux/Actions/RetailerDashBoard.js");
/* harmony import */ var _Products_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Products.css */ "./retailerview/src/components/Products/Products.css");
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







var NewArrivals = /*#__PURE__*/function (_Component) {
  _inherits(NewArrivals, _Component);

  var _super = _createSuper(NewArrivals);

  function NewArrivals(props) {
    var _this;

    _classCallCheck(this, NewArrivals);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      }
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NewArrivals, [{
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
      var account = this.props.auth.account;
      if (account.default_distributor != null) this.props.retailerNewArrivalProducts(account.default_distributor.id);
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
      var productsReducer = this.props.productsReducer;
      var new_arrivals = productsReducer.new_arrivals;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewNewArrivals__WEBPACK_IMPORTED_MODULE_2__.default, {
        products: new_arrivals
      }));
    }
  }]);

  return NewArrivals;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    productsReducer: state.retailerProductsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  retailerNewArrivalProducts: _redux_Actions_RetailerDashBoard__WEBPACK_IMPORTED_MODULE_3__.retailerNewArrivalProducts
})(NewArrivals));

/***/ }),

/***/ "./retailerview/src/components/Products/NewArrivals/ViewNewArrivals.js":
/*!*****************************************************************************!*\
  !*** ./retailerview/src/components/Products/NewArrivals/ViewNewArrivals.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewNewArrivals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FlashDeals_ViewFlashDealItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FlashDeals/ViewFlashDealItem */ "./retailerview/src/components/Products/FlashDeals/ViewFlashDealItem.js");


function ViewNewArrivals(_ref) {
  var products = _ref.products;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "section full-width has-white-bg product_view",
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": " section hot-deal-tab-slider hot-deal-tab-slider-customcss section-product "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "rokan-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "supper-deal-title flex-layout space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "title-deal module-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "New Arrivals")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "right-deal flex-layout no-wrap-desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    "class": "sub-title-deal hidden-xs"
  }, "View All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "super-deal-countdown",
    "data-date": "03/26/2023"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "products wrapper grid products-grid main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": " products list items product-items scroll ",
    "data-rtl": "false",
    "data-items": "6",
    "data-bigdesktop": "8",
    "data-smalldesktop": "4",
    "data-bigtablet": "4",
    "data-tablet": "3",
    "data-smalltablet": "3",
    "data-mobile": "2.2",
    "data-margin": "0",
    "data-loop": "true",
    "data-center": "false",
    "data-mousedrag": "true",
    "data-touchdrag": "true",
    "data-stagepadding": "1",
    "data-nav": "true",
    "data-navnext": "",
    "data-navprev": "",
    "data-rewind": "true",
    "data-dots": "false",
    "data-autoplay": "false",
    "data-speed": "500"
  }, products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FlashDeals_ViewFlashDealItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: index,
      product: product
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)));
}

/***/ }),

/***/ "./retailerview/src/redux/Actions/RetailerDashBoard.js":
/*!*************************************************************!*\
  !*** ./retailerview/src/redux/Actions/RetailerDashBoard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retailerDashBoardItems": () => (/* binding */ retailerDashBoardItems),
/* harmony export */   "fetchCategoryProducts": () => (/* binding */ fetchCategoryProducts),
/* harmony export */   "retailerNewArrivalProducts": () => (/* binding */ retailerNewArrivalProducts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_src_redux_Actions_Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/redux/Actions/Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _frontend_src_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../frontend/src/utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./retailerview/src/redux/Actions/types.js");




var retailerDashBoardItems = function retailerDashBoardItems(distributor_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_LOADING
    });
    var config = (0,_frontend_src_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_dashboard_view/?distributor_id=".concat(distributor_id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_CATEGORIES_LOADED,
        payload: {
          categories: res.data.categories
        }
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_BANNERS_LOADED,
        payload: {
          banners: res.data.banners
        }
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_OFFERS_LOADED,
        payload: {
          offers: res.data.offers
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_frontend_src_redux_Actions_Messages__WEBPACK_IMPORTED_MODULE_1__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_ERROR
      });
    });
  };
};
var fetchCategoryProducts = function fetchCategoryProducts(category_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_LOADING
    });
    var config = (0,_frontend_src_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_category_products/", config).then(function (res) {})["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_frontend_src_redux_Actions_Messages__WEBPACK_IMPORTED_MODULE_1__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_ERROR
      });
    });
  };
};
var retailerNewArrivalProducts = function retailerNewArrivalProducts(distributor_id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_LOADING
    });
    var config = (0,_frontend_src_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_new_arrivals/?distributor_id=".concat(distributor_id), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_NEW_ARRIVALS,
        payload: {
          products: res.data.products
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_frontend_src_redux_Actions_Messages__WEBPACK_IMPORTED_MODULE_1__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_PRODUCTS_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Categories/Categories.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Categories/Categories.css ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".category_view {\n    scroll-behavior: smooth;\n}\n\n.category_view .main .category_scroll {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    width: 100%;\n    /* height: auto;\n    padding: 1rem 0;\n    margin: 2.5rem 0; */\n    cursor: default;\n    overflow: scroll hidden;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 0px 1.25rem;\n    scrollbar-width: none;\n}\n\n.category_view .main .category_scroll::-webkit-scrollbar {\n    display: none;\n}\n\n.category_view .main .category_scroll.active {\n    cursor: grab;\n    cursor: -webkit-grab;\n}\n\n.category_view .main .category_scroll .card {\n    width: 300px;\n    height: auto;\n    flex: 0 0 auto;\n    margin: 0 0.75rem;\n    border: none;\n    outline: none;\n    border-radius: 0.25rem;\n    color: #252a32;\n    background: #ffffff;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.category_view .main .category_scroll .card-image {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: auto;\n    padding-top: 110%;\n}\n\n.category_view .main .category_scroll .card-image img.responsive {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.category_view .main .category_scroll .card-inner {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n}\n\n.category_view .main .product-item {\n    transition: transform 0.3s ease-in, opacity 0.3s ease-in;\n}\n\n\n/* .category_view .main .product-item:hover {\n    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);\n} */\n\n.category_view .main .product-item:hover .tocart {\n    display: block;\n}\n\n.category_view .main .tocart {\n    display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Hero/Hero.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Hero/Hero.css ***!
  \*****************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".carousel_img {\n    width: 100%;\n}\n\n.carousel_img img {\n    width: inherit;\n    height: inherit;\n    object-fit: cover;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Offers/TopOffers/Offers.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Offers/TopOffers/Offers.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".offer_view {\n    scroll-behavior: smooth;\n}\n\n.offer_view .main .offer_scroll {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    width: 100%;\n    /* height: auto;\n    padding: 1rem 0;\n    margin: 2.5rem 0; */\n    cursor: default;\n    overflow: scroll hidden;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 0px 1.25rem;\n    scrollbar-width: none;\n}\n\n.offer_view .main .offer_scroll::-webkit-scrollbar {\n    display: none;\n}\n\n.offer_view .main .offer_scroll.active {\n    cursor: grab;\n    cursor: -webkit-grab;\n}\n\n.offer_view .main .offer_scroll .card {\n    width: 300px;\n    height: auto;\n    flex: 0 0 auto;\n    margin: 0 0.75rem;\n    border: none;\n    outline: none;\n    border-radius: 0.25rem;\n    color: #252a32;\n    background: #ffffff;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.offer_view .main .offer_scroll .card-image {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: auto;\n    padding-top: 110%;\n}\n\n.offer_view .main .offer_scroll .card-image img.responsive {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.offer_view .main .offer_scroll .card-inner {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n}\n\n.offer_view .main .product-item {\n    transition: transform 0.3s ease-in, opacity 0.3s ease-in;\n}\n\n\n/* .offer_view .main .product-item:hover {\n    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);\n} */\n\n.offer_view .main .product-item:hover .tocart {\n    display: block;\n}\n\n.offer_view .main .tocart {\n    display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Products/Products.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Products/Products.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".product_view {\n    scroll-behavior: smooth;\n}\n\n.product_view .main .scroll {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    width: 100%;\n    /* height: auto;\n    padding: 1rem 0;\n    margin: 2.5rem 0; */\n    cursor: default;\n    overflow: scroll hidden;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 0px 1.25rem;\n    scrollbar-width: none;\n}\n\n.product_view .main .scroll::-webkit-scrollbar {\n    display: none;\n}\n\n.product_view .main .scroll.active {\n    cursor: grab;\n    cursor: -webkit-grab;\n}\n\n.product_view .main .scroll .card {\n    width: 300px;\n    height: auto;\n    flex: 0 0 auto;\n    margin: 0 0.75rem;\n    border: none;\n    outline: none;\n    border-radius: 0.25rem;\n    color: #252a32;\n    background: #ffffff;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.product_view .main .scroll .card-image {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: auto;\n    padding-top: 110%;\n}\n\n.product_view .main .scroll .card-image img.responsive {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.product_view .main .scroll .card-inner {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n}\n\n.product_view .main .product-item {\n    transition: transform 0.3s ease-in, opacity 0.3s ease-in;\n}\n\n\n/* .product_view .main .product-item:hover {\n    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);\n} */\n\n.product_view .main .product-item:hover .tocart {\n    display: block;\n}\n\n.product_view .main .tocart {\n    display: none;\n}\n\n.flash_product_image {\n    height: 250px;\n    width: 250px;\n}\n\n.flash_product_image img {\n    width: inherit;\n    height: inherit;\n    object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./retailerview/src/components/Categories/Categories.css":
/*!***************************************************************!*\
  !*** ./retailerview/src/components/Categories/Categories.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Categories_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Categories.css */ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Categories/Categories.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Categories_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Categories_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./retailerview/src/components/Hero/Hero.css":
/*!***************************************************!*\
  !*** ./retailerview/src/components/Hero/Hero.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Hero_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Hero.css */ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Hero/Hero.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Hero_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Hero_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./retailerview/src/components/Offers/TopOffers/Offers.css":
/*!*****************************************************************!*\
  !*** ./retailerview/src/components/Offers/TopOffers/Offers.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./Offers.css */ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Offers/TopOffers/Offers.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./retailerview/src/components/Products/Products.css":
/*!***********************************************************!*\
  !*** ./retailerview/src/components/Products/Products.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Products_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Products.css */ "./node_modules/css-loader/dist/cjs.js!./retailerview/src/components/Products/Products.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Products_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Products_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_products_Products_js"],{

/***/ "./frontend/src/components/products/AddImageCard.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/products/AddImageCard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddImageCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function AddImageCard(props) {
  var photos = props.photos,
      inputImage = props.inputImage,
      viewImage = props.viewImage,
      deleteImage = props.deleteImage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      fileInput = _useState2[0],
      setFileInput = _useState2[1];

  function fileSelectorHandler(e) {
    var fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    viewImage(fileImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_1__.default)(fileImage).then(function (compressImage) {
      inputImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row m-2"
  }, photos.map(function (photo, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-3 col-md-3 col-sm-4 col-xs-6 col-xs-6 image_card image_view_card",
      key: index
    }, photo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product_add_image_card_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: photo,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "delete_btn",
      onClick: function onClick() {
        return deleteImage(index);
      }
    }, "x")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
  }), !(photos.length > 4) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "image_card image_add",
    onClick: function onClick() {
      return fileInput.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "image_input",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return fileSelectorHandler(e);
    },
    ref: function ref(fileInput) {
      return setFileInput(fileInput);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/add_image.png",
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
}

/***/ }),

/***/ "./frontend/src/components/products/AddProduct.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/products/AddProduct.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_currencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/currencies */ "./frontend/src/utils/currencies.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomTextEditor */ "./frontend/src/widgets/CustomTextEditor.js");
/* harmony import */ var _widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomViewCurrenciesPopUp */ "./frontend/src/widgets/CustomViewCurrenciesPopUp.js");
/* harmony import */ var _AddImageCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddImageCard */ "./frontend/src/components/products/AddImageCard.js");
/* harmony import */ var _widgets_AsyncMultiColorSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/AsyncMultiColorSelect */ "./frontend/src/widgets/AsyncMultiColorSelect.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/Radio.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
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

















function AddProduct(props) {
  var changePage = props.changePage,
      setResponse = props.setResponse,
      addProduct = props.addProduct;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      product_code = _useState6[0],
      setProductCode = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      viewCurrecy = _useState8[0],
      setViewCurrency = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      currencies = _useState10[0],
      setCurrencies = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      price = _useState12[0],
      setPrice = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState14 = _slicedToArray(_useState13, 2),
      qty = _useState14[0],
      setQty = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      unit = _useState16[0],
      setUnit = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      description = _useState18[0],
      setDescription = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      colors = _useState20[0],
      _setColors = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState22 = _slicedToArray(_useState21, 2),
      sizes = _useState22[0],
      setSizes = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState24 = _slicedToArray(_useState23, 2),
      inputSize = _useState24[0],
      setInputSize = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState26 = _slicedToArray(_useState25, 2),
      brands = _useState26[0],
      setBrands = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState28 = _slicedToArray(_useState27, 2),
      isError = _useState28[0],
      setIsError = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState30 = _slicedToArray(_useState29, 2),
      responseMessage = _useState30[0],
      setResponseMessage = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState32 = _slicedToArray(_useState31, 2),
      anchorEl = _useState32[0],
      setAnchorEl = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState34 = _slicedToArray(_useState33, 2),
      viewImage = _useState34[0],
      setViewImage = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState36 = _slicedToArray(_useState35, 2),
      photos = _useState36[0],
      setPhotos = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState38 = _slicedToArray(_useState37, 2),
      brief_description = _useState38[0],
      setBriefDescription = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState40 = _slicedToArray(_useState39, 2),
      customColors = _useState40[0],
      setCustomColors = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState42 = _slicedToArray(_useState41, 2),
      variations = _useState42[0],
      setVariations = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState44 = _slicedToArray(_useState43, 2),
      type = _useState44[0],
      setType = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState46 = _slicedToArray(_useState45, 2),
      weight = _useState46[0],
      setWeight = _useState46[1];

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("active"),
      _useState48 = _slicedToArray(_useState47, 2),
      active = _useState48[0],
      setActive = _useState48[1];

  var selectNewTypes = [{
    value: "New",
    label: "New"
  }, {
    value: "Existing",
    label: "Existing"
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
      return currency.cc === "KES";
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      var currencyArray = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
        return currency.cc != commonCurrency.cc;
      });
      setCurrencies([commonCurrency].concat(_toConsumableArray(currencyArray)));
    } else {
      setViewCurrency(_utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default[0]);
      setCurrencies(_utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default);
    }

    fetchCustomColors();
  }, []);

  function handleInputChange(e) {
    setInputSize(e.target.value);
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      var value = e.target.value;
      setSizes([].concat(_toConsumableArray(sizes), [value]));
      setInputSize("");
    }

    if (sizes.length && e.keyCode === 8 && !inputSize.length) {
      setSizes(sizes.slice(0, sizes.length - 1));
    }
  }

  function handleRemoveItem(index) {
    return function () {
      setSizes(sizes.filter(function (item, i) {
        return i !== index;
      }));
    };
  }

  function addViewImage(imageFile) {
    var imageview = URL.createObjectURL(imageFile);
    setViewImage([].concat(_toConsumableArray(viewImage), [imageview]));
  }

  function addPhoto(images) {
    setPhotos([].concat(_toConsumableArray(photos), [images]));
  }

  function deleteImage(index) {
    var viewImage1 = viewImage.splice(index, 1);
    var photos1 = photos.splice(index, 1);
    var viewImage2 = viewImage.filter(function (image) {
      return image != viewImage1;
    });
    var photos2 = photos.filter(function (image) {
      return image != photos1;
    });
    setViewImage(viewImage2);
    setPhotos(photos2);
  }

  function updateDescription(e) {
    setDescription(e.target.getContent());
  }

  function uploadProduct() {
    setIsError(null);
    setResponseMessage("");

    if (name && description && price && unit) {
      var _brands$value$id, _brands$value;

      var formData = new FormData();
      formData.append("name", name);
      formData.append("product_code", product_code);
      formData.append("type", type === null || type === void 0 ? void 0 : type.value);
      formData.append("weight", weight);
      formData.append("active", active);
      formData.append("stock_qty", qty);
      formData.append("category_id", category ? category.value.id : "");
      formData.append("units_id", unit ? unit.value.id : "");
      formData.append("price", price);
      formData.append("description", description);

      for (var index = 0; index < photos.length; index++) {
        formData.append("photos" + index, photos[index]);
      }

      var sizesJson = JSON.stringify(sizes);
      var colorsJson = JSON.stringify(colors.map(function (color) {
        return color.id;
      }));
      var variationJson = JSON.stringify(variations);
      formData.append("colors", colorsJson);
      formData.append("brand", (_brands$value$id = brands === null || brands === void 0 ? void 0 : (_brands$value = brands.value) === null || _brands$value === void 0 ? void 0 : _brands$value.id) !== null && _brands$value$id !== void 0 ? _brands$value$id : "");
      formData.append("size", sizesJson);
      formData.append("variations", variationJson);
      formData.append("brief_description", brief_description);
      addProduct(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please insert product name");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please insert product name"
        }
      });
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please insert product description");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please insert product description"
        }
      });
    } else if (!price) {
      setIsError(true);
      setResponseMessage("Please add price for item");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please add price for item"
        }
      });
    } else if (!unit) {
      setIsError(true);
      setResponseMessage("Please add unit for item");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please add unit for item"
        }
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all important fields");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please input all important fields"
        }
      });
    }
  }

  function fetchCustomColors(query) {
    var url = query ? "../retailer/api/custom_colors/?query=".concat(query) : "../retailer/api/custom_colors/";
    var config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_8___default().get(url, config).then(function (res) {
        setCustomColors(res.data.colors);
        resolve(res.data.colors);
      })["catch"](function (error) {
        var errors = {
          responseMessage: error.response.data,
          status: error.response.status
        };
        setIsError(true);
        setResponseMessage(errors.responseMessage);
        reject(error.responseMessage);
      });
    });
  }

  function handleCurrencyPopUpClick(value) {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
      return currency.cc === value;
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      var currencyArray = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
        return currency.cc != commonCurrency.cc;
      });
      setCurrencies([commonCurrency].concat(_toConsumableArray(currencyArray)));
    }

    setAnchorEl(null);
  }

  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: currencies
  };
  var styles = {
    container: {
      border: "1px solid #ddd",
      padding: "5px",
      borderRadius: "5px"
    },
    items: {
      display: "inline-block",
      padding: "2px",
      border: "1px solid blue",
      fontFamily: "Helvetica, sans-serif",
      borderRadius: "5px",
      marginRight: "5px",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      color: "white"
    },
    input: {
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontFamily: "Helvetica, sans-serif"
    }
  };

  function createVariation(v_colors, v_sizes) {
    var variations = [];

    for (var i = 0; i < v_colors.length; i++) {
      var v_color = v_colors[i];

      if (v_sizes.length > 0) {
        for (var j = 0; j < v_sizes.length; j++) {
          var _v_size = v_sizes[j];

          var _name = "Variation ".concat(i).concat(j);

          var label = v_color.value.label + " " + _v_size;
          var variation = {
            color: v_color.value,
            size: _v_size
          };
          variations.push({
            name: _name,
            label: label,
            variation: variation
          });
        }
      } else {
        var _name2 = "Variation ".concat(i);

        var _label = v_color.label;
        var _variation = {
          color: v_color.value,
          size: v_size
        };
        variations.push({
          name: _name2,
          label: _label,
          variation: _variation
        });
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Products",
    propsName: "Add Product",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: ""
  }, "Product Name*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Enter your products' name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input product name",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: ""
  }, "Code*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Used for API Intergration"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input product Code",
    name: "product_code",
    value: product_code,
    onChange: function onChange(e) {
      return setProductCode(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Category", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Choose a category which best fits your  product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_9__.default, {
    isMulti: false,
    value: category,
    setValue: function setValue(value) {
      return setCategory(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_10__.fetchSelectCategory,
    closeMenuOnSelect: true,
    isClearable: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Color ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "(Type for search)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Type, then select your colour"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_AsyncMultiColorSelect__WEBPACK_IMPORTED_MODULE_7__.default, {
    fetchCustomColors: fetchCustomColors,
    customColors: customColors,
    colors: colors,
    setColors: function setColors(options) {
      _setColors(options);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Sizes (Press enter to add)", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Type the size, then press enter"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "row ml-1 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: styles.container,
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, sizes.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i,
      style: styles.items,
      className: "mr-2",
      onClick: handleRemoveItem(i)
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times ml-2 text-danger"
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    style: styles.input,
    value: inputSize,
    className: "bg_themed",
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Brands", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Type the brand of your product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_9__.default, {
    isMulti: false,
    value: brands,
    setValue: function setValue(value) {
      return setBrands(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_10__.fetchSelectProductBrand,
    closeMenuOnSelect: true,
    isClearable: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Units*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Select a unit which best fits your product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_9__.default, {
    isMulti: false,
    value: unit,
    setValue: function setValue(value) {
      return setUnit(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_10__.fetchSelectProductUnits,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Price*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Type the price of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, viewCurrecy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrecy.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    placeholder: "Please input amount",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Stock Quantity*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Enter the product quantity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: qty,
    onChange: function onChange(e) {
      return setQty(e.target.value);
    },
    placeholder: "Please input stock quantity",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Type", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Choose whether your product is new or not"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_12__.default, {
    value: type,
    isClearable: true,
    onChange: function onChange(value) {
      return setType(value);
    },
    name: "type",
    options: selectNewTypes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Weight", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Type the weight of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: weight,
    onChange: function onChange(e) {
      return setWeight(e.target.value);
    },
    placeholder: "Please input product weight",
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Status", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Select the status of your product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__.default, {
    row: true,
    "aria-label": "Active",
    name: "active",
    value: active,
    onChange: function onChange(e) {
      return setActive(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__.default, {
    value: "active",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_15__.default, {
      color: "primary"
    }),
    label: "Active"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__.default, {
    value: "inactive",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_15__.default, {
      color: "primary"
    }),
    label: "Inactive",
    color: "primary"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Images", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "You can add a maximum of 5 product images"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddImageCard__WEBPACK_IMPORTED_MODULE_6__.default, {
    photos: viewImage,
    inputImage: addPhoto,
    viewImage: addViewImage,
    deleteImage: deleteImage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Brief description (Max. 250 Chars)*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Enter a brief description of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    placeholder: "Please input product brief description",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Product Description*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_11__.default, {
    message: "Add as much information as you want"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__.default, {
    description: "",
    setDescription: updateDescription
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadProduct();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Add Product"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handleCurrencyPopUpClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/products/EditProduct.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/products/EditProduct.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_currencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/currencies */ "./frontend/src/utils/currencies.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomTextEditor */ "./frontend/src/widgets/CustomTextEditor.js");
/* harmony import */ var _widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomViewCurrenciesPopUp */ "./frontend/src/widgets/CustomViewCurrenciesPopUp.js");
/* harmony import */ var _AddImageCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddImageCard */ "./frontend/src/components/products/AddImageCard.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.esm.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/Radio.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















function EditProduct(props) {
  var changePage = props.changePage,
      categories = props.categories,
      units = props.units,
      setResponse = props.setResponse,
      updateProduct = props.updateProduct,
      product = props.product;
  var selectNewTypes = [{
    value: "New",
    label: "New"
  }, {
    value: "Existing",
    label: "Existing"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.name),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      viewCurrecy = _useState6[0],
      setViewCurrency = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      currencies = _useState8[0],
      setCurrencies = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.price),
      _useState10 = _slicedToArray(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.stock_qty),
      _useState12 = _slicedToArray(_useState11, 2),
      qty = _useState12[0],
      setQty = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      unit = _useState14[0],
      setUnit = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.description ? product.description : ""),
      _useState16 = _slicedToArray(_useState15, 2),
      description = _useState16[0],
      setDescription = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      colors = _useState18[0],
      setColors = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      sizes = _useState20[0],
      setSizes = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState22 = _slicedToArray(_useState21, 2),
      inputSize = _useState22[0],
      setInputSize = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState24 = _slicedToArray(_useState23, 2),
      brands = _useState24[0],
      setBrands = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState26 = _slicedToArray(_useState25, 2),
      isError = _useState26[0],
      setIsError = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState28 = _slicedToArray(_useState27, 2),
      responseMessage = _useState28[0],
      setResponseMessage = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.brief_description),
      _useState30 = _slicedToArray(_useState29, 2),
      brief_description = _useState30[0],
      setBriefDescription = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState32 = _slicedToArray(_useState31, 2),
      anchorEl = _useState32[0],
      setAnchorEl = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState34 = _slicedToArray(_useState33, 2),
      viewImage = _useState34[0],
      setViewImage = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState36 = _slicedToArray(_useState35, 2),
      photos = _useState36[0],
      setPhotos = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState38 = _slicedToArray(_useState37, 2),
      deleteImages = _useState38[0],
      setDeleteImages = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState40 = _slicedToArray(_useState39, 2),
      customColors = _useState40[0],
      setCustomColors = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState42 = _slicedToArray(_useState41, 2),
      variations = _useState42[0],
      setVariations = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.is_new_arrival ? selectNewTypes[0] : selectNewTypes[1]),
      _useState44 = _slicedToArray(_useState43, 2),
      type = _useState44[0],
      setType = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.weight),
      _useState46 = _slicedToArray(_useState45, 2),
      weight = _useState46[0],
      setWeight = _useState46[1];

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.active ? "active" : "inactive"),
      _useState48 = _slicedToArray(_useState47, 2),
      active = _useState48[0],
      setActive = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(product.product_code),
      _useState50 = _slicedToArray(_useState49, 2),
      productCode = _useState50[0],
      setProductCode = _useState50[1];

  var colourStyles = {
    control: function control(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: "white"
      });
    },
    option: function option(styles, _ref) {
      var data = _ref.data,
          isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          isSelected = _ref.isSelected;
      var color = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(data.color);
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled ? "#ccc" : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_8___default().contrast(color, "white") > 2 ? "white" : "black" : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": _objectSpread(_objectSpread({}, styles[":active"]), {}, {
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        })
      });
    },
    multiValue: function multiValue(styles, _ref2) {
      var data = _ref2.data;
      var color = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(data.color);
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: color.alpha(0.1).css()
      });
    },
    multiValueLabel: function multiValueLabel(styles, _ref3) {
      var data = _ref3.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: data.color
      });
    },
    multiValueRemove: function multiValueRemove(styles, _ref4) {
      var data = _ref4.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: data.color,
        ":hover": {
          backgroundColor: data.color,
          color: "white"
        }
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
      return currency.cc === "KES";
    })[0];

    if (product.units) {
      var v_unit = {
        value: product.units,
        label: product.units.name
      };
      setUnit(v_unit);
    }

    if (product.category) {
      var v_category = {
        value: product.category,
        label: product.category.name
      };
      setCategory(v_category);
    }

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      var currencyArray = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
        return currency.cc != commonCurrency.cc;
      });
      setCurrencies([commonCurrency].concat(_toConsumableArray(currencyArray)));
    } else {
      setViewCurrency(_utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default[0]);
      setCurrencies(_utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default);
    }

    if (product.product_images) {
      var viewImagesArray = [];

      for (var i = 0; i < product.product_images.length; i++) {
        var image = product.product_images[i];
        viewImagesArray.push({
          image: "..".concat(image.image),
          id: image.id
        });
      }

      setViewImage(viewImagesArray);
    }

    if (product.colors) {
      setColors(product.colors);
    }

    if (product.size) {
      var _sizes = JSON.parse(product.size);

      setSizes(_sizes);
    }

    if (product.branding) {
      var _product$branding;

      var view_brand = {
        value: product === null || product === void 0 ? void 0 : product.branding,
        label: product === null || product === void 0 ? void 0 : (_product$branding = product.branding) === null || _product$branding === void 0 ? void 0 : _product$branding.name
      };
      setBrands(view_brand !== null && view_brand !== void 0 ? view_brand : "");
    }

    fetchCustomColors();
  }, [product]);

  function fetchCustomColors(query) {
    var url = query ? "../retailer/api/custom_colors/?query=".concat(query) : "../retailer/api/custom_colors/";
    var config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_9___default().get(url, config).then(function (res) {
        setCustomColors(res.data.colors);
        resolve(res.data.colors);
      })["catch"](function (error) {
        var errors = {
          responseMessage: error.response.data,
          status: error.response.status
        };
        setIsError(true);
        setResponseMessage(errors.responseMessage);
        reject(error.responseMessage);
      });
    });
  }

  function handleInputChange(e) {
    setInputSize(e.target.value);
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      var value = e.target.value;
      setSizes([].concat(_toConsumableArray(sizes), [value]));
      setInputSize("");
    }

    if (sizes.length && e.keyCode === 8 && !inputSize.length) {
      setSizes(sizes.slice(0, sizes.length - 1));
    }
  }

  function handleRemoveItem(index) {
    return function () {
      setSizes(sizes.filter(function (item, i) {
        return i !== index;
      }));
    };
  }

  function addViewImage(imageFile) {
    var imageview = URL.createObjectURL(imageFile);
    setViewImage([].concat(_toConsumableArray(viewImage), [{
      image: imageview
    }]));
  }

  function addPhoto(images) {
    setPhotos([].concat(_toConsumableArray(photos), [images]));
  }

  function deleteImage(index) {
    var viewImage1 = viewImage.splice(index, 1)[0];
    var photos1 = photos.splice(index, 1)[0];

    if (viewImage1.id) {
      setDeleteImages([].concat(_toConsumableArray(deleteImages), [viewImage1.id]));
    }

    var viewImage2 = viewImage.filter(function (image) {
      return image != viewImage1;
    });
    var photos2 = photos.filter(function (image) {
      return image != photos1;
    });
    setViewImage(viewImage2);
    setPhotos(photos2);
  }

  function updateDescription(e) {
    setDescription(e.target.getContent());
  }

  function uploadProduct() {
    setIsError(null);
    setResponseMessage("");

    if (name && description && price && unit && productCode) {
      var _brands$value$id, _brands$value;

      var formData = new FormData();
      formData.append("name", name);
      formData.append("category_id", category ? category.value.id : "");
      formData.append("qty", qty);
      formData.append("unit_id", unit ? unit.value.id : "");
      formData.append("price", price);
      formData.append("description", description);
      formData.append("id", product.id);
      formData.append("type", type === null || type === void 0 ? void 0 : type.value);
      formData.append("weight", weight);
      formData.append("active", active);
      formData.append("product_code", productCode);

      for (var index = 0; index < photos.length; index++) {
        formData.append("photos" + index, photos[index]);
      }

      var sizesJson = JSON.stringify(sizes);
      var variationJson = JSON.stringify(variations);
      var colorsJson = JSON.stringify(colors.map(function (color) {
        return color.id;
      }));
      var deleteImagesJson = JSON.stringify(deleteImages);
      formData.append("colors", colorsJson);
      formData.append("brand", (_brands$value$id = brands === null || brands === void 0 ? void 0 : (_brands$value = brands.value) === null || _brands$value === void 0 ? void 0 : _brands$value.id) !== null && _brands$value$id !== void 0 ? _brands$value$id : "");
      formData.append("size", sizesJson);
      formData.append("variations", variationJson);
      formData.append("deletedImages", deleteImagesJson);
      formData.append("brief_description", brief_description);
      updateProduct(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please insert product name");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please insert product name"
        }
      });
    } else if (!unit) {
      setIsError(true);
      setResponseMessage("Please add unit for item");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please add unit for item"
        }
      });
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please insert product description");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please insert product description"
        }
      });
    } else if (!category) {
      setIsError(true);
      setResponseMessage("Please insert product category");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please insert product category"
        }
      });
    } else if (!price) {
      setIsError(true);
      setResponseMessage("Please add price for item");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please add price for item"
        }
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all important fields");
      setResponse({
        isError: true,
        responseMessage: {
          message: "Please input all important fields"
        }
      });
    }
  }

  function handleCurrencyPopUpClick(value) {
    var commonCurrency = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
      return currency.cc === value;
    })[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
      var currencyArray = _utils_currencies__WEBPACK_IMPORTED_MODULE_1__.default.filter(function (currency) {
        return currency.cc != commonCurrency.cc;
      });
      setCurrencies([commonCurrency].concat(_toConsumableArray(currencyArray)));
    }

    setAnchorEl(null);
  }

  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: currencies
  };
  var styles = {
    container: {
      border: "1px solid #ddd",
      padding: "5px",
      borderRadius: "5px"
    },
    items: {
      display: "inline-block",
      padding: "2px",
      border: "1px solid blue",
      fontFamily: "Helvetica, sans-serif",
      borderRadius: "5px",
      marginRight: "5px",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      color: "white"
    },
    input: {
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontFamily: "Helvetica, sans-serif"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Products",
    propsName: "Edit Product",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_2__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Name*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Enter yourproducts' name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input product name",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Code*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Used for API Intergration"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input product code",
    name: "code",
    value: productCode,
    onChange: function onChange(e) {
      return setProductCode(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Category", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Choose a category which best fits your  product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_10__.default, {
    isMulti: false,
    value: category,
    setValue: function setValue(value) {
      return setCategory(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_11__.fetchSelectCategory,
    closeMenuOnSelect: true,
    isClearable: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Color", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "(Type for search)", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Type, then select your colour"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_7__.default, {
    closeMenuOnSelect: false,
    isMulti: true,
    loadOptions: fetchCustomColors,
    defaultOptions: customColors,
    cacheOptions: true,
    styles: colourStyles,
    value: colors,
    onChange: function onChange(options) {
      return setColors(options);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Sizes (Press enter to add)", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Type the size, then press enter"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "row ml-1 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: styles.container,
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, sizes.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i,
      style: styles.items,
      className: "mr-2",
      onClick: handleRemoveItem(i)
    }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times ml-2 text-danger"
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    style: styles.input,
    value: inputSize,
    className: "bg_themed",
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-label-group mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Brands", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Type the brand of your product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_10__.default, {
    isMulti: false,
    value: brands,
    setValue: function setValue(value) {
      return setBrands(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_11__.fetchSelectProductBrand,
    closeMenuOnSelect: true,
    isClearable: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Units*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Select a unit which best fits your product"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_10__.default, {
    isMulti: false,
    value: unit,
    setValue: function setValue(value) {
      return setUnit(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_11__.fetchSelectProductUnits,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Price*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Type the price of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, viewCurrecy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, viewCurrecy.cc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "KSH ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    placeholder: "Please input amount",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, ".00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Stock Quantity*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Enter the product quantity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: qty,
    onChange: function onChange(e) {
      return setQty(e.target.value);
    },
    placeholder: "Please input stock quantity",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Type", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Choose whether your product is new or not"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_13__.default, {
    value: type,
    isClearable: true,
    onChange: function onChange(value) {
      return setType(value);
    },
    name: "type",
    options: selectNewTypes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Weight", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Type the weight of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: weight,
    onChange: function onChange(e) {
      return setWeight(e.target.value);
    },
    placeholder: "Please input product weight",
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Product Status", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Select the status of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_14__.default, {
    row: true,
    "aria-label": "Active",
    name: "active",
    value: active,
    onChange: function onChange(e) {
      return setActive(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__.default, {
    value: "active",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__.default, {
      color: "primary"
    }),
    label: "Active"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__.default, {
    value: "inactive",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__.default, {
      color: "primary"
    }),
    label: "Inactive",
    color: "primary"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Images", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "You can add a maximum of 5 product images"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddImageCard__WEBPACK_IMPORTED_MODULE_6__.default, {
    photos: viewImage.map(function (image) {
      return image.image;
    }),
    inputImage: addPhoto,
    viewImage: addViewImage,
    deleteImage: deleteImage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "control-label"
  }, "Brief description(250)*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Enter a brief description of your product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    placeholder: "Please input product brief description",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "p-2"
  }, "Product Description*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_12__.default, {
    message: "Add as much information as you want"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomTextEditor__WEBPACK_IMPORTED_MODULE_4__.default, {
    description: product.description ? product.description : "",
    setDescription: updateDescription
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadProduct();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Save Product"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomViewCurrenciesPopUp__WEBPACK_IMPORTED_MODULE_5__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handleCurrencyPopUpClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/products/Products.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/products/Products.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct */ "./frontend/src/components/products/AddProduct.js");
/* harmony import */ var _ViewProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewProducts */ "./frontend/src/components/products/ViewProducts.js");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.css */ "./frontend/src/components/products/Product.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _EditProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditProduct */ "./frontend/src/components/products/EditProduct.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
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












var Products = /*#__PURE__*/function (_Component) {
  _inherits(Products, _Component);

  var _super = _createSuper(Products);

  function Products(props) {
    var _this;

    _classCallCheck(this, Products);

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
      productItem: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.editProduct = _this.editProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Products, [{
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
      this.props.fetchProducts(1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "editProduct",
    value: function editProduct(product) {
      this.props.fetchCategories();
      this.props.fetchProductUnits();
      this.setState({
        currentPage: 3,
        productItem: product
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
          productsReducer = _this$props2.productsReducer,
          updateProduct = _this$props2.updateProduct,
          addProduct = _this$props2.addProduct,
          deleteProduct = _this$props2.deleteProduct,
          auth = _this$props2.auth,
          searchProducts = _this$props2.searchProducts,
          fetchPaginatedProducts = _this$props2.fetchPaginatedProducts,
          fetchProducts = _this$props2.fetchProducts,
          updateProductState = _this$props2.updateProductState;
      var products = productsReducer.products,
          isLoading = productsReducer.isLoading,
          categories = productsReducer.categories,
          units = productsReducer.units,
          products_current_page = productsReducer.products_current_page,
          products_last_page = productsReducer.products_last_page;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          productItem = _this$state.productItem;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_products) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_9__.default)(this.props.auth.group.permission);
      }

      var pageDetails = {
        current_page: products_current_page,
        last_page: products_last_page
      };

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_6__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProducts__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            products: products,
            deleteProduct: deleteProduct,
            editProduct: this.editProduct,
            canManage: auth.group.permission.can_manage_product,
            searchProducts: searchProducts,
            fetchPaginatedProducts: fetchPaginatedProducts,
            pageDetails: pageDetails,
            fetchProducts: fetchProducts,
            updateProductState: updateProductState
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_6__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddProduct__WEBPACK_IMPORTED_MODULE_1__.default, {
            changePage: this.changePage,
            setResponse: this.setResponse,
            addProduct: addProduct
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_6__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditProduct__WEBPACK_IMPORTED_MODULE_8__.default, {
            changePage: this.changePage,
            units: units,
            categories: categories,
            setResponse: this.setResponse,
            updateProduct: updateProduct,
            product: productItem
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_6__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProducts__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            products: products,
            searchProduct: searchProduct
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    productsReducer: state.productsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** View add edit product view screen */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {
  fetchProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchProducts,
  fetchCategories: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchCategories,
  fetchProductUnits: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchProductUnits,
  addProduct: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.addProduct,
  updateProduct: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.updateProduct,
  deleteProduct: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.deleteProduct,
  searchProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.searchProducts,
  fetchPaginatedProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchPaginatedProducts,
  updateProductState: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.updateProductState
})(Products));

/***/ }),

/***/ "./frontend/src/components/products/ViewProductDescription.js":
/*!********************************************************************!*\
  !*** ./frontend/src/components/products/ViewProductDescription.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProductDescription)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewProductDescription(props) {
  var show = props.show,
      handleModal = props.handleModal,
      product = props.product,
      editProduct = props.editProduct,
      changePage = props.changePage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      currentImage = _useState2[0],
      setCurrentImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      product_images = _useState4[0],
      setProductImages = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      price = _useState8[0],
      setPrice = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      brand = _useState10[0],
      setBrand = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      brief_description = _useState12[0],
      setBriefDescription = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      description = _useState14[0],
      setDescription = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      colors = _useState16[0],
      setColors = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      sizes = _useState18[0],
      setSizes = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product) {
      var _product$branding$nam, _product$branding;

      setCurrentImage(product.product_images[0] != null ? product.product_images[0].image != null ? product.product_images[0].image : "" : "");
      setProductImages(product.product_images);
      setPrice("".concat(product.price_currency, " ").concat((0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_2__.default)(product.price)));
      setBrand((_product$branding$nam = product === null || product === void 0 ? void 0 : (_product$branding = product.branding) === null || _product$branding === void 0 ? void 0 : _product$branding.name) !== null && _product$branding$nam !== void 0 ? _product$branding$nam : "");
      setColors(product.colors);
      setBriefDescription(product.brief_description);
      setDescription((0,react_html_parser__WEBPACK_IMPORTED_MODULE_1__.default)(product.description));
      setName(product.name);

      if (product.size) {
        var viewSizes = JSON.parse(product.size);
        setSizes(viewSizes);
      }
    }
  }, [product]);

  function viewEditProduct() {
    handleModal();
    editProduct(product);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleModal,
    size: "xl",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "View Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-view-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "preview col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "preview-pic tab-content row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "view_prod_description_img tab-pane active",
    id: "pic-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "..".concat(currentImage)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "preview-thumbnail nav nav-tabs"
  }, product_images.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: function onClick() {
        return setCurrentImage(image.image);
      },
      key: index,
      className: currentImage == image.image ? "active" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      "data-target": "#pic-1",
      "data-toggle": "tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "..".concat(image.image)
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "details col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mt-2 product-title"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "price"
  }, "current price: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Brand: "), " ", brand), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "sizes"
  }, "Sizes:", sizes.map(function (size, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: index,
      className: "size",
      "data-toggle": "tooltip",
      title: "medium"
    }, size, ",");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "colors"
  }, "Colors:", colors.map(function (color, index) {
    var styling = color.color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "color",
      style: {
        background: styling
      },
      "data-toggle": "tooltip",
      key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-1 mb-2"
  }, brief_description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return viewEditProduct();
    },
    className: "add-to-cart btn btn-primary",
    type: "button"
  }, "Edit Product"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-start border-bottom mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "ml-4 font-weight-bold"
  }, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-description mt-2"
  }, description))));
}

/***/ }),

/***/ "./frontend/src/components/products/ViewProductRow.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/products/ViewProductRow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProductRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewProductRow(props) {
  var product = props.product,
      deleteProduct = props.deleteProduct,
      editProduct = props.editProduct,
      canManage = props.canManage,
      viewProductDescription = props.viewProductDescription,
      index = props.index,
      updateProductState = props.updateProductState;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("../static/images/user.png"),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      colors = _useState4[0],
      setColors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      sizes = _useState6[0],
      setSizes = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      anchorEl = _useState8[0],
      setAnchorEl = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product.product_images) {
      setImage(product.product_images[0] != null && product.product_images[0].image != null ? "..".concat(product.product_images[0].image) : "../static/images/logo.svg");
    }

    if (product.colors) {
      setColors(product.colors);
    }

    if (product.size) {
      var viewSizes = JSON.parse(product.size);
      setSizes(viewSizes);
    }
  }, [product]);
  var popUpItems = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-eye btn_type"
    }),
    name: "View",
    value: "View"
  }, {
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
      deleteProduct(product.id);
    } else if (value == "Edit") {
      editProduct(product);
    } else if (value == "View") {
      viewProductDescription(product);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return viewProductDescription(product);
    },
    className: "col-md-3 mt-1 view_product_img btn_type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: "product image"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: function onClick() {
      return viewProductDescription(product);
    },
    className: "btn_type"
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.product_code ? product.product_code : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.category ? product.category.name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.brand ? product.brand : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%"
  }, "".concat(product.price_currency, " ").concat((0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_2__.default)(product.price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.stock_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.units ? "".concat(product.units.name, " (").concat(product.units.symbol, ")") : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, product.brief_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: product.active,
    color: "primary",
    onChange: function onChange(e) {
      return updateProductState({
        id: product.id,
        active: e.target.checked
      });
    },
    inputProps: {
      "aria-label": "primary checkbox"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/products/ViewProducts.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/products/ViewProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProducts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _ViewProductRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewProductRow */ "./frontend/src/components/products/ViewProductRow.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _ViewProductDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewProductDescription */ "./frontend/src/components/products/ViewProductDescription.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ViewProducts(props) {
  var changePage = props.changePage,
      products = props.products,
      deleteProduct = props.deleteProduct,
      editProduct = props.editProduct,
      canManage = props.canManage,
      pageDetails = props.pageDetails,
      fetchProducts = props.fetchProducts,
      updateProductState = props.updateProductState;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      viewProduct = _useState6[0],
      setViewProduct = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      showModal = _useState8[0],
      setShowModal = _useState8[1];

  function viewDescription(v_product) {
    setShowModal(true);
    setViewProduct(v_product);
  }

  function onChangeRows(viewRows) {
    fetchProducts(1, "", query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchProducts(page, "", query, rows);
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
        fetchProducts(1, "", query, rows);
      } else {
        fetchProducts(1, "", "", rows);
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
  }, "Add Product") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
    "aria-label": "collapsible "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "row justify-content-end mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort mr-2"
  }), "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__.default, null, products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProductRow__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: index,
      index: index,
      product: product,
      deleteProduct: deleteProduct,
      editProduct: editProduct,
      canManage: canManage,
      viewProductDescription: viewDescription,
      updateProductState: updateProductState
    });
  }))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProductDescription__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    product: viewProduct,
    editProduct: editProduct
  }));
}

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

/***/ "./frontend/src/utils/ImageCompress.js":
/*!*********************************************!*\
  !*** ./frontend/src/utils/ImageCompress.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageCompress)
/* harmony export */ });
/* harmony import */ var _RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomString */ "./frontend/src/utils/RandomString.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_2__);



function ImageCompress(imageFile) {
  // return new Promise((resolve, reject) => {
  //   Resizer.imageFileResizer(
  //     imageFile,
  //     300,
  //     300,
  //     "PNG",
  //     100,
  //     0,
  //     (uri) => {
  //       let filename = RandomString(10);
  //       var file = new File([uri], `${filename}.png`, {
  //         type: "image/png",
  //         lastModified: new Date().getTime(),
  //       });
  //       resolve(file);
  //     },
  //     "blob"
  //   );
  // });
  return new Promise(function (resolve, reject) {
    new (compressorjs__WEBPACK_IMPORTED_MODULE_2___default())(imageFile, {
      quality: 1,
      // height: 300,
      // width: 300,
      success: function success(result) {
        var filename = (0,_RandomString__WEBPACK_IMPORTED_MODULE_0__.default)(10);
        var file = new File([result], "".concat(filename, ".png"), {
          type: "image/png",
          lastModified: new Date().getTime()
        });
        resolve(file);
      },
      error: function error(err) {
        reject(err);
      }
    });
  });
}

/***/ }),

/***/ "./frontend/src/utils/RandomString.js":
/*!********************************************!*\
  !*** ./frontend/src/utils/RandomString.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";

  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  return result;
}

/***/ }),

/***/ "./frontend/src/widgets/AsyncMultiColorSelect.js":
/*!*******************************************************!*\
  !*** ./frontend/src/widgets/AsyncMultiColorSelect.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncMultiColorSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.esm.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function AsyncMultiColorSelect(props) {
  var fetchCustomColors = props.fetchCustomColors,
      customColors = props.customColors,
      colors = props.colors,
      setColors = props.setColors;
  var themeLight = "light";
  var body = document.getElementsByTagName("body")[0];
  var colourStyles = {
    control: function control(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    menu: function menu(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    option: function option(styles, _ref) {
      var data = _ref.data,
          isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          isSelected = _ref.isSelected;
      var color = chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(data.color);
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled ? "#ccc" : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_2___default().contrast(color, "white") > 2 ? "white" : "black" : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": _objectSpread(_objectSpread({}, styles[":active"]), {}, {
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        })
      });
    },
    multiValue: function multiValue(styles, _ref2) {
      var data = _ref2.data;
      var color = chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(data.color);
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: color.alpha(0.1).css()
      });
    },
    multiValueLabel: function multiValueLabel(styles, _ref3) {
      var data = _ref3.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: data.color
      });
    },
    multiValueRemove: function multiValueRemove(styles, _ref4) {
      var data = _ref4.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: data.color,
        ":hover": {
          backgroundColor: data.color,
          color: "white"
        }
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_1__.default, {
    closeMenuOnSelect: false,
    isMulti: true,
    loadOptions: fetchCustomColors,
    defaultOptions: customColors,
    cacheOptions: true,
    styles: colourStyles,
    value: colors,
    onChange: setColors
  });
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

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/products/Product.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/products/Product.css ***!
  \********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ratings i {\n    font-size: 16px;\n    color: red;\n}\n\n.strike-text {\n    color: red;\n    text-decoration: line-through;\n}\n\n.view_product_img {\n    width: 80px;\n    height: 80px;\n    /* overflow: hidden; */\n    border-radius: 10px;\n    margin-right: 10px;\n}\n\n.view_product_img img {\n    width: inherit;\n    height: inherit;\n    object-fit: contain;\n}\n\n.product_dot {\n    height: 7px;\n    width: 7px;\n    margin-left: 6px;\n    margin-right: 6px;\n    margin-top: 3px;\n    background-color: blue;\n    border-radius: 50%;\n    display: inline-block;\n}\n\n.spec-1 {\n    color: #938787;\n    font-size: 15px;\n}\n\nh5 {\n    font-weight: 400;\n}\n\n.para {\n    font-size: 16px;\n}\n\n.image_view_card {\n    margin-bottom: 30px;\n    cursor: pointer;\n    overflow: hidden;\n    display: flex;\n    position: relative;\n}\n\n.image_view_card img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.image_add {\n    height: 200px;\n    width: 200px;\n    color: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.image_add img {\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.image_view_card .delete_btn {\n    /* float: right; */\n    cursor: pointer;\n    background-color: #e74c3c;\n    border: 0;\n    color: #fff;\n    font-size: 20px;\n    line-height: 20px;\n    /* padding: 2px 5px; */\n    transform: (-100%, -100%);\n    position: absolute;\n    top: 0;\n    right: 0;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.image_view_card:hover .delete_btn {\n    opacity: 1;\n}\n\n.add_color_input {\n    background: transparent;\n    border: none;\n}\n\n.product_description {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    /* number of lines to show */\n    -webkit-box-orient: vertical;\n}\n\n\n/* ! Product view page */\n\n\n/* .product-view-description img {\n    max-width: 100%; \n}\n   */\n\n.product-view-description .preview {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n@media screen and (max-width: 996px) {\n    .preview {\n        margin-bottom: 20px;\n    }\n}\n\n.product-view-description .preview-pic {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n}\n\n.product-view-description .view_prod_description_img {\n    width: 300px;\n    height: 300px;\n    overflow: hidden;\n    align-self: center;\n}\n\n.product-view-description .view_prod_description_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.product-view-description .preview-thumbnail.nav-tabs {\n    border: none;\n    margin-top: 15px;\n}\n\n.product-view-description .preview-thumbnail.nav-tabs li {\n    width: 18%;\n    margin-right: 2.5%;\n}\n\n.product-view-description .preview-thumbnail.nav-tabs li img {\n    max-width: 100%;\n    display: block;\n}\n\n.product-view-description .preview-thumbnail.nav-tabs li a {\n    padding: 0;\n    margin: 0;\n}\n\n.product-view-description .preview-thumbnail.nav-tabs li:last-of-type {\n    margin-right: 0;\n}\n\n.product-view-description .tab-content {\n    overflow: hidden;\n}\n\n.product-view-description .tab-content img {\n    width: 100%;\n    -webkit-animation-name: opacity;\n    animation-name: opacity;\n    -webkit-animation-duration: 0.3s;\n    animation-duration: 0.3s;\n}\n\n.product-view-description .card {\n    /* background: #eee; */\n    padding: 3em;\n    line-height: 1.5em;\n}\n\n@media screen and (min-width: 997px) {\n    .product-view-description .wrapper {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n    }\n}\n\n.product-view-description .details {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.product-view-description .colors {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n}\n\n.product-view-description .product-title,\n.price,\n.sizes,\n.colors {\n    text-transform: UPPERCASE;\n    font-weight: bold;\n}\n\n.product-view-description .checked,\n.price span {\n    color: #ff9f1a;\n}\n\n.product-view-description .product-title,\n.rating,\n.product-description,\n.price,\n.vote,\n.sizes {\n    margin-bottom: 15px;\n}\n\n.product-view-description .product-description {\n    text-indent: 50px;\n    text-align: justify;\n}\n\n.product-view-description .product-title {\n    margin-top: 0;\n}\n\n.product-view-description .size {\n    margin-right: 10px;\n}\n\n.size:first-of-type {\n    margin-left: 40px;\n}\n\n.product-view-description .color {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 1em;\n}\n\n.color:first-of-type {\n    margin-left: 20px;\n}\n\n.product-view-description .add-to-cart,\n.like {\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    -webkit-transition: background 0.3s ease;\n    transition: background 0.3s ease;\n}\n\n.add-to-cart:hover,\n.like:hover {\n    color: #fff;\n}\n\n.product-view-description .not-available {\n    text-align: center;\n    line-height: 2em;\n}\n\n.product-view-description .not-available:before {\n    font-family: fontawesome;\n    content: \"\\f00d\";\n    color: #fff;\n}\n\n.product-view-description .tooltip-inner {\n    padding: 1.3em;\n}\n\n@-webkit-keyframes opacity {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@keyframes opacity {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/products/Product.css":
/*!******************************************************!*\
  !*** ./frontend/src/components/products/Product.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Product.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/products/Product.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "?13bc":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
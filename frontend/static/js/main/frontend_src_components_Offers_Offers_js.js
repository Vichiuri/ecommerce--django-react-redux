(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Offers_Offers_js"],{

/***/ "./frontend/src/components/Offers/AddOffers.js":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Offers/AddOffers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddOffers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function AddOffers(props) {
  var changePage = props.changePage,
      addPriceOffer = props.addPriceOffer;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("../static/images/add_image.png"),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      compressedImage = _useState4[0],
      setCompressedImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      scheme = _useState8[0],
      setScheme = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      f_item = _useState10[0],
      setFItem = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      l_item = _useState12[0],
      setLItem = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      f_quantity = _useState14[0],
      setFQuantity = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      l_Quantity = _useState16[0],
      setLQuantity = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      from = _useState18[0],
      setFrom = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState20 = _slicedToArray(_useState19, 2),
      to = _useState20[0],
      setTo = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      fileInput = _useState22[0],
      setFileInput = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      isError = _useState24[0],
      setIsError = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState26 = _slicedToArray(_useState25, 2),
      responseMessage = _useState26[0],
      setResponseMessage = _useState26[1];

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
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__.default)(fileImage).then(function (compressImage) {
      setCompressedImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  function uploadOffer() {
    setIsError(null);
    setResponseMessage("");

    if (name && scheme && compressedImage && f_item && to && from) {
      var formData = new FormData();
      formData.append("name", name);
      formData.append("scheme", scheme);
      formData.append("x_id", f_item.value.id);
      formData.append("y_id", l_item.value.id);
      formData.append("x_amt", f_quantity);
      formData.append("y_amt", l_Quantity);
      formData.append("date_from", from);
      formData.append("date_to", to);
      formData.append("pic", compressedImage);
      addPriceOffer(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input offer name");
    } else if (!scheme) {
      setIsError(true);
      setResponseMessage("Please input scheme type");
    } else if (!compressedImage) {
      setIsError(true);
      setResponseMessage("Please input offer image");
    } else if (!f_item) {
      setIsError(true);
      setResponseMessage("Please input one product");
    } else if (!to) {
      setIsError(true);
      setResponseMessage("Please input start date");
    } else if (!from) {
      setIsError(true);
      setResponseMessage("Please input end date");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant info");
    }
  }

  var x_className = scheme == "BnXEX" || scheme == "BnXy%O" ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group" : "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Offer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_5__.default, {
    prevPropsName: "Offers",
    propsName: "Add Offer",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_offers_img",
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
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Offer Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input an offer name"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter offer name",
    value: name,
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Scheme*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose a Scheme"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: scheme,
    onChange: function onChange(e) {
      setScheme(e.target.value);

      if (e.target.value != "BnXYF") {
        if (f_item) {
          setLItem(f_item);
        }
      }
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXEX"
  }, "Buy n of X GET Extra X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXYF"
  }, "Buy n of X get Y free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXy%O"
  }, "Buy n of X get y% off")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: x_className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select X Item* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose X Item"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    isMulti: false,
    value: f_item,
    setValue: function setValue(value) {
      if (scheme == "BnXEX" || scheme == "BnXy%O") {
        setFItem(value);
        setLItem(value);
      } else {
        setFItem(value);
      }
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectProduct,
    closeMenuOnSelect: true
  })), scheme == "BnXEX" || scheme == "BnXy%O" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Y Item* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose Y Item"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    isMulti: false,
    value: l_item,
    setValue: function setValue(value) {
      setLItem(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectProduct,
    closeMenuOnSelect: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "X Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input X quantity"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter x item quantity",
    value: f_quantity,
    name: "name",
    onChange: function onChange(e) {
      return setFQuantity(e.target.value);
    },
    required: true
  })), scheme == "BnXEX" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Free Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input free quantity"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter free quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  })) : scheme == "BnXy%O" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Percentage Off*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "input % off"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter percentage quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Y Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "input Y quantity"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter y item quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "From Date* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose from date"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter from date",
    value: from,
    name: "name",
    onChange: function onChange(e) {
      return setFrom(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "To Date*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose to date"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter to date",
    value: to,
    name: "name",
    onChange: function onChange(e) {
      return setTo(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadOffer();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Add Offer"))))));
}

/***/ }),

/***/ "./frontend/src/components/Offers/EditOffer.js":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Offers/EditOffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditOffer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function EditOffer(props) {
  var offer = props.offer,
      updateOffers = props.updateOffers,
      changePage = props.changePage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.pic ? "..".concat(offer.pic) : "../static/images/add_image.png"),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      compressedImage = _useState4[0],
      setCompressedImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.name ? offer.name : ""),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.scheme ? offer.scheme : ""),
      _useState8 = _slicedToArray(_useState7, 2),
      scheme = _useState8[0],
      setScheme = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      f_item = _useState10[0],
      setFItem = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      l_item = _useState12[0],
      setLItem = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.x_amt ? offer.x_amt : ""),
      _useState14 = _slicedToArray(_useState13, 2),
      f_quantity = _useState14[0],
      setFQuantity = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.y_amt ? offer.y_amt : ""),
      _useState16 = _slicedToArray(_useState15, 2),
      l_Quantity = _useState16[0],
      setLQuantity = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.date_from ? offer.date_from : ""),
      _useState18 = _slicedToArray(_useState17, 2),
      from = _useState18[0],
      setFrom = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offer.date_to ? offer.date_to : ""),
      _useState20 = _slicedToArray(_useState19, 2),
      to = _useState20[0],
      setTo = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      fileInput = _useState22[0],
      setFileInput = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      isError = _useState24[0],
      setIsError = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState26 = _slicedToArray(_useState25, 2),
      responseMessage = _useState26[0],
      setResponseMessage = _useState26[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (offer) {
      var f_v_item = {
        value: offer.x_item,
        label: offer.x_item.name
      };
      var l_v_item = {
        value: offer.y_item,
        label: offer.y_item.name
      };
      setFItem(f_v_item);
      setLItem(l_v_item);
    }
  }, [offer]);

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
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__.default)(fileImage).then(function (compressImage) {
      setCompressedImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  function uploadOffer() {
    setIsError(null);
    setResponseMessage("");

    if (name && scheme && f_item && to && from) {
      var formData = new FormData();
      formData.append("name", name);
      formData.append("scheme", scheme);
      formData.append("x_id", f_item.value.id);
      formData.append("y_id", l_item.value.id);
      formData.append("x_amt", f_quantity);
      formData.append("y_amt", l_Quantity);
      formData.append("date_from", from);
      formData.append("date_to", to);
      formData.append("pic", compressedImage);
      formData.append("id", offer.id);
      updateOffers(formData);
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input offer name");
    } else if (!scheme) {
      setIsError(true);
      setResponseMessage("Please input scheme type");
    } else if (!f_item) {
      setIsError(true);
      setResponseMessage("Please input one product");
    } else if (!to) {
      setIsError(true);
      setResponseMessage("Please input start date");
    } else if (!from) {
      setIsError(true);
      setResponseMessage("Please input end date");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant info");
    }
  }

  var x_className = scheme == "BnXEX" || scheme == "BnXy%O" ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group" : "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Offer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_5__.default, {
    prevPropsName: "Offers",
    propsName: "Add Offer",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_offers_img",
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
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Offer Name*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input an offer name"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter offer name",
    value: name,
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Scheme*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose a Scheme"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: scheme,
    onChange: function onChange(e) {
      setScheme(e.target.value);

      if (e.target.value != "BnXYF") {
        if (f_item) {
          setLItem(f_item);
        }
      }
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXEX"
  }, "Buy n of X GET Extra X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXYF"
  }, "Buy n of X get Y free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "BnXy%O"
  }, "Buy n of X get y% off")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: x_className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select X Item* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose X Item"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    isMulti: false,
    value: f_item,
    setValue: function setValue(value) {
      if (scheme == "BnXEX" || scheme == "BnXy%O") {
        setFItem(value);
        setLItem(value);
      } else {
        setFItem(value);
      }
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectProduct,
    closeMenuOnSelect: true
  })), scheme == "BnXEX" || scheme == "BnXy%O" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Y Item* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose Y Item"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    isMulti: false,
    value: l_item,
    setValue: function setValue(value) {
      setLItem(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectProduct,
    closeMenuOnSelect: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "X Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input X quantity"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter x item quantity",
    value: f_quantity,
    name: "name",
    onChange: function onChange(e) {
      return setFQuantity(e.target.value);
    },
    required: true
  })), scheme == "BnXEX" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Free Quantity*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Input free quantity"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter free quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  })) : scheme == "BnXy%O" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Percentage Off* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "input % off"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter percentage quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Y Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "input Y quantity"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter y item quantity",
    value: l_Quantity,
    name: "name",
    onChange: function onChange(e) {
      return setLQuantity(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "From Date* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose from date"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter from date",
    value: from,
    name: "name",
    onChange: function onChange(e) {
      return setFrom(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "To Date* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_6__.default, {
    message: "Choose to date"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter to date",
    value: to,
    name: "name",
    onChange: function onChange(e) {
      return setTo(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadOffer();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Save Offer"))))));
}

/***/ }),

/***/ "./frontend/src/components/Offers/Offers.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/Offers/Offers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddOffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddOffers */ "./frontend/src/components/Offers/AddOffers.js");
/* harmony import */ var _ViewOffers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewOffers */ "./frontend/src/components/Offers/ViewOffers.js");
/* harmony import */ var _Offers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Offers.css */ "./frontend/src/components/Offers/Offers.css");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/Offers */ "./frontend/src/redux/Actions/Offers.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _EditOffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditOffer */ "./frontend/src/components/Offers/EditOffer.js");
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












var Offers = /*#__PURE__*/function (_Component) {
  _inherits(Offers, _Component);

  var _super = _createSuper(Offers);

  function Offers(props) {
    var _this;

    _classCallCheck(this, Offers);

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
      viewOffer: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.editOffer = _this.editOffer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Offers, [{
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
      this.props.fetchPriceOffers(1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "editOffer",
    value: function editOffer(offer) {
      this.setState({
        currentPage: 3,
        viewOffer: offer
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
          offersReducer = _this$props2.offersReducer,
          addPriceOffer = _this$props2.addPriceOffer,
          deleteOffer = _this$props2.deleteOffer,
          updateOffers = _this$props2.updateOffers,
          auth = _this$props2.auth,
          fetchPriceOffers = _this$props2.fetchPriceOffers;
      var offers = offersReducer.offers,
          isLoading = offersReducer.isLoading,
          offers_current_page = offersReducer.offers_current_page,
          offers_last_page = offersReducer.offers_last_page;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          viewOffer = _this$state.viewOffer;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };
      var pageDetails = {
        current_page: offers_current_page,
        last_page: offers_last_page
      };

      if (!auth.group.permission.can_view_offers) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_9__.default)(this.props.auth.group.permission);
      }

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOffers__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            offers: offers,
            deleteOffer: deleteOffer,
            editOffer: this.editOffer,
            canManage: auth.group.permission.can_manage_offers,
            pageDetails: pageDetails,
            fetchPriceOffers: fetchPriceOffers
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddOffers__WEBPACK_IMPORTED_MODULE_1__.default, {
            changePage: this.changePage,
            addPriceOffer: addPriceOffer
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditOffer__WEBPACK_IMPORTED_MODULE_8__.default, {
            changePage: this.changePage,
            updateOffers: updateOffers,
            offer: viewOffer
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOffers__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            offers: offers
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_7__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Offers;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    offersReducer: state.offersReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** View add and Edit offers view */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {
  fetchPriceOffers: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_6__.fetchPriceOffers,
  addPriceOffer: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_6__.addPriceOffer,
  deleteOffer: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_6__.deleteOffer,
  updateOffers: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_6__.updateOffers
})(Offers));

/***/ }),

/***/ "./frontend/src/components/Offers/OffersRow.js":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Offers/OffersRow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OffersRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatDate */ "./frontend/src/utils/FormatDate.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function OffersRow(_ref) {
  var index = _ref.index,
      offer = _ref.offer,
      deleteOffer = _ref.deleteOffer,
      editOffer = _ref.editOffer,
      canManage = _ref.canManage;

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
      deleteOffer(offer.id);
    } else if (value == "Edit") {
      editOffer(offer);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: "align-items-center h-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_offers_img "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: offer.pic ? "..".concat(offer.pic) : "../static/images/logo.svg",
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.date_from ? (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_1__.default)(offer.date_from) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", offer.date_to ? (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_1__.default)(offer.date_to) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
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

/***/ "./frontend/src/components/Offers/ViewOffers.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Offers/ViewOffers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOffers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
/* harmony import */ var _OffersRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OffersRow */ "./frontend/src/components/Offers/OffersRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewOffers(props) {
  var changePage = props.changePage,
      offers = props.offers,
      deleteOffer = props.deleteOffer,
      editOffer = props.editOffer,
      canManage = props.canManage,
      fetchPriceOffers = props.fetchPriceOffers,
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
    fetchPriceOffers(1, "", query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchPriceOffers(page, "", query, rows);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg_themed container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6 form-group"
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
        fetchPriceOffers(1, "", query, rows);
      } else {
        fetchPriceOffers(1, "", "", rows);
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
    className: "btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
  }, "Add Offer") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, offers.map(function (offer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OffersRow__WEBPACK_IMPORTED_MODULE_3__.default, {
      offer: offer,
      key: index,
      index: index,
      deleteOffer: deleteOffer,
      editOffer: editOffer,
      canManage: canManage
    });
  }))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_2__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))))));
}

/***/ }),

/***/ "./frontend/src/redux/Actions/Offers.js":
/*!**********************************************!*\
  !*** ./frontend/src/redux/Actions/Offers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPriceOffers": () => (/* binding */ fetchPriceOffers),
/* harmony export */   "fetchSelectOffers": () => (/* binding */ fetchSelectOffers),
/* harmony export */   "addPriceOffer": () => (/* binding */ addPriceOffer),
/* harmony export */   "updateOffers": () => (/* binding */ updateOffers),
/* harmony export */   "deleteOffer": () => (/* binding */ deleteOffer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchPriceOffers = function fetchPriceOffers(page, product, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__.default)(getState);
    var url = "../retailer/api/priceOffer?page=".concat(page);

    if (product) {
      url = url + "&product_id=".concat(product);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADED,
        payload: {
          offers: res.data.price_offers,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
function fetchSelectOffers(search, loadOptions, _ref) {
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

  var url = search ? "../retailer/api/priceOffer/?page=".concat(page, "&query=").concat(search) : "../retailer/api/priceOffer/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_offers = res.data.price_offers.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_offers,
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
var addPriceOffer = function addPriceOffer(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/priceOffer/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ADD,
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
var updateOffers = function updateOffers(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/priceOffer/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
var deleteOffer = function deleteOffer(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__.default)(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete("../retailer/api/priceOffer?offer_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};

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

/***/ "./frontend/src/widgets/CustomAsyncPagination.js":
/*!*******************************************************!*\
  !*** ./frontend/src/widgets/CustomAsyncPagination.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAsyncPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ "./node_modules/react-select-async-paginate/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CustomAsyncPagination(props) {
  var value = props.value,
      setValue = props.setValue,
      fetchData = props.fetchData,
      isMulti = props.isMulti,
      closeMenuOnSelect = props.closeMenuOnSelect,
      isDisabled = props.isDisabled,
      isClearable = props.isClearable;
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
      var isFocused = _ref.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? isFocused ? "#f1f1f1" : "#ffffff" : isFocused ? "#f1f1f1" : "#212529"
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__.AsyncPaginate, {
    isMulti: isMulti,
    isClearable: isClearable,
    loadOptions: fetchData,
    value: value,
    onChange: setValue,
    additional: {
      page: 1
    },
    styles: colourStyles,
    closeMenuOnSelect: closeMenuOnSelect,
    key: Math.random(),
    isDisabled: isDisabled
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Offers/Offers.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Offers/Offers.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".add_offers_img {\n    height: 70px;\n    width: 70px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.add_offers_img img {\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Offers/Offers.css":
/*!***************************************************!*\
  !*** ./frontend/src/components/Offers/Offers.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Offers.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Offers/Offers.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Offers_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
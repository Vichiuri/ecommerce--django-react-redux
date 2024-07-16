(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Sales_Sales_js"],{

/***/ "./frontend/src/components/Sales/AddSalesPerson.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Sales/AddSalesPerson.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddSalesPerson)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function AddSalesPerson(_ref) {
  var changePage = _ref.changePage,
      addSalesPerson = _ref.addSalesPerson;

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
      f_name = _useState6[0],
      setFName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      l_name = _useState8[0],
      setLName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      phone = _useState10[0],
      setPhone = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      email = _useState12[0],
      setEmail = _useState12[1];

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
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__.default)(fileImage).then(function (compressImage) {
      setCompressedImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  function uploadSalesPerson() {
    setIsError(null);
    setResponseMessage("");

    if (f_name && l_name && phone && email) {
      var formData = new FormData();
      formData.append("first_name", f_name);
      formData.append("last_name", l_name);
      formData.append("phone", phone);
      formData.append("email", email);

      if (compressedImage) {
        formData.append("photo", compressedImage);
      }

      addSalesPerson(formData);
    } else if (!f_name) {
      setIsError(true);
      setResponseMessage("Please enter first name");
    } else if (!l_name) {
      setIsError(true);
      setResponseMessage("Please enter last name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please enter phone number");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please enter email address");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all relevant details");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-11 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Sales Person")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_3__.default, {
    prevPropsName: "Sales",
    propsName: "Add people",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_sales_img",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "First Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Input First Name"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter first name",
    value: f_name,
    name: "f_name",
    onChange: function onChange(e) {
      return setFName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Last Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Input last name"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter last name",
    value: l_name,
    name: "l_name",
    onChange: function onChange(e) {
      return setLName(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Phone Number*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Add the right phone number"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter phone number",
    value: phone,
    name: "phone",
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Email Address* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_4__.default, {
    message: "Input a working email address"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter email address",
    value: email,
    name: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-lg mr-2 ml-2",
    onClick: function onClick() {
      return uploadSalesPerson();
    }
  }, "Add Sales Person"))))));
}

/***/ }),

/***/ "./frontend/src/components/Sales/EditSalesPersonModal.js":
/*!***************************************************************!*\
  !*** ./frontend/src/components/Sales/EditSalesPersonModal.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditSalesPersonModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function EditSalesPersonModal(_ref) {
  var person = _ref.person,
      show = _ref.show,
      handleModal = _ref.handleModal,
      editSalesPerson = _ref.editSalesPerson;

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
      f_name = _useState6[0],
      setFName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      l_name = _useState8[0],
      setLName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      phone = _useState10[0],
      setPhone = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      email = _useState12[0],
      setEmail = _useState12[1];

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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (person) {
      setFName(person.first_name ? person.first_name : "");
      setLName(person.last_name ? person.last_name : "");
      setImage(person.pic ? "..".concat(person.pic) : "../static/images/add_image.png");
      setPhone(person.phone ? person.phone : "");
      setEmail(person.email ? person.email : "");
    }
  }, [person]);

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

  function uploadSalesPerson() {
    setIsError(null);
    setResponseMessage("");

    if (f_name && l_name && phone && email) {
      var formData = new FormData();
      formData.append("first_name", f_name);
      formData.append("last_name", l_name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("id", person.id);

      if (compressedImage) {
        formData.append("photo", compressedImage);
      }

      editSalesPerson(formData);
    } else if (!f_name) {
      setIsError(true);
      setResponseMessage("Please enter first name");
    } else if (!l_name) {
      setIsError(true);
      setResponseMessage("Please enter last name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please enter phone number");
    } else if (!email) {
      setIsError(true);
      setResponseMessage("Please enter email address");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all relevant details");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Edit SalesPerson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-11 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_sales_img",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "First Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_3__.default, {
    message: "Input First Name"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter first name",
    value: f_name,
    name: "f_name",
    onChange: function onChange(e) {
      return setFName(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Last Name* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_3__.default, {
    message: "Input last name"
  }), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter last name",
    value: l_name,
    name: "l_name",
    onChange: function onChange(e) {
      return setLName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Phone Number*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_3__.default, {
    message: "Add the right phone number"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter phone number",
    value: phone,
    name: "phone",
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Email Address* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_3__.default, {
    message: "Input a working email address"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter email address",
    value: email,
    name: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      uploadSalesPerson();
      handleModal();
    }
  }, "Save Sales Person")));
}

/***/ }),

/***/ "./frontend/src/components/Sales/Sales.js":
/*!************************************************!*\
  !*** ./frontend/src/components/Sales/Sales.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ViewSalesPeople__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewSalesPeople */ "./frontend/src/components/Sales/ViewSalesPeople.js");
/* harmony import */ var _sales_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales.css */ "./frontend/src/components/Sales/sales.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _AddSalesPerson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddSalesPerson */ "./frontend/src/components/Sales/AddSalesPerson.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
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











var Sales = /*#__PURE__*/function (_Component) {
  _inherits(Sales, _Component);

  var _super = _createSuper(Sales);

  function Sales(props) {
    var _this;

    _classCallCheck(this, Sales);

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

  _createClass(Sales, [{
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
      this.props.fetchSalesPeople(1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
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
          salesReducer = _this$props2.salesReducer,
          addSalesPerson = _this$props2.addSalesPerson,
          deleteSalesPerson = _this$props2.deleteSalesPerson,
          editSalesPerson = _this$props2.editSalesPerson,
          fetchSalesPeople = _this$props2.fetchSalesPeople,
          auth = _this$props2.auth;
      var isLoading = salesReducer.isLoading,
          sales_people = salesReducer.sales_people,
          sales_current_page = salesReducer.sales_current_page,
          sales_last_page = salesReducer.sales_last_page;
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

      if (!auth.group.permission.can_view_salesmen) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_8__.default)(this.props.auth.group.permission);
      }

      var pageDetails = {
        current_page: sales_current_page,
        last_page: sales_last_page
      };

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesPeople__WEBPACK_IMPORTED_MODULE_1__.default, {
            sales_people: sales_people,
            changePage: this.changePage,
            deleteSalesPerson: deleteSalesPerson,
            editSalesPerson: editSalesPerson,
            fetchSalesPeople: fetchSalesPeople,
            canManage: auth.group.permission.can_manage_salesmen,
            pageDetails: pageDetails
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddSalesPerson__WEBPACK_IMPORTED_MODULE_7__.default, {
            changePage: this.changePage,
            addSalesPerson: addSalesPerson
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSalesPeople__WEBPACK_IMPORTED_MODULE_1__.default, {
            sales_people: sales_people,
            changePage: this.changePage,
            deleteSalesPerson: deleteSalesPerson,
            editSalesPerson: editSalesPerson,
            canManage: auth.group.permission.can_manage_salesmen
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Sales;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    salesReducer: state.salesReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** View for adding and managing retailers */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, {
  fetchSalesPeople: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_4__.fetchSalesPeople,
  addSalesPerson: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_4__.addSalesPerson,
  editSalesPerson: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_4__.editSalesPerson,
  deleteSalesPerson: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_4__.deleteSalesPerson
})(Sales));

/***/ }),

/***/ "./frontend/src/components/Sales/ViewSaleRow.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Sales/ViewSaleRow.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewSaleRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ViewSaleRow(props) {
  var person = props.person,
      index = props.index,
      deleteSalesPerson = props.deleteSalesPerson,
      viewEdit = props.viewEdit,
      canManage = props.canManage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var popUpItems = [// {
  //   icon: <i className="fas fa-user btn_type"></i>,
  //   name: "Assign Retailer",
  //   value: "Assign",
  // },
  {
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
      deleteSalesPerson(person.id);
    } else if (value == "Edit") {
      viewEdit(person);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sales_round_img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: person.pic ? "..".concat(person.pic) : "../static/images/user.png",
    alt: "customer image"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.first_name, " ", person.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, person.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-up bg_themed"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-down bg_themed"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__.default, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Retailers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "city"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, null, person.retailers ? person.retailers.map(function (retailer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retailer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retailer.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retailer.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retailer.city ? retailer.city.name : ""));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/Sales/ViewSalesPeople.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Sales/ViewSalesPeople.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewSalesPeople)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _ViewSaleRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewSaleRow */ "./frontend/src/components/Sales/ViewSaleRow.js");
/* harmony import */ var _EditSalesPersonModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditSalesPersonModal */ "./frontend/src/components/Sales/EditSalesPersonModal.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ViewSalesPeople(props) {
  var changePage = props.changePage,
      sales_people = props.sales_people,
      deleteSalesPerson = props.deleteSalesPerson,
      editSalesPerson = props.editSalesPerson,
      canManage = props.canManage,
      fetchSalesPeople = props.fetchSalesPeople,
      pageDetails = props.pageDetails;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      viewPerson = _useState4[0],
      setViewPerson = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      query = _useState6[0],
      setQuery = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),
      _useState8 = _slicedToArray(_useState7, 2),
      rows = _useState8[0],
      setRows = _useState8[1];

  function viewEdit(person) {
    setViewPerson(person);
    setShowModal(true);
  }

  function onChangeRows(viewRows) {
    fetchSalesPeople(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchSalesPeople(page, query, rows);
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
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__.default)(function () {
      if (query) {
        fetchSalesPeople(1, query, rows);
      } else {
        fetchSalesPeople(1, "", rows);
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
  }, "Add Sales Person") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
    "aria-label": "collapsible table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Retailers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__.default, null, sales_people.map(function (person, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSaleRow__WEBPACK_IMPORTED_MODULE_1__.default, {
      index: index,
      key: index,
      person: person,
      deleteSalesPerson: deleteSalesPerson,
      viewEdit: viewEdit,
      canManage: canManage
    });
  }))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_4__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditSalesPersonModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    person: viewPerson,
    editSalesPerson: editSalesPerson
  }));
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
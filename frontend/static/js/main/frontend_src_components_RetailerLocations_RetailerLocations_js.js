(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_RetailerLocations_RetailerLocations_js"],{

/***/ "./frontend/src/components/RetailerLocations/AddCityModal.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/AddCityModal.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddCityModal)
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




function AddCityModal(props) {
  var region = props.region,
      show = props.show,
      handleModal = props.handleModal,
      addRetailerCity = props.addRetailerCity;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      responseMessage = _useState6[0],
      setResponseMessage = _useState6[1];

  function uploadCity() {
    if (name) {
      addRetailerCity({
        region_id: region.id,
        name: name
      }, region.id);
      setName("");
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please enter city name");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add City")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add city name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadCity();
    }
  }, "Add City")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/AddRegionModal.js":
/*!*********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/AddRegionModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddRegionModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
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





function AddRegionModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      addRetailRegions = props.addRetailRegions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      region = _useState2[0],
      setRegion = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      cityItem = _useState4[0],
      setCityItem = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      cities = _useState6[0],
      setCities = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isError = _useState8[0],
      setIsError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      responseMessage = _useState10[0],
      setResponseMessage = _useState10[1];

  function removeCityObject(e_cityItem) {
    var citiesArray = cities.filter(function (city) {
      return city != e_cityItem;
    });
    setCities(citiesArray);
  }

  function addCityItem(e) {
    if (e.key === "Enter") {
      var citiesArray = [].concat(_toConsumableArray(cities), [cityItem]);
      setCities(citiesArray);
      setCityItem("");
    }
  }

  function uploadRegion() {
    if (region) {
      addRetailRegions({
        region: region,
        cities: cities
      });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  function clearModal() {
    setRegion("");
    setCityItem("");
    setCities([]);
    handleModal();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Region")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Region*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Input region"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter region",
    value: region,
    name: "region",
    onChange: function onChange(e) {
      return setRegion(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Cities", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Add city then press enter"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add city name and press enter",
    value: cityItem,
    onChange: function onChange(e) {
      return setCityItem(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      addCityItem(e);
    }
  })), cities.length != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, cities.map(function (city, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6 mb-2 p-2",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "tag_button btn btn-primary"
    }, city, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times",
      onClick: function onClick() {
        return removeCityObject(city);
      }
    })));
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadRegion();
    }
  }, "Upload Region")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/AddViewAreaModal.js":
/*!***********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/AddViewAreaModal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddViewAreaModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function AddViewAreaModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      addRetailAreas = props.addRetailAreas,
      cities = props.cities;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      area = _useState2[0],
      setArea = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      viewCities = _useState6[0],
      setViewCities = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isError = _useState8[0],
      setIsError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      responseMessage = _useState10[0],
      setResponseMessage = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setViewCities(cities);
  }, [cities]);

  function uploadArea() {
    setIsError(null);
    setResponseMessage("");

    if (area && city) {
      addRetailAreas({
        area: area,
        city: city
      });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  function clearModal() {
    setArea("");
    setCity("");
    handleModal();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Area")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Add Area ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Input an area"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter area",
    value: area,
    name: "area",
    onChange: function onChange(e) {
      return setArea(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select City ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Choose a City"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-control",
    value: city,
    onChange: function onChange(e) {
      return setCity(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), viewCities.map(function (viewCity, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: viewCity.id
    }, viewCity.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadArea();
    }
  }, "Upload Area")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/EditAreaModal.js":
/*!********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/EditAreaModal.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAreaModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function EditAreaModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      updateRetailerAreas = props.updateRetailerAreas,
      cities = props.cities,
      viewArea = props.viewArea;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      area = _useState2[0],
      setArea = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      viewCities = _useState6[0],
      setViewCities = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isError = _useState8[0],
      setIsError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      responseMessage = _useState10[0],
      setResponseMessage = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setViewCities(cities);

    if (viewArea) {
      setArea(viewArea.name);
      setCity(viewArea.city.id);
    }
  }, [cities, viewArea]);

  function uploadArea() {
    setIsError(null);
    setResponseMessage("");

    if (area && city) {
      updateRetailerAreas({
        area: area,
        city: city,
        id: viewArea.id
      });
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Area")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Add Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter area",
    value: area,
    name: "area",
    onChange: function onChange(e) {
      return setArea(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-control",
    value: city,
    onChange: function onChange(e) {
      return setCity(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), viewCities.map(function (viewCity, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: viewCity.id
    }, viewCity.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadArea();
    }
  }, "Upload Area")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/EditCityModal.js":
/*!********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/EditCityModal.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCityModal)
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




function EditCityModal(props) {
  var city = props.city,
      region = props.region,
      updateRetailerCity = props.updateRetailerCity,
      show = props.show,
      handleModal = props.handleModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      responseMessage = _useState6[0],
      setResponseMessage = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (city) {
      setName(city.name);
    }
  }, [city]);

  function uploadCity() {
    if (name) {
      updateRetailerCity({
        region_id: region.id,
        name: name,
        id: city.id
      }, region.id);
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please enter city name");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add City")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add reference note",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadCity();
    }
  }, "Add City")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/EditRegionModal.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/EditRegionModal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditRegionModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
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





function EditRegionModal(props) {
  var show = props.show,
      handleModal = props.handleModal,
      updateRetailerRegions = props.updateRetailerRegions,
      viewRegion = props.viewRegion;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      region = _useState2[0],
      setRegion = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      cityItem = _useState4[0],
      setCityItem = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      cities = _useState6[0],
      setCities = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      removed_cities = _useState8[0],
      setRemovedCities = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      add_cities = _useState10[0],
      setAddedCities = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      isError = _useState12[0],
      setIsError = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      responseMessage = _useState14[0],
      setResponseMessage = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (viewRegion) {
      var cityArray = [];

      if (viewRegion.region_cities) {
        cityArray = viewRegion.region_cities.map(function (item) {
          return {
            id: item.id,
            name: item.name
          };
        });
      }

      setCities(cityArray);
      setRegion(viewRegion.name);
    }
  }, [viewRegion]);

  function removeCityObject(e_cityItem) {
    var citiesArray = cities.filter(function (city) {
      return city !== e_cityItem;
    });

    if (e_cityItem.id) {
      var removedCitiesArray = [].concat(_toConsumableArray(removed_cities), [e_cityItem.id]);
      setRemovedCities(removedCitiesArray);
    }

    var add_array = add_cities.filter(function (city) {
      return city !== e_cityItem;
    });
    setCities(citiesArray);
    setAddedCities(add_array);
  }

  function addCityItem(e) {
    if (e.key === "Enter") {
      var citiesArray = [].concat(_toConsumableArray(cities), [{
        name: cityItem
      }]);
      var add_Array = [].concat(_toConsumableArray(add_cities), [cityItem]);
      setAddedCities(add_Array);
      setCities(citiesArray);
      setCityItem("");
    }
  }

  function uploadRegion() {
    if (region) {
      updateRetailerRegions({
        name: region,
        delete_cities: removed_cities,
        add_cities: add_cities,
        id: viewRegion.id
      });
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleModal,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Region")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Region ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Input region"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter region",
    value: region,
    name: "region",
    onChange: function onChange(e) {
      return setRegion(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_2__.default, {
    message: "Add city then press enter"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Add city name and press enter",
    value: cityItem,
    onChange: function onChange(e) {
      return setCityItem(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      addCityItem(e);
    }
  })), cities.length != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, cities.map(function (city, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6 mb-2 p-2",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "tag_button btn btn-primary"
    }, city.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times",
      onClick: function onClick() {
        return removeCityObject(city);
      }
    })));
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      return uploadRegion();
    }
  }, "Upload Region")));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/RegionCitiesRow.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/RegionCitiesRow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegionCitiesRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function RegionCitiesRow(props) {
  var index = props.index,
      city = props.city,
      region = props.region,
      canManage = props.canManage,
      editCity = props.editCity,
      deleteRetailerCity = props.deleteRetailerCity;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, city.name), canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return editCity(region, city);
    },
    className: "fas fa-edit text-primary btn_type"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return deleteRetailerCity(city.id, region.id);
    },
    className: "fas fa-trash text-danger btn_type ml-2"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/RetailerLocations.js":
/*!************************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/RetailerLocations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _ViewAreas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewAreas */ "./frontend/src/components/RetailerLocations/ViewAreas.js");
/* harmony import */ var _ViewRegions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewRegions */ "./frontend/src/components/RetailerLocations/ViewRegions.js");
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










var RetailerLocations = /*#__PURE__*/function (_Component) {
  _inherits(RetailerLocations, _Component);

  var _super = _createSuper(RetailerLocations);

  function RetailerLocations(props) {
    var _this;

    _classCallCheck(this, RetailerLocations);

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

  _createClass(RetailerLocations, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRetailRegions(1);
      this.props.fetchRetailAreas(1);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) this.setResponse(message);
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
          retailersReducer = _this$props2.retailersReducer,
          addRetailRegions = _this$props2.addRetailRegions,
          addRetailAreas = _this$props2.addRetailAreas,
          fetchRetailerCities = _this$props2.fetchRetailerCities,
          auth = _this$props2.auth,
          updateRetailerAreas = _this$props2.updateRetailerAreas,
          deleteRetailerArea = _this$props2.deleteRetailerArea,
          updateRetailerRegions = _this$props2.updateRetailerRegions,
          deleteRetailerRegions = _this$props2.deleteRetailerRegions,
          addRetailerCity = _this$props2.addRetailerCity,
          updateRetailerCity = _this$props2.updateRetailerCity,
          deleteRetailerCity = _this$props2.deleteRetailerCity;
      var retailer_regions = retailersReducer.retailer_regions,
          isLoading = retailersReducer.isLoading,
          areas = retailersReducer.areas,
          cities = retailersReducer.cities;
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

      if (!auth.group.permission.can_view_retailer) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.auth.group.permission);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_5__.default, {
        open: isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewRegions__WEBPACK_IMPORTED_MODULE_7__.default, {
        retailer_regions: retailer_regions,
        addRetailRegions: addRetailRegions,
        canManage: auth.group.permission.can_manage_retailer,
        updateRetailerRegions: updateRetailerRegions,
        deleteRetailerRegions: deleteRetailerRegions,
        addRetailerCity: addRetailerCity,
        updateRetailerCity: updateRetailerCity,
        deleteRetailerCity: deleteRetailerCity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewAreas__WEBPACK_IMPORTED_MODULE_6__.default, {
        areas: areas,
        addRetailAreas: addRetailAreas,
        cities: cities,
        fetchRetailerCities: fetchRetailerCities,
        canManage: auth.group.permission.can_manage_retailer,
        updateRetailerAreas: updateRetailerAreas,
        deleteRetailerArea: deleteRetailerArea
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return RetailerLocations;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    retailersReducer: state.retailersReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Distributor retailer locations view */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchRetailRegions: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.fetchRetailRegions,
  addRetailRegions: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.addRetailRegions,
  fetchRetailAreas: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.fetchRetailAreas,
  addRetailAreas: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.addRetailAreas,
  fetchRetailerCities: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.fetchRetailerCities,
  updateRetailerAreas: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.updateRetailerAreas,
  deleteRetailerArea: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.deleteRetailerArea,
  updateRetailerRegions: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.updateRetailerRegions,
  deleteRetailerRegions: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.deleteRetailerRegions,
  addRetailerCity: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.addRetailerCity,
  updateRetailerCity: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.updateRetailerCity,
  deleteRetailerCity: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.deleteRetailerCity
})(RetailerLocations));

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/ViewAreaRow.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/ViewAreaRow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewAreaRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ViewAreaRow(props) {
  var index = props.index,
      area = props.area,
      canManage = props.canManage,
      deleteRetailerArea = props.deleteRetailerArea,
      editViewCities = props.editViewCities;

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
      deleteRetailerArea(area.id);
    } else if (value == "Edit") {
      editViewCities(area);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, area.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, area.city != null ? area.city.name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
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

/***/ "./frontend/src/components/RetailerLocations/ViewAreas.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/ViewAreas.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewAreas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddViewAreaModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddViewAreaModal */ "./frontend/src/components/RetailerLocations/AddViewAreaModal.js");
/* harmony import */ var _EditAreaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditAreaModal */ "./frontend/src/components/RetailerLocations/EditAreaModal.js");
/* harmony import */ var _ViewAreaRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewAreaRow */ "./frontend/src/components/RetailerLocations/ViewAreaRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ViewAreas(props) {
  var areas = props.areas,
      addRetailAreas = props.addRetailAreas,
      cities = props.cities,
      fetchRetailerCities = props.fetchRetailerCities,
      canManage = props.canManage,
      updateRetailerAreas = props.updateRetailerAreas,
      deleteRetailerArea = props.deleteRetailerArea;

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
      viewArea = _useState6[0],
      setViewArea = _useState6[1];

  function fetchCities() {
    fetchRetailerCities();
    setShowModal(true);
  }

  function editViewCities(area) {
    fetchRetailerCities();
    setViewArea(area);
    setShowEditModal(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Areas"), canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return fetchCities();
    },
    className: "fas fa-plus"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, areas.map(function (area, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewAreaRow__WEBPACK_IMPORTED_MODULE_3__.default, {
      area: area,
      index: index,
      key: index,
      canManage: canManage,
      deleteRetailerArea: deleteRetailerArea,
      editViewCities: editViewCities
    });
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddViewAreaModal__WEBPACK_IMPORTED_MODULE_1__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    addRetailAreas: addRetailAreas,
    cities: cities
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditAreaModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showEditModal,
    handleModal: function handleModal() {
      return setShowEditModal(!showEditModal);
    },
    updateRetailerAreas: updateRetailerAreas,
    cities: cities,
    viewArea: viewArea
  }));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/ViewRegionRow.js":
/*!********************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/ViewRegionRow.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewRegionRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
/* harmony import */ var _RegionCitiesRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegionCitiesRow */ "./frontend/src/components/RetailerLocations/RegionCitiesRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function ViewRegionRow(_ref) {
  var region = _ref.region,
      index = _ref.index,
      canManage = _ref.canManage,
      deleteRetailerRegions = _ref.deleteRetailerRegions,
      viewEditRegion = _ref.viewEditRegion,
      addCity = _ref.addCity,
      editCity = _ref.editCity,
      deleteRetailerCity = _ref.deleteRetailerCity;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

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
      deleteRetailerRegions(region.id);
    } else if (value == "Edit") {
      viewEditRegion(region);
    }

    setAnchorEl(null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, region.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-up bg_themed"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-down bg_themed"
  })))), region.region_cities != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Region Cities"), canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return addCity(region);
    },
    className: "fas fa-plus btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, null, region.region_cities.map(function (city, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegionCitiesRow__WEBPACK_IMPORTED_MODULE_2__.default, {
      city: city,
      region: region,
      index: index,
      key: index,
      canManage: canManage,
      editCity: editCity,
      deleteRetailerCity: deleteRetailerCity
    });
  }))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/components/RetailerLocations/ViewRegions.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/RetailerLocations/ViewRegions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewRegions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _ViewRegionRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewRegionRow */ "./frontend/src/components/RetailerLocations/ViewRegionRow.js");
/* harmony import */ var _AddRegionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddRegionModal */ "./frontend/src/components/RetailerLocations/AddRegionModal.js");
/* harmony import */ var _EditRegionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditRegionModal */ "./frontend/src/components/RetailerLocations/EditRegionModal.js");
/* harmony import */ var _AddCityModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddCityModal */ "./frontend/src/components/RetailerLocations/AddCityModal.js");
/* harmony import */ var _EditCityModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditCityModal */ "./frontend/src/components/RetailerLocations/EditCityModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ViewRegions(_ref) {
  var retailer_regions = _ref.retailer_regions,
      addRetailRegions = _ref.addRetailRegions,
      canManage = _ref.canManage,
      updateRetailerRegions = _ref.updateRetailerRegions,
      deleteRetailerRegions = _ref.deleteRetailerRegions,
      addRetailerCity = _ref.addRetailerCity,
      updateRetailerCity = _ref.updateRetailerCity,
      deleteRetailerCity = _ref.deleteRetailerCity;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showEditModal = _useState4[0],
      setShowEditModal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showAddCityModal = _useState6[0],
      setShowAddCityModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showEditCityModal = _useState8[0],
      setShowEditCityModal = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      viewRegion = _useState10[0],
      setViewRegion = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      viewCity = _useState12[0],
      setViewCity = _useState12[1];

  function viewEditRegion(region) {
    setViewRegion(region);
    setShowEditModal(true);
  }

  function addCity(region) {
    setViewRegion(region);
    setShowAddCityModal(true);
  }

  function editCity(region, city) {
    setViewRegion(region);
    setViewCity(city);
    setShowEditCityModal(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "View Regions"), canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return setShowModal(true);
    },
    className: "fas fa-plus"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__.default, {
    "aria-label": "collapsible table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Cities"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, null, retailer_regions.map(function (region, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewRegionRow__WEBPACK_IMPORTED_MODULE_1__.default, {
      region: region,
      index: index,
      key: index,
      canManage: canManage,
      deleteRetailerRegions: deleteRetailerRegions,
      viewEditRegion: viewEditRegion,
      addCity: addCity,
      editCity: editCity,
      deleteRetailerCity: deleteRetailerCity
    });
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddRegionModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    addRetailRegions: addRetailRegions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditRegionModal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: showEditModal,
    handleModal: function handleModal() {
      return setShowEditModal(!showEditModal);
    },
    updateRetailerRegions: updateRetailerRegions,
    viewRegion: viewRegion
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddCityModal__WEBPACK_IMPORTED_MODULE_4__.default, {
    show: showAddCityModal,
    handleModal: function handleModal() {
      return setShowAddCityModal(!showAddCityModal);
    },
    region: viewRegion,
    addRetailerCity: addRetailerCity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditCityModal__WEBPACK_IMPORTED_MODULE_5__.default, {
    show: showEditCityModal,
    handleModal: function handleModal() {
      return setShowEditCityModal(!showEditCityModal);
    },
    region: viewRegion,
    city: viewCity,
    updateRetailerCity: updateRetailerCity
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

/***/ })

}]);
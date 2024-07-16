(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_utils_FormatCommas_js-frontend_src_utils_PermissionHandler_js-frontend_src_utils-9bab60"],{

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

/***/ "./frontend/src/utils/currencies.js":
/*!******************************************!*\
  !*** ./frontend/src/utils/currencies.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var viewCurrencies = [{
  cc: "AED",
  symbol: "\u062F.\u0625;",
  name: "UAE dirham"
}, {
  cc: "AFN",
  symbol: "Afs",
  name: "Afghan afghani"
}, {
  cc: "ALL",
  symbol: "L",
  name: "Albanian lek"
}, {
  cc: "AMD",
  symbol: "AMD",
  name: "Armenian dram"
}, {
  cc: "ANG",
  symbol: "NA\u0192",
  name: "Netherlands Antillean"
}, {
  cc: "AOA",
  symbol: "Kz",
  name: "Angolan kwanza"
}, {
  cc: "ARS",
  symbol: "$",
  name: "Argentine peso"
}, {
  cc: "AUD",
  symbol: "$",
  name: "Australian dollar"
}, {
  cc: "AWG",
  symbol: "\u0192",
  name: "Aruban florin"
}, {
  cc: "AZN",
  symbol: "AZN",
  name: "Azerbaijani manat"
}, {
  cc: "BAM",
  symbol: "KM",
  name: "Bosnia "
}, {
  cc: "BBD",
  symbol: "Bds$",
  name: "Barbadian dollar"
}, {
  cc: "BDT",
  symbol: "\u09F3",
  name: "Bangladeshi taka"
}, {
  cc: "BGN",
  symbol: "BGN",
  name: "Bulgarian lev"
}, {
  cc: "BHD",
  symbol: ".\u062F.\u0628",
  name: "Bahraini dinar"
}, {
  cc: "BIF",
  symbol: "FBu",
  name: "Burundi franc"
}, {
  cc: "BMD",
  symbol: "BD$",
  name: "Bermudian dollar"
}, {
  cc: "BND",
  symbol: "B$",
  name: "Brunei dollar"
}, {
  cc: "BOB",
  symbol: "Bs.",
  name: "Bolivian boliviano"
}, {
  cc: "BRL",
  symbol: "R$",
  name: "Brazilian real"
}, {
  cc: "BSD",
  symbol: "B$",
  name: "Bahamian dollar"
}, {
  cc: "BTN",
  symbol: "Nu.",
  name: "Bhutanese ngultrum"
}, {
  cc: "BWP",
  symbol: "P",
  name: "Botswana pula"
}, {
  cc: "BYR",
  symbol: "Br",
  name: "Belarusian ruble"
}, {
  cc: "BZD",
  symbol: "BZ$",
  name: "Belize dollar"
}, {
  cc: "CAD",
  symbol: "$",
  name: "Canadian dollar"
}, {
  cc: "CDF",
  symbol: "F",
  name: "Congolese franc"
}, {
  cc: "CHF",
  symbol: "Fr.",
  name: "Swiss franc"
}, {
  cc: "CLP",
  symbol: "$",
  name: "Chilean peso"
}, {
  cc: "CNY",
  symbol: "\xA5",
  name: "Chinese/Yuan renminbi"
}, {
  cc: "COP",
  symbol: "Col$",
  name: "Colombian peso"
}, {
  cc: "CRC",
  symbol: "\u20A1",
  name: "Costa Rican colon"
}, {
  cc: "CUC",
  symbol: "$",
  name: "Cuban peso"
}, {
  cc: "CVE",
  symbol: "Esc",
  name: "Cape Verdean escudo"
}, {
  cc: "CZK",
  symbol: "K\u010D",
  name: "Czech koruna"
}, {
  cc: "DJF",
  symbol: "Fdj",
  name: "Djiboutian franc"
}, {
  cc: "DKK",
  symbol: "Kr",
  name: "Danish krone"
}, {
  cc: "DOP",
  symbol: "RD$",
  name: "Dominican peso"
}, {
  cc: "DZD",
  symbol: "\u062F.\u062C",
  name: "Algerian dinar"
}, {
  cc: "EEK",
  symbol: "KR",
  name: "Estonian kroon"
}, {
  cc: "EGP",
  symbol: "\xA3",
  name: "Egyptian pound"
}, {
  cc: "ERN",
  symbol: "Nfa",
  name: "Eritrean nakfa"
}, {
  cc: "ETB",
  symbol: "Br",
  name: "Ethiopian birr"
}, {
  cc: "EUR",
  symbol: "\u20AC",
  name: "European Euro"
}, {
  cc: "FJD",
  symbol: "FJ$",
  name: "Fijian dollar"
}, {
  cc: "FKP",
  symbol: "\xA3",
  name: "Falkland Islands pound"
}, {
  cc: "GBP",
  symbol: "\xA3",
  name: "British pound"
}, {
  cc: "GEL",
  symbol: "GEL",
  name: "Georgian lari"
}, {
  cc: "GHS",
  symbol: "GH\u20B5",
  name: "Ghanaian cedi"
}, {
  cc: "GIP",
  symbol: "\xA3",
  name: "Gibraltar pound"
}, {
  cc: "GMD",
  symbol: "D",
  name: "Gambian dalasi"
}, {
  cc: "GNF",
  symbol: "FG",
  name: "Guinean franc"
}, {
  cc: "GQE",
  symbol: "CFA",
  name: "Central African CFA franc"
}, {
  cc: "GTQ",
  symbol: "Q",
  name: "Guatemalan quetzal"
}, {
  cc: "GYD",
  symbol: "GY$",
  name: "Guyanese dollar"
}, {
  cc: "HKD",
  symbol: "HK$",
  name: "Hong Kong dollar"
}, {
  cc: "HNL",
  symbol: "L",
  name: "Honduran lempira"
}, {
  cc: "HRK",
  symbol: "kn",
  name: "Croatian kuna"
}, {
  cc: "HTG",
  symbol: "G",
  name: "Haitian gourde"
}, {
  cc: "HUF",
  symbol: "Ft",
  name: "Hungarian forint"
}, {
  cc: "IDR",
  symbol: "Rp",
  name: "Indonesian rupiah"
}, {
  cc: "ILS",
  symbol: "\u20AA",
  name: "Israeli new sheqel"
}, {
  cc: "INR",
  symbol: "\u20B9",
  name: "Indian rupee"
}, {
  cc: "IQD",
  symbol: "\u062F.\u0639",
  name: "Iraqi dinar"
}, {
  cc: "IRR",
  symbol: "IRR",
  name: "Iranian rial"
}, {
  cc: "ISK",
  symbol: "kr",
  name: "Icelandic kr\xF3na"
}, {
  cc: "JMD",
  symbol: "J$",
  name: "Jamaican dollar"
}, {
  cc: "JOD",
  symbol: "JOD",
  name: "Jordanian dinar"
}, {
  cc: "JPY",
  symbol: "\xA5",
  name: "Japanese yen"
}, {
  cc: "KES",
  symbol: "KSh",
  name: "Kenyan shilling"
}, {
  cc: "KGS",
  symbol: "\u0441\u043E\u043C",
  name: "Kyrgyzstani som"
}, {
  cc: "KHR",
  symbol: "\u17DB",
  name: "Cambodian riel"
}, {
  cc: "KMF",
  symbol: "KMF",
  name: "Comorian franc"
}, {
  cc: "KPW",
  symbol: "W",
  name: "North Korean won"
}, {
  cc: "KRW",
  symbol: "W",
  name: "South Korean won"
}, {
  cc: "KWD",
  symbol: "KWD",
  name: "Kuwaiti dinar"
}, {
  cc: "KYD",
  symbol: "KY$",
  name: "Cayman dollar"
}, {
  cc: "KZT",
  symbol: "T",
  name: "Kazakhstani tenge"
}, {
  cc: "LAK",
  symbol: "KN",
  name: "Lao kip"
}, {
  cc: "LBP",
  symbol: "\xA3",
  name: "Lebanese lira"
}, {
  cc: "LKR",
  symbol: "Rs",
  name: "Sri Lankan rupee"
}, {
  cc: "LRD",
  symbol: "L$",
  name: "Liberian dollar"
}, {
  cc: "LSL",
  symbol: "M",
  name: "Lesotho loti"
}, {
  cc: "LTL",
  symbol: "Lt",
  name: "Lithuanian litas"
}, {
  cc: "LVL",
  symbol: "Ls",
  name: "Latvian lats"
}, {
  cc: "LYD",
  symbol: "LD",
  name: "Libyan dinar"
}, {
  cc: "MAD",
  symbol: "MAD",
  name: "Moroccan dirham"
}, {
  cc: "MDL",
  symbol: "MDL",
  name: "Moldovan leu"
}, {
  cc: "MGA",
  symbol: "FMG",
  name: "Malagasy ariary"
}, {
  cc: "MKD",
  symbol: "MKD",
  name: "Macedonian denar"
}, {
  cc: "MMK",
  symbol: "K",
  name: "Myanma kyat"
}, {
  cc: "MNT",
  symbol: "\u20AE",
  name: "Mongolian tugrik"
}, {
  cc: "MOP",
  symbol: "P",
  name: "Macanese pataca"
}, {
  cc: "MRO",
  symbol: "UM",
  name: "Mauritanian ouguiya"
}, {
  cc: "MUR",
  symbol: "Rs",
  name: "Mauritian rupee"
}, {
  cc: "MVR",
  symbol: "Rf",
  name: "Maldivian rufiyaa"
}, {
  cc: "MWK",
  symbol: "MK",
  name: "Malawian kwacha"
}, {
  cc: "MXN",
  symbol: "$",
  name: "Mexican peso"
}, {
  cc: "MYR",
  symbol: "RM",
  name: "Malaysian ringgit"
}, {
  cc: "MZM",
  symbol: "MTn",
  name: "Mozambican metical"
}, {
  cc: "NAD",
  symbol: "N$",
  name: "Namibian dollar"
}, {
  cc: "NGN",
  symbol: "\u20A6",
  name: "Nigerian naira"
}, {
  cc: "NIO",
  symbol: "C$",
  name: "Nicaraguan crdoba"
}, {
  cc: "NOK",
  symbol: "kr",
  name: "Norwegian krone"
}, {
  cc: "NPR",
  symbol: "NRs",
  name: "Nepalese rupee"
}, {
  cc: "NZD",
  symbol: "NZ$",
  name: "New Zealand dollar"
}, {
  cc: "OMR",
  symbol: "OMR",
  name: "Omani rial"
}, {
  cc: "PAB",
  symbol: "B./",
  name: "Panamanian balboa"
}, {
  cc: "PEN",
  symbol: "S/.",
  name: "Peruvian nuevo sol"
}, {
  cc: "PGK",
  symbol: "K",
  name: "Papua New Guinean kina"
}, {
  cc: "PHP",
  symbol: "\u20B1",
  name: "Philippine peso"
}, {
  cc: "PKR",
  symbol: "Rs.",
  name: "Pakistani rupee"
}, {
  cc: "PLN",
  symbol: "z\u0142",
  name: "Polish zloty"
}, {
  cc: "PYG",
  symbol: "\u20B2",
  name: "Paraguayan guarani"
}, {
  cc: "QAR",
  symbol: "QR",
  name: "Qatari riyal"
}, {
  cc: "RON",
  symbol: "L",
  name: "Romanian leu"
}, {
  cc: "RSD",
  symbol: "din.",
  name: "Serbian dinar"
}, {
  cc: "RUB",
  symbol: "R",
  name: "Russian ruble"
}, {
  cc: "SAR",
  symbol: "SR",
  name: "Saudi riyal"
}, {
  cc: "SBD",
  symbol: "SI$",
  name: "Solomon dollar"
}, {
  cc: "SCR",
  symbol: "SR",
  name: "Seychellois rupee"
}, {
  cc: "SDG",
  symbol: "SDG",
  name: "Sudanese pound"
}, {
  cc: "SEK",
  symbol: "kr",
  name: "Swedish krona"
}, {
  cc: "SGD",
  symbol: "S$",
  name: "Singapore dollar"
}, {
  cc: "SHP",
  symbol: "\xA3",
  name: "Saint Helena pound"
}, {
  cc: "SLL",
  symbol: "Le",
  name: "Sierra Leonean leone"
}, {
  cc: "SOS",
  symbol: "Sh.",
  name: "Somali shilling"
}, {
  cc: "SRD",
  symbol: "$",
  name: "Surinamese dollar"
}, {
  cc: "SYP",
  symbol: "LS",
  name: "Syrian pound"
}, {
  cc: "SZL",
  symbol: "E",
  name: "Swazi lilangeni"
}, {
  cc: "THB",
  symbol: "\u0E3F",
  name: "Thai baht"
}, {
  cc: "TJS",
  symbol: "TJS",
  name: "Tajikistani somoni"
}, {
  cc: "TMT",
  symbol: "m",
  name: "Turkmen manat"
}, {
  cc: "TND",
  symbol: "DT",
  name: "Tunisian dinar"
}, {
  cc: "TRY",
  symbol: "TRY",
  name: "Turkish new lira"
}, {
  cc: "TTD",
  symbol: "TT$",
  name: "Trinidad dollar"
}, {
  cc: "TWD",
  symbol: "NT$",
  name: "New Taiwan dollar"
}, {
  cc: "TZS",
  symbol: "TZS",
  name: "Tanzanian shilling"
}, {
  cc: "UAH",
  symbol: "UAH",
  name: "Ukrainian hryvnia"
}, {
  cc: "UGX",
  symbol: "USh",
  name: "Ugandan shilling"
}, {
  cc: "USD",
  symbol: "US$",
  name: "United States dollar"
}, {
  cc: "UYU",
  symbol: "$U",
  name: "Uruguayan peso"
}, {
  cc: "UZS",
  symbol: "UZS",
  name: "Uzbekistani som"
}, {
  cc: "VEB",
  symbol: "Bs",
  name: "Venezuelan bolivar"
}, {
  cc: "VND",
  symbol: "\u20AB",
  name: "Vietnamese dong"
}, {
  cc: "VUV",
  symbol: "VT",
  name: "Vanuatu vatu"
}, {
  cc: "WST",
  symbol: "WS$",
  name: "Samoan tala"
}, {
  cc: "XAF",
  symbol: "CFA",
  name: "Central African franc"
}, {
  cc: "XCD",
  symbol: "EC$",
  name: "East Caribbean dollar"
}, {
  cc: "XDR",
  symbol: "SDR",
  name: "Special Drawing Rights"
}, {
  cc: "XOF",
  symbol: "CFA",
  name: "West African CFA franc"
}, {
  cc: "XPF",
  symbol: "F",
  name: "CFP franc"
}, {
  cc: "YER",
  symbol: "YER",
  name: "Yemeni rial"
}, {
  cc: "ZAR",
  symbol: "R",
  name: "South African rand"
}, {
  cc: "ZMK",
  symbol: "ZK",
  name: "Zambian kwacha"
}, {
  cc: "ZWR",
  symbol: "Z$",
  name: "Zimbabwean dollar"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewCurrencies);

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

/***/ "./frontend/src/widgets/CustomViewCurrenciesPopUp.js":
/*!***********************************************************!*\
  !*** ./frontend/src/widgets/CustomViewCurrenciesPopUp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomViewCurrenciesPopUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var ITEM_HEIGHT = 48;
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
    },
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5
      }
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
function CustomViewCurrenciesPopUp(props) {
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
      className: "bg_themed",
      key: index,
      onClick: function onClick() {
        return handlePopUpClick(popUpItem.cc);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
      primary: popUpItem.cc
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
      primary: popUpItem.name
    }));
  }));
}

/***/ })

}]);
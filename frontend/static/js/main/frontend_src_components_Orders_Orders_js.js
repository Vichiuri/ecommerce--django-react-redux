(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Orders_Orders_js"],{

/***/ "./frontend/src/components/Orders/AddNoteModal.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Orders/AddNoteModal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddNoteModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function AddNoteModal(_ref) {
  var sendNoteMessage = _ref.sendNoteMessage,
      show = _ref.show,
      handleModal = _ref.handleModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      note = _useState2[0],
      setNote = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {
    show: show,
    onHide: handleModal,
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Header, {
    className: "card-header bg_themed",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Title, {
    id: "contained-modal-title-vcenter"
  }, "Add Note")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    rows: "4",
    className: "form-control",
    placeholder: "Add reference note",
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    },
    autoFocus: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Footer, {
    className: "bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success btn-block mr-2 ml-2",
    onClick: function onClick() {
      sendNoteMessage(note);
      setNote("");
      handleModal();
    }
  }, "Submit Reason")));
}

/***/ }),

/***/ "./frontend/src/components/Orders/AddOrder.js":
/*!****************************************************!*\
  !*** ./frontend/src/components/Orders/AddOrder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _PlaceOrderTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlaceOrderTable */ "./frontend/src/components/Orders/PlaceOrderTable.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function AddOrder(props) {
  var changePage = props.changePage,
      products = props.products,
      fetchPlaceOrders = props.fetchPlaceOrders,
      place_orders = props.place_orders,
      addOrder = props.addOrder,
      deleteOrder = props.deleteOrder,
      offers = props.offers,
      fetchPriceOffers = props.fetchPriceOffers,
      addRetailerOrder = props.addRetailerOrder,
      updateOrder = props.updateOrder,
      setResponse = props.setResponse;
  var paymentTerms = ["Cash", "Mobile Money (M-pesa)", "Debit Cards", "Credit Cards", "Cheque"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      retailer = _useState2[0],
      setRetailer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      salePerson = _useState4[0],
      setSalesPerson = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      level = _useState6[0],
      setLevel = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      payment = _useState8[0],
      setPayment = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      responseMessage = _useState12[0],
      setResponseMessage = _useState12[1];

  function uploadOrder(product, qty, order_price, viewOffers, free_qty, per_price) {
    setIsError(null);
    setResponseMessage("");

    if (retailer && payment && qty && level && product && order_price) {
      addOrder({
        product_id: product,
        // ! Current Retailer is of retailer type modal
        retailer_id: retailer.value.retailer.id,
        level: level.value.id,
        qty: qty,
        order_price: order_price,
        price_offers: viewOffers,
        free_qty: free_qty,
        per_price: per_price
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else if (!qty) {
      setIsError(true);
      setResponseMessage("Please input product quantity");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

  function changeRetailer(value) {
    if (value.value.salesman) {
      var salesman = {
        value: value.value.salesman,
        label: value.value.salesman.last_name ? "".concat(value.value.salesman.first_name, " ").concat(value.value.salesman.last_name) : value.value.salesman.first_name
      };
      setSalesPerson(salesman);
    }

    if (value.value.price_level) {
      var price_level = {
        value: value.value.price_level,
        label: value.value.price_level.level_name
      };
      setLevel(price_level);
    }

    fetchPlaceOrders(1, value.value.retailer.id);
  }

  function uploadRetailOrder(total, order_ids, viewOffers) {
    setIsError(null);
    setResponseMessage("");

    if (retailer && payment && salePerson && level) {
      console.log(salePerson);
      addRetailerOrder({
        // ! Current Retailer is of retailer type modal
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        total_cost: total,
        order_ids: order_ids,
        payment_terms: payment,
        level: level.value.id,
        viewOffers: viewOffers
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__.default, {
    prevPropsName: "Orders",
    propsName: "Add Order",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Retailer*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a retailer"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: retailer,
    setValue: function setValue(value) {
      setRetailer(value);
      changeRetailer(value);
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.fetchSelectRetailer,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Sales Person*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a salesperson"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: salePerson,
    setValue: function setValue(value) {
      return setSalesPerson(value);
    },
    fetchData: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_3__.fetchSelectSalesPeople,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Price Level* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a Price Level"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: level,
    setValue: function setValue(value) {
      return setLevel(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectPriceLevel,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Payment Terms* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a Payment Term"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: payment,
    onChange: function onChange(e) {
      return setPayment(e.target.value);
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), paymentTerms.map(function (term, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: term
    }, term);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlaceOrderTable__WEBPACK_IMPORTED_MODULE_7__.default, {
    place_orders: place_orders,
    deleteOrder: deleteOrder,
    uploadRetailOrder: uploadRetailOrder,
    products: products,
    offers: offers,
    fetchPriceOffers: fetchPriceOffers,
    uploadOrder: uploadOrder,
    updateOrder: updateOrder,
    level: level ? level.value.id : ""
  }))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/DispatchOrder.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Orders/DispatchOrder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DispatchOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _DispatchOrderTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DispatchOrderTable */ "./frontend/src/components/Orders/DispatchOrderTable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function DispatchOrder(props) {
  var changePage = props.changePage,
      order = props.order,
      dispatchOrder = props.dispatchOrder,
      dispatchPartialOrder = props.dispatchPartialOrder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      v_number = _useState6[0],
      setVNumber = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      note = _useState8[0],
      setNote = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      responseMessage = _useState12[0],
      setResponseMessage = _useState12[1];

  function createDispatch() {
    setIsError(null);
    setResponseMessage("");

    if (name && phone && v_number && note) {
      dispatchOrder({
        order_id: order.id,
        vehicle_no: v_number,
        transporter_name: name,
        transporter_phone: phone,
        remarks: note
      });
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input driver name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input driver phone number");
    } else if (!v_number) {
      setIsError(true);
      setResponseMessage("Please input vehicle ");
    } else if (!note) {
      setIsError(true);
      setResponseMessage("Please input reference note");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  function createPartialOrder(orders) {
    setIsError(null);
    setResponseMessage("");

    if (name && phone && v_number && note) {
      var order_items = orders.map(function (item) {
        return {
          id: item.id,
          total_qty: item.total_qty
        };
      });
      dispatchPartialOrder({
        order_id: order.id,
        vehicle_no: v_number,
        transporter_name: name,
        transporter_phone: phone,
        remarks: note,
        orders: JSON.stringify(order_items)
      });
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input driver name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input driver phone number");
    } else if (!v_number) {
      setIsError(true);
      setResponseMessage("Please input vehicle ");
    } else if (!note) {
      setIsError(true);
      setResponseMessage("Please input reference note");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Dispatch Order (Reference number #", order ? order.ref_number : "", ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__.default, {
    prevPropsName: "Orders",
    propsName: "Dispatch Order",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, "Transport Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Driver Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input driver name",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Phone Number*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input phone number",
    name: "phone",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Vehicle Plate*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input plate number",
    name: "v_number",
    value: v_number,
    onChange: function onChange(e) {
      return setVNumber(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Reference Note*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please input reference note",
    name: "note",
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, "Retailer Details"), order && order.retailer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Retailer Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control bg_themed",
    placeholder: "Please input driver name",
    name: "name",
    value: order.retailer.contact_name,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Phone Number*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control bg_themed",
    placeholder: "Please input phone number",
    name: "phone",
    value: order.retailer.contact_phone,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Retailer Email*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control bg_themed",
    placeholder: "Please input plate number",
    name: "v_number",
    value: order.retailer.contact_email,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control bg_themed",
    name: "note",
    value: order.retailer.city ? order.retailer.city.name : "",
    disabled: true
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DispatchOrderTable__WEBPACK_IMPORTED_MODULE_3__.default, {
    ret_orders: order ? order.ret_orders : [],
    createDispatch: createDispatch,
    createPartialOrder: createPartialOrder
  })))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/DispatchOrderRow.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/Orders/DispatchOrderRow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DispatchOrderRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function DispatchOrderRow(_ref) {
  var index = _ref.index,
      order = _ref.order,
      updateQty = _ref.updateQty;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      qty = _useState4[0],
      setQty = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setQty(order.total_qty);
  }, [order]);

  function getRemaining() {
    var pQuantity = order.qty;
    var pFree = order.free_qty;
    var pDelivered = order.delivered_qty;
    var remaining = pQuantity + pFree - pDelivered;
    return remaining;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%"
  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, order.product != null ? order.product.name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Please input product quantity",
    name: "qty",
    value: qty,
    onChange: function onChange(e) {
      if (order.initialValue) {
        if (e.target.value <= order.initialValue) {
          setQty(e.target.value);
        } else {
          setQty(order.initialValue);
        }
      } else {
        if (e.target.value <= order.total_qty) {
          setQty(e.target.value);
        } else {
          setQty(order.total_qty);
        }
      }
    },
    onKeyDown: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__.default)(function (e) {
      updateQty(order.id, e.target.value);
    }, 2000),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, order.qty + order.free_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, order.delivered_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%"
  }, getRemaining())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__.default, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Offers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Scheme"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__.default, null, order.price_offers.map(function (offer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "offer_order_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: offer.pic ? "..".concat(offer.pic) : "../static/images/logo.svg",
      alt: "offer logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.detail_name ? offer.detail_name : ""));
  }))))))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/DispatchOrderTable.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/Orders/DispatchOrderTable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DispatchOrderTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DispatchOrderRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispatchOrderRow */ "./frontend/src/components/Orders/DispatchOrderRow.js");
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



function DispatchOrderTable(props) {
  var ret_orders = props.ret_orders,
      createDispatch = props.createDispatch,
      createPartialOrder = props.createPartialOrder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      orders = _useState2[0],
      setOrders = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var newArray = _toConsumableArray(ret_orders.filter(function (item) {
      return item.delivered == false;
    }));

    setOrders(newArray);
  }, [ret_orders]);

  function checkDispatch() {
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];

      if (order.initialValue && order.initialValue != order.total_qty) {
        return createPartialOrder(orders);
      }
    }

    return createDispatch();
  }

  function updateQty(id, qty) {
    if (qty) {
      var newArray = orders.map(function (item) {
        var viewItem = item;

        if (viewItem.id == id) {
          if (!viewItem.initialValue) {
            viewItem.initialValue = viewItem.total_qty;
          }

          viewItem.total_qty = parseFloat(qty);
        }

        return viewItem;
      });
      setOrders(newArray);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "View Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return checkDispatch();
    },
    className: "btn btn-success btn-large"
  }, "Dispatch Order"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Product *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Quantity to dispatch *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Total Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Delivered Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Remaining Products"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, orders ? orders.map(function (view_order, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DispatchOrderRow__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: index,
      index: index,
      order: view_order,
      updateQty: updateQty
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/EditOrder.js":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Orders/EditOrder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _PlaceOrderTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlaceOrderTable */ "./frontend/src/components/Orders/PlaceOrderTable.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
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










function EditOrder(props) {
  var retail_order = props.retail_order,
      changePage = props.changePage,
      products = props.products,
      retailers = props.retailers,
      fetchPlaceOrders = props.fetchPlaceOrders,
      sales_people = props.sales_people,
      levels = props.levels,
      updateAddRetailOrder = props.updateAddRetailOrder,
      updateEditRetailOrder = props.updateEditRetailOrder,
      deleteOrder = props.deleteOrder,
      offers = props.offers,
      fetchPriceOffers = props.fetchPriceOffers,
      addRetailerOrder = props.addRetailerOrder,
      updateOrder = props.updateOrder,
      updateDeleteRetailOrder = props.updateDeleteRetailOrder,
      place_orders = props.place_orders,
      setResponse = props.setResponse;
  var paymentTerms = ["Cash", "Mobile Money (M-pesa)", "Debit Cards", "Credit Cards", "Cheque"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      retailer = _useState2[0],
      setRetailer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      salePerson = _useState4[0],
      setSalesPerson = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      level = _useState6[0],
      setLevel = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(paymentTerms[0]),
      _useState8 = _slicedToArray(_useState7, 2),
      payment = _useState8[0],
      setPayment = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      responseMessage = _useState12[0],
      setResponseMessage = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (retail_order) {
      var view_retailer = {
        value: retail_order.retailer,
        label: retail_order.retailer.contact_name
      };
      var salesman = {
        value: retail_order.salesman,
        label: retail_order.salesman.last_name ? "".concat(retail_order.salesman.first_name, " ").concat(retail_order.salesman.last_name) : retail_order.salesman.first_name
      };

      if (retail_order.price_level) {
        var price_level = {
          value: retail_order.price_level,
          label: retail_order.price_level.level_name
        };
        setLevel(price_level);
      }

      setRetailer(view_retailer);
      setSalesPerson(salesman);
      setPayment(retail_order.payment_terms);
    }
  }, [retailers, sales_people, retail_order]);

  function uploadOrder(product, qty, order_price, viewOffers, free_qty, per_price) {
    setIsError(null);
    setResponseMessage("");

    if (retailer && payment && qty && level && product && order_price && per_price) {
      updateAddRetailOrder({
        product_id: product,
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        qty: qty,
        order_price: order_price,
        price_offers: viewOffers,
        ret_id: retail_order.id,
        level: level ? level.value.id : "",
        per_price: per_price,
        free_qty: free_qty
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else if (!qty) {
      setIsError(true);
      setResponseMessage("Please input product quantity");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

  function changeRetailer(value) {
    fetchPlaceOrders(1, value);
  }

  function uploadRetailOrder(total, order_ids, viewOffers) {
    setIsError(null);
    setResponseMessage("");

    if (retailer && payment && salePerson && level) {
      addRetailerOrder({
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        total_cost: total,
        order_ids: order_ids,
        payment_terms: payment,
        level: level ? level.value.id : "",
        viewOffers: viewOffers
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__.default, {
    prevPropsName: "Orders",
    propsName: "Edit Order",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_4__.default, {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Retailer* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a retailer"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: retailer,
    setValue: function setValue(value) {
      setRetailer(value);
      changeRetailer(value);
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_2__.fetchSelectRetailer,
    closeMenuOnSelect: true,
    isDisabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Sales Person* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a salesperson"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: salePerson,
    setValue: function setValue(value) {
      return setSalesPerson(value);
    },
    fetchData: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_3__.fetchSelectSalesPeople,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Price Level* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a Price Level"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
    isMulti: false,
    value: level,
    setValue: function setValue(value) {
      return setLevel(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_1__.fetchSelectPriceLevel,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 form-group  mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Payment Terms*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Choose a Payment Term"
  }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: payment,
    onChange: function onChange(e) {
      return setPayment(e.target.value);
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), paymentTerms.map(function (term, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: term
    }, term);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlaceOrderTable__WEBPACK_IMPORTED_MODULE_7__.default, {
    place_orders: place_orders,
    deleteOrder: function deleteOrder(id) {
      var offers = [];

      for (var index = 0; index < place_orders.length; index++) {
        var order = place_orders[index];

        if (order.id != id) {
          Array.prototype.push.apply(offers, _toConsumableArray(order.price_offers.map(function (item) {
            return item.id;
          })));
        }
      }

      updateDeleteRetailOrder({
        order_id: id,
        ret_id: retail_order.id,
        viewOffers: offers
      });
    },
    uploadRetailOrder: uploadRetailOrder,
    products: products,
    offers: offers,
    fetchPriceOffers: fetchPriceOffers,
    uploadOrder: uploadOrder,
    updateOrder: function updateOrder(viewOrder) {
      var total = 0;
      var offers = [];

      for (var index = 0; index < place_orders.length; index++) {
        var order = place_orders[index];

        if (order.id != viewOrder.id) {
          Array.prototype.push.apply(offers, _toConsumableArray(order.price_offers.map(function (item) {
            return item.id;
          })));
          total += parseFloat(order.order_price);
        }
      }

      Array.prototype.push.apply(offers, _toConsumableArray(viewOrder.price_offers));
      total += parseFloat(viewOrder.order_price);
      updateEditRetailOrder({
        id: viewOrder.id,
        product_id: viewOrder.product_id,
        retailer_id: viewOrder.retailer_id,
        qty: viewOrder.qty,
        order_price: viewOrder.order_price,
        price_offers: viewOrder.price_offers,
        per_price: viewOrder.per_price,
        ret_id: retail_order.id,
        viewOffers: offers,
        free_qty: viewOrder.free_qty,
        total: total,
        level: level ? level.value.id : ""
      });
    },
    level: level ? level.value.id : "",
    isEdit: true
  }))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/OrderTable.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Orders/OrderTable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _OrderTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderTableRow */ "./frontend/src/components/Orders/OrderTableRow.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! export-to-csv */ "./node_modules/export-to-csv/build/index.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _OrdersNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrdersNavBar */ "./frontend/src/components/Orders/OrdersNavBar.js");
/* harmony import */ var _ViewOrderDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewOrderDetails */ "./frontend/src/components/Orders/ViewOrderDetails.js");
/* harmony import */ var _widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomPagination */ "./frontend/src/widgets/CustomPagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function OrderTable(props) {
  var changePage = props.changePage,
      orders = props.orders,
      fetchOrders = props.fetchOrders,
      deleteRetailOrder = props.deleteRetailOrder,
      deleteOrder = props.deleteOrder,
      updateRetailerOrderStatus = props.updateRetailerOrderStatus,
      dispatchOrder = props.dispatchOrder,
      searchOrders = props.searchOrders,
      viewEditOrder = props.viewEditOrder,
      canManage = props.canManage,
      viewOrderLogs = props.viewOrderLogs,
      fetchRetDistOrder = props.fetchRetDistOrder,
      ret_order = props.ret_order,
      fetchRetDispatchOrder = props.fetchRetDispatchOrder,
      viewKey = props.viewKey,
      pageDetails = props.pageDetails,
      clearRetailOrderApproved = props.clearRetailOrderApproved,
      cancelRetailOrder = props.cancelRetailOrder;
  var options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "My Awesome CSV",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showModal = _useState4[0],
      setShowModal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      currentIndex = _useState8[0],
      _setCurrentIndex = _useState8[1];

  var ordersTypes = [{
    name: "All",
    status: ""
  }, {
    name: "Pending",
    status: "Pending"
  }, {
    name: "On Hold",
    status: "On Hold"
  }, {
    name: "Approved",
    status: "Approved"
  }, {
    name: "Partial",
    status: "Partial"
  }, {
    name: "Dispatched",
    status: "Dispatched"
  }, {
    name: "Declined",
    status: "Declined"
  }, {
    name: "Cancelled",
    status: "CANCELED"
  }];

  function viewCurrentOrder(order) {
    fetchRetDispatchOrder(order.id);
    setShowModal(true);
  }

  function onChangeRows(viewRows) {
    fetchOrders(1, ordersTypes[currentIndex].status, viewRows, query);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchOrders(page, ordersTypes[currentIndex].status, rows, query);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _setCurrentIndex(1);

    fetchOrders(1, ordersTypes[1].status);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrdersNavBar__WEBPACK_IMPORTED_MODULE_4__.default, {
    fetchOrders: fetchOrders,
    key: viewKey,
    currentIndex: currentIndex,
    ordersTypes: ordersTypes,
    setCurrentIndex: function setCurrentIndex(index) {
      return _setCurrentIndex(index);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg_themed container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6 form-group p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control border-right-0 ",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__.default)(function () {
      if (query) {
        fetchOrders(1, ordersTypes[currentIndex].status, rows, query); // searchOrders(query);
      } else {
        fetchOrders(1, ordersTypes[currentIndex].status, rows, "");
      }
    }, 2000),
    placeholder: "Search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text border-left-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ml-1 fas fa-search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex"
  }, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return changePage(2);
    },
    className: "btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
  }, "Add Order") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      var csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_2__.ExportToCsv(options);
      var generatedOrders = [];

      for (var index = 0; index < orders.length; index++) {
        var order = orders[index];
        var orderItem = {
          id: order.id,
          retailer: order.retailer.name,
          salesman: order.salesman ? order.salesman.last_name ? "".concat(order.salesman.first_name, " ").concat(order.salesman.last_name) : order.salesman.first_name : "",
          offer: order.offers[0] ? order.offers[0].detail_name : "No Offer",
          total: order.total_cost,
          status: order.status
        };
        generatedOrders.push(orderItem);
      }

      csvExporter.generateCsv(generatedOrders);
    },
    className: "btn btn-success btn-lg table_menu_btn mb-3 mr-2"
  }, "Export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
    "aria-label": "collapsible "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort ml-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Reference No.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort ml-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Retailer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Salesman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "row justify-content-end mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort mr-2"
  }), "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, null, orders.map(function (order, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrderTableRow__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: index,
      order: order,
      index: index + 1,
      deleteRetailOrder: deleteRetailOrder,
      updateRetailerOrderStatus: updateRetailerOrderStatus,
      dispatchOrder: dispatchOrder,
      viewEditOrder: viewEditOrder,
      canManage: canManage,
      viewOrderLogs: viewOrderLogs,
      fetchRetDistOrder: fetchRetDistOrder,
      viewCurrentOrder: viewCurrentOrder,
      clearRetailOrderApproved: clearRetailOrderApproved,
      cancelRetailOrder: cancelRetailOrder
    });
  }))))), pageDetails.last_page && pageDetails.last_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPagination__WEBPACK_IMPORTED_MODULE_6__.default, {
    rows: rows,
    changeRows: onChangeRows,
    pageDetails: pageDetails,
    changePage: onChangePage
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOrderDetails__WEBPACK_IMPORTED_MODULE_5__.default, {
    order: ret_order,
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    dispatchOrder: dispatchOrder,
    updateRetailerOrderStatus: updateRetailerOrderStatus
  }));
}

/***/ }),

/***/ "./frontend/src/components/Orders/OrderTableRow.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Orders/OrderTableRow.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderTableRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _utils_FormatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatDate */ "./frontend/src/utils/FormatDate.js");
/* harmony import */ var _widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomPopUpMenu */ "./frontend/src/widgets/CustomPopUpMenu.js");
/* harmony import */ var _AddNoteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddNoteModal */ "./frontend/src/components/Orders/AddNoteModal.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
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












function OrderTableRow(props) {
  var order = props.order,
      index = props.index,
      deleteRetailOrder = props.deleteRetailOrder,
      updateRetailerOrderStatus = props.updateRetailerOrderStatus,
      dispatchOrder = props.dispatchOrder,
      viewEditOrder = props.viewEditOrder,
      canManage = props.canManage,
      viewOrderLogs = props.viewOrderLogs,
      fetchRetDistOrder = props.fetchRetDistOrder,
      viewCurrentOrder = props.viewCurrentOrder,
      clearRetailOrderApproved = props.clearRetailOrderApproved,
      cancelRetailOrder = props.cancelRetailOrder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      viewStatus = _useState8[0],
      setViewStatus = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOpen(false);
  }, [order]);
  var popUpItems = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-eye btn_type"
    }),
    name: "View",
    value: "View"
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-clipboard btn_type"
    }),
    name: "Logs",
    value: "Logs"
  }];

  if (order.status == "Pending") {
    popUpItems = [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-thumbs-up btn_type text-success"
      }),
      name: "Approve",
      value: "Approve"
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-hand-paper btn_type"
      }),
      name: "Hold",
      value: "Hold"
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-window-close btn_type"
      }),
      name: "Decline",
      value: "Decline"
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
    }].concat(_toConsumableArray(popUpItems));
  } else if (order.status == "On Hold") {
    popUpItems = [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-thumbs-up btn_type"
      }),
      name: "Release",
      value: "Release"
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
    }].concat(_toConsumableArray(popUpItems));
  } else if (order.status == "Approved") {
    popUpItems = [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-truck btn_type text-success"
      }),
      name: "Dispatch",
      value: "Dispatch"
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-thumbs-down btn_type"
      }),
      name: "Disapprove",
      value: "Disapprove"
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-ban btn_type"
      }),
      name: "Cancel",
      value: "Cancel"
    }].concat(_toConsumableArray(popUpItems));
  } else if (order.status == "Partial") {
    popUpItems = [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-truck btn_type text-success"
      }),
      name: "Dispatch",
      value: "Dispatch"
    }].concat(_toConsumableArray(popUpItems));
  }

  var popUpValues = {
    anchorEl: anchorEl,
    popUpItems: popUpItems
  };

  function handlePopClick(value) {
    if (value == "Delete") {
      deleteRetailOrder(order.id);
    } else if (value == "Edit") {
      viewEditOrder(order);
    } else if (value == "Approve") {
      updateRetailerOrderStatus({
        id: order.id,
        status: "Approved",
        note: ""
      });
    } else if (value == "Hold") {
      setShowModal(true);
      setViewStatus("On Hold");
    } else if (value == "Release") {
      updateRetailerOrderStatus({
        id: order.id,
        status: "Release",
        note: ""
      });
    } else if (value == "Decline") {
      setShowModal(true);
      setViewStatus("Declined");
    } else if (value == "Logs") {
      viewOrderLogs(order.id);
    } else if (value == "Dispatch") {
      dispatchOrder(order);
    } else if (value == "View") {
      viewCurrentOrder(order);
    } else if (value == "Disapprove") {
      console.log("called here");
      clearRetailOrderApproved({
        id: order.id
      });
    } else if (value == "Cancel") {
      cancelRetailOrder({
        id: order.id
      });
    }

    setAnchorEl(null);
  }

  function sendNoteMessage(note) {
    updateRetailerOrderStatus({
      id: order.id,
      status: viewStatus,
      note: note
    });
  }

  function calculateRemaining(total, delivered) {
    return total - delivered;
  }

  function fetchRetOrders() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      fetchRetDistOrder(1, order.id);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, (0,_utils_FormatDate__WEBPACK_IMPORTED_MODULE_1__.default)(order.when_placed)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "#", order.ref_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, order.retailer ? order.retailer.contact_name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, order.salesman ? order.salesman.last_name ? "".concat(order.salesman.first_name, " ").concat(order.salesman.last_name) : order.salesman.first_name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "row justify-content-end mr-1"
  }, order.total_cost_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__.default)(order.total_cost)), order.status == "Pending" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-warning"
  }), "Pending")) : order.status == "On Hold" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-warning"
  }), "On Hold")) : order.status == "Approved" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Approved")) : order.status == "Dispatched" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-success"
  }), "Dispatched")) : order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-warning"
  }), "Partial")) : order.status == "CANCELED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bg-danger"
  }), "Cancelled")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: " bg-danger"
  }), "Declined")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return fetchRetOrders();
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-up bg_themed"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-down bg_themed"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, canManage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    className: "fas fa-ellipsis-h btn_type"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__.default, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Order Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Free"), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Delivered") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Remaining") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-right"
  }, "Total price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__.default, null, order.dist_orders ? order.dist_orders.map(function (retail, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, retail.free_qty ? retail.free_qty + retail.qty : retail.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, retail.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, retail.free_qty ? retail.free_qty : 0), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, retail.delivered_qty) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, calculateRemaining(retail.free_qty ? retail.free_qty + retail.qty : retail.qty, retail.delivered_qty)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-right"
    }, retail.order_price_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__.default)(retail.order_price)));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomPopUpMenu__WEBPACK_IMPORTED_MODULE_2__.default, {
    popUpValues: popUpValues,
    handlePopUpClick: handlePopClick,
    handlePopUp: function handlePopUp(e) {
      return anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddNoteModal__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    sendNoteMessage: sendNoteMessage
  }));
}

/***/ }),

/***/ "./frontend/src/components/Orders/Orders.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/Orders/Orders.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderTable */ "./frontend/src/components/Orders/OrderTable.js");
/* harmony import */ var _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Orders */ "./frontend/src/redux/Actions/Orders.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Delivery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/Delivery */ "./frontend/src/redux/Actions/Delivery.js");
/* harmony import */ var _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/Sales */ "./frontend/src/redux/Actions/Sales.js");
/* harmony import */ var _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/Actions/Offers */ "./frontend/src/redux/Actions/Offers.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _AddOrder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddOrder */ "./frontend/src/components/Orders/AddOrder.js");
/* harmony import */ var _Orders_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Orders.css */ "./frontend/src/components/Orders/Orders.css");
/* harmony import */ var _DispatchOrder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DispatchOrder */ "./frontend/src/components/Orders/DispatchOrder.js");
/* harmony import */ var _EditOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EditOrder */ "./frontend/src/components/Orders/EditOrder.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _ViewOrderLogs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ViewOrderLogs */ "./frontend/src/components/Orders/ViewOrderLogs.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



















var Orders = /*#__PURE__*/function (_Component) {
  _inherits(Orders, _Component);

  var _super = _createSuper(Orders);

  function Orders(props) {
    var _this;

    _classCallCheck(this, Orders);

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
      viewKey: 1,
      viewOrder: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.dispatchOrder = _this.dispatchOrder.bind(_assertThisInitialized(_this));
    _this.viewEditOrder = _this.viewEditOrder.bind(_assertThisInitialized(_this));
    _this.viewOrderLogs = _this.viewOrderLogs.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Orders, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) {
        if (message.status == 201) {
          // this.props.fetchOrders(1, "");
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
      // this.props.fetchOrders(1, "");
      this.props.clearPlaceOrderTable();
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      if (this.state.currentPage == 2 || this.state.currentPage == 4) {
        this.props.clearPlaceOrderTable();
      }

      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "viewOrderLogs",
    value: function viewOrderLogs(id) {
      this.props.fetchOrderLogs(id);
      this.setState({
        currentPage: 5
      });
    }
  }, {
    key: "viewEditOrder",
    value: function viewEditOrder(order) {
      this.props.fetchEditRetDistOrders(1, order.id);
      this.setState({
        viewOrder: order,
        currentPage: 4
      });
    }
  }, {
    key: "dispatchOrder",
    value: function dispatchOrder(order) {
      this.props.fetchRetDispatchOrder(order.id);
      this.setState({
        currentPage: 3
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
      var _React$createElement;

      var _this$props2 = this.props,
          ordersReducer = _this$props2.ordersReducer,
          fetchOrders = _this$props2.fetchOrders,
          productsReducer = _this$props2.productsReducer,
          retailersReducer = _this$props2.retailersReducer,
          fetchPlaceOrders = _this$props2.fetchPlaceOrders,
          salesReducer = _this$props2.salesReducer,
          addOrder = _this$props2.addOrder,
          deleteOrder = _this$props2.deleteOrder,
          offersReducer = _this$props2.offersReducer,
          fetchPriceOffers = _this$props2.fetchPriceOffers,
          addRetailerOrder = _this$props2.addRetailerOrder,
          deleteRetailOrder = _this$props2.deleteRetailOrder,
          updateRetailerOrderStatus = _this$props2.updateRetailerOrderStatus,
          editRetailerOrder = _this$props2.editRetailerOrder,
          updateOrder = _this$props2.updateOrder,
          deliveryReducer = _this$props2.deliveryReducer,
          dispatchOrder = _this$props2.dispatchOrder,
          searchOrders = _this$props2.searchOrders,
          auth = _this$props2.auth,
          updateAddRetailOrder = _this$props2.updateAddRetailOrder,
          updateEditRetailOrder = _this$props2.updateEditRetailOrder,
          updateDeleteRetailOrder = _this$props2.updateDeleteRetailOrder,
          dispatchPartialOrder = _this$props2.dispatchPartialOrder,
          fetchRetDistOrder = _this$props2.fetchRetDistOrder,
          fetchRetDispatchOrder = _this$props2.fetchRetDispatchOrder,
          clearRetailOrderApproved = _this$props2.clearRetailOrderApproved,
          cancelRetailOrder = _this$props2.cancelRetailOrder;
      var orders = ordersReducer.orders,
          isLoading = ordersReducer.isLoading,
          place_orders = ordersReducer.place_orders,
          order_logs = ordersReducer.order_logs,
          ret_order = ordersReducer.ret_order,
          orders_current_page = ordersReducer.orders_current_page,
          orders_last_Page = ordersReducer.orders_last_Page;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          viewOrder = _this$state.viewOrder,
          viewKey = _this$state.viewKey;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_orders) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_15__.default)(this.props.auth.group.permission);
      }

      var orders_page_details = {
        current_page: orders_current_page,
        last_page: orders_last_Page
      };

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrderTable__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            orders: orders,
            fetchOrders: fetchOrders,
            deleteRetailOrder: deleteRetailOrder,
            deleteOrder: deleteOrder,
            updateRetailerOrderStatus: updateRetailerOrderStatus,
            dispatchOrder: this.dispatchOrder,
            searchOrders: searchOrders,
            viewEditOrder: this.viewEditOrder,
            canManage: auth.group.permission.can_manage_orders,
            viewOrderLogs: this.viewOrderLogs,
            fetchRetDistOrder: fetchRetDistOrder,
            ret_order: ret_order,
            fetchRetDispatchOrder: fetchRetDispatchOrder,
            viewKey: viewKey,
            pageDetails: orders_page_details,
            clearRetailOrderApproved: clearRetailOrderApproved,
            cancelRetailOrder: cancelRetailOrder
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddOrder__WEBPACK_IMPORTED_MODULE_11__.default, {
            fetchPlaceOrders: fetchPlaceOrders,
            place_orders: place_orders,
            addOrder: addOrder,
            changePage: this.changePage,
            deleteOrder: deleteOrder,
            offers: offersReducer.offers,
            fetchPriceOffers: fetchPriceOffers,
            addRetailerOrder: addRetailerOrder,
            updateOrder: updateOrder,
            setResponse: this.setResponse
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading || offersReducer.isLoading || deliveryReducer.isLoading || isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DispatchOrder__WEBPACK_IMPORTED_MODULE_13__.default, (_React$createElement = {
            changePage: this.changePage,
            dispatchOrder: this.dispatchOrder,
            order: ret_order
          }, _defineProperty(_React$createElement, "dispatchOrder", dispatchOrder), _defineProperty(_React$createElement, "dispatchPartialOrder", dispatchPartialOrder), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 4:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading || retailersReducer.isLoading || productsReducer.isLoading || salesReducer.isLoading || offersReducer.isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditOrder__WEBPACK_IMPORTED_MODULE_14__.default, {
            products: productsReducer.products,
            retailers: retailersReducer.retailers,
            fetchPlaceOrders: fetchPlaceOrders,
            place_orders: place_orders,
            sales_people: salesReducer.sales_people,
            levels: productsReducer.price_levels,
            editRetailerOrder: editRetailerOrder,
            changePage: this.changePage,
            deleteOrder: deleteOrder,
            offers: offersReducer.offers,
            fetchPriceOffers: fetchPriceOffers,
            addRetailerOrder: addRetailerOrder,
            updateOrder: updateOrder,
            retail_order: viewOrder,
            updateAddRetailOrder: updateAddRetailOrder,
            updateEditRetailOrder: updateEditRetailOrder,
            updateDeleteRetailOrder: updateDeleteRetailOrder,
            setResponse: this.setResponse
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 5:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewOrderLogs__WEBPACK_IMPORTED_MODULE_16__.default, {
            order_logs: order_logs,
            changePage: this.changePage
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_9__.default, {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrderTable__WEBPACK_IMPORTED_MODULE_2__.default, {
            changePage: this.changePage,
            orders: orders,
            fetchOrders: fetchOrders
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_10__.default, {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Orders;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    ordersReducer: state.ordersReducer,
    productsReducer: state.productsReducer,
    salesReducer: state.salesReducer,
    retailersReducer: state.retailersReducer,
    offersReducer: state.offersReducer,
    error: state.errorsReducer,
    message: state.messagesReducer,
    deliveryReducer: state.deliveryReducer
  };
};
/** Add and approve retail orders view */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchOrders: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchOrders,
  fetchProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchProducts,
  fetchRetailers: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_4__.fetchRetailers,
  fetchPlaceOrders: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchPlaceOrders,
  fetchSalesPeople: _redux_Actions_Sales__WEBPACK_IMPORTED_MODULE_7__.fetchSalesPeople,
  fetchProductPriceLevels: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_5__.fetchProductPriceLevels,
  addOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.addOrder,
  deleteOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.deleteOrder,
  fetchPriceOffers: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_8__.fetchPriceOffers,
  addRetailerOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.addRetailerOrder,
  deleteRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.deleteRetailOrder,
  updateRetailerOrderStatus: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.updateRetailerOrderStatus,
  editRetailerOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.editRetailerOrder,
  updateOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.updateOrder,
  dispatchOrder: _redux_Actions_Delivery__WEBPACK_IMPORTED_MODULE_6__.dispatchOrder,
  searchOrders: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.searchOrders,
  fetchOrderLogs: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchOrderLogs,
  updateAddRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.updateAddRetailOrder,
  updateEditRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.updateEditRetailOrder,
  updateDeleteRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.updateDeleteRetailOrder,
  fetchRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchRetailOrder,
  dispatchPartialOrder: _redux_Actions_Delivery__WEBPACK_IMPORTED_MODULE_6__.dispatchPartialOrder,
  fetchRetDistOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchRetDistOrder,
  fetchEditRetDistOrders: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchEditRetDistOrders,
  clearPlaceOrderTable: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.clearPlaceOrderTable,
  fetchRetDispatchOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.fetchRetDispatchOrder,
  clearRetailOrderApproved: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.clearRetailOrderApproved,
  cancelRetailOrder: _redux_Actions_Orders__WEBPACK_IMPORTED_MODULE_3__.cancelRetailOrder
})(Orders));

/***/ }),

/***/ "./frontend/src/components/Orders/OrdersNavBar.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Orders/OrdersNavBar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrdersNavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function OrdersNavBar(props) {
  var fetchOrders = props.fetchOrders,
      currentIndex = props.currentIndex,
      setCurrentIndex = props.setCurrentIndex,
      ordersTypes = props.ordersTypes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentIndex(0);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "order-bar bg_themed overlay-scrollbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "tab-bar tab_overflow"
  }, ordersTypes.map(function (order, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: function onClick() {
        fetchOrders(1, order.status);
        setCurrentIndex(index);
      },
      key: index,
      className: index == currentIndex ? "tab wave indicator" : "tab wave"
    }, order.name);
  })));
}

/***/ }),

/***/ "./frontend/src/components/Orders/PlaceOrderRow.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/Orders/PlaceOrderRow.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaceOrderRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function PlaceOrderRow(_ref) {
  var index = _ref.index,
      order = _ref.order,
      deleteOrder = _ref.deleteOrder,
      updateOrder = _ref.updateOrder,
      level = _ref.level;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(order.qty ? order.qty : 0),
      _useState4 = _slicedToArray(_useState3, 2),
      qty = _useState4[0],
      setQty = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(order.order_price ? order.order_price : 0),
      _useState6 = _slicedToArray(_useState5, 2),
      order_price = _useState6[0],
      setOrderPrice = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(order.per_price ? order.per_price : 0),
      _useState8 = _slicedToArray(_useState7, 2),
      per_price = _useState8[0],
      setPerPrice = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(order.free_qty ? order.free_qty : 0),
      _useState10 = _slicedToArray(_useState9, 2),
      free_qty = _useState10[0],
      setFreeQty = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      viewOffers = _useState12[0],
      setViewOffers = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLoading = _useState14[0],
      setIsLoading = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(index),
      _useState16 = _slicedToArray(_useState15, 2),
      key = _useState16[0],
      setKey = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (order) {
      setQty(order.qty ? order.qty : 0);
      setFreeQty(order.free_qty ? order.free_qty : 0);
      setPerPrice(order.per_price ? order.per_price : 0);
      setOrderPrice(order.order_price ? order.order_price : 0);
    }

    setKey(Math.random() + index);
  }, [order]);

  function orderPrice(value, offers) {
    var price = order.product.price * value;
    var offers_array = [];
    var view_qty = parseInt(value);
    var free_qty = 0;

    for (var i = 0; i < offers.length; i++) {
      var viewOffer = offers[i];

      if (value >= viewOffer.x_amt) {
        offers_array.push(viewOffer.id);

        if (viewOffer.scheme == "BnXEX") {
          var variance = Math.floor(view_qty / parseInt(viewOffer.x_amt));

          for (var _index = 0; _index < variance; _index++) {
            free_qty += viewOffer.y_amt;
          }
        } // else if (viewOffer.scheme == "BnXy%O") {
        //   let percDisc = 100 - viewOffer.y_amt;
        //   price = price * (percDisc / 100);
        // }

      }
    }

    setViewOffers(offers_array);
    setOrderPrice(price);
    updateOrder({
      id: order.id,
      product_id: order.product.id,
      retailer_id: order.retailer,
      qty: value,
      free_qty: free_qty,
      order_price: price,
      price_offers: offers_array,
      per_price: per_price,
      level: level
    }, index);
    setQty(value);
  }

  function fetchCurrentOffers(page, product, current_qty) {
    setIsLoading(true);
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

    axios__WEBPACK_IMPORTED_MODULE_2___default().get("../retailer/api/priceOffer?page=".concat(page, "&product_id=").concat(product), config).then(function (res) {
      setIsLoading(false);
      orderPrice(current_qty, res.data.price_offers);
    })["catch"](function (error) {
      console.log(error);
      setIsLoading(false);
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      console.log(errors);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_3__.default, {
    open: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%"
  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-up bg_themed"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sort-down bg_themed"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, order.product != null ? order.product.name : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Please input product quantity",
    name: "qty",
    value: qty,
    onChange: function onChange(e) {
      setQty(e.target.value);
    },
    key: key,
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__.default)(function (e) {
      if (qty) {
        fetchCurrentOffers(1, order.product.id, qty);
      }
    }, 2000)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, free_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "15%",
    className: "text-right"
  }, order.order_price_currency, " ", per_price != null ? (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__.default)(per_price) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, order.order_price_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_4__.default)(order_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    width: "10%",
    className: "bg_themed text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-trash btn_type",
    onClick: function onClick() {
      return deleteOrder(order.id);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "  ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__.default, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Offers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Scheme"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__.default, null, order.price_offers.map(function (offer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "offer_order_img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: offer.pic ? "..".concat(offer.pic) : "../static/images/logo.svg",
      alt: "offer logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, offer.detail_name ? offer.detail_name : ""));
  }))))))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/PlaceOrderTable.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/Orders/PlaceOrderTable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaceOrderTable)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select-async-paginate */ "./node_modules/react-select-async-paginate/es/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _PlaceOrderRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlaceOrderRow */ "./frontend/src/components/Orders/PlaceOrderRow.js");
/* harmony import */ var _widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomToolTip */ "./frontend/src/widgets/CustomToolTip.js");
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







/** Table for placing and editing orders */

function PlaceOrderTable(props) {
  var place_orders = props.place_orders,
      deleteOrder = props.deleteOrder,
      uploadOrder = props.uploadOrder,
      uploadRetailOrder = props.uploadRetailOrder,
      products = props.products,
      fetchPriceOffers = props.fetchPriceOffers,
      offers = props.offers,
      updateOrder = props.updateOrder,
      isEdit = props.isEdit,
      level = props.level;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      qty = _useState4[0],
      setQty = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      perPrice = _useState6[0],
      setPerPrice = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      order_price = _useState8[0],
      setOrderPrice = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      viewOffers = _useState10[0],
      setViewOffers = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectOffers = _useState12[0],
      setSelectOffers = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectProducts = _useState14[0],
      setSelectProducts = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      currentOffer = _useState16[0],
      setCurrentOffer = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      currentProduct = _useState18[0],
      setCurrentProduct = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      addedOffers = _useState20[0],
      setAddedOffers = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState22 = _slicedToArray(_useState21, 2),
      addedProducts = _useState22[0],
      setAddedProducts = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState24 = _slicedToArray(_useState23, 2),
      free_qty = _useState24[0],
      setFreeQty = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState26 = _slicedToArray(_useState25, 2),
      offer_key = _useState26[0],
      setOfferKey = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),
      _useState28 = _slicedToArray(_useState27, 2),
      product_key = _useState28[0],
      setProductKey = _useState28[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (place_orders) {
      var currentViewOffers = place_orders.map(function (order) {
        if (order.price_offers.length > 0) {
          return order.price_offers[0];
        }
      });
      var currentProducts = place_orders.map(function (order) {
        return order.product;
      });
      setAddedOffers(currentViewOffers.map(function (item) {
        if (item) {
          return {
            value: item,
            label: item.detail_name
          };
        }
      }));
      setAddedProducts(currentProducts.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      }));
    }

    var keys = Math.random();
    setOfferKey(keys);
    setProductKey(keys + 5);
  }, [offers, place_orders, products]);

  function addByOffer(value) {
    var viewOffer = value.value;
    var product = viewOffer.x_item;
    var quantity = viewOffer.x_amt;
    var price = product.price * quantity;
    var free_qty = 0;

    if (viewOffer.scheme == "BnXEX") {
      var variance = Math.floor(parseInt(quantity) / parseInt(viewOffer.x_amt));

      for (var index = 0; index < variance; index++) {
        free_qty += viewOffer.y_amt;
      }
    } // else if (viewOffer.scheme == "BnXy%O") {
    //   let percDisc = 100 - viewOffer.y_amt;
    //   price = price * (percDisc / 100);
    // }


    setViewOffers([].concat(_toConsumableArray(viewOffers), [viewOffer.id]));
    setCurrentOffer(value);
    setCurrentProduct({
      value: product,
      label: product.name
    }); // setSelectOffers([...selectOffers, value]);

    setOrderPrice(price);
    setPerPrice(product.price);
    setQty(quantity);
    setProduct(product.id);
    setFreeQty(free_qty);
  }

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

    var url = search ? "../retailer/api/view_price_offers?page=".concat(page, "&query=").concat(search) : "../retailer/api/view_price_offers?page=".concat(page);
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
        var viewLastPage = false;

        if (res.data.last_page > page) {
          viewLastPage = true;
        }

        var view_offers = res.data.price_offers.map(function (item) {
          return {
            value: item,
            label: item.detail_name
          };
        });
        var final_offers = [];

        if (addedOffers.length > 0) {
          final_offers = view_offers.filter(function (o_item) {
            return !addedOffers.some(function (v_item) {
              if (v_item) {
                return v_item.value.id == o_item.value.id;
              }
            });
          });
        } else {
          final_offers = view_offers;
        }

        resolve({
          options: final_offers,
          hasMore: viewLastPage,
          additional: {
            page: page + 1
          }
        });
      })["catch"](function (error) {
        console.log(error);
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

  function fetchSelectProduct(search, loadOptions, _ref2) {
    var page = _ref2.page;
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

    var url = search ? "../retailer/api/products?page=".concat(page, "&query=").concat(search) : "../retailer/api/products?page=".concat(page);
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
        var viewLastPage = false;

        if (res.data.last_page > page) {
          viewLastPage = true;
        }

        var view_products = res.data.products.map(function (item) {
          return {
            value: item,
            label: item.name
          };
        });
        var final_products = [];

        if (addedProducts.length > 0) {
          final_products = view_products.filter(function (v_item) {
            return !addedProducts.some(function (t_item) {
              return t_item.value.id == v_item.value.id;
            });
          });
        } else {
          final_products = view_products;
        }

        resolve({
          options: final_products,
          hasMore: viewLastPage,
          additional: {
            page: page + 1
          }
        });
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

  function orderPrice(qty, product, offers, per_price) {
    var view_product = product;
    var price = per_price ? per_price * qty : view_product.price * qty;
    var offers_array = [];
    var to_select = [];
    var view_qty = parseInt(qty);
    var free_qty = 0;

    for (var i = 0; i < offers.length; i++) {
      var viewOffer = offers[i];

      if (view_qty >= viewOffer.x_amt) {
        offers_array.push(viewOffer);
        to_select.push(viewOffer);

        if (viewOffer.scheme == "BnXEX") {
          var variance = Math.floor(view_qty / parseInt(viewOffer.x_amt));

          for (var index = 0; index < variance; index++) {
            free_qty += viewOffer.y_amt;
          }
        } // else if (viewOffer.scheme == "BnXy%O") {
        //   let percDisc = 100 - viewOffer.y_amt;
        //   price = price * (percDisc / 100);
        // }

      }
    }

    setViewOffers(offers_array.map(function (item) {
      return item.id;
    }));
    setSelectOffers(to_select);
    setCurrentOffer(offers_array[0] ? {
      value: offers_array[0],
      label: offers_array[0].detail_name
    } : "");
    setProduct(product.id);
    setOrderPrice(price);
    setPerPrice(per_price !== null && per_price !== void 0 ? per_price : view_product.price);
    setFreeQty(free_qty);
  }

  function fetchCurrentOffers(page, value, current_qty) {
    var token = localStorage.getItem("token");
    var product = value.value;
    var config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    if (token) {
      config.headers["Authorization"] = "Token ".concat(token);
    }

    var url = "../retailer/api/view_price_offers/?page=".concat(page, "&product_id=").concat(product.id);

    if (current_qty && level) {
      url = url + "&prod_qty=".concat(current_qty, "&level_id=").concat(level);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      orderPrice(current_qty, product, res.data.price_offers, res.data.per_price);
      setCurrentProduct(value);
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      console.log(errors);
    });
  }

  function clearAddOrder() {
    setProduct("");
    setPerPrice(1);
    setQty(1);
    setOrderPrice(1);
    setViewOffers([]);
    setCurrentProduct("");
    setCurrentOffer("");
    setFreeQty(0);
  }

  function placeOrder() {
    var total = 0;
    var order_ids = [];
    var offers = [];

    for (var index = 0; index < place_orders.length; index++) {
      var order = place_orders[index];
      Array.prototype.push.apply(offers, _toConsumableArray(order.price_offers.map(function (item) {
        return item.id;
      })));
      total += parseFloat(order.order_price);
      order_ids.push(order.id);
    }

    uploadRetailOrder(total, order_ids, offers);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, isEdit ? "Edit Orders" : "Place Order"), !isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      return placeOrder();
    },
    className: "btn btn-success btn-large"
  }, "Place Order") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Offers ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Order Products on Offer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Product* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Choose a Product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Quantity* ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_CustomToolTip__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Enter Product Quantity"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", {
    className: "text-right"
  }, "Free*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", {
    className: "text-right"
  }, "Per Unit*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", {
    className: "text-right"
  }, "Total*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", {
    className: "text-right"
  }, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "  "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, place_orders ? place_orders.map(function (order, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PlaceOrderRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: index,
      index: index,
      order: order,
      deleteOrder: deleteOrder,
      offers: offers,
      fetchPriceOffers: fetchPriceOffers,
      updateOrder: updateOrder,
      level: level
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "10%"
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_2__.AsyncPaginate, {
    loadOptions: fetchSelectOffers,
    value: currentOffer,
    onChange: function onChange(value) {
      return addByOffer(value);
    },
    additional: {
      page: 1
    },
    key: offer_key,
    loadOptionsOnMenuOpen: true,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_2__.AsyncPaginate, {
    loadOptions: fetchSelectProduct,
    value: currentProduct,
    onChange: function onChange(value) {
      return fetchCurrentOffers(1, value, qty);
    },
    additional: {
      page: 1
    },
    key: product_key,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "15%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Please input product quantity",
    name: "qty",
    value: qty,
    onChange: function onChange(e) {
      setQty(e.target.value);
    },
    onKeyUp: (0,_utils_Debouncer__WEBPACK_IMPORTED_MODULE_3__.default)(function (e) {
      if (qty) {
        fetchCurrentOffers(1, currentProduct, qty);
      }
    }, 2000),
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, free_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "15%",
    className: "text-right"
  }, perPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, order_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
    width: "10%",
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      uploadOrder(currentProduct.value.id, qty, order_price, viewOffers, free_qty, perPrice);
      clearAddOrder();
    },
    className: "btn btn-primary btn-lg"
  }, "Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, "  ")))));
}

/***/ }),

/***/ "./frontend/src/components/Orders/ViewOrderDetails.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/Orders/ViewOrderDetails.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewOrderDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _AddNoteModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddNoteModal */ "./frontend/src/components/Orders/AddNoteModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function ViewOrderDetails(props) {
  var order = props.order,
      show = props.show,
      handleModal = props.handleModal,
      dispatchOrder = props.dispatchOrder,
      updateRetailerOrderStatus = props.updateRetailerOrderStatus;

  function calculateRemaining(total, delivered) {
    return total - delivered;
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      viewStatus = _useState4[0],
      setViewStatus = _useState4[1];

  function sendNoteMessage(note) {
    handleModal();
    updateRetailerOrderStatus({
      id: order.id,
      status: viewStatus,
      note: note
    });
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
  }, "View Order ", order ? " (#".concat(order.ref_number, ")") : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "card-content bg_themed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row "
  }, order && order.retailer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-4 col-sm-4 col-xs-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Retailer Name: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Retailer Email: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Retailer Phone: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-8 col-md-8 col-sm-8 col-xs-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.retailer.contact_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.retailer.contact_email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.retailer.contact_phone)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), order && order.salesman ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-5 col-md-5 col-sm-5 col-xs-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "SalesMan Name: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "SalesMan Email: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Salesman Phone: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-7 col-md-7 col-sm-7 col-xs-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.salesman.last_name ? "".concat(order.salesman.first_name, " ").concat(order.salesman.last_name) : order.salesman.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.salesman.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.salesman.phone)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), order ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-4 col-sm-4 col-xs-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Order Status: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Order Amount: "), order.price_level ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-weight-bold"
  }, "Order Level: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-8 col-md-8 col-sm-8 col-xs-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "".concat(order.total_cost_currency, " ").concat((0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(order.total_cost))), order.price_level ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, order.price_level.level_name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), order ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, order.status === "Partial" || order.status == "Approved" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn btn-success mr-3",
    onClick: function onClick() {
      handleModal();
      dispatchOrder(order);
    }
  }, "Dispatch") : order.status == "Pending" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Toggle, {
    variant: "primary",
    id: "dropdown-basic"
  }, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Item, {
    onClick: function onClick() {
      handleModal();
      updateRetailerOrderStatus({
        id: order.id,
        status: "Approved",
        note: ""
      });
    }
  }, "Approve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Item, {
    onClick: function onClick() {
      setShowModal(true);
      setViewStatus("On Hold");
    }
  }, "Hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Item, {
    onClick: function onClick() {
      setShowModal(true);
      setViewStatus("Declined");
    }
  }, "Decline"))) : order.status == "On Hold" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn btn-primary mr-3",
    onClick: function onClick() {
      handleModal();
      updateRetailerOrderStatus({
        id: order.id,
        status: "Release",
        note: ""
      });
    }
  }, "Release") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), order && order.note ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-start border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "font-weight-bold"
  }, "Reference Note")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-2"
  }, order.note)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), order ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
    margin: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Order Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Free"), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Delivered") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Remaining") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    align: "right"
  }, "Total price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, null, order.ret_orders ? order.ret_orders.map(function (retail, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.free_qty ? retail.free_qty + retail.qty : retail.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.free_qty ? retail.free_qty : 0), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.delivered_qty) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), order.status == "Partial" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, calculateRemaining(retail.free_qty ? retail.free_qty + retail.qty : retail.qty, retail.delivered_qty)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, retail.product.price_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__.default)(retail.order_price)));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddNoteModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    handleModal: function handleModal() {
      return setShowModal(!showModal);
    },
    sendNoteMessage: sendNoteMessage
  }));
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

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Orders/Orders.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Orders/Orders.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".offer_order_img {\n    height: 40px;\n    width: 40px;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.offer_order_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.view_select {\n    z-index: 999;\n}\n\n.order-bar .tab-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    -webkit-padding-start: 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.order-bar .tab {\n    /* width: 150px; */\n    padding: 15px 0;\n    overflow: hidden;\n    text-align: center;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    cursor: pointer;\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n}\n\n.order-bar .indicator {\n    border-bottom: 5px solid #005ecb;\n}\n\n.order-bar .cercle {\n    width: 0px;\n    height: 0px;\n    position: absolute;\n}\n\n.order-bar .light .cercle {\n    background: white;\n}\n\n.order-bar .dark .cercle {\n    background: black;\n}\n\n.order-bar .anim {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    -webkit-animation: touch 1.2s ease-out;\n    animation: touch 1.2s ease-out;\n}\n\n.tab_overflow {\n    overflow-x: auto;\n}\n\n@-webkit-keyframes touch {\n    100% {\n        width: 600px;\n        height: 600px;\n        border-radius: 600px;\n        opacity: 0;\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n        margin: -300px;\n    }\n}\n\n@keyframes touch {\n    100% {\n        width: 600px;\n        height: 600px;\n        border-radius: 600px;\n        opacity: 0;\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n        margin: -300px;\n    }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Orders/Orders.css":
/*!***************************************************!*\
  !*** ./frontend/src/components/Orders/Orders.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Orders_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Orders.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Orders/Orders.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Orders_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Orders_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
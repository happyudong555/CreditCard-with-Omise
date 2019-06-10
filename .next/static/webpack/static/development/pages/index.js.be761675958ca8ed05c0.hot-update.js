webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/connectServer/firebase_server */ "./static/connectServer/firebase_server.js");







// module


var database = _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_8__["default"].firestore();

var CartItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CartItem, _React$Component);

  function CartItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CartItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CartItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cancel", function (book_name) {
      var findbyId = _this.props.filter(function (id) {
        return id === book_name;
      });

      database.collection("cart").doc(findbyId).delete();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CartItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          book_name = _this$props.book_name,
          cover = _this$props.cover,
          price = _this$props.price,
          quantity = _this$props.quantity,
          total = _this$props.total,
          category = _this$props.category;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "cart",
        className: "media col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "coverImage col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: cover,
        alt: book_name
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "media-body ItemDetail"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
        className: "mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, book_name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, 'Quantity : ' + quantity), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, 'Price : ' + price + ' THB'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, 'Include All : '), total + ' THB'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: this.cancel.bind(this, book_name),
        className: "cancelBtn",
        style: {
          cursor: 'pointer'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        style: {
          marginRight: 10
        },
        className: "far fa-trash-alt"
      }), "Cancel order")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", null, "\n                    .coverImage {\n                        height: 260px;\n                        overflow: hidden;\n                    }\n                    .coverImage img {\n                        width: 100%;\n                        height: 100%;\n                        overflow: hidden;\n                        object-fit: cover;\n                    }\n                    .ItemDetail {\n                        margin-top:20px;\n                        margin-bottom: 20px;\n                        height: 260px;\n                        padding: 20px;\n                        padding-top:0;\n                        overflow: hidden;\n                    }\n                    .ItemDetail h6 {\n                        line-height: 27px;\n                    }\n                    .ItemDetail p {\n                        font-size: 13px;\n                        text-transform : capitalize;\n                        margin-bottom:7px;\n                    }\n                    .cancelBtn:hover {\n                        color: red\n                    }\n                "));
    }
  }]);

  return CartItem;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.be761675958ca8ed05c0.hot-update.js.map
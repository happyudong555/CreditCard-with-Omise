webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shoppingCart.js":
/*!************************************!*\
  !*** ./components/shoppingCart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShoppingCart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CartItem */ "./components/CartItem.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/connectServer/firebase_server */ "./static/connectServer/firebase_server.js");







// module




 // database


var database = _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_12__["default"].firestore();
var OmiseCard;

var ShoppingCart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShoppingCart, _React$Component);

  function ShoppingCart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShoppingCart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShoppingCart).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "LoadScript", function () {
      OmiseCard = window.OmiseCard;
      OmiseCard.configure({
        publicKey: 'pkey_test_5g3s89m0e7gk63jo17o',
        currency: 'thb',
        frameLabel: 'I-shop',
        submitLabel: 'PAY NOW',
        buttonLabel: 'Pay with Omise'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "CreditCard_config", function () {
      OmiseCard.configure({
        defaultPaymentMethod: 'credit_card',
        otherPaymentMethods: []
      });
      OmiseCard.configureButton('#credit_card');
      OmiseCard.attach();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "OmiseToken", function () {
      var book_name = _this.state.item.map(function (item) {
        return item.book_name;
      });

      var price = _this.state.total;
      var total = price.reduce(function (sum, price) {
        return sum += price;
      }, 0) * 100;
      OmiseCard.open({
        frameDescription: 'Invoice #3847',
        amount: total,
        onCreateTokenSuccess: function onCreateTokenSuccess(token) {
          //API server
          axios__WEBPACK_IMPORTED_MODULE_11___default()({
            method: 'post',
            url: '/pay',
            data: {
              book_name: book_name,
              total: total,
              token: token
            },
            headers: {
              "Content-Type": "application/json"
            }
          });
        },
        onFormClosed: function onFormClosed() {
          /* Your handler when form was closed */
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pay", function (e) {
      e.preventDefault();

      _this.CreditCard_config();

      _this.OmiseToken();
    });

    _this.state = {
      item: [],
      total: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShoppingCart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      database.collection("cart").onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (ChangeData) {
          if (ChangeData.type === "added") {
            var json = ChangeData.doc.data();

            _this2.state.item.push(json);

            var price = ChangeData.doc.data().total;

            _this2.state.total.push(price);
          }

          if (ChangeData.type === "removed") {
            _this2.state.item.slice(0, 1);
          }
        });

        _this2.setState({
          item: _this2.state.item
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var price = this.state.total;
      console.log(this.state.item);
      var total = price.reduce(function (sum, price) {
        return sum += price;
      }, 0);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://cdn.omise.co/omise.js",
        onLoad: this.LoadScript.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal fade",
        id: "shoppingCart",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        style: {
          marginLeft: 10
        },
        className: "modal-title",
        id: "exampleModalLabel"
      }, "Shopping Cart"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-body"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), this.state.item.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          cover: product.cover,
          book_name: product.book_name,
          quantity: product.quantity,
          price: product.price,
          total: product.total,
          category: product.category
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "paymentform"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
        className: "page-header"
      }, 'Total : ' + total + " THB"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onClick: this.pay.bind(this),
        value: "PAY NOW",
        type: "button",
        id: "credit_card",
        style: {
          borderRadius: 0
        },
        className: "btn btn-block btn-pay"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", null, "\n                    .paymentform {\n                        width: 100%;\n                        height: auto;\n                        border-top: 1px solid #ddd;\n                        padding:23px;\n                    }\n                    .btn-pay {\n                        height: 38px !important;\n                        background-color: #ffb916;\n                        color: #fff !important;\n                        font-weight:bold;\n                    }\n                    #shoppingCart {\n                        background-color: #525050;\n                    }\n                ")));
    }
  }]);

  return ShoppingCart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.926d4a2260accbdd463a.hot-update.js.map
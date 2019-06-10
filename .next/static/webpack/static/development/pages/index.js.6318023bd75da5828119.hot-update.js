webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/itemList.js":
/*!********************************!*\
  !*** ./components/itemList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemList; });
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
/* harmony import */ var _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/connectServer/firebase_server */ "./static/connectServer/firebase_server.js");










var database = _static_connectServer_firebase_server__WEBPACK_IMPORTED_MODULE_9__["default"].firestore();

var ItemList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ItemList, _React$Component);

  function ItemList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ItemList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "increase", function () {
      _this.setState({
        qty: _this.state.qty + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "decrease", function () {
      if (_this.state.qty > 1) {
        _this.setState({
          qty: _this.state.qty - 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addCart", function (quantity, book_name, cover, price, total, category) {
      database.collection("cart").add({
        quantity: quantity,
        book_name: book_name,
        cover: cover,
        price: price,
        total: total,
        category: category
      });
    });

    _this.state = {
      product: _this.props,
      qty: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemList, [{
    key: "render",
    value: function render() {
      var total = this.state.product.price * this.state.qty;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        type: "text/javascript",
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        type: "text/javascript",
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "media",
        style: {
          marginBottom: 30
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "item col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.product.cover
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: 20
        },
        className: "media-body productDetail col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, this.state.product.book_name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, this.state.product.detail), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        style: {
          backgroundColor: '#e6e5e5'
        },
        onClick: this.increase,
        className: "increase btn"
      }, "+"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "qty"
      }, this.state.qty), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        style: {
          backgroundColor: '#e6e5e5'
        },
        onClick: this.decrease,
        className: "decrease btn"
      }, "-"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.addCart.bind(this, this.state.qty, this.state.product.book_name, this.state.product.cover, this.state.product.price, total, this.state.product.category),
        style: {
          color: '#fff',
          marginLeft: 10
        },
        className: "btn btn-danger"
      }, "Add cart"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        }
      }, 'Total : '), total)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", null, "\n                    .item {\n                        height:260px;\n                        margin-bottom:30px;\n                        overflow:hidden;\n                    }\n                    .item img {\n                        width:100%;\n                        height:100%;\n                        object-fit:contain;\n                    }\n                    .productDetail p{\n                        margin-top:16px;\n                        line-height:26px;\n                    }\n                    .increase, .decrease {\n                        margin-right: 15px;\n                    }\n                    .qty {\n                        margin-right:15px;\n                    }\n                "));
    }
  }]);

  return ItemList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.6318023bd75da5828119.hot-update.js.map
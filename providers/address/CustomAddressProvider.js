"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomAddressProvider = void 0;

var _AddressProvider2 = require("./AddressProvider");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomAddressProvider =
/*#__PURE__*/
function (_AddressProvider) {
  _inherits(CustomAddressProvider, _AddressProvider);

  function CustomAddressProvider() {
    _classCallCheck(this, CustomAddressProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomAddressProvider).apply(this, arguments));
  }

  _createClass(CustomAddressProvider, [{
    key: "getRequestUrl",
    value: function getRequestUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = options.params,
          url = options.url;
      return "".concat(url, "?").concat(this.serialize(params));
    }
  }, {
    key: "queryProperty",
    get: function get() {
      return this.options.queryProperty || _get(_getPrototypeOf(CustomAddressProvider.prototype), "queryProperty", this);
    }
  }, {
    key: "responseProperty",
    get: function get() {
      return this.options.responseProperty || _get(_getPrototypeOf(CustomAddressProvider.prototype), "responseProperty", this);
    }
  }, {
    key: "displayValueProperty",
    get: function get() {
      return this.options.displayValueProperty || _get(_getPrototypeOf(CustomAddressProvider.prototype), "displayValueProperty", this);
    }
  }], [{
    key: "name",
    get: function get() {
      return 'custom';
    }
  }, {
    key: "displayName",
    get: function get() {
      return 'Custom';
    }
  }]);

  return CustomAddressProvider;
}(_AddressProvider2.AddressProvider);

exports.CustomAddressProvider = CustomAddressProvider;
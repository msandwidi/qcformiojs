'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

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
exports.default = void 0;

var _Component = _interopRequireDefault(require("../component/Component"));

var _NestedComponent2 = _interopRequireDefault(require("../nested/NestedComponent"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var NestedDataComponent =
/*#__PURE__*/
function (_NestedComponent) {
  _inherits(NestedDataComponent, _NestedComponent);

  function NestedDataComponent() {
    _classCallCheck(this, NestedDataComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(NestedDataComponent).apply(this, arguments));
  }

  _createClass(NestedDataComponent, [{
    key: "hasChanged",
    value: function hasChanged(newValue, oldValue) {
      // If we do not have a value and are getting set to anything other than undefined or null, then we changed.
      if (newValue !== undefined && newValue !== null && !this.hasValue()) {
        return true;
      }

      return !_lodash.default.isEqual(newValue, oldValue);
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString() {
      return '[Complex Data]';
    }
    /**
     * Get the value of this component.
     *
     * @returns {*}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.dataValue;
    }
  }, {
    key: "updateValue",
    value: function updateValue(value, flags) {
      // Intentionally skip over nested component updateValue method to keep
      // recursive update from occurring with sub components.
      return _Component.default.prototype.updateValue.call(this, value, flags);
    }
  }, {
    key: "setNestedValue",
    value: function setNestedValue(component, value, flags, changed) {
      component._data = this.componentContext(component);
      return _get(_getPrototypeOf(NestedDataComponent.prototype), "setNestedValue", this).call(this, component, value, flags, changed);
    }
  }, {
    key: "allowData",
    get: function get() {
      return true;
    }
  }]);

  return NestedDataComponent;
}(_NestedComponent2.default);

exports.default = NestedDataComponent;
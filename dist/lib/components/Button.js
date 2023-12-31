"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    name: props.name,
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};
var _default = exports.default = Button;
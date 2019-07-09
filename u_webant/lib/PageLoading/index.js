'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { paddingTop: 100, textAlign: 'center' } },
    _react2.default.createElement(_spin2.default, { size: 'large' })
  );
};

module.exports = exports['default'];
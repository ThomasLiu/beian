'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawer = require('antd/lib/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SiderMenu = require('./SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

var _SiderMenuUtils = require('./SiderMenuUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiderMenuWrapper = _react2.default.memo(function (props) {
  var isMobile = props.isMobile,
      allMenu = props.allMenu,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse;

  var flatMenuKeys = (0, _SiderMenuUtils.getFlatMenuKeys)(allMenu);
  return isMobile ? _react2.default.createElement(
    _drawer2.default,
    {
      visible: !collapsed,
      placement: 'left',
      onClose: function onClose() {
        return onCollapse(true);
      }
    },
    _react2.default.createElement(_SiderMenu2.default, _extends({}, props, { flatMenuKeys: flatMenuKeys, collapsed: isMobile ? false : collapsed }))
  ) : _react2.default.createElement(_SiderMenu2.default, _extends({}, props, { flatMenuKeys: flatMenuKeys }));
});

exports.default = SiderMenuWrapper;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('umi/link');

var _link2 = _interopRequireDefault(_link);

var _PageLoading = require('../PageLoading');

var _PageLoading2 = _interopRequireDefault(_PageLoading);

var _SiderMenuUtils = require('./SiderMenuUtils');

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'logo': 'u_webant-sider-menu-logo',
  'sider': 'u_webant-sider-menu-sider',
  'fixSiderBar': 'u_webant-sider-menu-fixSiderBar',
  'light': 'u_webant-sider-menu-light',
  'icon': 'u_webant-sider-menu-icon',
  'top-nav-menu': 'u_webant-sider-menu-top-nav-menu',
  'ant-menu-item': 'u_webant-sider-menu-ant-menu-item',
  'drawer': 'u_webant-sider-menu-drawer',
  'drawer-content': 'u_webant-sider-menu-drawer-content',
  'ant-menu-inline-collapsed': 'u_webant-sider-menu-ant-menu-inline-collapsed',
  'sider-menu-item-img': 'u_webant-sider-menu-sider-menu-item-img',
  'ant-menu-item-group': 'u_webant-sider-menu-ant-menu-item-group',
  'ant-menu-item-group-list': 'u_webant-sider-menu-ant-menu-item-group-list',
  'ant-menu-submenu': 'u_webant-sider-menu-ant-menu-submenu',
  'ant-menu-submenu-title': 'u_webant-sider-menu-ant-menu-submenu-title'
};
var getIntl = _util_react_web.string.getIntl;


var BaseMenu = _react2.default.lazy(function () {
  return import('./BaseMenu');
});
var Sider = _layout2.default.Sider;

var SiderMenu = function (_PureComponent) {
  _inherits(SiderMenu, _PureComponent);

  function SiderMenu(props) {
    _classCallCheck(this, SiderMenu);

    var _this = _possibleConstructorReturn(this, (SiderMenu.__proto__ || Object.getPrototypeOf(SiderMenu)).call(this, props));

    _this.isMainMenu = function (key) {
      var allMenu = _this.props.allMenu;

      return allMenu.some(function (item) {
        if (key) {
          return item.key === key || item.path === key;
        }
        return false;
      });
    };

    _this.handleOpenChange = function (openKeys) {
      var moreThanOne = openKeys.filter(function (openKey) {
        return _this.isMainMenu(openKey);
      }).length > 1;
      _this.setState({
        openKeys: moreThanOne ? [openKeys.pop()] : [].concat(_toConsumableArray(openKeys))
      });
    };

    _this.state = {
      openKeys: (0, _SiderMenuUtils.getDefaultCollapsedSubMenus)(props)
    };
    return _this;
  }

  _createClass(SiderMenu, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          logo = _props.logo,
          collapsed = _props.collapsed,
          onCollapse = _props.onCollapse,
          fixSiderbar = _props.fixSiderbar,
          theme = _props.theme,
          titleKey = _props.titleKey,
          allMenu = _props.allMenu;
      var openKeys = this.state.openKeys;

      var defaultProps = collapsed ? {} : { openKeys: openKeys };

      var siderClassName = (0, _classnames2.default)(styles.sider, (_classNames = {}, _defineProperty(_classNames, styles.fixSiderBar, fixSiderbar), _defineProperty(_classNames, styles.light, theme === 'light'), _classNames));

      var title = getIntl(_reactIntlUniversal2.default, titleKey, 'HiredChina');

      return _react2.default.createElement(
        Sider,
        {
          trigger: null,
          collapsible: true,
          collapsed: collapsed,
          breakpoint: 'lg',
          onCollapse: onCollapse,
          width: 256,
          theme: theme,
          className: siderClassName
        },
        _react2.default.createElement(
          'div',
          { className: styles.logo, id: 'logo' },
          _react2.default.createElement(
            _link2.default,
            { to: '/' },
            _react2.default.createElement('img', { src: logo, alt: 'logo' }),
            _react2.default.createElement(
              'h1',
              null,
              title
            )
          )
        ),
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(_PageLoading2.default, null) },
          _react2.default.createElement(BaseMenu, _extends({}, this.props, {
            menuData: allMenu,
            mode: 'inline',
            handleOpenChange: this.handleOpenChange,
            onOpenChange: this.handleOpenChange,
            style: { padding: '16px 0', width: '100%' }
          }, defaultProps))
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var pathname = state.pathname;

      if (props.location.pathname !== pathname) {
        return {
          pathname: props.location.pathname,
          openKeys: (0, _SiderMenuUtils.getDefaultCollapsedSubMenus)(props)
        };
      }
      return null;
    }
  }]);

  return SiderMenu;
}(_react.PureComponent);

exports.default = SiderMenu;
module.exports = exports['default'];
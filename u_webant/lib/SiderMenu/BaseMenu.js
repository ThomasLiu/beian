'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('umi/link');

var _link2 = _interopRequireDefault(_link);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _SiderMenuUtils = require('./SiderMenuUtils');

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var SubMenu = _menu2.default.SubMenu;

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,

var getIcon = function getIcon(icon) {
  var isUrl = _util_react_web.url.isUrl;

  if (typeof icon === 'string' && isUrl(icon)) {
    return _react2.default.createElement('img', { src: icon, alt: 'icon', className: styles.icon });
  }
  if (typeof icon === 'string' && icon) {
    return _react2.default.createElement(_icon2.default, { type: icon });
  }
  return icon;
};

var BaseMenu = function (_PureComponent) {
  _inherits(BaseMenu, _PureComponent);

  function BaseMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseMenu.__proto__ || Object.getPrototypeOf(BaseMenu)).call.apply(_ref, [this].concat(args))), _this), _this.getNavMenuItems = function (menusData, parent) {
      if (!menusData) {
        return [];
      }
      return menusData.filter(function (item) {
        return item.name && !item.hideInMenu;
      }).map(function (item) {
        return _this.getSubMenuOrItem(item, parent);
      }).filter(function (item) {
        return item;
      });
    }, _this.getSelectedMenuKeys = function (pathname) {
      var flatMenuKeys = _this.props.flatMenuKeys;
      var urlToList = _util_react_web.url.urlToList;

      return urlToList(pathname).map(function (itemPath) {
        return (0, _SiderMenuUtils.getMenuMatches)(flatMenuKeys, itemPath).pop();
      });
    }, _this.getSubMenuOrItem = function (item) {
      // doc: add hideChildrenInMenu
      if (item.children && !item.hideChildrenInMenu && item.children.some(function (child) {
        return child.name;
      })) {
        var name = item.name;

        return _react2.default.createElement(
          SubMenu,
          {
            title: item.icon ? _react2.default.createElement(
              'span',
              null,
              getIcon(item.icon),
              _react2.default.createElement(
                'span',
                null,
                getIntl(_reactIntlUniversal2.default, name, name)
              )
            ) : getIntl(_reactIntlUniversal2.default, name, name),
            key: item.path
          },
          _this.getNavMenuItems(item.children)
        );
      }
      return _react2.default.createElement(
        _menu2.default.Item,
        { key: item.path },
        _this.getMenuItemPath(item)
      );
    }, _this.getMenuItemPath = function (item) {
      var name = item.name;

      var icon = getIcon(item.icon);

      if (item.path.indexOf('/') < 0) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          icon,
          _react2.default.createElement(
            'span',
            null,
            getIntl(_reactIntlUniversal2.default, name, name)
          )
        );
      }

      var itemPath = _this.conversionPath(item.path);
      var blankTarget = item.blankTarget,
          rel = item.rel,
          rev = item.rev;

      var target = blankTarget ? '_blank' : '_self';
      // Is it a http link
      if (/^https?:\/\//.test(itemPath)) {
        return _react2.default.createElement(
          'a',
          { href: itemPath, target: target, rel: rel, rev: rev },
          icon,
          _react2.default.createElement(
            'span',
            null,
            getIntl(_reactIntlUniversal2.default, name, name)
          )
        );
      }
      var _this$props = _this.props,
          location = _this$props.location,
          isMobile = _this$props.isMobile,
          onCollapse = _this$props.onCollapse;

      return _react2.default.createElement(
        _link2.default,
        {
          to: itemPath,
          target: target,
          replace: itemPath === location.pathname,
          rel: rel,
          rev: rev,
          onClick: isMobile ? function () {
            onCollapse(true);
          } : undefined
        },
        icon,
        _react2.default.createElement(
          'span',
          null,
          getIntl(_reactIntlUniversal2.default, name, name)
        )
      );
    }, _this.conversionPath = function (path) {
      if (path && path.indexOf('http') === 0) {
        return path;
      }
      return ('/' + (path || '')).replace(/\/+/g, '/');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */


  // Get the currently selected menu


  /**
   * get SubMenu or Item
   */


  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */


  _createClass(BaseMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          openKeys = _props.openKeys,
          theme = _props.theme,
          mode = _props.mode,
          pathname = _props.location.pathname,
          className = _props.className,
          collapsed = _props.collapsed,
          onClick = _props.onClick,
          handleOpenChange = _props.handleOpenChange,
          style = _props.style,
          menuData = _props.menuData;
      // if pathname can't match, use the nearest parent's key

      var selectedKeys = this.getSelectedMenuKeys(pathname);
      if (!selectedKeys.length && openKeys) {
        selectedKeys = [openKeys[openKeys.length - 1]];
      }
      var props = {};
      if (openKeys && !collapsed) {
        props = {
          openKeys: openKeys.length === 0 ? [].concat(_toConsumableArray(selectedKeys)) : openKeys
        };
      }
      var cls = (0, _classnames2.default)(className, {
        'top-nav-menu': mode === 'horizontal'
      });

      return _react2.default.createElement(
        _menu2.default,
        _extends({
          key: 'Menu',
          mode: mode,
          theme: theme,
          onOpenChange: handleOpenChange,
          selectedKeys: selectedKeys,
          style: style,
          className: cls,
          onClick: onClick
        }, props),
        this.getNavMenuItems(menuData)
      );
    }
  }]);

  return BaseMenu;
}(_react.PureComponent);

exports.default = BaseMenu;
module.exports = exports['default'];
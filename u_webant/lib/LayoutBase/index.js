'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _router = require('dva/router');

var _reactFavicon = require('react-favicon');

var _reactFavicon2 = _interopRequireDefault(_reactFavicon);

var _reactDocumentMeta = require('react-document-meta');

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

var _reactContainerQuery = require('react-container-query');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _SiderMenu = require('../SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

var _LayoutFooter = require('../LayoutFooter');

var _LayoutFooter2 = _interopRequireDefault(_LayoutFooter);

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _util_react_web = require('util_react_web');

var _qs = require('qs');

var _MenuContext = require('./MenuContext');

var _MenuContext2 = _interopRequireDefault(_MenuContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'layout': 'u_webant-layout-base-layout',
  'ant-layout': 'u_webant-layout-base-ant-layout',
  'ant-layout-footer': 'u_webant-layout-base-ant-layout-footer',
  'ant-layout-sider': 'u_webant-layout-base-ant-layout-sider',
  'content': 'u_webant-layout-base-content'
};
var getIntl = _util_react_web.string.getIntl;
var Content = _layout2.default.Content;


var screenQuery = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
};

var BasicLayout = function (_PureComponent) {
  _inherits(BasicLayout, _PureComponent);

  function BasicLayout(props) {
    _classCallCheck(this, BasicLayout);

    var _this = _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call(this, props));

    _this.getRouterAuthority = function (pathname, routeData) {
      var routeAuthority = ['noAuthority'];
      var getAuthority = function getAuthority(key, routes) {
        routes.map(function (route) {
          if (route.path && (0, _pathToRegexp2.default)(route.path).test(key)) {
            routeAuthority = route.authority;
          } else if (route.routes) {
            routeAuthority = getAuthority(key, route.routes);
          }
          return route;
        });
        return routeAuthority;
      };
      return getAuthority(pathname, routeData);
    };

    _this.getContentStyle = function () {
      var fixedHeader = _this.props.fixedHeader;

      return {
        margin: '24px 24px 0',
        paddingTop: fixedHeader ? 64 : 0,
        position: 'relative'
      };
    };

    _this.matchParamsPath = function (pathname, breadcrumbNameMap) {
      var pathKey = Object.keys(breadcrumbNameMap).find(function (key) {
        return (0, _pathToRegexp2.default)(key).test(pathname);
      });
      return breadcrumbNameMap[pathKey];
    };

    _this.getPageTitle = function (pathname, breadcrumbNameMap) {
      var currRouterData = _this.matchParamsPath(pathname, breadcrumbNameMap);

      var title = _this.getSystemTitle();
      if (!currRouterData) {
        return title;
      }
      var locale = currRouterData.locale,
          name = currRouterData.name;

      var message = locale || name || title;
      if (locale || name) {
        message = _reactIntlUniversal2.default.get(locale) || _reactIntlUniversal2.default.get(name);
        return message + ' - ' + title;
      }
      return title;
    };

    _this.getSystemTitle = function () {
      var titleKey = _this.props.system.titleKey;

      return getIntl(_reactIntlUniversal2.default, titleKey, 'HiredChina.com【在华外国人才网】');
    };

    _this.getMeta = function (pathname, breadcrumbNameMap) {
      var title = _this.getPageTitle(pathname, breadcrumbNameMap);
      var _this$props$system = _this.props.system,
          keyworkKey = _this$props$system.keyworkKey,
          descriptionKey = _this$props$system.descriptionKey;

      var keywords = getIntl(_reactIntlUniversal2.default, keyworkKey, 'best job in China,在华外国人才网,China expat job,招聘外国人,job in china,外国人网,non-teaching job in China,外国人才,job search website,外籍销售,job search website,找外教,job search website,外籍演员,job search website,国际人才网,job search website,外籍人士,job search website,外国人猎头,work visa,外国人招聘,ESL teacher,外国人求职,marketing specialist');
      var description = getIntl(_reactIntlUniversal2.default, descriptionKey, 'HiredChina.com - The platform with the best job varieties for expats in China. Choose your ideal job from 5000+ companies! -- HiredChina.com 在华外国人才网 - 最多外国人使用的求职平台，成功发布的职位将每日同步到Facebook/teitter/Linkedin，并由全国第一的英文微信大号GuideinChina推送给20W外国粉丝！Hired, China, Job');

      return {
        title: title,
        description: description,
        meta: {
          name: {
            keywords: keywords
          }
        }
      };
    };

    _this.getLayoutStyle = function () {
      var _this$props = _this.props,
          fixSiderbar = _this$props.fixSiderbar,
          isMobile = _this$props.isMobile,
          collapsed = _this$props.collapsed,
          layout = _this$props.layout;

      if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
        return {
          paddingLeft: collapsed ? '80px' : '256px'
        };
      }
      return null;
    };

    _this.handleMenuCollapse = function (collapsed) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: collapsed
      });
    };

    _this.loginSystemInit();
    _this.getPageTitle = (0, _memoizeOne2.default)(_this.getPageTitle);
    _this.matchParamsPath = (0, _memoizeOne2.default)(_this.matchParamsPath, _isEqual2.default);
    return _this;
  }

  _createClass(BasicLayout, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(preProps) {
      // After changing to phone mode,
      // if collapsed is true, you need to click twice to display
      var _props = this.props,
          collapsed = _props.collapsed,
          isMobile = _props.isMobile;

      if (isMobile && !preProps.isMobile && !collapsed) {
        this.handleMenuCollapse(false);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //当路由切换时
      if (this.props.location !== nextProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'loginSystemInit',
    value: function loginSystemInit() {
      var _props2 = this.props,
          _props2$location = _props2.location,
          query = _props2$location.query,
          pathname = _props2$location.pathname,
          dispatch = _props2.dispatch,
          LS = _props2.LS;


      if (query && query.utoken && query.redirect && pathname === '/Exception/403') {
        var redirect = query.redirect;
        var utoken = query.utoken;
        var addQuery = _util_react_web.url.addQuery;


        redirect = addQuery(redirect, 'utoken', utoken);
        window.location.href = redirect;
      }
      if (query && query.utoken) {
        LS.setItem('U_token', query.utoken);
        var path = pathname || '/';

        var _utoken = query.utoken,
            _redirect = query.redirect,
            reProps = _objectWithoutProperties(query, ['utoken', 'redirect']);

        dispatch(_router.routerRedux.replace({
          pathname: path,
          query: reProps
        }));
      }
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      var _props3 = this.props,
          location = _props3.location,
          breadcrumbNameMap = _props3.breadcrumbNameMap;

      return {
        location: location,
        breadcrumbNameMap: breadcrumbNameMap
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          _props4$system = _props4.system,
          logoUrl = _props4$system.logoUrl,
          miniLogoUrl = _props4$system.miniLogoUrl,
          recordCode = _props4$system.recordCode,
          copyrightKey = _props4$system.copyrightKey,
          faviconUrl = _props4$system.faviconUrl,
          navTheme = _props4.navTheme,
          children = _props4.children,
          pathname = _props4.location.pathname,
          isMobile = _props4.isMobile,
          menuData = _props4.menuData,
          breadcrumbNameMap = _props4.breadcrumbNameMap,
          allMenu = _props4.allMenu,
          routes = _props4.route.routes,
          fixedHeader = _props4.fixedHeader,
          footerLinks = _props4.footerLinks,
          social = _props4.social,
          Authorized = _props4.Authorized,
          Exception403 = _props4.Exception403,
          LS = _props4.LS,
          Header = _props4.Header,
          getI18n = _props4.getI18n,
          _props4$needDocumentM = _props4.needDocumentMete,
          needDocumentMete = _props4$needDocumentM === undefined ? true : _props4$needDocumentM;


      var routerConfig = this.getRouterAuthority(pathname, routes);
      var contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
      var copyright = getIntl(_reactIntlUniversal2.default, copyrightKey, '2015 - 2018 HiredChina');

      var layout = _react2.default.createElement(
        _layout2.default,
        { className: styles.layout },
        !isMobile ? null : _react2.default.createElement(_SiderMenu2.default, _extends({
          logo: logoUrl,
          theme: navTheme,
          onCollapse: this.handleMenuCollapse,
          menuData: menuData,
          isMobile: isMobile,
          title: this.getSystemTitle(),
          allMenu: allMenu
        }, this.props)),
        _react2.default.createElement(
          _layout2.default,
          {
            style: _extends({}, this.getLayoutStyle(), {
              minHeight: '100vh'
            })
          },
          _react2.default.createElement(Header, _extends({
            menuData: menuData,
            handleMenuCollapse: this.handleMenuCollapse,
            logo: isMobile ? miniLogoUrl : logoUrl,
            isMobile: isMobile
          }, this.props)),
          _react2.default.createElement(
            Content,
            { className: styles.content, style: contentStyle },
            _react2.default.createElement(
              Authorized,
              {
                authority: routerConfig && routerConfig.authority,
                noMatch: _react2.default.createElement(Exception403, null)
              },
              children
            )
          ),
          _react2.default.createElement(_LayoutFooter2.default, {
            copyright: copyright,
            recordCode: recordCode,
            links: footerLinks,
            social: social,
            isMobile: isMobile
          })
        )
      );
      return _react2.default.createElement(
        _App2.default,
        { getI18n: getI18n, LS: LS },
        needDocumentMete ? _react2.default.createElement(
          _reactDocumentMeta2.default,
          this.getMeta(pathname, breadcrumbNameMap),
          _react2.default.createElement(
            _reactContainerQuery.ContainerQuery,
            { query: screenQuery },
            function (params) {
              return _react2.default.createElement(
                _MenuContext2.default.Provider,
                { value: _this2.getContext() },
                _react2.default.createElement(_reactFavicon2.default, { url: faviconUrl || "https://image.hiredchina.com/favicon.png" }),
                _react2.default.createElement(
                  'div',
                  { className: (0, _classnames2.default)(params) },
                  layout
                )
              );
            }
          )
        ) : _react2.default.createElement(
          _reactContainerQuery.ContainerQuery,
          { query: screenQuery },
          function (params) {
            return _react2.default.createElement(
              _MenuContext2.default.Provider,
              { value: _this2.getContext() },
              _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(params) },
                layout
              )
            );
          }
        )
      );
    }
  }]);

  return BasicLayout;
}(_react.PureComponent);

exports.default = (0, _dva.connect)(function (_ref) {
  var _ref$global = _ref.global,
      collapsed = _ref$global.collapsed,
      system = _ref$global.system,
      social = _ref$global.social,
      footerLinks = _ref$global.footerLinks,
      _ref$menu = _ref.menu,
      menuData = _ref$menu.menuData,
      breadcrumbNameMap = _ref$menu.breadcrumbNameMap,
      allMenu = _ref$menu.allMenu;
  return {
    collapsed: collapsed, system: system, menuData: menuData, breadcrumbNameMap: breadcrumbNameMap, allMenu: allMenu, social: social, footerLinks: footerLinks
  };
})(function (props) {
  return _react2.default.createElement(
    _reactMedia2.default,
    { query: '(max-width: 599px)' },
    function (isMobile) {
      return _react2.default.createElement(BasicLayout, _extends({}, props, { isMobile: isMobile }));
    }
  );
});
module.exports = exports['default'];
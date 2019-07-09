'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _GlobalHeader = require('../GlobalHeader');

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _TopNavHeader = require('../TopNavHeader');

var _TopNavHeader2 = _interopRequireDefault(_TopNavHeader);

var _qs = require('qs');

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'fixedHeader': 'u_webant-layout-header-fixedHeader',
  'header': 'u_webant-layout-header-header',
  'ant-layout-header': 'u_webant-layout-header-ant-layout-header'
};
var getIntl = _util_react_web.string.getIntl;
var getPageQuery = _util_react_web.url.getPageQuery;
var Header = _layout2.default.Header;

var LayoutHeader = function (_PureComponent) {
  _inherits(LayoutHeader, _PureComponent);

  function LayoutHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutHeader.__proto__ || Object.getPrototypeOf(LayoutHeader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: true,
      initDone: false
    }, _this.getHeadWidth = function () {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          collapsed = _this$props.collapsed,
          fixedHeader = _this$props.fixedHeader;

      if (isMobile || !fixedHeader) {
        return '100%';
      }
      return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
    }, _this.handleNoticeClear = function (noticeKey) {
      _message3.default.success(getIntl(_reactIntlUniversal2.default, 'base.cleared', 'Cleared') + ' ' + getIntl(_reactIntlUniversal2.default, 'base.noticeKey'));
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'global/clearNotices',
        payload: noticeKey
      });
    }, _this.handleMenuClick = function (_ref2) {
      var key = _ref2.key;
      var dispatch = _this.props.dispatch;

      if (key === 'logout') {
        dispatch({
          type: 'login/logout'
        });
      }
    }, _this.handleNoticeVisibleChange = function (visible) {
      if (visible) {
        var dispatch = _this.props.dispatch;

        dispatch({
          type: 'global/fetchNotices'
        });
      }
    }, _this.handScroll = function () {
      var autoHideHeader = _this.props.autoHideHeader;
      var visible = _this.state.visible;

      if (!autoHideHeader) {
        return;
      }
      var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
      if (!_this.ticking) {
        _this.ticking = true;
        requestAnimationFrame(function () {
          if (_this.oldScrollTop > scrollTop) {
            _this.setState({
              visible: true
            });
          } else if (scrollTop > 300 && visible) {
            _this.setState({
              visible: false
            });
          } else if (scrollTop < 300 && !visible) {
            _this.setState({
              visible: true
            });
          }
          _this.oldScrollTop = scrollTop;
          _this.ticking = false;
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLoginPageUrl();
      document.addEventListener('scroll', this.handScroll, { passive: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handScroll);
    }
  }, {
    key: 'getLoginPageUrl',
    value: function getLoginPageUrl() {
      var _this2 = this;

      var getSystemPath = this.props.getSystemPath;

      if (getSystemPath) {
        getSystemPath('loginweb').then(function (res) {
          var data = res.data;
          var href = window.location.href;

          var redirectUrlParams = new URL(href);
          var params = getPageQuery();
          var redirect = params.redirect;

          if (!redirect) {
            redirect = window.location.href;
          }
          var loginPageUrl = redirectUrlParams.origin === data ? data + '/user/login' : data + '/user/login?' + (0, _qs.stringify)({ redirect: redirect });
          var updateState = {
            initDone: true,
            loginPageUrl: loginPageUrl
          };
          _this2.setState(updateState);
        });
      } else {
        var updateState = {
          initDone: true,
          loginPageUrl: '/user/login'
        };
        this.setState(updateState);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isMobile = _props.isMobile,
          handleMenuCollapse = _props.handleMenuCollapse,
          fixedHeader = _props.fixedHeader,
          title = _props.system.title;
      var _state = this.state,
          visible = _state.visible,
          initDone = _state.initDone,
          loginPageUrl = _state.loginPageUrl;

      var width = this.getHeadWidth();

      var HeaderDom = visible ? _react2.default.createElement(
        'div',
        { className: styles.header },
        _react2.default.createElement(
          Header,
          { style: { padding: 0, width: width }, className: fixedHeader ? styles.fixedHeader : '' },
          isMobile ? _react2.default.createElement(_GlobalHeader2.default, _extends({
            loginPageUrl: loginPageUrl,
            onCollapse: handleMenuCollapse,
            onNoticeClear: this.handleNoticeClear,
            onMenuClick: this.handleMenuClick,
            onNoticeVisibleChange: this.handleNoticeVisibleChange,
            title: title
          }, this.props)) : _react2.default.createElement(_TopNavHeader2.default, _extends({
            title: title,
            loginPageUrl: loginPageUrl,
            mode: 'horizontal',
            onCollapse: handleMenuCollapse,
            onNoticeClear: this.handleNoticeClear,
            onMenuClick: this.handleMenuClick,
            onNoticeVisibleChange: this.handleNoticeVisibleChange
          }, this.props))
        )
      ) : null;
      return initDone && _react2.default.createElement(
        _rcAnimate2.default,
        { component: '', transitionName: 'fade' },
        HeaderDom
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (!props.autoHideHeader && !state.visible) {
        return {
          visible: true
        };
      }
      return null;
    }
  }]);

  return LayoutHeader;
}(_react.PureComponent);

exports.default = LayoutHeader;
module.exports = exports['default'];
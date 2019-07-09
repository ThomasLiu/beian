'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'menu': 'u_webant-select-lang-menu'
};
var getIntl = _util_react_web.string.getIntl;

var SelectLang = function (_PureComponent) {
  _inherits(SelectLang, _PureComponent);

  function SelectLang() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectLang);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectLang.__proto__ || Object.getPrototypeOf(SelectLang)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (lan) {
      var addQuery = _util_react_web.url.addQuery;

      var href = addQuery(window.location.href, 'lan', lan);
      window.location.href = href;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectLang, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          LS = _props.LS;

      var storage = LS || localStorage;
      var getPageQuery = _util_react_web.url.getPageQuery,
          fixLan = _util_react_web.url.fixLan;

      var _getPageQuery = getPageQuery(),
          lan = _getPageQuery.lan;

      var selectedLang = lan || storage.getItem('lang_type') || 'en-US';
      selectedLang = fixLan({ lan: selectedLang });

      var clz = (0, _classnames2.default)(className, styles.menu);
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'a',
          {
            onClick: function onClick() {
              return _this2.onClick('en-US');
            },
            className: clz,
            title: getIntl(_reactIntlUniversal2.default, 'base.languages', 'Languages'),
            style: { marginRight: '0', color: selectedLang === 'en-US' ? '#52c41a' : 'rgba(0, 0, 0, 0.65)' }
          },
          getIntl(_reactIntlUniversal2.default, 'base.en-US', 'EN')
        ),
        '/',
        _react2.default.createElement(
          'a',
          {
            onClick: function onClick() {
              return _this2.onClick('zh-CN');
            },
            className: clz,
            title: getIntl(_reactIntlUniversal2.default, 'base.languages', 'Languages'),
            style: { color: selectedLang === 'zh-CN' ? '#52c41a' : 'rgba(0, 0, 0, 0.65)' }
          },
          getIntl(_reactIntlUniversal2.default, 'base.zh-CN', '中文')
        )
      );
    }
  }]);

  return SelectLang;
}(_react.PureComponent);

exports.default = SelectLang;
module.exports = exports['default'];
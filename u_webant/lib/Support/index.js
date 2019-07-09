'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util_react_web = require('util_react_web');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'prefix': 'u_webant-support-prefix',
  'ant-select-arrow': 'u_webant-support-ant-select-arrow',
  'ant-select-selection__rendered': 'u_webant-support-ant-select-selection__rendered',
  'ant-select-selection__placeholder': 'u_webant-support-ant-select-selection__placeholder',
  'ant-select-search__field__placeholder': 'u_webant-support-ant-select-search__field__placeholder'
};
var getIntl = _util_react_web.string.getIntl;
var Option = _select2.default.Option;

var Support = function (_Component) {
  _inherits(Support, _Component);

  function Support(props) {
    _classCallCheck(this, Support);

    var _this = _possibleConstructorReturn(this, (Support.__proto__ || Object.getPrototypeOf(Support)).call(this, props));

    _this.state = {
      initDone: false,
      list: []
    };
    return _this;
  }

  _createClass(Support, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          typeName = _props.typeName,
          getSupports = _props.getSupports,
          form = _props.form,
          value = _props.value,
          name = _props.name;

      getSupports({ typeName: typeName }).then(function (res) {
        var data = res.data;
        var list = data.list;

        _this2.setState({ initDone: true, list: list });
        form.setFieldsValue(_defineProperty({}, name, value));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          initDone = _state.initDone,
          list = _state.list;

      var _props2 = this.props,
          form = _props2.form,
          name = _props2.name,
          style = _props2.style,
          disabled = _props2.disabled,
          value = _props2.value,
          notFieldDecorator = _props2.notFieldDecorator,
          icon = _props2.icon,
          className = _props2.className,
          _props2$fieldDecorato = _props2.fieldDecoratorObj,
          fieldDecoratorObj = _props2$fieldDecorato === undefined ? {} : _props2$fieldDecorato,
          ohterProps = _objectWithoutProperties(_props2, ['form', 'name', 'style', 'disabled', 'value', 'notFieldDecorator', 'icon', 'className', 'fieldDecoratorObj']);

      var getFieldDecorator = form.getFieldDecorator;

      var maxLength = 0;
      var optionList = list.map(function (item) {
        var text = getIntl(_reactIntlUniversal2.default, item.titleKey);
        if (text.length > maxLength) {
          maxLength = text.length;
        }
        return _react2.default.createElement(
          Option,
          { key: item.titleKey, value: item.value },
          text
        );
      });
      var selectStyle = style || { width: 'auto', minWidth: 100 };
      var cls = className;
      var suffixIcon = void 0;
      if (icon) {
        cls = (0, _classnames2.default)(className, styles.prefix);
        suffixIcon = _react2.default.createElement(_icon2.default, { type: icon });
      }

      if (!notFieldDecorator) {
        fieldDecoratorObj.initialValue = value || '';
      }

      return initDone && notFieldDecorator ? _react2.default.createElement(
        _select2.default,
        _extends({
          className: cls,
          style: selectStyle,
          disabled: disabled,
          suffixIcon: suffixIcon
        }, ohterProps),
        optionList
      ) : getFieldDecorator(name, fieldDecoratorObj)(_react2.default.createElement(
        _select2.default,
        _extends({
          className: cls,
          style: selectStyle,
          disabled: disabled,
          suffixIcon: suffixIcon
        }, ohterProps),
        optionList
      ));
    }
  }]);

  return Support;
}(_react.Component);

exports.default = Support;
module.exports = exports['default'];
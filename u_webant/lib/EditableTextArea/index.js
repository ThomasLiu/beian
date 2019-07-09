'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'tips': 'u_webant-editable-text-area-tips',
  'value': 'u_webant-editable-text-area-value'
};
var TextArea = _input2.default.TextArea;
var getIntl = _util_react_web.string.getIntl;

var EditableTextArea = function (_Component) {
  _inherits(EditableTextArea, _Component);

  function EditableTextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditableTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableTextArea.__proto__ || Object.getPrototypeOf(EditableTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputVisible: false,
      inputValue: ''
    }, _this.showTextArea = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          handleShow = _this$props.handleShow;

      _this.setState({ inputVisible: true, inputValue: value || '' }, function () {
        return _this.input.focus();
      });
      if (handleShow) {
        handleShow(_this);
      }
    }, _this.handleTextAreaChange = function (e) {
      _this.setState({ inputValue: e.target.value });
    }, _this.handleTextAreaConfirm = function (e) {
      var inputValue = _this.state.inputValue;
      var handleSave = _this.props.handleSave;

      if (e.shiftKey && e.keyCode === 13) {
        return;
      }
      if (e.keyCode === 13) {
        var value = _lodash2.default.trim(inputValue);

        if (value) {
          var isOk = true;
          if (handleSave) {
            isOk = handleSave(inputValue);
          }
          if (isOk) {
            _this.setState({
              inputVisible: false,
              inputValue: ''
            });
          }
        }
        e.preventDefault();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditableTextArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          inputVisible = _state.inputVisible,
          inputValue = _state.inputValue;

      var _props = this.props,
          value = _props.value,
          size = _props.size,
          tips = _props.tips,
          _props$placement = _props.placement,
          placement = _props$placement === undefined ? 'top' : _props$placement,
          _props$canModify = _props.canModify,
          canModify = _props$canModify === undefined ? true : _props$canModify,
          ohterProps = _objectWithoutProperties(_props, ['value', 'size', 'tips', 'placement', 'canModify']);

      var text = tips || getIntl(_reactIntlUniversal2.default, 'base.click.on.to.modify', 'Click on to modify');
      return inputVisible ? _react2.default.createElement(TextArea, _extends({
        ref: function ref(node) {
          _this2.input = node;
        },
        type: 'text',
        size: size || 'small',
        value: inputValue,
        onChange: this.handleTextAreaChange,
        onBlur: this.handleTextAreaConfirm,
        onKeyDown: this.handleTextAreaConfirm
      }, ohterProps)) : canModify ? _react2.default.createElement(
        _tooltip2.default,
        { placement: placement, title: text },
        _react2.default.createElement(
          'span',
          { style: { cursor: 'pointer', whiteSpace: 'pre-wrap' }, onClick: this.showTextArea },
          value ? _react2.default.createElement(
            'span',
            { className: styles.value },
            value
          ) : _react2.default.createElement(
            'span',
            { className: styles.tips },
            text
          )
        )
      ) : _react2.default.createElement(
        'span',
        { style: { whiteSpace: 'pre-wrap' } },
        value || ''
      );
    }
  }]);

  return EditableTextArea;
}(_react.Component);

exports.default = EditableTextArea;
module.exports = exports['default'];
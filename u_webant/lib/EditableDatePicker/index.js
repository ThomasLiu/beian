'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

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
  'tips': 'u_webant-editable-date-picker-tips',
  'value': 'u_webant-editable-date-picker-value'
};
var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker,
    WeekPicker = _datePicker2.default.WeekPicker;
var getIntl = _util_react_web.string.getIntl;
var EditableDatePicker = (_temp = _class = function (_Component) {
  _inherits(EditableDatePicker, _Component);

  function EditableDatePicker(props) {
    _classCallCheck(this, EditableDatePicker);

    var _this = _possibleConstructorReturn(this, (EditableDatePicker.__proto__ || Object.getPrototypeOf(EditableDatePicker)).call(this, props));

    _initialiseProps.call(_this);

    var defaultFormat = 'YYYY-MM-DD';
    if (props.showTime) {
      defaultFormat = 'YYYY-MM-DD HH:mm:ss';
    }
    var _props$format = props.format,
        format = _props$format === undefined ? defaultFormat : _props$format,
        mode = props.mode;


    _this.state = {
      inputVisible: false,
      inputValue: '',
      defaultFormat: format,
      mode: mode
    };
    return _this;
  }

  _createClass(EditableDatePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          inputVisible = _state.inputVisible,
          defaultFormat = _state.defaultFormat,
          inputvalue = _state.inputvalue;

      var _props = this.props,
          value = _props.value,
          size = _props.size,
          tips = _props.tips,
          _props$placement = _props.placement,
          placement = _props$placement === undefined ? 'top' : _props$placement,
          _props$canModify = _props.canModify,
          canModify = _props$canModify === undefined ? true : _props$canModify,
          type = _props.type,
          between = _props.between,
          showOk = _props.showOk,
          renderExtraFooter = _props.renderExtraFooter,
          ohterProps = _objectWithoutProperties(_props, ['value', 'size', 'tips', 'placement', 'canModify', 'type', 'between', 'showOk', 'renderExtraFooter']);

      var text = tips || getIntl(_reactIntlUniversal2.default, 'base.click.on.to.modify', 'Click on to modify');
      var datePickerObj = {
        onChange: this.handleInputChange,
        open: true,
        format: defaultFormat,
        size: size || 'small'
      };
      var showValue = value;
      if (ohterProps.showTime || showOk) {
        datePickerObj.onOk = this.handleOk;
      }
      if (ohterProps.mode) {
        datePickerObj.onPanelChange = this.handlePanelChange;
        var isMonth = this.checkMode('month');
        if (isMonth) {
          datePickerObj.onBlur = this.blur;
        }
      }

      if (inputvalue) {
        datePickerObj.value = inputvalue;
      }

      if (renderExtraFooter) {
        ohterProps.renderExtraFooter = this.renderExtraFooter;
      }

      // console.log('ohterProps', ohterProps)

      if (value) {
        if (type === 'range' && value.length === 2) {
          var start = (0, _moment2.default)(value[0], defaultFormat);
          var end = (0, _moment2.default)(value[1], defaultFormat);
          if (!start.isValid()) {
            start = (0, _moment2.default)();
          }
          if (!end.isValid()) {
            end = (0, _moment2.default)();
          }

          datePickerObj.defaultValue = [start, end];

          showValue = _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'span',
              null,
              value[0]
            ),
            between || ' , ',
            _react2.default.createElement(
              'span',
              null,
              value[1]
            )
          );
        } else {
          datePickerObj.defaultValue = (0, _moment2.default)(value, defaultFormat);
        }
      }

      var picker = _react2.default.createElement(_datePicker2.default, _extends({}, datePickerObj, ohterProps));

      switch (type) {
        case 'month':
          picker = _react2.default.createElement(MonthPicker, _extends({}, datePickerObj, ohterProps));
          break;
        case 'week':
          picker = _react2.default.createElement(WeekPicker, _extends({}, datePickerObj, ohterProps));
          break;
        case 'range':
          picker = _react2.default.createElement(RangePicker, _extends({}, datePickerObj, ohterProps));
          break;

        default:
          break;
      }

      return inputVisible ? picker : canModify ? _react2.default.createElement(
        _tooltip2.default,
        { placement: placement, title: text },
        _react2.default.createElement(
          'span',
          { style: { cursor: 'pointer' }, onClick: this.showInput },
          showValue ? _react2.default.createElement(
            'span',
            { className: styles.value },
            showValue
          ) : _react2.default.createElement(
            'span',
            { className: styles.tips },
            text
          )
        )
      ) : _react2.default.createElement(
        'span',
        null,
        showValue || ''
      );
    }
  }]);

  return EditableDatePicker;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.showInput = function () {
    var _props2 = _this2.props,
        value = _props2.value,
        handleShow = _props2.handleShow;

    _this2.setState({ inputVisible: true, inputValue: value || '' });
    if (handleShow) {
      handleShow(_this2);
    }
  };

  this.handleInputChange = function (date, dateString) {
    // console.log('handleInputChange', date, dateString)
    if (!_this2.props.showTime) {
      if (dateString) {
        var handleSave = _this2.props.handleSave;

        var isOk = true;
        if (handleSave) {
          isOk = handleSave(dateString);
        }
        if (isOk) {
          _this2.setState({
            inputVisible: false
          });
        }
      }
    }
  };

  this.handleOk = function (date) {
    // console.log('handleOk', date)
    var defaultFormat = _this2.state.defaultFormat;

    if (date) {
      var _props3 = _this2.props,
          handleSave = _props3.handleSave,
          type = _props3.type;

      var isOk = true;
      if (handleSave) {
        var value = void 0;
        if (type === 'range') {
          value = [(0, _moment2.default)(date[0]).format(defaultFormat), (0, _moment2.default)(date[1]).format(defaultFormat)];
        } else {
          value = (0, _moment2.default)(date).format(defaultFormat);
        }
        isOk = handleSave(value);
      }
      if (isOk) {
        _this2.setState({
          inputVisible: false
        });
      }
    }
  };

  this.handlePanelChange = function (value, mode) {
    // console.log('handlePanelChange', value, mode)
    var type = _this2.props.type;

    var setObj = {};
    var isMonth = _this2.checkMode('month');
    if (isMonth) {
      setObj.inputvalue = value;
    }
    if (type === 'range') {
      setObj.mode = [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]];
    } else {
      setObj.mode = mode;
    }

    _this2.setState(setObj);
  };

  this.blur = function () {
    var _state2 = _this2.state,
        defaultFormat = _state2.defaultFormat,
        inputvalue = _state2.inputvalue;

    console.log('blur', defaultFormat, inputvalue);
    if (inputvalue) {
      var _props4 = _this2.props,
          handleSave = _props4.handleSave,
          type = _props4.type;

      var isOk = true;
      if (handleSave) {
        var value = void 0;
        if (type === 'range') {
          value = [(0, _moment2.default)(inputvalue[0]).format(defaultFormat), (0, _moment2.default)(inputvalue[1]).format(defaultFormat)];
        } else {
          value = (0, _moment2.default)(inputvalue).format(defaultFormat);
        }
        isOk = handleSave(value);
      }
      if (isOk) {
        _this2.setState({
          inputVisible: false
        });
      }
    }
  };

  this.checkMode = function (checkType) {
    var mode = _this2.props.mode;

    var type = typeof mode === 'undefined' ? 'undefined' : _typeof(mode);
    var isMonth = false;
    if (type === 'object') {
      isMonth = mode.length === 2 && mode[0] === checkType && mode[1] === checkType;
    }
    if (type === 'string') {
      isMonth = mode === checkType;
    }
    return isMonth;
  };

  this.handleOpenChange = function (open) {
    if (open) {
      _this2.setState({ mode: 'time' });
    }
  };

  this.renderExtraFooter = function () {
    var renderExtraFooter = _this2.props.renderExtraFooter;


    return renderExtraFooter(_this2);
  };
}, _temp);
exports.default = EditableDatePicker;
module.exports = exports['default'];
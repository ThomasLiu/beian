'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'tips': 'u_webant-editable-select-tips',
  'value': 'u_webant-editable-select-value'
};
var getIntl = _util_react_web.string.getIntl;
var Option = _select2.default.Option;

var EditableSelect = function (_Component) {
  _inherits(EditableSelect, _Component);

  function EditableSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditableSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableSelect.__proto__ || Object.getPrototypeOf(EditableSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputVisible: false,
      inputValue: '',
      list: [],
      initDone: false
    }, _this.showInput = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          handleShow = _this$props.handleShow;

      _this.setState({ inputVisible: true, inputValue: value || '' }, function () {
        return _this.select.focus();
      });
      if (handleShow) {
        handleShow(_this);
      }
    }, _this.handleInputChange = function (value) {
      _this.setState({ inputValue: value });
    }, _this.handleInputConfirm = function () {
      var inputValue = _this.state.inputValue;
      var handleSave = _this.props.handleSave;

      if (inputValue) {
        if (handleSave) {
          handleSave(inputValue);
        }
        _this.setState({
          inputVisible: false,
          inputValue: ''
        });
      }
    }, _this.getText = function () {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          tips = _this$props2.tips,
          mode = _this$props2.mode,
          _this$props2$canModif = _this$props2.canModify,
          canModify = _this$props2$canModif === undefined ? true : _this$props2$canModif;

      var text = null;
      if (canModify) {
        text = _react2.default.createElement(
          'span',
          { className: styles.tips },
          tips || getIntl(_reactIntlUniversal2.default, 'base.click.on.to.modify', 'Click on to modify')
        );
      }
      var list = _this.state.list;


      if (list && value) {
        if (mode === 'multiple') {
          var thisValues = list.filter(function (item) {
            return value.includes(item.value);
          });
          if (thisValues && thisValues.length > 0) {
            text = thisValues.map(function (item) {
              return getIntl(_reactIntlUniversal2.default, item.titleKey);
            }).join(', ');
          }
        } else if (mode === 'tags') {
          text = value.join(', ');
        } else {
          var thisValue = list.filter(function (item) {
            return item.value === value;
          });
          if (thisValue && thisValue.length > 0) {
            text = getIntl(_reactIntlUniversal2.default, thisValue[0].titleKey);
          }
        }

        text = _react2.default.createElement(
          'span',
          { className: styles.value },
          text
        );
      }
      return text;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditableSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          typeName = _props.typeName,
          getSupports = _props.getSupports,
          options = _props.options;

      if (options) {
        this.setState({ initDone: true, list: options });
      } else if (getSupports) {
        getSupports({ typeName: typeName }).then(function (res) {
          var data = res.data;
          var list = data.list;

          _this2.setState({ initDone: true, list: list });
        });
      } else {
        this.setState({ initDone: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          inputVisible = _state.inputVisible,
          list = _state.list;

      var _props2 = this.props,
          value = _props2.value,
          size = _props2.size,
          width = _props2.width,
          tips = _props2.tips,
          _props2$placement = _props2.placement,
          placement = _props2$placement === undefined ? 'top' : _props2$placement,
          _props2$canModify = _props2.canModify,
          canModify = _props2$canModify === undefined ? true : _props2$canModify,
          ohterProps = _objectWithoutProperties(_props2, ['value', 'size', 'width', 'tips', 'placement', 'canModify']);

      var text = this.getText();

      var optionList = list.map(function (item) {
        var optionText = getIntl(_reactIntlUniversal2.default, item.titleKey);
        return _react2.default.createElement(
          Option,
          { key: item.titleKey, value: item.value },
          optionText
        );
      });

      return inputVisible ? _react2.default.createElement(
        _select2.default,
        _extends({
          ref: function ref(node) {
            _this3.select = node;
          },
          size: size || 'small',
          style: { width: width || 78 },
          defaultValue: value,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm,
          defaultOpen: true
        }, ohterProps),
        optionList
      ) : canModify ? _react2.default.createElement(
        _tooltip2.default,
        { placement: placement, title: tips || getIntl(_reactIntlUniversal2.default, 'base.click.on.to.modify', 'Click on to modify') },
        _react2.default.createElement(
          'span',
          { style: { cursor: 'pointer' }, onClick: this.showInput },
          text
        )
      ) : _react2.default.createElement(
        'span',
        null,
        text
      );
    }
  }]);

  return EditableSelect;
}(_react.Component);

exports.default = EditableSelect;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIntl = _util_react_web.string.getIntl;

var SelectWithHiddenSelectedOptions = function (_Component) {
  _inherits(SelectWithHiddenSelectedOptions, _Component);

  function SelectWithHiddenSelectedOptions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectWithHiddenSelectedOptions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectWithHiddenSelectedOptions.__proto__ || Object.getPrototypeOf(SelectWithHiddenSelectedOptions)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedItems: [],
      initDone: false,
      list: []
    }, _this.handleChange = function (selectedItems) {
      var _this$props = _this.props,
          field = _this$props.field,
          form = _this$props.form;

      form.setFieldsValue(_defineProperty({}, field, selectedItems.map(function (item) {
        return item.key;
      })));
      _this.setState({ selectedItems: selectedItems });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectWithHiddenSelectedOptions, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          typeName = _props.typeName,
          getSupports = _props.getSupports,
          option = _props.option,
          field = _props.field,
          _props$record = _props.record,
          record = _props$record === undefined ? {} : _props$record,
          intl = _props.intl;

      if (getSupports) {
        getSupports({ typeName: typeName }).then(function (res) {
          var data = res.data;
          var list = data.list;

          var arr = record[field] || [];

          var valueArr = list.filter(function (o) {
            return arr.includes(o.value);
          });

          var selectedItems = valueArr.map(function (item) {
            return {
              key: item.value,
              label: getIntl(intl, item.titleKey)
            };
          });

          _this2.setState({ initDone: true, list: list, selectedItems: selectedItems });
        });
      } else {
        this.setState({ initDone: true, list: option });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedItems = _state.selectedItems,
          initDone = _state.initDone,
          list = _state.list;

      var _props2 = this.props,
          placeholder = _props2.placeholder,
          style = _props2.style,
          intl = _props2.intl,
          reProps = _objectWithoutProperties(_props2, ['placeholder', 'style', 'intl']);

      var selectedVlaueItems = selectedItems.map(function (item) {
        return item.key;
      });
      var filteredOptions = list.filter(function (o) {
        return !selectedVlaueItems.includes(o.value);
      });

      return initDone && _react2.default.createElement(
        _select2.default,
        _extends({
          mode: 'multiple',
          labelInValue: true,
          placeholder: placeholder,
          value: selectedItems,
          onChange: this.handleChange,
          filterOption: function filterOption(input, option) {
            return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          },
          style: style || { width: '100%' }
        }, reProps),
        filteredOptions.map(function (item) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: item, value: item.value },
            getIntl(intl, item.titleKey)
          );
        })
      );
    }
  }]);

  return SelectWithHiddenSelectedOptions;
}(_react.Component);

exports.default = SelectWithHiddenSelectedOptions;
module.exports = exports['default'];
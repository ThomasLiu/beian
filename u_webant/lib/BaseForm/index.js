'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

var _SelectHiddenOptions = require('../SelectHiddenOptions');

var _SelectHiddenOptions2 = _interopRequireDefault(_SelectHiddenOptions);

var _Cropper = require('../Cropper');

var _Cropper2 = _interopRequireDefault(_Cropper);

var _Support = require('../Support');

var _Support2 = _interopRequireDefault(_Support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIntl = _util_react_web.string.getIntl;


var FormItem = _form2.default.Item;
var Option = _select2.default.Option;
var TextArea = _input2.default.TextArea;


function beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    _message3.default.error('You can only upload JPG file!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _message3.default.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

var BaseForm = function (_Component) {
  _inherits(BaseForm, _Component);

  function BaseForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseForm.__proto__ || Object.getPrototypeOf(BaseForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileList: []
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          form = _this$props.form;

      form.validateFields(function (err, values) {
        if (!err) {
          onSubmit(values);
        }
      });
    }, _this.handleUploadChange = function (info, field) {
      var _info$file = info.file,
          status = _info$file.status,
          response = _info$file.response;
      var _this$props2 = _this.props,
          form = _this$props2.form,
          origin = _this$props2.origin;
      var fileList = info.fileList;

      if (fileList.length > 1) {
        fileList = [info.file];
      }

      if (status === 'done') {
        if (response && response.key) {
          var url = origin + '/' + response.key;
          form.setFieldsValue(_defineProperty({}, field, url));
        }
        _message3.default.success(info.file.name + ' file uploaded successfully.');
      } else if (status === 'error') {
        _message3.default.error(info.file.name + ' file upload failed.');
      }
      _this.setState({ fileList: fileList });
    }, _this.getInput = function (item) {
      var type = item.type,
          option = item.option,
          field = item.field,
          rows = item.rows,
          reProps = _objectWithoutProperties(item, ['type', 'option', 'field', 'rows']);

      var _this$props3 = _this.props,
          origin = _this$props3.origin,
          form = _this$props3.form,
          _this$props3$record = _this$props3.record,
          record = _this$props3$record === undefined ? {} : _this$props3$record;

      if (type) {
        switch (type.toLowerCase()) {
          case 'upload':
            return _react2.default.createElement(_input2.default, { style: { display: 'none' } });
          case 'support':
            return _react2.default.createElement(_Support2.default, _extends({
              key: field,
              form: form,
              name: field,
              value: record[field],
              style: { width: '100%' },
              notFieldDecorator: true
            }, reProps));
          case 'textarea':
            return _react2.default.createElement(TextArea, _extends({
              key: field,
              rows: rows || 4
            }, reProps));
          case 'img':
            return _react2.default.createElement(_Cropper2.default, _extends({
              imageUrl: form.getFieldValue(field),
              onSuccess: function onSuccess(data) {
                var ret = data.ret;

                var url = origin + '/' + ret.key;
                form.setFieldsValue(_defineProperty({}, field, url));
              }
            }, reProps, _this.props));
          case 'multiple':
            return _react2.default.createElement(_SelectHiddenOptions2.default, _extends({
              key: field,
              intl: _reactIntlUniversal2.default
            }, item, _this.props));
          case 'switch':
            return _react2.default.createElement(_switch2.default, _extends({
              key: field
            }, reProps));
          case 'select':
            return _react2.default.createElement(
              _select2.default,
              _extends({
                key: field,
                style: { minWidth: 120 }
              }, reProps),
              option.map(function (optionItem) {
                return _react2.default.createElement(
                  Option,
                  { key: optionItem.value, value: optionItem.value },
                  getIntl(_reactIntlUniversal2.default, optionItem.titleKey, optionItem.label)
                );
              })
            );
          default:
            return _react2.default.createElement(_input2.default, _extends({
              key: field
            }, reProps));
        }
      }
      return _react2.default.createElement(_input2.default, null);
    }, _this.getUpload = function (item) {
      var type = item.type,
          option = item.option,
          field = item.field,
          rows = item.rows,
          reProps = _objectWithoutProperties(item, ['type', 'option', 'field', 'rows']);

      return _react2.default.createElement(
        _upload2.default,
        _extends({
          name: 'file',
          action: 'https://upload-z2.qiniup.com',
          beforeUpload: beforeUpload,
          onChange: function onChange(info) {
            return _this.handleUploadChange(info, field);
          },
          fileList: _this.state.fileList
        }, reProps, _this.props),
        reProps.children || _react2.default.createElement(
          _button2.default,
          null,
          _react2.default.createElement(_icon2.default, { type: 'upload' }),
          ' Click to Upload'
        )
      );
    }, _this.getFormItem = function (item, formItemLayout) {
      var _this$props4 = _this.props,
          form = _this$props4.form,
          _this$props4$record = _this$props4.record,
          record = _this$props4$record === undefined ? {} : _this$props4$record,
          formLayout = _this$props4.layout;
      var getFieldDecorator = form.getFieldDecorator;
      var required = item.required,
          field = item.field,
          type = item.type,
          help = item.help;
      var label = item.label;

      var layout = formItemLayout;
      var afterLabel = null;
      var rules = [];
      if (required) {
        rules.push({
          required: true,
          message: getIntl(_reactIntlUniversal2.default, 'base.required', 'Required')
        });
      }
      var fieldDecorator = {
        initialValue: record[field]
      };
      if (rules.length > 0) {
        fieldDecorator.rules = rules;
      }
      if (type && type.toLowerCase() === 'switch') {
        afterLabel = _react2.default.createElement(
          'span',
          { className: 'ml2' },
          label
        );
        label = null;
        if (formLayout === 'horizontal') {
          layout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0
              },
              sm: {
                span: 15,
                offset: 6
              }
            }
          };
        }

        fieldDecorator.valuePropName = 'checked';
      }

      return _react2.default.createElement(
        FormItem,
        _extends({
          key: 'formItem' + field
        }, layout, {
          label: label,
          help: help
        }),
        getFieldDecorator(field, fieldDecorator)(_this.getInput(item)),
        type && type.toLowerCase() === 'upload' ? _this.getUpload(item) : null,
        type && type.toLowerCase() === 'switch' ? afterLabel : null
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseForm, [{
    key: 'getFields',
    value: function getFields() {
      var _this2 = this;

      var _props = this.props,
          layout = _props.layout,
          children = _props.children,
          _props$keyArr = _props.keyArr,
          keyArr = _props$keyArr === undefined ? [] : _props$keyArr,
          formItemLayout = _props.formItemLayout;

      switch (layout) {
        case 'horizontal':
          return _react2.default.createElement(
            'div',
            null,
            keyArr.map(function (item) {
              return _this2.getFormItem(item, formItemLayout || {
                labelCol: { span: 6 },
                wrapperCol: { span: 15 }
              });
            }),
            children
          );
        case 'vertical':
          return _react2.default.createElement(
            'div',
            null,
            keyArr.map(function (item) {
              return _this2.getFormItem(item);
            }),
            children
          );

        default:
          return _react2.default.createElement(
            'div',
            null,
            keyArr.map(function (item) {
              return _this2.getFormItem(item);
            }),
            children
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var layout = this.props.layout;

      return _react2.default.createElement(
        _form2.default,
        { layout: layout, onSubmit: this.onSubmit },
        this.getFields()
      );
    }
  }]);

  return BaseForm;
}(_react.Component);

exports.default = _form2.default.create({
  onValuesChange: function onValuesChange(props, changedValues, allValues) {
    var onChangeSearch = props.onChangeSearch;

    if (onChangeSearch) {
      onChangeSearch(_extends({}, changedValues, allValues));
    }
  }
})(BaseForm);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseForm = require('../BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sytles = {
  'ant-modal': 'u_webant-form-modal-ant-modal',
  'ant-modal-content': 'u_webant-form-modal-ant-modal-content',
  'ant-modal-footer': 'u_webant-form-modal-ant-modal-footer',
  'ant-btn': 'u_webant-form-modal-ant-btn',
  'ant-btn-dashed': 'u_webant-form-modal-ant-btn-dashed',
  'ant-modal-close': 'u_webant-form-modal-ant-modal-close',
  'ant-modal-body': 'u_webant-form-modal-ant-modal-body'
};
var FormModal = (_temp = _class = function (_Component) {
  _inherits(FormModal, _Component);

  function FormModal(props) {
    _classCallCheck(this, FormModal);

    var _this = _possibleConstructorReturn(this, (FormModal.__proto__ || Object.getPrototypeOf(FormModal)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(FormModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          record = _props.record,
          keyArr = _props.keyArr,
          title = _props.title,
          layout = _props.layout,
          footer = _props.footer,
          rePorps = _objectWithoutProperties(_props, ['children', 'record', 'keyArr', 'title', 'layout', 'footer']);

      var visible = this.state.visible;

      return _react2.default.createElement(
        'span',
        { className: sytles.main },
        _react2.default.createElement(
          'span',
          { onClick: this.showModelHandler },
          children
        ),
        _react2.default.createElement(
          _modal2.default,
          {
            title: title,
            visible: visible,
            onOk: this.okHandler,
            onCancel: this.hideModelHandler,
            footer: footer
          },
          _react2.default.createElement(_BaseForm2.default, _extends({
            record: record,
            layout: layout || 'vertical',
            ref: this.handleForm,
            onSubmit: this.okHandler,
            keyArr: keyArr
          }, rePorps))
        )
      );
    }
  }]);

  return FormModal;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.showModelHandler = function (e) {
    if (e) e.stopPropagation();
    _this2.setState({
      visible: true
    });
  };

  this.hideModelHandler = function () {
    _this2.setState({
      visible: false
    });
  };

  this.okHandler = function () {
    var form = _this2.form,
        props = _this2.props;
    var onOk = props.onOk;

    form.validateFields(function (err, values) {
      if (!err) {
        onOk(values);
        _this2.hideModelHandler();
      }
    });
  };

  this.handleForm = function (n) {
    if (n) {
      _this2.form = n.getForm();
    }
  };
}, _temp);
exports.default = FormModal;
module.exports = exports['default'];
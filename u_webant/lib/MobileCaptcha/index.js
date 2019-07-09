'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _Support = require('../Support');

var _Support2 = _interopRequireDefault(_Support);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIntl = _util_react_web.string.getIntl;


var FormItem = _form2.default.Item;
var delay500 = new _util_react_web.delay(500);

var MobileCaptcha = (_dec = _form2.default.create(), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(MobileCaptcha, _PureComponent);

  function MobileCaptcha(props) {
    _classCallCheck(this, MobileCaptcha);

    var _this = _possibleConstructorReturn(this, (MobileCaptcha.__proto__ || Object.getPrototypeOf(MobileCaptcha)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      count: 0,
      mobileTips: ''
    };
    return _this;
  }

  _createClass(MobileCaptcha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          form = _props.form,
          captchaTips = _props.captchaTips,
          getSupports = _props.getSupports;
      var getFieldDecorator = form.getFieldDecorator;
      var _state = this.state,
          count = _state.count,
          mobileTips = _state.mobileTips;


      var prefixSelector = _react2.default.createElement(_Support2.default, {
        getSupports: getSupports,
        style: { maxWidth: 150 },
        disabled: count > 0,
        name: 'prefix',
        typeName: 'nationaal',
        value: 86,
        form: form
      });
      return _react2.default.createElement(
        _form2.default,
        { style: { textAlign: 'left' } },
        _react2.default.createElement(
          FormItem,
          { extra: mobileTips },
          getFieldDecorator('mobile', {
            rules: [{
              required: true,
              message: getIntl(_reactIntlUniversal2.default, 'base.please.type.in.mobile.number', 'Please type in mobile number!')
            }]
          })(_react2.default.createElement(_input2.default, {
            placeholder: getIntl(_reactIntlUniversal2.default, 'base.mobile', 'Mobile'),
            size: 'large',
            disabled: count > 0,
            addonBefore: prefixSelector,
            onChange: this.onMoblieChange,
            ref: function ref(node) {
              _this2.mobileInput = node;
            }
          }))
        ),
        _react2.default.createElement(
          FormItem,
          { extra: getIntl(_reactIntlUniversal2.default, captchaTips, 'Mobile') },
          _react2.default.createElement(
            _row2.default,
            { gutter: 8 },
            _react2.default.createElement(
              _col2.default,
              { span: 13 },
              getFieldDecorator('captcha', {
                rules: [{ required: true, message: getIntl(_reactIntlUniversal2.default, 'base.please.type.in.the.captcha.you.got', 'Please type in the captcha you got!') }]
              })(_react2.default.createElement(_input2.default, {
                size: 'large',
                placeholder: getIntl(_reactIntlUniversal2.default, 'base.captcha', 'Captcha'),
                prefix: _react2.default.createElement(_icon2.default, { type: 'message', style: { color: 'rgba(0,0,0,.25)' } }),
                onChange: this.onCaptchaChange
              }))
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 11 },
              _react2.default.createElement(
                _button2.default,
                {
                  disabled: count,
                  style: { display: 'block', width: '100%' },
                  size: 'large',
                  onClick: this.onGetCaptcha
                },
                count ? count + ' s' : getIntl(_reactIntlUniversal2.default, 'base.get.captcha', 'Get captcha')
              )
            )
          )
        )
      );
    }
  }]);

  return MobileCaptcha;
}(_react.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.emitEmpty = function () {
    var state = _this3.state,
        mobileInput = _this3.mobileInput,
        props = _this3.props;
    var count = state.count;
    var form = props.form;

    if (count === 0) {
      mobileInput.focus();
      form.setFieldsValue({ mobile: '' });
    }
  };

  this.onMoblieChange = function (e) {
    var _props2 = _this3.props,
        form = _props2.form,
        checkPhone = _props2.checkPhone;

    if (checkPhone) {
      var phone = e.target.value;
      if (phone && phone.length > 6) {
        delay500.do(function () {
          var sendMobile = form.getFieldValue('prefix') + '_' + phone;
          checkPhone({ context: sendMobile }).then(function (res) {
            var list = res.data.list;

            if (list.length === 1) {
              var mobileTips = getIntl(_reactIntlUniversal2.default, 'base.phone.registered', phone + ' registered, get the captcha to login', { phone: phone });
              _this3.setState({ mobileTips: mobileTips });
            } else {
              var _mobileTips = getIntl(_reactIntlUniversal2.default, 'base.phone.can.user', phone + ' can use, get the captcha to register', { phone: phone });
              _this3.setState({ mobileTips: _mobileTips });
            }
          });
        });
      }
    }
  };

  this.onGetCaptcha = function () {
    var _props3 = _this3.props,
        form = _props3.form,
        getCaptcha = _props3.getCaptcha;

    form.validateFields(['mobile'], {}, function (err, values) {
      if (!err) {
        var sendMobile = form.getFieldValue('prefix') + '_' + values.mobile;
        if (getCaptcha) {
          getCaptcha(sendMobile, _this3.runGetCaptchaCountDown);
        }
      }
    });
  };

  this.runGetCaptchaCountDown = function () {
    var countDown = _this3.props.countDown;

    var count = countDown || 59;
    _this3.setState({ count: count });
    _this3.interval = setInterval(function () {
      count -= 1;
      _this3.setState({ count: count });
      if (count === 0) {
        clearInterval(_this3.interval);
      }
    }, 1000);
  };

  this.onCaptchaChange = function (e) {
    var captcha = e.target.value;
    if (captcha.length === 6) {
      var _props4 = _this3.props,
          form = _props4.form,
          checkCaptcha = _props4.checkCaptcha;

      var sendMobile = form.getFieldValue('prefix') + '_' + form.getFieldValue('mobile');
      if (checkCaptcha) {
        checkCaptcha(_extends({
          sendMobile: sendMobile,
          captcha: captcha
        }, _this3.props));
      }
    }
  };
}, _temp)) || _class);
exports.default = MobileCaptcha;
module.exports = exports['default'];
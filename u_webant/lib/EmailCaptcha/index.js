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

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIntl = _util_react_web.string.getIntl;


var FormItem = _form2.default.Item;
var delay500 = new _util_react_web.delay(500);

var EmailCaptcha = (_dec = _form2.default.create(), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(EmailCaptcha, _PureComponent);

  function EmailCaptcha(props) {
    _classCallCheck(this, EmailCaptcha);

    var _this = _possibleConstructorReturn(this, (EmailCaptcha.__proto__ || Object.getPrototypeOf(EmailCaptcha)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      count: 0,
      emailTips: ''
    };
    return _this;
  }

  _createClass(EmailCaptcha, [{
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
          captchaTips = _props.captchaTips;
      var getFieldDecorator = form.getFieldDecorator;
      var _state = this.state,
          count = _state.count,
          emailTips = _state.emailTips;


      return _react2.default.createElement(
        _form2.default,
        { style: { textAlign: 'left' } },
        _react2.default.createElement(
          FormItem,
          { extra: emailTips },
          getFieldDecorator('email', {
            rules: [{
              type: 'email',
              message: getIntl(_reactIntlUniversal2.default, 'base.not.valid.mail', 'It is not valid E-mail!')
            }, {
              required: true,
              message: getIntl(_reactIntlUniversal2.default, 'base.type.in.mail', 'Please type in your E-mail!')
            }]
          })(_react2.default.createElement(_input2.default, {
            placeholder: getIntl(_reactIntlUniversal2.default, 'base.email', 'E-mail!'),
            size: 'large',
            disabled: count > 0,
            prefix: _react2.default.createElement(_icon2.default, { type: 'inbox', style: { color: 'rgba(0,0,0,.25)' } }),
            onChange: this.onEmailChange,
            ref: function ref(node) {
              _this2.emailInput = node;
            }
          }))
        ),
        _react2.default.createElement(
          FormItem,
          { extra: getIntl(_reactIntlUniversal2.default, captchaTips, 'E-mail!') },
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

  return EmailCaptcha;
}(_react.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.emitEmpty = function () {
    var state = _this3.state,
        emailInput = _this3.emailInput,
        props = _this3.props;
    var count = state.count;
    var form = props.form;

    if (count === 0) {
      emailInput.focus();
      form.setFieldsValue({ email: '' });
    }
  };

  this.onEmailChange = function (e) {
    var checkEmail = _this3.props.checkEmail;

    if (checkEmail) {
      var email = e.target.value;

      if (email && email.length > 6 && email.indexOf('@') > 0 && email.indexOf('.') > 0 && email.indexOf('.') < email.length - 1) {
        delay500.do(function () {
          checkEmail({ context: email }).then(function (res) {
            var list = res.data.list;

            if (list.length === 1) {
              var emailTips = getIntl(_reactIntlUniversal2.default, 'base.email.registered', email + ' registered, get the captcha to login', { email: email });
              _this3.setState({ emailTips: emailTips });
            } else {
              var _emailTips = getIntl(_reactIntlUniversal2.default, 'base.email.can.use', email + ' can use, get the captcha to register', { email: email });
              _this3.setState({ emailTips: _emailTips });
            }
          });
        });
      }
    }
  };

  this.onGetCaptcha = function () {
    var _props2 = _this3.props,
        form = _props2.form,
        getCaptcha = _props2.getCaptcha;

    form.validateFields(['email'], {}, function (err, values) {
      if (!err) {
        var email = values.email;

        if (getCaptcha) {
          getCaptcha(email, _this3.runGetCaptchaCountDown);
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
      var _props3 = _this3.props,
          form = _props3.form,
          checkCaptcha = _props3.checkCaptcha;

      var email = form.getFieldValue('email');
      if (checkCaptcha) {
        checkCaptcha(_extends({
          email: email,
          captcha: captcha
        }, _this3.props));
      }
    }
  };
}, _temp)) || _class);
exports.default = EmailCaptcha;
module.exports = exports['default'];
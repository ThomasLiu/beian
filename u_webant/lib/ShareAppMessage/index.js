'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Script = require('../Script');

var _Script2 = _interopRequireDefault(_Script);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareAppMessage = function (_Component) {
  _inherits(ShareAppMessage, _Component);

  function ShareAppMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShareAppMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShareAppMessage.__proto__ || Object.getPrototypeOf(ShareAppMessage)).call.apply(_ref, [this].concat(args))), _this), _this.scriptLoaderCount = 0, _this.handleScriptLoad = function () {
      // eslint-disable-next-line no-plusplus
      ++_this.scriptLoaderCount;
      if (_this.scriptLoaderCount === 1) {
        var jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline'];
        var _this$props = _this.props,
            title = _this$props.title,
            desc = _this$props.desc,
            imgUrl = _this$props.imgUrl,
            _success = _this$props.success,
            _cancel = _this$props.cancel,
            getWechatJsConfig = _this$props.getWechatJsConfig;

        var link = window.location.href;
        getWechatJsConfig({
          jsApiList: jsApiList,
          url: link
        }).then(function (jsConfigRes) {
          var jsConfig = jsConfigRes.data;
          var _window = window,
              wx = _window.wx;

          wx.config(jsConfig);
          wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.error('error', res); // eslint-disable-line
          });
          wx.ready(function () {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            wx.checkJsApi({
              jsApiList: jsApiList, // 需要检测的JS接口列表，所有JS接口列表见附录2,
              success: function success(res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                if (res) {
                  var checkResult = res.checkResult;

                  if (checkResult) {
                    wx.onMenuShareAppMessage({
                      title: title, // 分享标题
                      desc: desc, // 分享描述
                      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                      imgUrl: imgUrl, // 分享图标
                      success: function success() {
                        // 用户确认分享后执行的回调函数
                        console.log('onMenuShareAppMessage success', _success);
                        if (_success) {
                          _success();
                        }
                      },
                      cancel: function cancel() {
                        // 用户取消分享后执行的回调函数
                        if (_cancel) {
                          _cancel();
                        }
                      }
                    });
                    wx.onMenuShareTimeline({
                      title: title, // 分享标题
                      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                      imgUrl: imgUrl, // 分享图标
                      success: function success() {
                        // 用户点击了分享后执行的回调函数
                        console.log('onMenuShareTimeline success', _success);
                        if (_success) {
                          setTimeout(function () {
                            _success();
                          }, 500);
                        }
                      }
                    });
                  }
                }
              }
            });
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShareAppMessage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Script2.default, { url: 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js', onLoad: this.handleScriptLoad });
    }
  }]);

  return ShareAppMessage;
}(_react.Component);

exports.default = ShareAppMessage;
module.exports = exports['default'];
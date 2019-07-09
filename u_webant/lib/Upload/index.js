'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util_react_web = require('util_react_web');

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};
var getIntl = _util_react_web.string.getIntl;
var Dragger = _upload2.default.Dragger;

var defaultFileType = 'doc|jpeg|png|jpg';
var defaultSize = 10;

var UploadDiv = function (_PureComponent) {
  _inherits(UploadDiv, _PureComponent);

  function UploadDiv() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadDiv);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadDiv.__proto__ || Object.getPrototypeOf(UploadDiv)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileList: []
    }, _this.beforeUpload = function (file) {
      var beforeUpload = _this.props.beforeUpload;


      if (beforeUpload) {
        return beforeUpload(file);
      }

      var _this$props = _this.props,
          _this$props$maxSize = _this$props.maxSize,
          maxSize = _this$props$maxSize === undefined ? defaultSize : _this$props$maxSize,
          _this$props$fileType = _this$props.fileType,
          fileType = _this$props$fileType === undefined ? defaultFileType : _this$props$fileType;


      var reg = new RegExp('' + fileType.toLowerCase());

      var isPass = reg.test(file.name.toLowerCase());
      if (!isPass) {
        _message3.default.error(getIntl(_reactIntlUniversal2.default, 'base.you.can.only.upload.file', 'You can only upload ' + fileType + ' file!', { type: fileType }));
      }

      var isLtM = file.size / 1024 / 1024 < maxSize;
      if (!isLtM) {
        _message3.default.error(getIntl(_reactIntlUniversal2.default, 'base.file.must.smaller.than.num.mb', 'File must smaller than ' + maxSize + 'MB!', { num: maxSize }));
      }

      _this.setState({ loading: true });

      // console.log('beforeUpload', file);

      // console.log('beforeUpload isPass', isPass, isLtM, isPass && isLtM);
      return isPass && isLtM;
    }, _this.onChange = function (info) {
      var _info$file = info.file,
          status = _info$file.status,
          response = _info$file.response,
          name = _info$file.name,
          uid = _info$file.uid;
      // console.log(status, info.file, info);

      var fileList = info.fileList;
      var _this$props2 = _this.props,
          origin = _this$props2.origin,
          onSuccessAfter = _this$props2.onSuccessAfter;

      // console.log(status, 'fileList:', fileList);

      fileList = fileList.filter(function (file) {
        if (file.status) {
          return true;
        }
        return false;
      });

      // console.log(status, 'fileList:', fileList);

      fileList = fileList.map(function (file) {
        if (file.response) {
          var url = origin + '/' + file.response.key;
          file.url = url + '?attname=' + file.name;
        }
        return file;
      });

      // console.log(status, 'fileList:', fileList);
      if (status === 'done') {
        if (onSuccessAfter) {
          onSuccessAfter({
            uuid: uid,
            title: name,
            ret: response
          });
        }
        _message3.default.success(info.file.name + ' file uploaded successfully.');
      } else if (status === 'error') {
        _message3.default.error(info.file.name + ' file upload failed.');
      }
      _this.setState({ fileList: fileList });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UploadDiv, [{
    key: 'render',
    value: function render() {
      var fileList = this.state.fileList;
      var _props = this.props,
          _props$maxSize = _props.maxSize,
          maxSize = _props$maxSize === undefined ? defaultSize : _props$maxSize,
          _props$fileType = _props.fileType,
          fileType = _props$fileType === undefined ? defaultFileType : _props$fileType;

      var fileTypeText = fileType.split('|').join(', ');
      var _props$extra = this.props.extra,
          extra = _props$extra === undefined ? _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'p',
          { className: 'ant-upload-drag-icon' },
          _react2.default.createElement(_icon2.default, { type: 'inbox' })
        ),
        _react2.default.createElement(
          'p',
          { className: 'ant-upload-text' },
          getIntl(_reactIntlUniversal2.default, 'base.upload.tips1', 'Click or drag file to this area to upload')
        ),
        _react2.default.createElement(
          'p',
          { className: 'ant-upload-hint' },
          getIntl(_reactIntlUniversal2.default, 'base.upload.tips2', 'You can upload ' + fileTypeText + ' \u2022 ' + maxSize + 'MB file limit .', { maxSize: maxSize, fileType: fileTypeText })
        )
      ) : _props$extra;

      var props = {
        name: 'file',
        multiple: true,
        action: 'https://upload-z2.qiniup.com',
        beforeUpload: this.beforeUpload,
        onChange: this.onChange
      };

      return _react2.default.createElement(
        'div',
        { className: styles.normal },
        _react2.default.createElement(
          Dragger,
          _extends({}, props, this.props, {
            fileList: fileList
          }),
          extra
        )
      );
    }
  }]);

  return UploadDiv;
}(_react.PureComponent);

exports.default = UploadDiv;
module.exports = exports['default'];
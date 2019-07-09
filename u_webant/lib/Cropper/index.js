'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCropper = require('react-cropper');

var _reactCropper2 = _interopRequireDefault(_reactCropper);

var _lrz = require('lrz');

var _lrz2 = _interopRequireDefault(_lrz);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

require('cropperjs/dist/cropper.css');

var _request = require('../_utils/request');

var _request2 = _interopRequireDefault(_request);

var _util_react_web = require('util_react_web');

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies


var styles = {
  'main': 'u_webant-cropper-main',
  'ant-modal': 'u_webant-cropper-ant-modal',
  'ant-modal-content': 'u_webant-cropper-ant-modal-content',
  'ant-modal-footer': 'u_webant-cropper-ant-modal-footer',
  'ant-btn': 'u_webant-cropper-ant-btn',
  'ant-btn-dashed': 'u_webant-cropper-ant-btn-dashed',
  'ant-modal-body': 'u_webant-cropper-ant-modal-body'
};
var getIntl = _util_react_web.string.getIntl;


function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

var CropperWidget = function (_PureComponent) {
  _inherits(CropperWidget, _PureComponent);

  function CropperWidget(props) {
    _classCallCheck(this, CropperWidget);

    var _this = _possibleConstructorReturn(this, (CropperWidget.__proto__ || Object.getPrototypeOf(CropperWidget)).call(this, props));

    _this.reqs = {};

    _this.hideModal = function () {
      _this.setState({
        editImageModalVisible: false,
        loading: false
      });
    };

    _this.handleChange = function (info) {
      if (info.file.status === 'uploading') {
        _this.setState({ loading: true });
      }
    };

    _this.saveImg = function () {
      var fileList = _this.state.fileList;
      var _this$props = _this.props,
          _onSuccess = _this$props.onSuccess,
          action = _this$props.action,
          name = _this$props.name,
          data = _this$props.data;

      (0, _lrz2.default)(_this.cropper.getCroppedCanvas().toDataURL(), { quality: 0.6 }).then(function (results) {
        var lrzImg = new File([results.file], fileList[0].name, { type: fileList[0].type });

        var uid = fileList[0].uid;


        _this.reqs[uid] = (0, _request2.default)({
          action: action || 'https://upload-z2.qiniup.com',
          filename: name || 'file',
          file: lrzImg,
          data: data,
          onProgress: function onProgress(e) {
            _this.upload.onProgress(e, lrzImg);
          },
          onSuccess: function onSuccess(ret) {
            delete _this.reqs[uid];

            if (_onSuccess) {
              _onSuccess({
                uuid: uid,
                title: fileList[0].name,
                ret: ret
              });
            }
            _this.setState({
              editImageModalVisible: false,
              srcCropper: '',
              loading: false
            });
          },
          onError: function onError(err) {
            delete _this.reqs[uid];
            _message3.default.error(err);
          }
        });
        _this.upload.onStart(lrzImg);
      });
    };

    _this.beforeUpload = function (file) {
      var _this$props2 = _this.props,
          maxSize = _this$props2.maxSize,
          _this$props2$imgType = _this$props2.imgType,
          imgType = _this$props2$imgType === undefined ? 'jpeg|png|jpg' : _this$props2$imgType;

      var isJPG = imgType.toLowerCase().indexOf(file.type.toLowerCase().replace('image/', '')) >= 0;
      if (!isJPG) {
        _message3.default.error(getIntl(_reactIntlUniversal2.default, 'base.you.can.only.upload.img.file', 'You can only upload ' + imgType + ' file!', { type: imgType }));
        return false;
      }
      var isLtM = file.size / 1024 / 1024 < (maxSize || 10);
      if (!isLtM) {
        _message3.default.error(getIntl(_reactIntlUniversal2.default, 'base.image.must.smaller.than.num.mb', 'Image must smaller than ' + maxSize + 'MB!', { num: maxSize }));
        return false;
      }
      getBase64(file, function (imgUrl) {
        return _this.setState({
          srcCropper: imgUrl, // cropper的图片路径
          editImageModalVisible: true, // 打开控制裁剪弹窗的变量，为true即弹窗
          fileList: [file]
        });
      });
      _this.setState({ loading: true });
      return false;
    };

    _this.handleRotate = function () {
      _this.cropper.rotate(90);
    };

    _this.getDiv = function () {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var divId = 'cropperDiv' + i;
      if (document.getElementById(divId)) {
        return _this.getDiv(i + 1);
      }
      return divId;
    };

    _this.state = {
      loading: false,
      fileList: [],
      srcCropper: '',
      editImageModalVisible: false
    };
    return _this;
  }

  // 点击保存的函数，需要在这里进行压缩


  _createClass(CropperWidget, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          editImageModalVisible = _state.editImageModalVisible,
          srcCropper = _state.srcCropper,
          loading = _state.loading;
      var _props = this.props,
          viewMode = _props.viewMode,
          dragMode = _props.dragMode,
          aspectRatio = _props.aspectRatio,
          baseSize = _props.baseSize,
          imageUrl = _props.imageUrl,
          avatarClassName = _props.avatarClassName,
          autoCropArea = _props.autoCropArea,
          isMobile = _props.isMobile;
      var _props2 = this.props,
          minCanvasHeight = _props2.minCanvasHeight,
          minCanvasWidth = _props2.minCanvasWidth,
          minContainerWidth = _props2.minContainerWidth,
          minContainerHeight = _props2.minContainerHeight,
          height = _props2.height,
          width = _props2.width;


      var uploadButton = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_icon2.default, { type: loading ? 'loading' : 'plus' }),
        _react2.default.createElement(
          'div',
          { className: 'ant-upload-text' },
          getIntl(_reactIntlUniversal2.default, 'base.upload', 'Upload')
        )
      );
      var thisBaseSize = baseSize || 450;
      if (isMobile) {
        minCanvasHeight = minContainerHeight = height = document.body.offsetHeight - 53;
        minCanvasWidth = minContainerWidth = width = document.body.offsetWidth;
      }
      var footer = _react2.default.createElement(
        'div',
        { style: { textAlign: 'center' } },
        _react2.default.createElement(
          _button2.default,
          { style: { float: 'left' }, onClick: this.hideModal },
          getIntl(_reactIntlUniversal2.default, 'base.cancel', 'Cancel')
        ),
        _react2.default.createElement(
          _button2.default,
          { type: 'dashed', onClick: this.handleRotate },
          _react2.default.createElement(_icon2.default, { type: 'retweet' })
        ),
        _react2.default.createElement(
          _button2.default,
          { style: { float: 'right' }, onClick: this.saveImg },
          getIntl(_reactIntlUniversal2.default, 'base.save', 'Save')
        )
      );
      var divId = this.getDiv();
      return _react2.default.createElement(
        'div',
        { className: styles.main, id: divId },
        _react2.default.createElement(
          _upload2.default,
          {
            ref: function ref(node) {
              _this2.upload = node;
            },
            listType: 'picture-card',
            className: avatarClassName,
            showUploadList: false,
            beforeUpload: this.beforeUpload,
            onChange: this.handleChange
          },
          imageUrl ? _react2.default.createElement('img', { src: imageUrl, alt: 'avatar' }) : uploadButton
        ),
        _react2.default.createElement(
          _modal2.default,
          { getContainer: function getContainer() {
              return document.getElementById(divId);
            }, visible: editImageModalVisible, footer: footer, closable: false },
          _react2.default.createElement(_reactCropper2.default, {
            ref: function ref(node) {
              _this2.cropper = node;
            },
            src: srcCropper,
            viewMode: viewMode || 2 // 定义cropper的视图模式 可选 0, 1, 2, 3 （0 不限制，1 图片原始大小显示，2 按照图片的最长一边填充，3 按照图片最短一边填充）
            , dragMode: dragMode || 'crop' // 裁剪时图片是否可以移动 可选 'crop', 'move'
            , aspectRatio: aspectRatio || 1 / 1 // 裁剪的比例，16:9, 4:3, 1:1, 2:3
            , style: {
              height: height || thisBaseSize,
              width: width || thisBaseSize,
              margin: '0 auto'
            },
            minCanvasWidth: minCanvasWidth || thisBaseSize,
            minCanvasHeight: minCanvasHeight || thisBaseSize,
            minContainerWidth: minContainerWidth || thisBaseSize,
            minContainerHeight: minContainerHeight || thisBaseSize,
            autoCropArea: autoCropArea || 1
            // preview='.cropper-preview'
          })
        )
      );
    }
  }]);

  return CropperWidget;
}(_react.PureComponent);

exports.default = function (props) {
  return _react2.default.createElement(
    _reactMedia2.default,
    { query: '(max-width: 599px)' },
    function (isMobile) {
      return _react2.default.createElement(CropperWidget, _extends({}, props, { isMobile: isMobile }));
    }
  );
};

module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = (_temp = _class = function (_PureComponent) {
  _inherits(Script, _PureComponent);

  // 该组件已经被实例化了多少个对象


  // this.constructor.loadedScripts[url] = true;


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  function Script(props) {
    _classCallCheck(this, Script);

    // eslint-disable-next-line no-plusplus
    var _this = _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, props));

    _this.scriptLoaderId = 'id' + _this.constructor.idCount++;
    // 1.如果某一个页面有多个该Script标签，那么其特定的this.scriptLoaderId都是唯一的
    return _this;
  }

  // this.constructor.erroredScripts[url] = true;


  // 特定的URL是否已经加载完成
  // this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
  // 每一个URL对应于多个scriptLoaderId，但是只会检查一个是否已经加载完毕


  _createClass(Script, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onError = _props.onError,
          onLoad = _props.onLoad,
          url = _props.url;
      // fix 1:如果该URL已经加载过了，然后又在页面其他地方要求加载，因为this.constructor.loadedScripts[url]已经被设置为true，那么直接调用onLoad方法

      if (this.constructor.loadedScripts[url]) {
        onLoad();
        return;
      }
      // fix 2:如果该URL已经加载过了，而且加载出错，然后又在页面其他地方要求加载，因为tthis.constructor.erroredScripts[url]已经被设置为true，那么直接调用onError方法
      if (this.constructor.erroredScripts[url]) {
        onError();
        return;
      }
      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      // fix 3:如果某一个URL已经在加载了，即this.constructor.scriptObservers[url]被设置为特定的值了，那么如果还要求该URL那么直接返回，防止一个组件被加载多次
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
        return;
      }
      // 8.this.constructor.scriptObservers用于注册某一个URL特定的对象,其值为为该组件添加的所有的props对象，而key为该组件实例的this.scriptLoaderId
      this.constructor.scriptObservers[url] = _defineProperty({}, this.scriptLoaderId, this.props);
      this.createScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];
      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      // componentWillUnmount只是卸载当前的组件实例而已，所以直接delete当前实例的this.scriptLoaderId
      if (observers) {
        delete observers[this.scriptLoaderId];
      }
    }
  }, {
    key: 'createScript',
    value: function createScript() {
      var _this2 = this;

      var _props2 = this.props,
          onCreate = _props2.onCreate,
          url = _props2.url,
          attributes = _props2.attributes;
      // 1.onCreate在script标签创建后被调用

      var script = document.createElement('script');
      onCreate();
      // add 'data-' or non standard attributes to the script tag
      // 2.所有attributes指定的属性都会被添加到script标签中
      if (attributes) {
        Object.keys(attributes).forEach(function (prop) {
          return script.setAttribute(prop, attributes[prop]);
        });
      }
      script.src = url;
      // default async to true if not set with custom attributes
      // 3.如果script标签没有async属性，表示不是异步加载的
      if (!script.hasAttribute('async')) {
        script.async = 1;
      }
      // 5.shouldRemoveObserver(observers[key])用于移除特定的监听器并触发onLoad
      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        // 监听当前URL的scriptObservers，然后获取该Observer的key，即对应于this.scriptLoaderId，每一个组件实例都是唯一的，一个URL可能多个this.scriptLoadedId相对应:
        // if (this.constructor.scriptObservers[url]) {
        //   this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
        //   return;
        // }
        Object.keys(observers).forEach(function (key) {
          // 如果某一个特定的key对应的，传入的observers[key]就是该组件实例的this.props
          if (shouldRemoveObserver(observers[key])) {
            delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
          }
        });
      };
      // 4.onload将该URL已经加载的状态设置为true
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          // 6.调用用户自己的onLoad表示脚本加载完成
          observer.onLoad();
          return true;
        });
      };
      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          // 7.调用用户自己的onError表示加载错误
          observer.onError();
          return true;
        });
      };
      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, { style: { display: 'none', height: '0', width: '0', top: '-999999' } });
    }
  }]);

  return Script;
}(_react.PureComponent), _class.propTypes = {
  attributes: _propTypes2.default.object,
  onCreate: _propTypes2.default.func,
  // eslint-disable-next-line react/require-default-props
  onError: _propTypes2.default.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  onLoad: _propTypes2.default.func.isRequired,
  url: _propTypes2.default.string.isRequired
}, _class.defaultProps = {
  attributes: {},
  onCreate: function onCreate() {},
  // eslint-disable-next-line react/default-props-match-prop-types
  onError: function onError() {},
  // eslint-disable-next-line react/default-props-match-prop-types
  onLoad: function onLoad() {}
}, _class.scriptObservers = {}, _class.loadedScripts = {}, _class.erroredScripts = {}, _class.idCount = 0, _temp);
exports.default = Script;
module.exports = exports['default'];
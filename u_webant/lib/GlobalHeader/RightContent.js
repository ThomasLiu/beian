'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _groupBy = require('lodash/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _NoticeIcon = require('../NoticeIcon');

var _NoticeIcon2 = _interopRequireDefault(_NoticeIcon);

var _HeaderSearch = require('../HeaderSearch');

var _HeaderSearch2 = _interopRequireDefault(_HeaderSearch);

var _HeaderDropdown = require('../HeaderDropdown');

var _HeaderDropdown2 = _interopRequireDefault(_HeaderDropdown);

var _SelectLang = require('../SelectLang');

var _SelectLang2 = _interopRequireDefault(_SelectLang);

var _BaseMenu = require('../SiderMenu/BaseMenu');

var _BaseMenu2 = _interopRequireDefault(_BaseMenu);

var _SiderMenuUtils = require('../SiderMenu/SiderMenuUtils');

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'header': 'u_webant-global-header-header',
  'logo': 'u_webant-global-header-logo',
  'menu': 'u_webant-global-header-menu',
  'anticon': 'u_webant-global-header-anticon',
  'ant-dropdown-menu-item': 'u_webant-global-header-ant-dropdown-menu-item',
  'ant-dropdown-menu-item-group-list': 'u_webant-global-header-ant-dropdown-menu-item-group-list',
  'trigger': 'u_webant-global-header-trigger',
  'right': 'u_webant-global-header-right',
  'action': 'u_webant-global-header-action',
  'search': 'u_webant-global-header-search',
  'account': 'u_webant-global-header-account',
  'avatar': 'u_webant-global-header-avatar',
  'dark': 'u_webant-global-header-dark',
  'name': 'u_webant-global-header-name'
};
var getIntl = _util_react_web.string.getIntl;

var GlobalHeaderRight = function (_PureComponent) {
  _inherits(GlobalHeaderRight, _PureComponent);

  function GlobalHeaderRight() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GlobalHeaderRight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GlobalHeaderRight.__proto__ || Object.getPrototypeOf(GlobalHeaderRight)).call.apply(_ref, [this].concat(args))), _this), _this.getUnreadData = function (noticeData) {
      var unreadMsg = {};
      Object.entries(noticeData).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        if (!unreadMsg[key]) {
          unreadMsg[key] = 0;
        }
        if (Array.isArray(value)) {
          unreadMsg[key] = value.filter(function (item) {
            return !item.read;
          }).length;
        }
      });
      return unreadMsg;
    }, _this.changeReadState = function (clickedItem) {
      var id = clickedItem.id;
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'global/changeNoticeReadState',
        payload: id
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GlobalHeaderRight, [{
    key: 'getNoticeData',
    value: function getNoticeData() {
      var _props$notices = this.props.notices,
          notices = _props$notices === undefined ? [] : _props$notices;

      if (notices.length === 0) {
        return {};
      }
      var newNotices = notices.map(function (notice) {
        var newNotice = _extends({}, notice);
        if (newNotice.datetime) {
          newNotice.datetime = (0, _moment2.default)(notice.datetime).fromNow();
        }
        if (newNotice.id) {
          newNotice.key = newNotice.id;
        }
        if (newNotice.extra && newNotice.status) {
          var color = {
            todo: '',
            processing: 'blue',
            urgent: 'red',
            doing: 'gold'
          }[newNotice.status];
          newNotice.extra = _react2.default.createElement(
            _tag2.default,
            { color: color, style: { marginRight: 0 } },
            newNotice.extra
          );
        }
        return newNotice;
      });
      return (0, _groupBy2.default)(newNotices, 'type');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentUser = _props.currentUser,
          fetchingNotices = _props.fetchingNotices,
          onNoticeVisibleChange = _props.onNoticeVisibleChange,
          onMenuClick = _props.onMenuClick,
          onNoticeClear = _props.onNoticeClear,
          haveHeaderSearch = _props.haveHeaderSearch,
          haveNotice = _props.haveNotice,
          loginPageUrl = _props.loginPageUrl,
          menuData = _props.menuData,
          isMobile = _props.isMobile;

      var insideFlatMenuKeys = (0, _SiderMenuUtils.getFlatMenuKeys)(menuData.inside || []);
      var menu = _react2.default.createElement(_BaseMenu2.default, _extends({}, this.props, { menuData: menuData.inside, flatMenuKeys: insideFlatMenuKeys, className: styles.menu, selectedKeys: [], onClick: onMenuClick, mode: 'vertical' }));
      var flatMenuKeys = (0, _SiderMenuUtils.getFlatMenuKeys)(menuData.right || []);
      var noticeData = this.getNoticeData();
      // const unreadMsg = this.getUnreadData(noticeData);
      return _react2.default.createElement(
        'div',
        { className: styles.right },
        !isMobile && _react2.default.createElement(_BaseMenu2.default, _extends({}, this.props, { menuData: menuData.right, flatMenuKeys: flatMenuKeys, style: { display: 'inline-block', verticalAlign: 'middle' } })),
        haveHeaderSearch && _react2.default.createElement(_HeaderSearch2.default, {
          className: styles.action + ' ' + styles.search,
          placeholder: getIntl(_reactIntlUniversal2.default, 'base.search', 'Search'),
          dataSource: ['123', '12314', '2123'],
          onSearch: function onSearch(value) {
            console.log('input', value); // eslint-disable-line
          },
          onPressEnter: function onPressEnter(value) {
            console.log('enter', value); // eslint-disable-line
          }
        }),
        currentUser.nickname ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          haveNotice && _react2.default.createElement(
            _NoticeIcon2.default,
            {
              className: styles.action,
              count: currentUser.notifyCount,
              onItemClick: function onItemClick(item, tabProps) {
                console.log(item, tabProps); // eslint-disable-line
              },
              locale: {
                emptyText: getIntl(_reactIntlUniversal2.default, 'base.no.notifications', 'No notifications'),
                clear: getIntl(_reactIntlUniversal2.default, 'base.clear', 'Clear')
              },
              onClear: onNoticeClear,
              onPopupVisibleChange: onNoticeVisibleChange,
              loading: fetchingNotices,
              popupAlign: { offset: [20, -16] },
              clearClose: true
            },
            _react2.default.createElement(_NoticeIcon2.default.Tab, {
              list: noticeData.notification,
              title: getIntl(_reactIntlUniversal2.default, 'base.notification', 'Notification'),
              name: 'notification',
              emptyText: getIntl(_reactIntlUniversal2.default, 'base.you.have.viewed.all.notifications', 'You have viewed all notifications.'),
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
            }),
            _react2.default.createElement(_NoticeIcon2.default.Tab, {
              list: noticeData.message,
              title: getIntl(_reactIntlUniversal2.default, 'base.message', 'Message'),
              name: 'message',
              emptyText: getIntl(_reactIntlUniversal2.default, 'base.you.have.viewed.all.messsages', 'You have viewed all messsages.'),
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
            })
          ),
          _react2.default.createElement(
            _HeaderDropdown2.default,
            { overlay: menu },
            _react2.default.createElement(
              'span',
              { className: styles.action + ' ' + styles.account },
              _react2.default.createElement(_avatar2.default, {
                size: 'small',
                className: styles.avatar,
                src: (currentUser.headimgurl || 'https://image.hiredchina.com/face_ex.jpg') + '?imageView2/2/w/32',
                alt: 'avatar'
              }),
              _react2.default.createElement(
                'span',
                { className: styles.name },
                currentUser.nickname
              )
            )
          )
        ) : _react2.default.createElement(
          'a',
          { href: loginPageUrl || '/user/login', className: styles.action },
          getIntl(_reactIntlUniversal2.default, 'base.login', 'Login')
        ),
        _react2.default.createElement(_SelectLang2.default, { className: styles.action })
      );
    }
  }]);

  return GlobalHeaderRight;
}(_react.PureComponent);

exports.default = GlobalHeaderRight;
module.exports = exports['default'];
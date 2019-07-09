'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GlobalFooter = require('../GlobalFooter');

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = _layout2.default.Footer;

var FooterView = function FooterView(props) {
  return _react2.default.createElement(
    Footer,
    null,
    _react2.default.createElement(_GlobalFooter2.default, {
      links: props.links,
      copyright: _react2.default.createElement(
        _react.Fragment,
        null,
        'Copyright ',
        _react2.default.createElement(_icon2.default, { type: 'copyright' }),
        ' ',
        props.copyright
      ),
      patents: _react2.default.createElement(
        'a',
        { target: '_blank', href: 'http://www.miitbeian.gov.cn/', style: { color: 'rgba(0, 0, 0, 0.45)' } },
        props.recordCode || '粤ICP备16003809号-2'
      ),
      social: props.social,
      isMobile: props.isMobile
    })
  );
};
exports.default = FooterView;
module.exports = exports['default'];
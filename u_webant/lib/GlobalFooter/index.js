'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'globalFooter': 'u_webant-global-footer-globalFooter',
  'links': 'u_webant-global-footer-links',
  'copyright': 'u_webant-global-footer-copyright',
  'socialTitle1': 'u_webant-global-footer-socialTitle1',
  'socialTitle2': 'u_webant-global-footer-socialTitle2',
  'socialIcon': 'u_webant-global-footer-socialIcon',
  'srOnly': 'u_webant-global-footer-srOnly',
  'patents': 'u_webant-global-footer-patents',
  'img': 'u_webant-global-footer-img'
};
var getIntl = _util_react_web.string.getIntl;


var getLink = function getLink(link) {
  var key = link.key,
      title = link.title,
      href = link.href,
      blankTarget = link.blankTarget,
      icon = link.icon,
      img = link.img,
      rel = link.rel,
      rev = link.rev;

  var i18nStr = getIntl(_reactIntlUniversal2.default, title, title);
  var retrunValue = i18nStr;
  if (icon) {
    retrunValue = _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_icon2.default, { type: icon }),
      ' ',
      retrunValue
    );
  }
  if (img) {
    retrunValue = _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h4',
        null,
        retrunValue
      ),
      _react2.default.createElement(
        'div',
        { className: styles.img },
        _react2.default.createElement('img', { src: img + '?imageView2/2/w/300', title: i18nStr })
      )
    );
  }
  if (href) {
    retrunValue = _react2.default.createElement(
      'a',
      {
        key: key,
        title: i18nStr,
        target: blankTarget ? '_blank' : '_self',
        href: href,
        rel: rel,
        rev: rev
      },
      retrunValue
    );
  }

  return retrunValue;
};

var GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
      links = _ref.links,
      copyright = _ref.copyright,
      social = _ref.social,
      patents = _ref.patents,
      isMobile = _ref.isMobile;

  var clsString = (0, _classnames2.default)(styles.globalFooter, className);
  var socialTitle1 = getIntl(_reactIntlUniversal2.default, 'base.find.us.on', 'Find us on');
  var socialTitle2 = getIntl(_reactIntlUniversal2.default, 'base.social.media', 'social media:');

  var colSpan = 4;
  if (links) {
    colSpan = parseInt(24 / links.length);
  }
  if (isMobile) {
    colSpan = 12;
  }

  return _react2.default.createElement(
    'footer',
    { className: clsString },
    links && _react2.default.createElement(
      'div',
      { className: styles.links },
      _react2.default.createElement(
        _row2.default,
        { type: 'flex', justify: 'space-around', style: { maxWidth: '1024px', margin: '0 auto' } },
        links.map(function (link) {
          return _react2.default.createElement(
            _col2.default,
            { span: colSpan, key: 'col' + link.title },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                { key: '' + link.title + link.href },
                _react2.default.createElement(
                  'h3',
                  null,
                  getLink(link)
                )
              ),
              link.children && link.children.map(function (childrenLink) {
                return _react2.default.createElement(
                  'li',
                  { key: '' + childrenLink.title + childrenLink.href },
                  getLink(childrenLink)
                );
              })
            )
          );
        })
      )
    ),
    social && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { className: styles.socialTitle1 },
        socialTitle1,
        ' ',
        _react2.default.createElement(
          'span',
          { className: styles.socialTitle2 },
          socialTitle2
        )
      ),
      social.map(function (link) {
        return _react2.default.createElement(
          'a',
          {
            key: link.icon,
            title: link.icon,
            target: '_blank',
            href: link.href,
            className: styles.socialIcon
          },
          _react2.default.createElement(_icon2.default, { type: link.icon }),
          _react2.default.createElement(
            'span',
            { className: styles.srOnly },
            link.icon
          )
        );
      })
    ),
    copyright && _react2.default.createElement(
      'p',
      { className: styles.copyright },
      copyright
    ),
    patents && _react2.default.createElement(
      'p',
      { className: styles.patents },
      patents
    )
  );
};

exports.default = GlobalFooter;
module.exports = exports['default'];
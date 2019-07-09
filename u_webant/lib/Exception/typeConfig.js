'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIntl = _util_react_web.string.getIntl;


var config = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: getIntl(_reactIntlUniversal2.default, 'base.403.cant.access', "Sorry, you don't have access to this page")
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: getIntl(_reactIntlUniversal2.default, 'base.404.page.on.exist', "Sorry, the page you visited does not exist")
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: getIntl(_reactIntlUniversal2.default, 'base.505.server.error', "Sorry, the server is reporting an error")
  }
};

exports.default = config;
module.exports = exports['default'];
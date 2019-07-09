'use strict';

var _SiderMenuUtils = require('./SiderMenuUtils');

var menu = [{
  path: '/dashboard',
  children: [{
    path: '/dashboard/name'
  }]
}, {
  path: '/userinfo',
  children: [{
    path: '/userinfo/:id',
    children: [{
      path: '/userinfo/:id/info'
    }]
  }]
}];

var flatMenuKeys = (0, _SiderMenuUtils.getFlatMenuKeys)(menu);

describe('test convert nested menu to flat menu', function () {
  it('simple menu', function () {
    expect(flatMenuKeys).toEqual(['/dashboard', '/dashboard/name', '/userinfo', '/userinfo/:id', '/userinfo/:id/info']);
  });
});
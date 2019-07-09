'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultCollapsedSubMenus = exports.getMenuMatches = exports.getFlatMenuKeys = undefined;

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _util_react_web = require('util_react_web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menus
 */
var getFlatMenuKeys = exports.getFlatMenuKeys = function getFlatMenuKeys(menuData) {
  var keys = [];
  menuData.forEach(function (item) {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

var getMenuMatches = exports.getMenuMatches = function getMenuMatches(flatMenuKeys, path) {
  return flatMenuKeys.filter(function (item) {
    if (item) {
      return (0, _pathToRegexp2.default)(item).test(path);
    }
    return false;
  });
};
/**
 * 获得菜单子节点
 * @memberof SiderMenu
 */
var getDefaultCollapsedSubMenus = exports.getDefaultCollapsedSubMenus = function getDefaultCollapsedSubMenus(props) {
  var pathname = props.location.pathname,
      flatMenuKeys = props.flatMenuKeys;
  var urlToList = _util_react_web.url.urlToList;

  return urlToList(pathname).map(function (item) {
    return getMenuMatches(flatMenuKeys, item)[0];
  }).filter(function (item) {
    return item;
  }).reduce(function (acc, curr) {
    return [].concat(_toConsumableArray(acc), [curr]);
  }, ['/']);
};
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsDownloadTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12" }, props),
    React.createElement("path", { d: "M11 10H1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-5.707-.793a.997.997 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L7 6.086V1a1 1 0 1 0-2 0v5.086L3.707 4.793a1 1 0 1 0-1.414 1.414l3 3z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsDownloadTiny;

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsPinSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M5.617 2v1.23h.618v4.917L5 9.377v1.229h2.136L8.573 16h.261l1.438-5.394h2.135v-1.23l-1.234-1.23V3.23h.617V2z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsPinSmall;

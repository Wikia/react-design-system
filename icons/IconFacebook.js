'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsFacebook = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M16.762 5.432h-1.786c-1.428 0-1.666.71-1.666 1.657v2.248h3.452l-.357 3.55h-2.857V22H9.976v-9.112H7v-3.55h2.976V6.733C9.976 3.775 11.762 2 14.381 2c1.19 0 2.262.118 2.619.118v3.314h-.238z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsFacebook;

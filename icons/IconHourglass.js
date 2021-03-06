'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsHourglass = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M21.6 2c.2 0 .4-.2.4-.4V.4c0-.2-.2-.4-.4-.4H2.4c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4H4c0 4.1 1.4 7.8 3.6 10C5.4 14.2 4 17.9 4 22H2.4c-.2 0-.4.2-.4.4v1.1c0 .3.2.5.4.5h19.1c.2 0 .4-.2.4-.4v-1.1c0-.2-.2-.4-.4-.4H20c0-4.1-1.4-7.8-3.6-10C18.6 9.8 20 6.1 20 2h1.6zM18 22H6c0-1.4.2-2.8.5-4h10.9c.4 1.2.6 2.6.6 4zm-3.7-10.8l-1.1.8 1.2.8c1 .7 1.8 1.8 2.4 3.2H7.3c.6-1.4 1.4-2.5 2.4-3.2l1.2-.8-1.2-.8C7.5 9.6 6 5.9 6 2h12c0 3.9-1.5 7.6-3.7 9.2z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsHourglass;

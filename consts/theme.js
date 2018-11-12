'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var colors = _interopDefault(require('./colors'));

var theme = {
  button: {
    background: "var(--button-background, ".concat(colors.AQUA, ")"),
    backgroundHover: "var(--button-background-hover, ".concat(colors.AQUA_HOVER, ")")
  }
};

module.exports = theme;

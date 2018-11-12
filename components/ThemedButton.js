'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var colors = _interopDefault(require('../../consts/colors'));
var styled = _interopDefault(require('styled-components'));
var Button = _interopDefault(require('../Button'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var defaultTheme = {
  button: {
    background: "var(--button-background, ".concat(colors.AQUA, ")"),
    backgroundHover: "var(--button-background-hover, ".concat(colors.AQUA_HOVER, ")")
  }
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: ", " !important;\n    border-color: ", " !important;\n\n    &:hover {\n        background: ", " !important;\n        border-color: ", " !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ThemedButton = styled(Button)(_templateObject(), function (props) {
  return props.theme.button.background;
}, function (props) {
  return props.theme.button.background;
}, function (props) {
  return props.theme.button.backgroundHover;
}, function (props) {
  return props.theme.button.backgroundHover;
});
ThemedButton.defaultProps = {
  theme: defaultTheme
};

module.exports = ThemedButton;

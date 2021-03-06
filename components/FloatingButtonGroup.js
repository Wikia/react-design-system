'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Floating button group
 */

var FloatingButtonGroup = function FloatingButtonGroup(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "vertical", "children"]);

  var classes = ['wds-floating-button-group', vertical ? 'wds-is-vertical' : '', className].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};

FloatingButtonGroup.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Additional class name */
  className: PropTypes.string,

  /** Vertical flag for the group */
  vertical: PropTypes.bool
};
FloatingButtonGroup.defaultProps = {
  children: null,
  vertical: false,
  className: ''
};

module.exports = FloatingButtonGroup;

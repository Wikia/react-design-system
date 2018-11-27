'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactSelect = require('react-select');
var ReactSelect__default = _interopDefault(ReactSelect);
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var IndicatorsContainer = function IndicatorsContainer(props) {
  var isLoading = props.selectProps.isLoading; // eslint-disable-next-line no-unused-vars

  var _props$children = _slicedToArray(props.children, 4),
      clearIndicator = _props$children[0],
      spinner = _props$children[1],
      indicatorSeparator = _props$children[2],
      dropdownIndicator = _props$children[3];

  return React.createElement(ReactSelect.components.IndicatorsContainer, props, spinner, isLoading ? null : dropdownIndicator, indicatorSeparator);
};

var SelectContainer = function SelectContainer(props) {
  return React.createElement("div", {
    className: "".concat(props.selectProps.classNamePrefix, "__wrapper")
  }, React.createElement(ReactSelect.components.SelectContainer, props));
};

/**
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      small = _ref.small,
      tiny = _ref.tiny,
      rest = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("svg", _extends({
    className: classes
  }, rest), React.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
};

Icon.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** name - both `-small` and `-tiny` prefix are also updating class name */
  name: PropTypes.string.isRequired,

  /** `wds-icon-small` flag for the class name (but not for the icon name) */
  small: PropTypes.bool,

  /** `wds-icon-tiny` flag for the class name (but not for the icon name) */
  tiny: PropTypes.bool
};
Icon.defaultProps = {
  className: '',
  small: false,
  tiny: false
};

var SearchDropdownIndicator = function SearchDropdownIndicator(props) {
  return React.createElement(ReactSelect.components.DropdownIndicator, props, React.createElement(Icon, {
    className: "search-dropdown-indicator",
    name: "magnifying-glass-small"
  }));
};
var DefaultDropdownIndicator = function DefaultDropdownIndicator(props) {
  var className = ['default-dropdown-indicator', props.isFocused ? 'is-focused' : undefined].filter(Boolean).join(' ');
  return React.createElement(ReactSelect.components.DropdownIndicator, props, React.createElement(Icon, {
    className: className,
    name: "dropdown"
  }));
};

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      stroke = _ref.stroke,
      block = _ref.block,
      inline = _ref.inline;
  var style = {
    width: size,
    height: size
  };
  var r = (size - stroke) / 2;
  var translate = r + stroke / 2;
  var dash = 2 * Math.PI * r;
  var classes = ['fandom-spinner'];

  if (block) {
    classes.push('is-block');
  }

  if (inline) {
    classes.push('is-inline');
  }

  if (className) {
    classes.push(className);
  }

  return React.createElement("div", {
    className: classes.join(' '),
    style: style
  }, React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    transform: "translate(".concat(translate, ", ").concat(translate, ")")
  }, React.createElement("circle", {
    fill: "none",
    strokeWidth: stroke,
    strokeDasharray: dash,
    strokeDashoffset: dash,
    strokeLinecap: "round",
    r: r
  }))));
};

Spinner.propTypes = {
  /** Display block and center */
  block: PropTypes.bool,

  /** Additional class name */
  className: PropTypes.string,

  /** Display content inline based on line height */
  inline: PropTypes.bool,

  /** Loader size */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Stroke width */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
  block: false,
  inline: false
};

var LoadingIndicator = function LoadingIndicator() {
  return React.createElement(Spinner, {
    size: 24
  });
};

function callWithValues(func, values, isMulti) {
  if (!func) {
    return;
  }

  if (isMulti) {
    func(values);
    return;
  }

  if (values.length === 0) {
    func(null, null);
    return;
  }

  var _values$ = values[0],
      value = _values$.value,
      label = _values$.label;
  func(value, label);
}

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  _createClass(Select, null, [{
    key: "createOption",
    value: function createOption(value, label) {
      return {
        value: value,
        label: label
      };
    }
  }]);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      if (!_this.props.onBlur || !_this.selectRef.current) {
        return;
      }

      callWithValues(_this.props.onBlur, _this.selectRef.current.select.getCommonProps().getValue(), _this.props.multi);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (values) {
      var valuesAsArray = _this.props.multi ? values : [values];
      callWithValues(_this.props.onChange, valuesAsArray, _this.props.multi);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      if (!_this.props.onFocus) {
        return;
      }

      _this.props.onFocus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRequestNoOptionsMessage", function (_ref) {
      var inputValue = _ref.inputValue;
      var onNoOptions = _this.props.onNoOptions;

      if (typeof onNoOptions === 'function') {
        return onNoOptions(inputValue);
      }

      return onNoOptions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTextInputChange", function (input) {
      if (_this.props.onTextInputChange) {
        _this.props.onTextInputChange(input);
      }
    });

    _this.selectRef = React.createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "getRootClassName",
    value: function getRootClassName() {
      return ['fandom-select', this.props.className].filter(Boolean).join(' ');
    }
  }, {
    key: "getValueFromProps",
    value: function getValueFromProps() {
      var _this$props = this.props,
          value = _this$props.value,
          options = _this$props.options;

      if (!value) {
        return undefined;
      }

      var valuesWithLabels = value;

      if (!(value instanceof Array)) {
        valuesWithLabels = [value];
      }

      valuesWithLabels = valuesWithLabels.map(function (v) {
        return options.find(function (o) {
          return o.value === v;
        });
      }).filter(Boolean);

      if (valuesWithLabels.length === 0) {
        return undefined;
      }

      if (this.props.multi) {
        return valuesWithLabels;
      }

      return valuesWithLabels[0];
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ReactSelect__default, {
        ref: this.selectRef,
        autoFocus: this.props.autoFocus,
        blurInputOnSelect: true,
        className: this.getRootClassName(),
        classNamePrefix: "fandom-select",
        controlShouldRenderValue: this.props.multi ? this.props.multiValueRender : true,
        isDisabled: this.props.disabled || this.props.loading,
        isLoading: this.props.loading,
        isMulti: this.props.multi,
        isSearchable: this.props.searchable,
        noOptionsMessage: this.onRequestNoOptionsMessage,
        placeholder: this.props.placeholder,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onInputChange: this.onTextInputChange,
        options: this.props.options,
        value: this.getValueFromProps(),
        inputId: "fandom-select-input",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator: this.props.searchable ? SearchDropdownIndicator : DefaultDropdownIndicator,
          LoadingIndicator: LoadingIndicator,
          IndicatorsContainer: IndicatorsContainer,
          SelectContainer: SelectContainer
        }
      });
    }
  }]);

  return Select;
}(React.Component);

_defineProperty(Select, "propTypes", {
  /** Focus the control when it is mounted */
  autoFocus: PropTypes.bool,

  /** Additional class for root element */
  className: PropTypes.string,

  /** whether or not the input is disabled */
  disabled: PropTypes.bool,

  /** whether or not to show loading indicator */
  loading: PropTypes.bool,

  /** whether or not multiple values are allowed */
  multi: PropTypes.bool,

  /** whether or not the component should render values when `multi=true` */
  multiValueRender: PropTypes.bool,

  /** called when the input is blurred `onBlur(val, label)` */
  onBlur: PropTypes.func,

  /** called when the input is changed */
  onChange: PropTypes.func,

  /** called when input is focused `onFocus()` */
  onFocus: PropTypes.func,

  /** message when no options are present. If a `func`, the only argument is the input to the text input */
  onNoOptions: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** fired when the search input is changed. `onTextInputChange(currentInput)` */
  onTextInputChange: PropTypes.func,

  /** options to display. Use `createOption` exported from this module to create options */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),

  /** Placeholder text used when no value is selected */
  placeholder: PropTypes.string,

  /** whether or not to allow text searching */
  searchable: PropTypes.bool,

  /** when using as controlled input, the currently selected values */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any])
});

_defineProperty(Select, "defaultProps", {
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  multi: false,
  multiValueRender: true,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onNoOptions: 'No Options',
  onTextInputChange: undefined,
  options: [],
  placeholder: 'Select...',
  searchable: true,
  value: undefined
});

module.exports = Select;

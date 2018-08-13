(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIcon(type) {
  switch (type) {
    case 'alert':
      return '#wds-icons-error-small';
    case 'warning':
      return '#wds-icons-alert-small';
    case 'success':
      return '#wds-icons-checkmark-circle-small';
    default:
      return '#wds-icons-flag-small';
  }
}

function getClassName(type) {
  switch (type) {
    case 'alert':
      return 'wds-alert';
    case 'warning':
      return 'wds-warning';
    case 'success':
      return 'wds-success';
    default:
      return 'wds-message';
  }
}

/**
 * This is a single component used in `BannerNotifications` component.
 */
var BannerNotification = function BannerNotification(_ref) {
  var className = _ref.className,
      type = _ref.type,
      text = _ref.text,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: 'wds-banner-notification ' + getClassName(type) + ' ' + className },
    _react2.default.createElement(
      'div',
      { className: 'wds-banner-notification__icon' },
      _react2.default.createElement(
        'svg',
        { className: 'wds-icon wds-icon-small' },
        _react2.default.createElement('use', { xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: getIcon(type) })
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'wds-banner-notification__text' },
      text
    ),
    onClose && _react2.default.createElement(
      'svg',
      { className: 'wds-icon wds-icon-tiny wds-banner-notification__close', onClick: onClose },
      _react2.default.createElement('use', { xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#wds-icons-cross-tiny' })
    )
  );
};

BannerNotification.propTypes = {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  text: _propTypes2.default.string.isRequired,
  onClose: _propTypes2.default.func
};

BannerNotification.defaultProps = {
  className: '',
  onClose: null
};

exports.default = BannerNotification;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  text: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  id: _propTypes2.default.string.isRequired,
  permanent: _propTypes2.default.bool
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(5);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _ButtonGroup = __webpack_require__(8);

Object.defineProperty(exports, 'ButtonGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ButtonGroup).default;
  }
});

var _Input = __webpack_require__(11);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Fieldset = __webpack_require__(15);

Object.defineProperty(exports, 'Fieldset', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Fieldset).default;
  }
});

var _Spinner = __webpack_require__(18);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _FloatingButton = __webpack_require__(21);

Object.defineProperty(exports, 'FloatingButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FloatingButton).default;
  }
});

var _FloatingButtonGroup = __webpack_require__(22);

Object.defineProperty(exports, 'FloatingButtonGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FloatingButtonGroup).default;
  }
});

var _BannerNotification = __webpack_require__(2);

Object.defineProperty(exports, 'BannerNotification', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BannerNotification).default;
  }
});

var _BannerNotifications = __webpack_require__(25);

Object.defineProperty(exports, 'BannerNotifications', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BannerNotifications).default;
  }
});

var _VideoPlayIcon = __webpack_require__(26);

Object.defineProperty(exports, 'VideoPlayIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VideoPlayIcon).default;
  }
});

var _ContentWell = __webpack_require__(29);

Object.defineProperty(exports, 'ContentWell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ContentWell).default;
  }
});

var _FandomContentWell = __webpack_require__(32);

Object.defineProperty(exports, 'FandomContentWell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FandomContentWell).default;
  }
});

var _ExpandableText = __webpack_require__(35);

Object.defineProperty(exports, 'ExpandableText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpandableText).default;
  }
});

var _Vignette = __webpack_require__(39);

Object.defineProperty(exports, 'Vignette', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vignette).default;
  }
});

var _bannerNotificationsMessageType = __webpack_require__(3);

Object.defineProperty(exports, 'bannerNotificationsMessageType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bannerNotificationsMessageType).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Basic button component
 */
var Button = function Button(_ref) {
  var className = _ref.className,
      href = _ref.href,
      text = _ref.text,
      secondary = _ref.secondary,
      square = _ref.square,
      fullwidth = _ref.fullwidth,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'href', 'text', 'secondary', 'square', 'fullwidth', 'children']);

  var classes = ['wds-button', className, secondary ? 'wds-is-secondary' : '', square ? 'wds-is-square' : '', text ? 'wds-is-text' : '', fullwidth ? 'wds-is-fullwidth' : ''].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return _react2.default.createElement(
      'a',
      _extends({ href: href, className: classes }, rest),
      children
    );
  }

  return _react2.default.createElement(
    'button',
    _extends({ className: classes }, rest),
    children
  );
};

Button.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * href attribute.
   * Button uses `<a>` tag if it's present.
   */
  href: _propTypes2.default.string,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: _propTypes2.default.bool,
  /**
   * Secondary flag
   */
  secondary: _propTypes2.default.bool,
  /**
   * Square flag
   */
  square: _propTypes2.default.bool,
  /**
   * Text flag
   */
  text: _propTypes2.default.bool,
  /**
   * Full width flag
   */
  fullwidth: _propTypes2.default.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullwidth: false,
  href: null,
  secondary: false,
  square: false,
  text: false,
  onClick: function onClick() {}
};

exports.default = Button;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Button group component
 */
var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = ['wds-button-group', className].filter(function (c) {
    return c;
  }).join(' ');

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, rest),
    children
  );
};

ButtonGroup.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string
};

ButtonGroup.defaultProps = {
  children: null,
  className: ''
};

exports.default = ButtonGroup;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function generateId() {
  return (0, _lodash2.default)('wds_input_');
}

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    var value = props.value;
    var id = props.id || generateId();

    _this.state = {
      value: value,
      id: id,
      isEmpty: value.length === 0,
      isFocused: false,
      dynamicTextareaHeight: null
    };

    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleAutoResize = _this.handleAutoResize.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.autoFocus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var id = newProps.id || generateId();

      this.setState({
        value: newProps.value,
        id: id,
        isEmpty: newProps.value.length === 0
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.autoFocus();
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var statusClass = null;

      if (this.state.isFocused) {
        statusClass = 'is-focused';
      } else if (this.state.isEmpty) {
        statusClass = 'is-empty';
      }

      return ['wds-input', this.props.disabled ? 'is-disabled' : null, this.props.readonly ? 'is-readonly' : null, this.props.status === 'error' ? 'has-error' : null, typeof this.props.resize === 'boolean' && this.props.resize ? 'is-resize' : null, statusClass, this.props.className].filter(Boolean).join(' ');
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      return ['wds-input__field', this.props.inputClassName].join(' ');
    }
  }, {
    key: 'getLabelClassName',
    value: function getLabelClassName() {
      return ['wds-input__label', this.props.labelClassName].join(' ');
    }
  }, {
    key: 'getHintClassName',
    value: function getHintClassName() {
      return ['wds-input__hint', this.props.hintClassName].join(' ');
    }
  }, {
    key: 'getSharedInputProps',
    value: function getSharedInputProps() {
      return {
        className: this.getInputClassName(),
        id: this.state.id,
        name: this.state.id,
        value: this.state.value,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.props.onKeyDown,
        onKeyPress: this.props.onKeyPress,
        readOnly: this.props.readonly,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
        placeholder: this.props.placeholder
      };
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input && document.activeElement !== this.input) {
        this.input.focus();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.input.blur();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.readonly || this.props.disabled) {
        return;
      }

      var value = event.target.value;

      this.setState({
        value: value,
        isEmpty: value.length === 0
      });
      this.props.onChange(value, event);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.props.readonly) {
        return;
      }

      this.setState({
        isFocused: true
      });
      this.props.onFocus(event);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      this.setState({
        isFocused: false
      });
      this.props.onBlur(event);
    }
  }, {
    key: 'isAutoFocus',
    value: function isAutoFocus() {
      return this.props.autoFocus && !this.props.disabled && !this.props.readonly;
    }
  }, {
    key: 'isAutoResize',
    value: function isAutoResize() {
      return this.props.resize === 'auto' && !this.props.disabled && !this.props.readonly;
    }
  }, {
    key: 'autoFocus',
    value: function autoFocus() {
      if (this.isAutoFocus() && this.input) {
        if (document.activeElement !== this.input) {
          this.input.focus();
        }
      }
    }
  }, {
    key: 'handleAutoResize',
    value: function handleAutoResize() {
      var _this2 = this;

      // height has to be reset first because if not it keeps increasing every time user will type a character
      // setting actual height must be done in setState callback, because React might optimize this into one setState call
      // scrollHeight includes padding but not border, we need to compensate this to avoid slight height change
      // keep value in sync with bottom-border in .wds-input__field styles
      var BOTTOM_BORDER_WIDTH = 1;

      this.setState({ dynamicTextareaHeight: 'auto' }, function () {
        _this2.setState({ dynamicTextareaHeight: _this2.input.scrollHeight + BOTTOM_BORDER_WIDTH + 'px' });
      });

      // to prevent scroll jumping
      this.input.scrollTop = this.input.scrollHeight;
    }
  }, {
    key: 'renderMultiline',
    value: function renderMultiline() {
      var _this3 = this;

      var props = _extends({}, this.getSharedInputProps(), {
        rows: this.props.rows
      });

      if (this.isAutoResize()) {
        props.onInput = this.handleAutoResize;
      }

      if (this.state.dynamicTextareaHeight) {
        props.style = { height: this.state.dynamicTextareaHeight };
      }

      return _react2.default.createElement(
        'textarea',
        _extends({ ref: function ref(input) {
            _this3.input = input;
          } }, props),
        this.state.value
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this4 = this;

      if (this.props.type === 'multiline') {
        return this.renderMultiline();
      }

      var props = _extends({}, this.getSharedInputProps(), {
        type: this.props.type
      });

      return _react2.default.createElement('input', _extends({ ref: function ref(input) {
          _this4.input = input;
        } }, props));
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      return _react2.default.createElement(
        'label',
        { className: this.getLabelClassName(), htmlFor: this.state.id },
        this.props.label
      );
    }
  }, {
    key: 'renderHint',
    value: function renderHint() {
      if (!this.props.hint) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: this.getHintClassName() },
        this.props.hint
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getClassName() },
        this.renderInput(),
        this.renderHint(),
        this.renderLabel()
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  /**
   * Additional class name for the component
   */
  className: _propTypes2.default.string,
  /**
   * Additional class name for the hint
   */
  hintClassName: _propTypes2.default.string,
  /**
   * Additional class name for the input
   */
  inputClassName: _propTypes2.default.string,
  /**
   * Additional class name for the label
   */
  labelClassName: _propTypes2.default.string,
  /**
   * ID of the element - by default it's generated automatically
   */
  id: _propTypes2.default.string,
  /**
   * Type of the input.
   * Use `multiline` for multi-line input (textarea).
   */
  type: _propTypes2.default.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),
  /**
   * Value
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Label that we want to display.
   */
  label: function label(props, propName) {
    if (props.placeholder && props[propName]) {
      return new Error('Prop ' + propName + ' is not used when placeholder is set');
    }

    if (!props.placeholder && !props[propName]) {
      return new Error('Prop ' + propName + ' is required when placeholder is not set');
    }

    if (typeof props[propName] !== 'string') {
      return new Error('Prop ' + propName + ' is not a string');
    }

    return null;
  },
  /**
   * Hint to display
   */
  hint: _propTypes2.default.string,
  /**
   * Placeholder to display
   */
  placeholder: _propTypes2.default.string,
  /**
   * Status
   */
  status: _propTypes2.default.oneOf(['normal', 'error']),
  /**
   * Tab Index
   */
  tabIndex: _propTypes2.default.number,
  /**
   * Initial number of rows
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  rows: _propTypes2.default.number,
  /**
   * Can the textarea be resized by the user
   * Use `auto` to adjust textarea height automatically
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  resize: _propTypes2.default.oneOf(['auto', true, false]),
  /**
   * Auto focus flag
   */
  autoFocus: _propTypes2.default.bool,
  /**
   * Disabled flag
   */
  disabled: _propTypes2.default.bool,
  /**
   * Readonly flag
   */
  readonly: _propTypes2.default.bool,
  /**
   * Callback for `onBlur` event
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback for `onChange` event - will be called whenever the value chnages
   * with `callback(value, event)`.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback for `onFocus` event
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback for `onKeyDown` event
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback for `onKeyPress` event
   */
  onKeyPress: _propTypes2.default.func,
  /**
   * Callback for `onKeyUp` event
   */
  onKeyUp: _propTypes2.default.func
};

Input.defaultProps = {
  autoFocus: false,
  className: '',
  disabled: false,
  label: '',
  hint: null,
  placeholder: null,
  hintClassName: '',
  id: null,
  inputClassName: '',
  labelClassName: '',
  readonly: false,
  resize: false,
  rows: 2,
  status: 'normal',
  tabIndex: 0,
  type: 'text',
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};

exports.default = Input;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash.uniqueid");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fieldset = function Fieldset(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'wds-fieldset ' + className },
    children
  );
};

Fieldset.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string
};

Fieldset.defaultProps = {
  children: null,
  className: ''
};

exports.default = Fieldset;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */
var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      stroke = _ref.stroke;

  var style = {
    width: size,
    height: size
  };

  var r = (size - stroke) / 2;
  var translate = r + stroke / 2;
  var dash = 2 * Math.PI * r;

  return _react2.default.createElement(
    'div',
    { className: 'fandom-spinner ' + className, style: style },
    _react2.default.createElement(
      'svg',
      {
        width: size,
        height: size,
        viewBox: '0 0 ' + size + ' ' + size,
        xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement(
        'g',
        { transform: 'translate(' + translate + ', ' + translate + ')' },
        _react2.default.createElement('circle', {
          fill: 'none',
          strokeWidth: stroke,
          strokeDasharray: dash,
          strokeDashoffset: dash,
          strokeLinecap: 'round',
          r: r
        })
      )
    )
  );
};

Spinner.propTypes = {
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Loader size
   */
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Stroke width
   */
  stroke: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2
};

exports.default = Spinner;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Floating button (icons-only)
 */
var FloatingButton = function FloatingButton(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'href', 'children']);

  var classes = ['wds-floating-button', className].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return _react2.default.createElement(
      'a',
      _extends({ href: href, className: classes }, rest),
      children
    );
  }

  return _react2.default.createElement(
    'button',
    _extends({ className: classes }, rest),
    children
  );
};

FloatingButton.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * href attribute.
   * FloatingButton uses `<a>` tag if it's present.
   */
  href: _propTypes2.default.string,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: _propTypes2.default.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: _propTypes2.default.func
};

FloatingButton.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  href: null,
  onClick: function onClick() {}
};

exports.default = FloatingButton;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Floating button group
 */
var FloatingButtonGroup = function FloatingButtonGroup(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'vertical', 'children']);

  var classes = ['wds-floating-button-group', vertical ? 'wds-is-vertical' : '', className].filter(function (c) {
    return c;
  }).join(' ');

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, rest),
    children
  );
};

FloatingButtonGroup.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * Vertical flag fro the group
   */
  vertical: _propTypes2.default.bool,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string
};

FloatingButtonGroup.defaultProps = {
  children: null,
  vertical: false,
  className: ''
};

exports.default = FloatingButtonGroup;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BannerNotification = __webpack_require__(2);

var _BannerNotification2 = _interopRequireDefault(_BannerNotification);

var _bannerNotificationsMessageType = __webpack_require__(3);

var _bannerNotificationsMessageType2 = _interopRequireDefault(_bannerNotificationsMessageType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component used to create notifications. For full functionality it needs some
 * app logic to handle the array of messages - adding/removing.
 *
 * See the following:
 * - https://github.com/Wikia/f2/blob/master/frontend/react-app/curationTools/containers/Notifications.jsx
 * - https://github.com/Wikia/f2/tree/master/frontend/react-app/curationTools/reducers/notifications
 *
 * The `messages` prop is an array of `bannerNotificationsMessageType` objects with the following props:
 * - `id`: unique string that's send as the param of the `onClose` function
 * - `type`: one of: `'alert'`, `'warning'`, `'success'` or `'message'`.
 * - `text`: text that is going to be displayed on the notification
 * - `permanent`: a boolean flag - if present the close button won't be displayed on the notification
 *
 * `bannerNotificationsMessageType` is exported along with `BannerNotification`
 */
var BannerNotifications = function (_React$Component) {
  _inherits(BannerNotifications, _React$Component);

  function BannerNotifications(props) {
    _classCallCheck(this, BannerNotifications);

    var _this = _possibleConstructorReturn(this, (BannerNotifications.__proto__ || Object.getPrototypeOf(BannerNotifications)).call(this, props));

    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  _createClass(BannerNotifications, [{
    key: 'onClose',
    value: function onClose(id) {
      this.props.onClose(id);
    }
  }, {
    key: 'renderNotification',
    value: function renderNotification(_ref) {
      var _this2 = this;

      var text = _ref.text,
          type = _ref.type,
          id = _ref.id,
          permanent = _ref.permanent;

      var props = {
        key: id,
        type: type,
        text: text
      };

      if (permanent) {
        return _react2.default.createElement(_BannerNotification2.default, props);
      }
      return _react2.default.createElement(_BannerNotification2.default, _extends({}, props, { onClose: function onClose() {
          return _this2.onClose(id);
        } }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          messages = _props.messages;


      if (messages.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'wds-banner-notification__container ' + className },
        messages.map(function (message) {
          return _this3.renderNotification(message);
        })
      );
    }
  }]);

  return BannerNotifications;
}(_react2.default.Component);

BannerNotifications.propTypes = {
  /**
   * An additional class name
   */
  className: _propTypes2.default.string,
  /**
   * An array of `bannerNotificationsMessageType` objects
   * @type {bannerNotificationsMessageType}
   */
  messages: _propTypes2.default.arrayOf(_bannerNotificationsMessageType2.default).isRequired,
  /**
   * Action invoked when close button is clicked
   * @type {[type]}
   */
  onClose: _propTypes2.default.func.isRequired
};

BannerNotifications.defaultProps = {
  className: ''
};

exports.default = BannerNotifications;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Video Play icon
 */
var VideoPlayIcon = function VideoPlayIcon(_ref) {
  var className = _ref.className,
      size = _ref.size;

  var style = {
    height: size,
    width: size
  };

  return _react2.default.createElement(
    'svg',
    {
      className: 'fandom-video-play-icon ' + className,
      style: style,
      viewBox: '0 0 180 180',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink'
    },
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('rect', { id: 'fandom-video-play-icon_b', width: '150', height: '150', rx: '75' }),
      _react2.default.createElement(
        'filter',
        {
          x: '-15%',
          y: '-15%',
          width: '130%',
          height: '130%',
          filterUnits: 'objectBoundingBox',
          id: 'fandom-video-play-icon_a'
        },
        _react2.default.createElement('feOffset', { 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
        _react2.default.createElement('feGaussianBlur', { stdDeviation: '7.5', 'in': 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
        _react2.default.createElement('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0', 'in': 'shadowBlurOuter1' })
      )
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { className: 'fandom-video-play-icon__circle', opacity: '.9', transform: 'rotate(90 75 90)' },
        _react2.default.createElement('use', { fill: '#000', filter: 'url(#fandom-video-play-icon_a)', xlinkHref: '#fandom-video-play-icon_b' }),
        _react2.default.createElement('use', { fill: '#fff', xlinkHref: '#fandom-video-play-icon_b' })
      ),
      _react2.default.createElement('path', {
        className: 'fandom-video-play-icon__triangle',
        d: 'M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496 9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053 2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0 2.86.469 4.03 1.34z',
        fillRule: 'nonzero'
      })
    )
  );
};

VideoPlayIcon.propTypes = {
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Icon size
   */
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

VideoPlayIcon.defaultProps = {
  className: '',
  size: 90
};

exports.default = VideoPlayIcon;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ContentWell wraps `children` in `wds-content-well` CSS mixin.
 */
var ContentWell = function ContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'wds-content-well ' + className },
    children
  );
};

ContentWell.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string
};

ContentWell.defaultProps = {
  children: null,
  className: ''
};

exports.default = ContentWell;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FandomContentWell wraps `children` in `wds-content-well($use-xxlarge-breakpoint: false)` CSS mixin.
 */
var FandomContentWell = function FandomContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'wds-fandom-content-well ' + className },
    children
  );
};

FandomContentWell.propTypes = {
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string
};

FandomContentWell.defaultProps = {
  children: null,
  className: ''
};

exports.default = FandomContentWell;

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helper = __webpack_require__(36);

var _helper2 = _interopRequireDefault(_helper);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ExpandableText component can be used to temporarily limit text showed to the user.
 * It has a button used to fully expand the text.
 * If the source text is shorter than the limit the button do not show.
 *
 * Both button label and string used to ellipsis has to be configured.
 * Button and the text itself can be syled with classes passed to the component.
 */
var ExpandableText = function (_React$Component) {
  _inherits(ExpandableText, _React$Component);

  function ExpandableText(props) {
    _classCallCheck(this, ExpandableText);

    var _this = _possibleConstructorReturn(this, (ExpandableText.__proto__ || Object.getPrototypeOf(ExpandableText)).call(this, props));

    _this.handleExpandClick = _this.handleExpandClick.bind(_this);

    var text = (0, _helper2.default)(props.text, props.characterLimit);
    _this.state = {
      isExpandable: text.length < props.text.length,
      isExpanded: false,
      text: text
    };
    return _this;
  }

  _createClass(ExpandableText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var text = (0, _helper2.default)(newProps.text, newProps.characterLimit);
      this.setState({
        isExpandable: text.length < newProps.text.length,
        isExpanded: false,
        text: text
      });
    }
  }, {
    key: 'handleExpandClick',
    value: function handleExpandClick() {
      this.setState({
        isExpandable: false,
        isExpanded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var expandBlock = _react2.default.createElement(
        'span',
        null,
        this.props.ellipsis,
        '\xA0',
        _react2.default.createElement(
          'button',
          {
            className: 'expandable-text__expand ' + this.props.expandClassName,
            onClick: this.handleExpandClick
          },
          this.props.expandLabel
        )
      );

      return _react2.default.createElement(
        'span',
        { className: 'expandable-text ' + this.props.className },
        this.state.isExpanded ? this.props.text : this.state.text,
        this.state.isExpandable && expandBlock
      );
    }
  }]);

  return ExpandableText;
}(_react2.default.Component);

ExpandableText.propTypes = {
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Character limit
   */
  characterLimit: _propTypes2.default.number.isRequired,
  /**
   * Ellipsis (defaults to `&hellip;`)
   */
  ellipsis: _propTypes2.default.string,
  /**
   * Additional class name for the expand button
   */
  expandClassName: _propTypes2.default.string,
  /**
   * Label used on the expand button
   */
  expandLabel: _propTypes2.default.string.isRequired,
  /**
   * Full text to display
   */
  text: _propTypes2.default.string.isRequired
};

ExpandableText.defaultProps = {
  className: '',
  ellipsis: '\u2026',
  expandClassName: ''
};

exports.default = ExpandableText;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeShortText;
function makeShortText(text, characterLimit) {
  return text.substring(0, characterLimit);
}

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helper = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var vignetteUrl = '';

/**
 * Vignette helper for getting scaled/resized images from Static Image Assets service.
 *
 * Works for any URL (non-vignette ones won't be resized) and for UUIDs.
 * The `mode` along with `width`, `height` and '`allowUpscaling` will dictate if
 * the final image will be scaled, resized or cropped.
 */
var Vignette = function Vignette(_ref) {
  var allowUpscaling = _ref.allowUpscaling,
      alt = _ref.alt,
      className = _ref.className,
      height = _ref.height,
      image = _ref.image,
      method = _ref.method,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ['allowUpscaling', 'alt', 'className', 'height', 'image', 'method', 'width']);

  var imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

  if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
    var uuid = (0, _helper.getUuid)(imageUrlOrUuid);

    if (uuid) {
      var params = (0, _helper.getVignetteParams)({ width: width, height: height, method: method, allowUpscaling: allowUpscaling });
      imageUrlOrUuid = 'https://vignette.wikia.nocookie.net/' + uuid + params;
    }
  }

  return _react2.default.createElement('img', _extends({ className: className, src: imageUrlOrUuid, alt: alt }, rest));
};

Vignette.propTypes = {
  /*
   * Do we want to upscale image if needed?
   */
  allowUpscaling: _propTypes2.default.bool,
  /**
   * Alt text
   */
  alt: _propTypes2.default.string,
  /**
   * Additional class name
   */
  className: _propTypes2.default.string,
  /**
   * Desired image height
   */
  height: _propTypes2.default.number,
  /**
   * Either an URL to image or UUID.
   */
  image: _propTypes2.default.string.isRequired,
  /**
   * Desired image width
   */
  width: _propTypes2.default.number,
  /**
   * Desired image mode
   */
  method: _propTypes2.default.oneOf(['auto', 'scale', 'thumbnail', 'top-crop'])
};

Vignette.defaultProps = {
  allowUpscaling: false,
  alt: '',
  className: '',
  height: null,
  method: 'auto',
  width: null
};

exports.default = Vignette;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUuid = getUuid;
exports.getVignetteParams = getVignetteParams;
function getUuid(urlOrUuid) {
  var matches = urlOrUuid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  if (matches) {
    // UUID found in `urlOrUuid`
    return matches[0];
  }

  return false;
}

function getVignetteParamsTopCrop(width, height) {
  return '/top-crop/width/' + width + '/height/' + height;
}

function getVignetteParamsThumbnail(width, height, allowUpscaling) {
  if (allowUpscaling) {
    return '/thumbnail/width/' + width + '/height/' + height;
  }
  return '/thumbnail-down/width/' + width + '/height/' + height;
}

function getVignetteParamsScale(width, height, allowUpscaling) {
  if (width) {
    if (allowUpscaling) {
      return '/scale-to-width/' + width;
    }
    return '/scale-to-width-down/' + width;
  }

  if (height) {
    return '/scale-to-height-down/' + height;
  }

  return '';
}

function getVignetteParams(_ref) {
  var width = _ref.width,
      height = _ref.height,
      method = _ref.method,
      allowUpscaling = _ref.allowUpscaling;

  switch (method) {
    case 'top-crop':
      return getVignetteParamsTopCrop(width, height);
    case 'thumbnail':
      return getVignetteParamsThumbnail(width, height, allowUpscaling);
    case 'scale':
      return getVignetteParamsScale(width, height, allowUpscaling);
    default:
      // auto
      if (width && height) {
        return getVignetteParamsThumbnail(width, height, allowUpscaling);
      }
      return getVignetteParamsScale(width, height, allowUpscaling);
  }
}

/***/ })
/******/ ])));
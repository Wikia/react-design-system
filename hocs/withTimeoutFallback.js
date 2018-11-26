'use strict';

var React = require('react');

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

var DefaultFallback = function DefaultFallback() {
  return React.createElement("span", null, "Error loading");
};

var DEFAULT_OPTIONS = {
  FallbackComponent: DefaultFallback,
  timeout: 10000
};
var TIMER_INTERVAL = 100;
function withTimeoutFallback(Component, opts) {
  var _class, _temp;

  var options = _extends({}, DEFAULT_OPTIONS, opts);

  var FallbackComponent = options.FallbackComponent;
  return _temp = _class =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TimeoutComponent, _React$PureComponent);

    function TimeoutComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TimeoutComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeoutComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        time: 0
      };
      return _this;
    }

    _createClass(TimeoutComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.timerID = setInterval(function () {
          return _this2.tick();
        }, TIMER_INTERVAL);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearInterval(this.timerID);
      }
    }, {
      key: "tick",
      value: function tick() {
        var time = this.state.time;

        if (time > options.timeout) {
          clearInterval(this.timerID);
        } else {
          this.setState(function (prevState) {
            return {
              time: prevState.time + TIMER_INTERVAL
            };
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var time = this.state.time;
        var children = this.props.children;

        if (time > options.timeout) {
          return React.createElement(FallbackComponent, this.props, children);
        }

        return React.createElement(Component, this.props);
      }
    }]);

    return TimeoutComponent;
  }(React.PureComponent), _class.defaultProps = {
    children: null
  }, _temp;
}

module.exports = withTimeoutFallback;

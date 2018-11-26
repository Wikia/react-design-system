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

/**
 * Video Play icon
 */
var VideoPlayIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(VideoPlayIcon, _React$PureComponent);

  function VideoPlayIcon() {
    _classCallCheck(this, VideoPlayIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayIcon).apply(this, arguments));
  }

  _createClass(VideoPlayIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          className = _this$props.className;
      var style = {
        height: size,
        width: size
      };
      return React.createElement("svg", {
        className: "fandom-video-play-icon ".concat(className),
        style: style,
        viewBox: "0 0 180 180",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
      }, React.createElement("defs", null, React.createElement("rect", {
        id: "fandom-video-play-icon_b",
        width: "150",
        height: "150",
        rx: "75"
      }), React.createElement("filter", {
        x: "-15%",
        y: "-15%",
        width: "130%",
        height: "130%",
        filterUnits: "objectBoundingBox",
        id: "fandom-video-play-icon_a"
      }, React.createElement("feOffset", {
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        stdDeviation: "7.5",
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1"
      }), React.createElement("feColorMatrix", {
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0",
        in: "shadowBlurOuter1"
      }))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("g", {
        className: "fandom-video-play-icon__circle",
        opacity: ".9",
        transform: "rotate(90 75 90)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#fandom-video-play-icon_a)",
        xlinkHref: "#fandom-video-play-icon_b"
      }), React.createElement("use", {
        fill: "#fff",
        xlinkHref: "#fandom-video-play-icon_b"
      })), React.createElement("path", {
        className: "fandom-video-play-icon__triangle",
        d: "M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496 9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053 2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0 2.86.469 4.03 1.34z",
        fillRule: "nonzero"
      })));
    }
  }]);

  return VideoPlayIcon;
}(React.PureComponent);

VideoPlayIcon.defaultProps = {
  className: '',
  size: 90
};

module.exports = VideoPlayIcon;

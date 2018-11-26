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

function getUuid(urlOrUuid) {
  var matches = urlOrUuid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  if (matches) {
    // UUID found in `urlOrUuid`
    return matches[0];
  }

  return false;
}

function getVignetteParamsTopCrop(width, height) {
  return "/top-crop/width/".concat(width, "/height/").concat(height);
}

function getVignetteParamsThumbnail(width, height, allowUpscaling) {
  if (allowUpscaling) {
    return "/thumbnail/width/".concat(width, "/height/").concat(height);
  }

  return "/thumbnail-down/width/".concat(width, "/height/").concat(height);
}

function getVignetteParamsScale(width, height, allowUpscaling) {
  if (width) {
    if (allowUpscaling) {
      return "/scale-to-width/".concat(width);
    }

    return "/scale-to-width-down/".concat(width);
  }

  if (height) {
    return "/scale-to-height-down/".concat(height);
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

/**
 * Vignette helper for getting scaled/resized images from Static Image Assets service.
 *
 * Works for any URL (non-vignette ones won't be resized) and for UUIDs.
 * The `mode` along with `width`, `height` and '`allowUpscaling` will dictate if
 * the final image will be scaled, resized or cropped.
 */
var Vignette =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Vignette, _React$PureComponent);

  function Vignette() {
    _classCallCheck(this, Vignette);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vignette).apply(this, arguments));
  }

  _createClass(Vignette, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          allowUpscaling = _this$props.allowUpscaling,
          alt = _this$props.alt,
          className = _this$props.className,
          height = _this$props.height,
          image = _this$props.image,
          method = _this$props.method,
          width = _this$props.width,
          rest = _objectWithoutProperties(_this$props, ["allowUpscaling", "alt", "className", "height", "image", "method", "width"]);

      var imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

      if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
        var uuid = getUuid(imageUrlOrUuid);

        if (uuid) {
          var params = getVignetteParams({
            width: width,
            height: height,
            method: method,
            allowUpscaling: allowUpscaling
          });
          imageUrlOrUuid = "https://vignette.wikia.nocookie.net/".concat(uuid).concat(params);
        }
      }

      return React.createElement("img", _extends({
        className: className,
        src: imageUrlOrUuid,
        alt: alt
      }, rest));
    }
  }]);

  return Vignette;
}(React.PureComponent);

Vignette.defaultProps = {
  allowUpscaling: false,
  alt: '',
  className: '',
  height: null,
  method: 'auto',
  width: null
};

module.exports = Vignette;

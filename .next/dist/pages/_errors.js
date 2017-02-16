'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client'
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvcnMuanMiXSwibmFtZXMiOlsiRXJyb3IiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJyZXMiLCJ4aHIiLCJzdGF0dXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs2QkFNVDtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsYUFBS0MsS0FBTCxDQUFXQyxVQUFYLGlCQUNjLEtBQUtELEtBQUwsQ0FBV0MsVUFEekIsMkJBRUU7QUFISixPQURGO0FBT0Q7OzswQ0FicUM7QUFBQSxVQUFaQyxHQUFZLFFBQVpBLEdBQVk7QUFBQSxVQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQ3BDLFVBQU1GLGFBQWFDLE1BQU1BLElBQUlELFVBQVYsR0FBd0JFLE1BQU1BLElBQUlDLE1BQVYsR0FBbUIsSUFBOUQ7QUFDQSxhQUFPLEVBQUVILHNCQUFGLEVBQVA7QUFDRDs7O0VBSmdDLGdCQUFNSSxTOztrQkFBcEJOLEsiLCJmaWxlIjoiX2Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFtZXNnb3RzZWxsL0Rlc2t0b3AvY29kaW5nX3N0dWZmL25leHRfanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIHhociB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogKHhociA/IHhoci5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHA+e1xuICAgICAgICB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgICAgPyBgQW4gZXJyb3IgJHt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IG9jY3VycmVkIG9uIHNlcnZlcmBcbiAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J1xuICAgICAgfTwvcD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
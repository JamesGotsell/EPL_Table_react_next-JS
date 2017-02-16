'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _head = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'League Table'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement('div', { className: 'pure-u-1-3' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-3' },
            _react2.default.createElement(
              'h1',
              null,
              'Barclays Premier League'
            ),
            _react2.default.createElement(
              'table',
              { className: 'pure-table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Position'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Team'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'P'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'GL'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'W'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'D'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'L'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Details'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.data.standing.map(function (standing, i) {
                  var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                  return _react2.default.createElement(
                    'tr',
                    { key: i, className: oddOrNot },
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.position
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.points
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.goals
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.wins
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.draws
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.losses
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        _link2.default,
                        { href: '/details?id=' + standing.position },
                        'More...'
                      )
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1-3' })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (process.browser) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 3:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 7:
                return _context.abrupt('return', { data: JSON.parse(sessionStorage.getItem('bpl')) });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwcm9wcyIsImRhdGEiLCJzdGFuZGluZyIsIm1hcCIsImkiLCJvZGRPck5vdCIsInBvc2l0aW9uIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJkcmF3cyIsImxvc3NlcyIsInByb2Nlc3MiLCJicm93c2VyIiwiZ2V0IiwicmVzIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3dDQWN5QjtBQUNuQixVQUFHLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBSixFQUFtQ0QsZUFBZUUsT0FBZixDQUF1QixLQUF2QixFQUE4Qix5QkFBZSxLQUFLQyxLQUFMLENBQVdDLElBQTFCLENBQTlCO0FBQ3BDOzs7NkJBQ087QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUVJLGtEQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUZKO0FBR0ksa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssb0RBQTVCO0FBSEosU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNJLGlEQUFLLFdBQVUsWUFBZixHQURKO0FBRUk7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFPLFdBQVUsWUFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBREYsZUFERjtBQWFFO0FBQUE7QUFBQTtBQUNDLHFCQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLFFBQWhCLENBQXlCQyxHQUF6QixDQUE2QixVQUFDRCxRQUFELEVBQVdFLENBQVgsRUFBaUI7QUFDN0Msc0JBQU1DLFdBQVdELElBQUksQ0FBSixJQUFTLENBQVQsR0FBYSxnQkFBYixHQUFnQyxFQUFqRDtBQUNBLHlCQUNJO0FBQUE7QUFBQSxzQkFBSSxLQUFLQSxDQUFULEVBQVksV0FBV0MsUUFBdkI7QUFDRTtBQUFBO0FBQUE7QUFBS0gsK0JBQVNJO0FBQWQscUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSw2REFBSyxXQUFVLGVBQWYsRUFBK0IsS0FBS0osU0FBU0ssUUFBN0M7QUFBSixxQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLTCwrQkFBU007QUFBZCxxQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLTiwrQkFBU087QUFBZCxxQkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFLUCwrQkFBU1E7QUFBZCxxQkFMRjtBQU1FO0FBQUE7QUFBQTtBQUFLUiwrQkFBU1M7QUFBZCxxQkFORjtBQU9FO0FBQUE7QUFBQTtBQUFLVCwrQkFBU1U7QUFBZCxxQkFQRjtBQVFFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSwwQkFBTSx1QkFBcUJWLFNBQVNJLFFBQXBDO0FBQUE7QUFBQTtBQUFKO0FBUkYsbUJBREo7QUFZRCxpQkFkQTtBQUREO0FBYkY7QUFGRixXQUZKO0FBb0NJLGlEQUFLLFdBQVUsWUFBZjtBQXBDSjtBQU5GLE9BREY7QUErQ0Q7Ozs7Ozs7Ozs7b0JBM0RPTyxRQUFRQyxPOzs7Ozs7dUJBQ1EsZ0JBQU1DLEdBQU4sQ0FBVSw4REFBVixDOzs7QUFBWkMsbUI7aURBQ0MsRUFBQ2YsTUFBTWUsSUFBSWYsSUFBWCxFOzs7aURBRUEsRUFBQ0EsTUFBTWdCLEtBQUtDLEtBQUwsQ0FBV3JCLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBWCxDQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU5jLGdCQUFNcUIsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFtZXNnb3RzZWxsL0Rlc2t0b3AvY29kaW5nX3N0dWZmL25leHRfanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgICBpZighcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS9jb21wZXRpdGlvbnMvNDI2L2xlYWd1ZVRhYmxlJylcbiAgICAgICAgcmV0dXJuIHtkYXRhOiByZXMuZGF0YX1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7ZGF0YTogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSl9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKVxuICAgIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFRhYmxlPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgICA8aDE+QmFyY2xheXMgUHJlbWllciBMZWFndWU8L2gxPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlYW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5HTDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5XPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZXRhaWxzPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5zdGFuZGluZy5tYXAoKHN0YW5kaW5nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvZGRPck5vdCA9IGkgJSAyID09IDEgPyBcInB1cmUtdGFibGUtb2RkXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSBjbGFzc05hbWU9e29kZE9yTm90fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcucG9zaXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInB1cmUtaW1nIGxvZ29cIiBzcmM9e3N0YW5kaW5nLmNyZXN0VVJJfS8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmdvYWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcuZHJhd3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcubG9zc2VzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgaHJlZj17YC9kZXRhaWxzP2lkPSR7c3RhbmRpbmcucG9zaXRpb259YH0+TW9yZS4uLjwvTGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
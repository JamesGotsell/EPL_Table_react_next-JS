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

var _link = require('/Users/jamesgotsell/Desktop/coding_stuff/next_js/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
            // Cache data in localStorage if
            // not already cached
            if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
        }
    }, {
        key: 'render',
        value: function render() {

            var detailStyle = {
                ul: {
                    marginTop: '100px'
                }
            };

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
                    _react2.default.createElement('div', { className: 'pure-u-8-24' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'pure-u-4-24' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.standing[0].teamName
                        ),
                        _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Points: ',
                            this.props.standing[0].points
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pure-u-12-24' },
                        _react2.default.createElement(
                            'ul',
                            { style: detailStyle.ul },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Goals'
                                ),
                                ': ',
                                this.props.standing[0].goals
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Wins'
                                ),
                                ': ',
                                this.props.standing[0].wins
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Losses'
                                ),
                                ': ',
                                this.props.standing[0].losses
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Draws'
                                ),
                                ': ',
                                this.props.standing[0].draws
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Goals Against'
                                ),
                                ': ',
                                this.props.standing[0].goalsAgainst
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Goal Difference'
                                ),
                                ': ',
                                this.props.standing[0].goalDifference
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Played'
                                ),
                                ': ',
                                this.props.standing[0].playedGames
                            )
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            { href: '/' },
                            'Home'
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var query = _ref2.query;
                var id, res, bplData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Get id from query
                                id = query.id;

                                if (process.browser) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 4;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 4:
                                res = _context.sent;
                                return _context.abrupt('return', {
                                    data: res.data,
                                    // Filter and return data based on query
                                    standing: res.data.standing.filter(function (s) {
                                        return s.position == id;
                                    })
                                });

                            case 8:
                                // Not on the server just navigating so use
                                // the cache
                                bplData = JSON.parse(sessionStorage.getItem('bpl'));
                                // Filter and return data based on query

                                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
                                        return s.position == id;
                                    }) });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbHMuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzRDQXVCeUI7QUFDakI7QUFDQTtBQUNBLGdCQUFHLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBSixFQUFtQ0QsZUFBZUUsT0FBZixDQUF1QixLQUF2QixFQUE4Qix5QkFBZSxLQUFLQyxLQUFMLENBQVdDLElBQTFCLENBQTlCO0FBQ3RDOzs7aUNBRVE7O0FBRVAsZ0JBQU1DLGNBQWM7QUFDaEJDLG9CQUFJO0FBQ0FDLCtCQUFXO0FBRFg7QUFEWSxhQUFwQjs7QUFNQSxtQkFDSztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUksNERBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBRko7QUFHSSw0REFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxvREFBNUI7QUFISixpQkFESDtBQU9HO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDSSwyREFBSyxXQUFVLGFBQWYsR0FESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyxpQ0FBS0osS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCQztBQUE1Qix5QkFESjtBQUVJLCtEQUFLLEtBQUssS0FBS04sS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCRSxRQUFqQyxFQUEyQyxXQUFVLFVBQXJELEdBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFhLGlDQUFLUCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJHO0FBQXBDO0FBSEoscUJBRko7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxjQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLE9BQU9OLFlBQVlDLEVBQXZCO0FBQ0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTZCLHFDQUFLSCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJJO0FBQXBELDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTRCLHFDQUFLVCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJLO0FBQW5ELDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQThCLHFDQUFLVixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJNO0FBQXJELDZCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTZCLHFDQUFLWCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJPO0FBQXBELDZCQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQXFDLHFDQUFLWixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJRO0FBQTVELDZCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQXVDLHFDQUFLYixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJTO0FBQTlELDZCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQThCLHFDQUFLZCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJVO0FBQXJEO0FBUEoseUJBREo7QUFVSTtBQUFBO0FBQUEsOEJBQU0sTUFBSyxHQUFYO0FBQUE7QUFBQTtBQVZKO0FBUEo7QUFQSCxhQURMO0FBOEJEOzs7OztvQkFoRThCQyxLLFNBQUFBLEs7Ozs7OztBQUMzQjtBQUNNQyxrQyxHQUFLRCxNQUFNQyxFOztvQ0FDYkMsUUFBUUMsTzs7Ozs7O3VDQUVVLGdCQUFNQyxHQUFOLENBQVUsOERBQVYsQzs7O0FBQVpDLG1DO2lFQUNDO0FBQ0hwQiwwQ0FBTW9CLElBQUlwQixJQURQO0FBRUg7QUFDQUksOENBQVVnQixJQUFJcEIsSUFBSixDQUFTSSxRQUFULENBQWtCaUIsTUFBbEIsQ0FBeUI7QUFBQSwrQ0FBS0MsRUFBRUMsUUFBRixJQUFjUCxFQUFuQjtBQUFBLHFDQUF6QjtBQUhQLGlDOzs7QUFNUDtBQUNBO0FBQ01RLHVDLEdBQVVDLEtBQUtDLEtBQUwsQ0FBVzlCLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBWCxDO0FBQ2hCOztpRUFDTyxFQUFDTyxVQUFVb0IsUUFBUXBCLFFBQVIsQ0FBaUJpQixNQUFqQixDQUF3QjtBQUFBLCtDQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEscUNBQXhCLENBQVgsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakJVLGdCQUFNVyxTIiwiZmlsZSI6ImRldGFpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phbWVzZ290c2VsbC9EZXNrdG9wL2NvZGluZ19zdHVmZi9uZXh0X2pzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtxdWVyeX0pIHtcbiAgICAgICAgLy8gR2V0IGlkIGZyb20gcXVlcnlcbiAgICAgICAgY29uc3QgaWQgPSBxdWVyeS5pZDtcbiAgICAgICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgLy8gU3RpbGwgb24gdGhlIHNlcnZlciBzbyBtYWtlIGEgcmVxdWVzdFxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgICAgICAgICAgc3RhbmRpbmc6IHJlcy5kYXRhLnN0YW5kaW5nLmZpbHRlcihzID0+IHMucG9zaXRpb24gPT0gaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciBqdXN0IG5hdmlnYXRpbmcgc28gdXNlXG4gICAgICAgICAgICAvLyB0aGUgY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGJwbERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKTtcbiAgICAgICAgICAgIC8vIEZpbHRlciBhbmQgcmV0dXJuIGRhdGEgYmFzZWQgb24gcXVlcnlcbiAgICAgICAgICAgIHJldHVybiB7c3RhbmRpbmc6IGJwbERhdGEuc3RhbmRpbmcuZmlsdGVyKHMgPT4gcy5wb3NpdGlvbiA9PSBpZCl9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIC8vIENhY2hlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIGlmXG4gICAgICAgIC8vIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgICAgICBpZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCBkZXRhaWxTdHlsZSA9IHtcbiAgICAgICAgICB1bDoge1xuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAgKFxuICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDAuNi4xL2J1aWxkL3B1cmUtbWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtOC0yNFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5zdGFuZGluZ1swXS50ZWFtTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmNyZXN0VVJJfSBjbGFzc05hbWU9XCJwdXJlLWltZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+UG9pbnRzOiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wb2ludHN9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e2RldGFpbFN0eWxlLnVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+R29hbHM8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldpbnM8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLndpbnN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+TG9zc2VzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5sb3NzZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RHJhd3M8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmRyYXdzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdvYWxzIEFnYWluc3Q8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxzQWdhaW5zdH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FsIERpZmZlcmVuY2U8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxEaWZmZXJlbmNlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlBsYXllZDwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ucGxheWVkR2FtZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgIH1cblxuXG5cbiB9XG4iXX0=
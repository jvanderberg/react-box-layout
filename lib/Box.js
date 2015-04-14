'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var Layout = require('./Layout.js');

var Box = (function (_Layout) {
    function Box(props) {
        _classCallCheck(this, Box);

        _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, props);
    }

    _inherits(Box, _Layout);

    _createClass(Box, [{
        key: 'render',
        value: function render() {
            var className = this.props.className;
            var style = this.props.style;
            if (typeof style !== 'undefined') {
                style.position = 'absolute';
            } else {
                style = { position: 'absolute' };
            }
            return _React2['default'].createElement(
                'div',
                _extends({}, this.props, { style: style, className: className }),
                this.renderChildren(this.props.children)
            );
        }
    }]);

    return Box;
})(Layout);

Box.DIRECTION_ROW = 'row';
Box.DIRECTION_COLUMN = 'column';

exports['default'] = Box;
module.exports = exports['default'];
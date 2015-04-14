'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Box = require('./Box.js');

var HBox = (function (_Box) {
  function HBox() {
    _classCallCheck(this, HBox);

    if (_Box != null) {
      _Box.apply(this, arguments);
    }
  }

  _inherits(HBox, _Box);

  return HBox;
})(Box);

HBox.defaultProps = { className: 'Box HBox', flexDirection: Box.DIRECTION_ROW };

exports['default'] = HBox;
module.exports = exports['default'];
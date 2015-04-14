'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Box = require('./Box.js');

var VBox = (function (_Box) {
  function VBox() {
    _classCallCheck(this, VBox);

    if (_Box != null) {
      _Box.apply(this, arguments);
    }
  }

  _inherits(VBox, _Box);

  return VBox;
})(Box);

VBox.defaultProps = { className: 'Box VBox', flexDirection: Box.DIRECTION_COLUMN };

exports['default'] = VBox;
module.exports = exports['default'];
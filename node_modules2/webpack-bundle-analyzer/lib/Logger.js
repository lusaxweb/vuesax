'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LEVELS = ['info', 'warn', 'error', 'silent'];

var LEVEL_TO_CONSOLE_METHOD = new Map([['info', 'log'], ['warn', 'log']]);

var Logger = function () {
  function Logger() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'info';

    _classCallCheck(this, Logger);

    this.activeLevels = new Set();
    this.setLogLevel(level);
  }

  _createClass(Logger, [{
    key: 'setLogLevel',
    value: function setLogLevel(level) {
      var levelIndex = LEVELS.indexOf(level);

      if (levelIndex === -1) throw new Error(`Invalid log level "${level}". Use one of these: ${LEVELS.join(', ')}`);

      this.activeLevels.clear();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = LEVELS.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var i = _ref2[0];
          var _level = _ref2[1];

          if (i >= levelIndex) this.activeLevels.add(_level);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_log',
    value: function _log(level) {
      var _console;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console = console)[LEVEL_TO_CONSOLE_METHOD.get(level) || level].apply(_console, args);
    }
  }]);

  return Logger;
}();

Logger.levels = LEVELS;
;

LEVELS.forEach(function (level) {
  if (level === 'silent') return;

  Logger.prototype[level] = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (this.activeLevels.has(level)) this._log.apply(this, [level].concat(args));
  };
});

module.exports = Logger;
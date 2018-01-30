'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var filesize = require('filesize');
var gzipSize = require('gzip-size');

var Node = function () {
  function Node(name, parent) {
    _classCallCheck(this, Node);

    this.name = name;
    this.parent = parent;
  }

  _createClass(Node, [{
    key: 'toString',
    value: function toString(indent) {
      indent = indent || '|';

      return `${indent} ${this.name}`;
    }
  }, {
    key: 'path',
    get: function get() {
      var path = [];
      var node = this;

      while (node) {
        path.push(node.name);
        node = node.parent;
      }

      return path.reverse().join('/');
    }
  }]);

  return Node;
}();

var Module = function (_Node) {
  _inherits(Module, _Node);

  function Module(name, data, parent) {
    _classCallCheck(this, Module);

    var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this, name, parent));

    _this.data = data;
    return _this;
  }

  _createClass(Module, [{
    key: 'mergeData',
    value: function mergeData(data) {
      if (data.size) {
        this.size += data.size;
      }

      if (data.parsedSrc) {
        this.src = (this.src || '') + data.parsedSrc;
      }
    }
  }, {
    key: 'toString',
    value: function toString(indent) {
      return `${_get(Module.prototype.__proto__ || Object.getPrototypeOf(Module.prototype), 'toString', this).call(this, indent)} [${this.data.id}] (${filesize(this.size)})`;
    }
  }, {
    key: 'toChartData',
    value: function toChartData() {
      return {
        id: this.data.id,
        label: this.name,
        path: this.path,
        statSize: this.size,
        parsedSize: this.parsedSize,
        gzipSize: this.gzipSize
      };
    }
  }, {
    key: 'src',
    get: function get() {
      return this.data.parsedSrc;
    },
    set: function set(value) {
      this.data.parsedSrc = value;
      delete this._gzipSize;
    }
  }, {
    key: 'size',
    get: function get() {
      return this.data.size;
    },
    set: function set(value) {
      this.data.size = value;
    }
  }, {
    key: 'parsedSize',
    get: function get() {
      return this.src ? this.src.length : undefined;
    }
  }, {
    key: 'gzipSize',
    get: function get() {
      if (!_.has(this, '_gzipSize')) {
        this._gzipSize = this.src ? gzipSize.sync(this.src) : undefined;
      }

      return this._gzipSize;
    }
  }]);

  return Module;
}(Node);

var Folder = function (_Node2) {
  _inherits(Folder, _Node2);

  function Folder(name, parent) {
    _classCallCheck(this, Folder);

    var _this2 = _possibleConstructorReturn(this, (Folder.__proto__ || Object.getPrototypeOf(Folder)).call(this, name, parent));

    _this2.children = Object.create(null);
    return _this2;
  }

  _createClass(Folder, [{
    key: 'getChild',
    value: function getChild(name) {
      return this.children[name];
    }
  }, {
    key: 'addFolder',
    value: function addFolder(name) {
      var folder = new Folder(name, this);

      this.children[name] = folder;
      delete this._size;
      delete this._src;

      return folder;
    }
  }, {
    key: 'addModule',
    value: function addModule(name, data) {
      var node = this.children[name];

      // For some reason we already have this node in children and it's a folder.
      if (node && node instanceof Folder) return false;

      if (node) {
        // We already have this node in children and it's a module.
        // Merging it's data.
        node.mergeData(data);
      } else {
        // Creating new module.
        node = new Module(name, data, this);
        this.children[name] = node;
      }

      delete this._size;
      delete this._src;

      return true;
    }
  }, {
    key: 'addModuleByPath',
    value: function addModuleByPath(path, data) {
      var _ref = [path.slice(0, -1), _.last(path)],
          pathParts = _ref[0],
          fileName = _ref[1];

      var currentFolder = this;

      _.each(pathParts, function (pathPart) {
        var childNode = currentFolder.getChild(pathPart);

        if (
        // Folder is not created yet
        !childNode ||
        // In some situations (invalid usage of dynamic `require()`) webpack generates a module with empty require
        // context, but it's moduleId points to a directory in filesystem.
        // In this case we replace this `File` node with `Folder`.
        // See `test/stats/with-invalid-dynamic-require.json` as an example.
        !(childNode instanceof Folder)) {
          childNode = currentFolder.addFolder(pathPart);
        }

        currentFolder = childNode;
      });

      currentFolder.addModule(fileName, data);
    }
  }, {
    key: 'walk',
    value: function walk(walker) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var stopped = false;

      _.each(this.children, function (child) {
        if (deep && child.walk) {
          state = child.walk(walker, state, stop);
        } else {
          state = walker(child, state, stop);
        }

        if (stopped) return false;
      });

      return state;

      function stop(finalState) {
        stopped = true;
        return finalState;
      }
    }
  }, {
    key: 'toString',
    value: function toString(indent, opts) {
      var _ref2 = opts || {},
          sortBy = _ref2.sortBy;

      indent = indent || '|';

      var str = `${indent} ${this.name} (${filesize(this.size)})\n`;

      str += _(this.children).sortBy(sortBy).reverse().map(function (child) {
        return child.toString(`${indent}  |`, opts);
      }).join('\n');

      return str;
    }
  }, {
    key: 'toChartData',
    value: function toChartData() {
      return {
        label: this.name,
        path: this.path,
        statSize: this.size,
        parsedSize: this.parsedSize,
        gzipSize: this.gzipSize,
        groups: _.invokeMap(this.children, 'toChartData')
      };
    }
  }, {
    key: 'src',
    get: function get() {
      if (!_.has(this, '_src')) {
        this._src = this.walk(function (node, src, stop) {
          if (node.src === undefined) return stop(undefined);
          return src += node.src;
        }, '', false);
      }

      return this._src;
    }
  }, {
    key: 'size',
    get: function get() {
      if (!_.has(this, '_size')) {
        this._size = this.walk(function (node, size) {
          return size + node.size;
        }, 0, false);
      }

      return this._size;
    }
  }, {
    key: 'parsedSize',
    get: function get() {
      return this.src ? this.src.length : undefined;
    }
  }, {
    key: 'gzipSize',
    get: function get() {
      if (!_.has(this, '_gzipSize')) {
        this._gzipSize = this.src ? gzipSize.sync(this.src) : undefined;
      }

      return this._gzipSize;
    }
  }]);

  return Folder;
}(Node);

module.exports = {
  Node,
  Module,
  Folder
};
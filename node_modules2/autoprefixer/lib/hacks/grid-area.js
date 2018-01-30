'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Declaration = require('../declaration');
var shorthand = require('./grid-shorthand');

var GridArea = function (_Declaration) {
    _inherits(GridArea, _Declaration);

    function GridArea() {
        _classCallCheck(this, GridArea);

        return _possibleConstructorReturn(this, _Declaration.apply(this, arguments));
    }

    /**
     * Translate grid-area to separate -ms- prefixed properties
     */
    GridArea.prototype.insert = function insert(decl, prefix, prefixes) {
        if (prefix !== '-ms-') return _Declaration.prototype.insert.call(this, decl, prefix, prefixes);

        if (decl.parent.some(function (i) {
            return i.prop === '-ms-grid-row';
        })) {
            return undefined;
        }

        var values = shorthand.parse(decl);

        var _shorthand$translate = shorthand.translate(values, 0, 2),
            rowStart = _shorthand$translate[0],
            rowSpan = _shorthand$translate[1];

        var _shorthand$translate2 = shorthand.translate(values, 1, 3),
            columnStart = _shorthand$translate2[0],
            columnSpan = _shorthand$translate2[1];

        if (rowStart) {
            decl.cloneBefore({
                prop: '-ms-grid-row',
                value: rowStart.toString()
            });
        }

        if (rowSpan) {
            decl.cloneBefore({
                prop: '-ms-grid-row-span',
                value: rowSpan.toString()
            });
        }

        if (columnStart) {
            decl.cloneBefore({
                prop: '-ms-grid-column',
                value: columnStart.toString()
            });
        }

        if (columnSpan) {
            decl.cloneBefore({
                prop: '-ms-grid-column-span',
                value: columnSpan.toString()
            });
        }

        return undefined;
    };

    return GridArea;
}(Declaration);

Object.defineProperty(GridArea, 'names', {
    enumerable: true,
    writable: true,
    value: ['grid-area']
});


module.exports = GridArea;
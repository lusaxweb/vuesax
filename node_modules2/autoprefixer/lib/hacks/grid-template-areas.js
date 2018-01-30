'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Declaration = require('../declaration');

var DOTS = /^\.+$/;

function track(start, end) {
    return { start: start, end: end, span: end - start };
}

function getRows(tpl) {
    return tpl.trim().slice(1, -1).split(/['"]\s*['"]?/g);
}

function getColumns(line) {
    return line.trim().split(/\s+/g);
}

function parseGridAreas(tpl) {
    return getRows(tpl).reduce(function (areas, line, rowIndex) {
        if (line.trim() === '') return areas;
        getColumns(line).forEach(function (area, columnIndex) {
            if (DOTS.test(area)) return;
            if (typeof areas[area] === 'undefined') {
                areas[area] = {
                    column: track(columnIndex + 1, columnIndex + 2),
                    row: track(rowIndex + 1, rowIndex + 2)
                };
            } else {
                var _areas$area = areas[area],
                    column = _areas$area.column,
                    row = _areas$area.row;


                column.start = Math.min(column.start, columnIndex + 1);
                column.end = Math.max(column.end, columnIndex + 2);
                column.span = column.end - column.start;

                row.start = Math.min(row.start, rowIndex + 1);
                row.end = Math.max(row.end, rowIndex + 2);
                row.span = row.end - row.start;
            }
        });
        return areas;
    }, {});
}

var GridTemplateAreas = function (_Declaration) {
    _inherits(GridTemplateAreas, _Declaration);

    function GridTemplateAreas() {
        _classCallCheck(this, GridTemplateAreas);

        return _possibleConstructorReturn(this, _Declaration.apply(this, arguments));
    }

    GridTemplateAreas.prototype.getRoot = function getRoot(parent) {
        if (parent.type === 'atrule' || !parent.parent) {
            return parent;
        }
        return this.getRoot(parent.parent);
    };

    /**
     * Translate grid-template-areas to separate -ms- prefixed properties
     */


    GridTemplateAreas.prototype.insert = function insert(decl, prefix, prefixes, result) {
        if (prefix !== '-ms-') return _Declaration.prototype.insert.call(this, decl, prefix, prefixes);

        var areas = parseGridAreas(decl.value);
        this.getRoot(decl.parent).walkDecls('grid-area', function (gridArea) {
            var value = gridArea.value;
            var area = areas[value];
            delete areas[value];

            if (gridArea.parent.some(function (i) {
                return i.prop === '-ms-grid-row';
            })) {
                return undefined;
            }

            if (area) {
                gridArea.cloneBefore({
                    prop: '-ms-grid-row',
                    value: String(area.row.start)
                });
                if (area.row.span > 1) {
                    gridArea.cloneBefore({
                        prop: '-ms-grid-row-span',
                        value: String(area.row.span)
                    });
                }
                gridArea.cloneBefore({
                    prop: '-ms-grid-column',
                    value: String(area.column.start)
                });
                if (area.column.span > 1) {
                    gridArea.cloneBefore({
                        prop: '-ms-grid-column-span',
                        value: String(area.column.span)
                    });
                }
            }
            return undefined;
        });

        var missed = Object.keys(areas);
        if (missed.length > 0) {
            decl.warn(result, 'Can not find grid areas: ' + missed.join(', '));
        }

        return decl;
    };

    return GridTemplateAreas;
}(Declaration);

Object.defineProperty(GridTemplateAreas, 'names', {
    enumerable: true,
    writable: true,
    value: ['grid-template-areas']
});


module.exports = GridTemplateAreas;
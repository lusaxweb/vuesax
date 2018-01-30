'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Declaration = require('../declaration');
var shorthand = require('./grid-shorthand');

var GridTemplate = function (_Declaration) {
    _inherits(GridTemplate, _Declaration);

    function GridTemplate() {
        _classCallCheck(this, GridTemplate);

        return _possibleConstructorReturn(this, _Declaration.apply(this, arguments));
    }

    /**
     * Do not add prefix for unsupported value in IE
     */
    GridTemplate.prototype.check = function check(decl) {
        return decl.value.includes('/') && !decl.value.includes('[') && !decl.value.includes('"') && !decl.value.includes('\'');
    };

    /**
     * Translate grid-template to separate -ms- prefixed properties
     */


    GridTemplate.prototype.insert = function insert(decl, prefix, prefixes) {
        if (prefix !== '-ms-') return _Declaration.prototype.insert.call(this, decl, prefix, prefixes);

        if (decl.parent.some(function (i) {
            return i.prop === '-ms-grid-rows';
        })) {
            return undefined;
        }

        var _shorthand$parseTempl = shorthand.parseTemplateShortcut(decl),
            templateRows = _shorthand$parseTempl[0],
            templateColumns = _shorthand$parseTempl[1];

        if (templateRows) {
            decl.cloneBefore({
                prop: '-ms-grid-rows',
                value: shorthand.changeRepeat(templateRows.join(''))
            });
        }

        if (templateColumns) {
            decl.cloneBefore({
                prop: '-ms-grid-columns',
                value: shorthand.changeRepeat(templateColumns.join(''))
            });
        }

        return decl;
    };

    return GridTemplate;
}(Declaration);

Object.defineProperty(GridTemplate, 'names', {
    enumerable: true,
    writable: true,
    value: ['grid-template']
});


module.exports = GridTemplate;
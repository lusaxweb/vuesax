'use strict';

var parser = require('postcss-value-parser');

function convert(value) {
    if (value && value.length === 2 && value[0] === 'span' && parseInt(value[1], 10) > 0) {
        return [false, parseInt(value[1], 10)];
    }

    if (value && value.length === 1 && parseInt(value[0], 10) > 0) {
        return [parseInt(value[0], 10), false];
    }

    return [false, false];
}

function translate(values, startIndex, endIndex) {
    var startValue = values[startIndex];
    var endValue = values[endIndex];

    if (!startValue) {
        return [false, false];
    }

    var _convert = convert(startValue),
        start = _convert[0],
        spanStart = _convert[1];

    var _convert2 = convert(endValue),
        end = _convert2[0],
        spanEnd = _convert2[1];

    if (start && !endValue) {
        return [start, false];
    }

    if (spanStart && end) {
        return [end - spanStart, spanStart];
    }

    if (start && spanEnd) {
        return [start, spanEnd];
    }

    if (start && end) {
        return [start, end - start];
    }

    return [false, false];
}

function parse(decl) {
    var node = parser(decl.value);

    var values = [];
    var current = 0;
    values[current] = [];

    for (var _iterator = node.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var i = _ref;

        if (i.type === 'div') {
            current += 1;
            values[current] = [];
        } else if (i.type === 'word') {
            values[current].push(i.value);
        }
    }

    return values;
}

function parseTemplateShortcut(decl) {
    var node = parser(decl.value, { loose: true });

    var values = [];
    var current = 0;
    values[current] = [];

    for (var _iterator2 = node.nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var i = _ref2;

        if (i.type === 'div') {
            current += 1;
            values[current] = [];
        } else {
            values[current].push(parser.stringify(i));
        }
    }

    return values;
}

function walkRepeat(node) {
    var fixed = [];
    for (var _iterator3 = node.nodes, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
        } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
        }

        var i = _ref3;

        if (i.nodes) {
            walkRepeat(i);
        }
        fixed.push(i);
        if (i.type === 'function' && i.value === 'repeat') {
            var first = i.nodes.shift();
            if (first) {
                var count = first.value;
                i.nodes.shift();
                i.value = '';
                fixed.push({ type: 'word', value: '[' + count + ']' });
            }
        }
    }
    node.nodes = fixed;
}

function changeRepeat(value) {
    var ast = parser(value);
    walkRepeat(ast);
    return ast.toString();
}

module.exports = {
    parse: parse,
    translate: translate,
    changeRepeat: changeRepeat,
    parseTemplateShortcut: parseTemplateShortcut
};
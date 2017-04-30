var xregexp = require("xregexp");
var _ = require("lodash");

module.exports = function (source, map) {
    if (this.cacheable) {
        this.cacheable();
    }

    var funcRegex = /XRegExp\((.*)\)/gi;

    var matches = [];
    var replaced = source;
    while (matches = funcRegex.exec(source)) {
        var innerRegex = matches[1].replace(/['"]+/g, '');
        replaced = replaced.replace(new RegExp(funcRegex), xregexp(innerRegex));
    }

    this.callback(null, replaced, map);
};

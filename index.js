"use strict";
exports.__esModule = true;
var ts = require("typescript");
var path_1 = require("path");
var fs_1 = require("fs");
var os_1 = require("os");
var getConf = function (filePath) {
    var p = (0, path_1.parse)(filePath);
    var tmpDir = (0, fs_1.realpathSync)((0, os_1.tmpdir)());
    var program = ts.createProgram([filePath], { module: ts.ModuleKind.CommonJS, outDir: tmpDir });
    program.emit();
    var compiledConfig = (0, path_1.resolve)(tmpDir, "".concat(p.name, ".js"));
    return require(compiledConfig)["default"];
};
exports["default"] = getConf;
console.log(getConf((0, path_1.resolve)(__dirname, './conf.ts')));

"use strict";

var _xmlJs = _interopRequireDefault(require("xml-js"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = global.process.cwd();

function xmi2json(path) {
  var xml = _fs.default.readFileSync(path, 'utf8');

  var options = {
    compact: true,
    spaces: 2,
    nativeType: true,
    nativeTypeAttributes: true,
    addParent: true,
    instructionHasAttributes: true
  };
  return _xmlJs.default.xml2json(xml, options);
}

function createJson(sourcePath, targetPath) {
  var json = xmi2json(sourcePath);
  return _fs.default.writeFileSync(targetPath, json, {
    encoding: 'utf-8'
  });
}

createJson("".concat(cwd, "/resources/PrimitiveTypes.xmi"), "".concat(cwd, "/resources/PrimitiveTypes.json"));
createJson("".concat(cwd, "/resources/StandardProfile.xmi"), "".concat(cwd, "/resources/StandardProfile.json"));
createJson("".concat(cwd, "/resources/UML.xmi"), "".concat(cwd, "/resources/UML.json"));
createJson("".concat(cwd, "/resources/UMLDI.xmi"), "".concat(cwd, "/resources/UMLDI.json"));
//# sourceMappingURL=index.js.map
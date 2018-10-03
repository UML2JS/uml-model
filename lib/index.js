import convert from 'xml-js'
import fs from 'fs'

const cwd = global.process.cwd()

function xmi2json (path) {
  const xml = fs.readFileSync(path, 'utf8');
  const options = {compact: true, spaces: 2};
  return convert.xml2json(xml, options);
}

function createJson (sourcePath, targetPath) {
  const json = xmi2json(sourcePath)
  return fs.writeFileSync(targetPath, json, {encoding: 'utf-8'});
}

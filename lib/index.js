import convert from 'xml-js'
import fs from 'fs'
import PrimitiveParser from './parser'

const cwd = global.process.cwd()

function xmi2json (path) {
  const xml = fs.readFileSync(path, 'utf8');
  const options = {
    compact: true,
    spaces: 2,
    nativeType: true,
    nativeTypeAttributes: true,
    addParent: true,
    instructionHasAttributes: true,
  }
  return convert.xml2json(xml, options);
}

function createJson (sourcePath, targetPath) {
  const json = xmi2json(sourcePath)
  return fs.writeFileSync(targetPath, json, {encoding: 'utf-8'});
}




createJson(`${cwd}/resources/PrimitiveTypes.xmi`, `${cwd}/resources/PrimitiveTypes.json`)
createJson(`${cwd}/resources/StandardProfile.xmi`, `${cwd}/resources/StandardProfile.json`)
createJson(`${cwd}/resources/UML.xmi`, `${cwd}/resources/UML.json`)
createJson(`${cwd}/resources/UMLDI.xmi`, `${cwd}/resources/UMLDI.json`)

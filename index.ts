import * as ts from 'typescript'
import { resolve, parse } from 'path'
import { realpathSync } from 'fs'
import { tmpdir } from 'os'

const getConf = (filePath: string) => {
  const p = parse(filePath)
  const tmpDir =  realpathSync(tmpdir())
  const program = ts.createProgram([filePath], {module: ts.ModuleKind.CommonJS, outDir: tmpDir})
  program.emit()
  const compiledConfig = resolve(tmpDir, `${p.name}.js`)
  return require(compiledConfig).default
}

export default getConf

console.log(getConf(resolve(__dirname, './conf.ts')))

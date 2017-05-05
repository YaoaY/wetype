const shell = require('shelljs')
import { readDir, writeFile } from './util'
import pug = require('pug')

export class Build {

  dirs: any

  async init() {
    this.dirs = await readDir()
  }

  async compileTs() {
    shell.exec('tsc')
  }

  async compilePug() {
    for (let d of this.dirs) {
      let html = pug.renderFile(`${d}/${d}.pug`)
      await writeFile(`dist/pages/${d}/${d}.html`, html)
    }
  }

  async compileLess () {
    for (let d of this.dirs) {
      let html = pug.renderFile(`${d}/${d}.pug`)
      await writeFile(`dist/pages/${d}/${d}.html`, html)
    }
  }


}

new Build().init()
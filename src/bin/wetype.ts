#!/usr/bin/env node

import program = require('commander')
// import fs = require('fs')
const shell = require('shelljs')

program
.version('1.0.0')
.command('build')
.description('构建')

.action(() => {
  // let isGulpfileExists = fs.existsSync('gulpfile.js')
  // if (!isGulpfileExists) {
  //   shell.exec('cp dist/build/gulpfile.js gulpfile.js')
  // }
  shell.exec('gulp')
})



const fs = require('fs')

export function readDir() {
  return new Promise((resolve, reject) => {
    fs.readDir('src/pages', (err, dir) => {
      if (err) {
        return reject(err)
      }
      return resolve(dir)
    })
  })
}

export function writeFile(path: string, obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'string') {
      obj = JSON.stringify(obj)
    }
    fs.writeFile(path, obj, 'utf-8', (err) => {
        return err ? reject(err) : resolve()
    })
  })
}


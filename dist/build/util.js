"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
function readDir() {
    return new Promise((resolve, reject) => {
        fs.readDir('src/pages', (err, dir) => {
            if (err) {
                return reject(err);
            }
            return resolve(dir);
        });
    });
}
exports.readDir = readDir;
function writeFile(path, obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'string') {
            obj = JSON.stringify(obj);
        }
        fs.writeFile(path, obj, 'utf-8', (err) => {
            return err ? reject(err) : resolve();
        });
    });
}
exports.writeFile = writeFile;
//# sourceMappingURL=util.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require('shelljs');
const util_1 = require("./util");
const pug = require("pug");
class Build {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dirs = yield util_1.readDir();
        });
    }
    compileTs() {
        return __awaiter(this, void 0, void 0, function* () {
            shell.exec('tsc');
        });
    }
    compilePug() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let d of this.dirs) {
                let html = pug.renderFile(`${d}/${d}.pug`);
                yield util_1.writeFile(`dist/pages/${d}/${d}.html`, html);
            }
        });
    }
    compileLess() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let d of this.dirs) {
                let html = pug.renderFile(`${d}/${d}.pug`);
                yield util_1.writeFile(`dist/pages/${d}/${d}.html`, html);
            }
        });
    }
}
exports.Build = Build;
new Build().init();
//# sourceMappingURL=build.js.map
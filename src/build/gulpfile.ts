const gulp = require('gulp')
const shell = require('gulp-shell')
const pug = require('pug')
const rename = require('gulp-rename')
const less = require('gulp-less')

gulp.task('config', () => {
  return gulp.src("package.json", { read: false })
    .pipe(shell('node build/build.js'));
})

gulp.task('ts', () => {
  return gulp.src("package.json", { read: false })
    .pipe(shell(["tsc"]));
})

gulp.task('pug', () => {
  return gulp.src('src/pages/**/*.pug')
    .pipe(pug())
    .pipe(rename({ extname: '.wxml' }))
    .pipe(gulp.dest('dist/pages'))
})

gulp.task('less', () => {
  return gulp.src('src/pages/**/*.less')
    .pipe(less())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('dist/pages'))
})

gulp.task('default', ['ts', 'config', 'pug', 'less'])
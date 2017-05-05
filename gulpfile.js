const gulp = require('gulp')
const shell = require('gulp-shell')
const copy = require('gulp-copy')

gulp.task('clean', () => {
  return gulp.src('package.json', { read: false })
  .pipe(shell('rm -rf dist'))
})

gulp.task('copyTypings', () => {
  return gulp.src('src/typings/**/*')
  .pipe(gulp.dest('dist/typings'))
})

gulp.task('ts', () => {
   return gulp.src('package.json', { read: false })
   .pipe(shell('tsc'))
})

gulp.task('default', ['ts', 'copyTypings'])
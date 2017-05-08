const gulp = require('gulp')
const shell = require('gulp-shell')
const concat = require('gulp-concat')
const shell2 = require('shelljs')

// gulp.task('clean', () => {
//   return gulp.src('package.json', { read: false })
//   .pipe(shell('rm -rf dist'))
// })

gulp.task('copyTypings', () => {
  return gulp.src('src/typings/**/*')
  .pipe(gulp.dest('dist/typings'))
})

gulp.task('ts', (cb) => {
   gulp.src('package.json', { read: false })
   .pipe(shell('tsc'))
   cb()
})

// gulp.task('concat', ['ts'], () => {
//   setTimeout(() => {
//     shell2.exec('rm dist/wetype.d.ts')
//     return gulp.src(['./src/typings/wetype.d.ts', './src/wetype.ts'])
//     .pipe(concat('wetype.d.ts'))
//     .pipe(gulp.dest('./dist'))
//   }, 1500)
// })

gulp.task('default', ['ts', 'copyTypings'])
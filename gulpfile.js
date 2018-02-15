const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('./src/styles/**/*')
    .pipe(sass({
      includePaths: ['./node_modules/']
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', ['styles'], () => {
  return gulp.watch('./src/styles/**/*', ['styles'])
})

gulp.task('build', ['styles'])

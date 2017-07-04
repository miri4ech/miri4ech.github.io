var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('default', function() {
  gulp.src('_layouts/css/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('_layouts/css'));
});
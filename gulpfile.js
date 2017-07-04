var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
	gulp.src('assets/_sass/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('assets/css'));
});
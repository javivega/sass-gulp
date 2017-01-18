var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();



gulp.task('compile-sass', function(){
	gulp.src('./src/scss/style.scss')
	.pipe(sass().on('error', function(error){
		return notify().write(error);
	}))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream())
	.pipe(notify("SASS Compilado"));
});

gulp.task('default', ['compile-sass'], function(){
	browserSync.init({
		server: "./"
	});
	gulp.watch('./src/scss/*.scss', ['compile-sass']);
	gulp.watch('./*.html', function(){
		browserSync.reload();
		notify().write("navegador recargado");
	})
})
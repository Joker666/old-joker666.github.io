var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
	return gulp.src('sass/importer.scss')
		.pipe(sass({ sourcemap: true, sourcemapPath: '../sass', require: 'susy' }))
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);

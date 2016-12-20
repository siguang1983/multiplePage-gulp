var gulp = require('gulp'),
	plugins = require("gulp-load-plugins")();

	console.log(plugins);

//清空目录
gulp.task('clean', function() {
    return gulp.src(['./build'], {read: false})
        .pipe(plugins.clean({force: true}));
});


gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        // .pipe($.uglify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('useminA', function() {
  return gulp.src('./src/security/*.html')
    .pipe(plugins.usemin({
      	js: [plugins.uglify()]
    }))
    .pipe(gulp.dest('./build/security'));
});


//默认执行任务
gulp.task('default', ['clean', 'scripts', 'useminA']);


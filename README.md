
## Gulp解决多页面的项目

	需要解的问题

	1、生产环境在src目录，构建后文件都生成到build下包括（ html, js, css, image ）

	2、index.html 引用的 zepto.js和index.js

	3、login.html 引用的 zepto.js 和 a.js、b.js

	4、将两个文件内的引用js或css合并成一个并引用


## 使用gulp-usemin插件来解决上面构建的问题

	http://www.tuicool.com/articles/AzqA3uE

	gulp-usemin使用和注意地方

	1、login.html文件
	
		需要加到 <!-- build: pipeline_id  生成的文件名 --> ... <!-- endbuild -->  之间

			注意: pipeline_id 不能重名，否则Html只会构建第一个html文件


		如果是css文件 <!-- build:css 生成的文件名 --> ... <!-- endbuild -->

		<!-- build:js ../js/security/login.js -->
		<script src="../js/lib/zepto.js"></script>
		<script src="../js/a.js"></script>
		<script src="../js/b.js"></script>
		<!-- endbuild -->


	2、代码不压缩

		// usemin不会压缩代码还是需要在重新执行一下unlifyDistJS来对dist目录代码在重新压缩
		gulp.task('usemin', ['scripts'], function () {
		    return gulp.src('./src/**/*.html')
		        .pipe(plugins.usemin({
		            js: [plugins.uglify()],			
		            css: [plugins.minifyCss()]         
		        }))
		        .pipe(gulp.dest('./dist/'));
		});

		gulp.task('unlifyDistJS', function() {
		    return gulp.src('./dist/**/**/*.js')
		        .pipe(plugins.uglify())
		        .pipe(gulp.dest('./dist/'));
		});
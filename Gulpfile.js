'use strict';

var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , webserver = require('gulp-webserver')
    , sass = require('gulp-sass');

/*
 * Defaults, build process
 */
gulp.task('default', function(){
});

/*
 * Start stub server and web server, compile scss
 */
gulp.task('dev', function(){
  gulp.start('stub', 'serve', 'sass', 'sass:watch');
});

/*
 * Start the stub server
 */
gulp.task('stub', function () {
  nodemon({
    script: 'stub/service.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  });
});
 
/*
 * Start the web server
 */
gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      port: 8888,
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

/*
 * Sass
 */
gulp.task('sass', function(){
    gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/target/dev/css/'));

});

gulp.task('sass:watch', function () {
    gulp.watch('app/scss/*.scss', ['sass']);
});
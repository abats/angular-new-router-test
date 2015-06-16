var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , webserver = require('gulp-webserver');

/*
 * Defaults, build process
 */
gulp.task('default', function(){
});

/*
 * Start stub server and web server
 */
gulp.task('dev', function(){
  gulp.start('stub', 'serve');
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
      fallback: 'app/index.html',
      livereload: true,
      open: true
    }));
});
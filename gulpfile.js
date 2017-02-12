(function() {
  var gulp = require('gulp'),
    webserver = require('gulp-webserver');


  //Local webserver
  gulp.task('webserver', [], function() {
    gulp.src('./')
      .pipe(webserver({
        livereload: {
          enable: true,
        },
        fallback: 'index.html',
        open: true
      }));
  });

  //Default task
  gulp.task('default', ['webserver']);
}());

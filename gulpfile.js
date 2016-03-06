var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('default', () => {
  bs.init(['app/**'], { browser: 'chrome', proxy: "http://localhost/ang" });
});

gulp.task('test', () => {
  bs.init(['app/**'], {
    browser: 'chrome', server: {
      baseDir: './',
      index: "test.htm"
    }
  });
});
var gulp    = require('gulp');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require("gulp-ng-html2js");

gulp.task('scripts', function() {
  gulp.src(['./public/**/*.js', '!./public/**/*.test.js', '!./public/app.min.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('./app.min.js'))
      .pipe(gulp.dest('public'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  watch(['./public/**/*.js', '!./public/**/*.test.js', '!./public/app.min.js'], function () {
    gulp.start('scripts');
  });
});

gulp.task('default', ['scripts', 'watch']);
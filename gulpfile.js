//
//var gulp = require('gulp'),
//    connect = require('gulp-connect'),
//    Proxy = require('gulp-connect-proxy');
//
//gulp.task('connect', function() {
//    connect.server({
//        root: 'app/',
//        middleware: function (connect, opt) {
//            opt.route = '/proxy';
//            var proxy = new Proxy(opt);
//            return [proxy];
//        }
//    });
//});
//gulp.task('default', ['connect']);

var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var ngAnnotate = require('gulp-ng-annotate');
var Proxy = require('gulp-connect-proxy');

gulp.task('copy-html-files', function() {
    gulp.src(['./app/**/*.html', './app/resources/catalog.json', '!./app/index.html'], {base: './app'})
        .pipe(gulp.dest('build/'));
});


gulp.task('usemin', function() {
    gulp.src('!./app/index.html', '')
        .pipe(usemin({
            css: [minifyCss(), 'concat', rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('build/'));

});

gulp.task('build', ['copy-html-files', 'usemin']);

gulp.task('connect', function() {
    connect.server({
        root: 'app/',
        middleware: function (connect, opt) {
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
});

gulp.task('default', ['connect']);

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    Proxy = require('gulp-connect-proxy');

gulp.task('connect', function () {
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


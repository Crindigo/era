var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var watchify = require("watchify");
var gutil = require("gulp-util");
var sass = require("gulp-sass")
var paths = {
    pages: ["src/*.html"]
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    //debug: true,
    entries: ['src/ts/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function() {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
    gulp.src("src/sass/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/css"));
});

function bundle() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/index.html', ['copy-html']);

    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html", "sass"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);

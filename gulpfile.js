const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

const path = {
  sass: "assets/scss/**/*.scss",
  css: "assets/dist/css",
};

function compileSass() {
  return gulp
    .src(path.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.css));
}

function watchFiles() {
  gulp.watch(path.sass, compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json")
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");

function dev() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(uglify())
}
function build() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}
function message(cb, msg = `
    ========================
       Server dev started
    ========================
`) {
    return new Promise(function (resolve, reject) {
        console.log(msg);
        resolve()
    })
}
// gulp.task("clean", clean)
gulp.task("default", function () {
    return gulp.watch('./**/*.ts', gulp.series(message, dev))
})

gulp.task("prod", gulp.series(build, () => message("null", `
    ===============================
    Build Successfully completion !
    ==============================
`)))
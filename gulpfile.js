const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('./src/style/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/style'))
}

function comprimeImagens() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}
exports.default = function() {
    gulp.watch('./src/style/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens))
}

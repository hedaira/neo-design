const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const less = require('gulp-less');

function compTsx() {
    return gulp
        .src('components/**/*.tsx')
        .pipe(ts({
            ...tsconfig.compilerOptions,
            declaration: true,
        }))
        .pipe(gulp.dest('lib'))
}

function compLess() {
    return gulp
        .src('components/style/neoDesign.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
}

function copyFonts() {
    return gulp
        .src(['components/typography/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
}

gulp.task('default', gulp.series(compTsx, compLess, copyFonts));

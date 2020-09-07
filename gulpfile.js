const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const concat = require('gulp-concat');
const less = require('gulp-less');
const svgSprite = require('gulp-svg-sprite');
const fileList = require('gulp-filelist');
const jsonToTsd = require('gulp-json-to-tsd');
const jsonEditor = require('gulp-json-editor');
const data = require('gulp-data');
const swig = require('gulp-swig');
const through2 = require('through2');
const transformLess = require('@ant-design/tools/lib/transformLess');

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
        .src('components/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
}

function copyFonts() {
    return gulp
        .src(['fonts/**/*']).pipe(gulp.dest('dist/fonts'));
}

gulp.task('default', gulp.series(compTsx, compLess, copyFonts));

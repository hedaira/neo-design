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
        .src(['components/**/*.tsx', 'icons/**/*.tsx'])
        .pipe(ts({
            ...tsconfig.compilerOptions,
            declaration: true,
        }))
        .pipe(gulp.dest('lib'))
}

function compSvgList() {
    return gulp
        .src('svg/**/*.svg')
        .pipe(fileList('filelist.json', { flatten: true, removeExtensions: true }))
        .pipe(gulp.dest('icons'));
}

function compSvgListData() {
    return gulp
        .src('svg/**/*.svg')
        .pipe(data(function(file, callback) {
            console.log(file.path.substring(
                file.path.lastIndexOf('\\') + 1, file.path.lastIndexOf('.')
            ));

            let content = file.path.substring(file.path.lastIndexOf('\\') + 1, file.path.lastIndexOf('.'));
            return callback(undefined, { content: content });
        }))
        .pipe(gulp.dest('icons'));
}

function comJsonTsd() {
    return gulp
        .src('icons/**/*.json')
        .pipe(jsonToTsd())
        .pipe(gulp.dest('icons'));
}

function compSvg() {
    return gulp
        .src('svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('icons'));
}

function compLess() {
    return gulp
        .src('components/**/*.less')
        .pipe(
            through2.obj(function (file, encoding, next) {
                this.push(file.clone());
                if (
                    file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
                    file.path.match(/(\/|\\)style(\/|\\)v2-compatible-reset\.less$/)
                ) {
                    transformLess(file.path)
                        .then(css => {
                            file.contents = Buffer.from(css);
                            file.path = file.path.replace(/\.less$/, '.css');
                            this.push(file);
                            next();
                        })
                        .catch(e => {
                            console.error(e);
                        });
                } else {
                    next();
                }
            })
        )
        .pipe(concat('neoDesign.css'))
        .pipe(gulp.dest('dist'))
}

gulp.task('default', gulp.series(compTsx, compSvgList, comJsonTsd, compSvg, compLess));
// gulp.task('default', gulp.series(compSvgList, compSvgListData));

const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const concat = require('gulp-concat');
const less = require('gulp-less');
const through2 = require('through2');
const transformLess = require('@ant-design/tools/lib/transformLess');

function compTsx() {
    return gulp
        .src('src/**/*.tsx')
        .pipe(ts({
            ...tsconfig.compilerOptions,
            declaration: true,
        }))
        .pipe(gulp.dest('lib'))
}

function compLess() {
    return gulp
        .src('src/**/*.less')
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
        .pipe(concat('neoAntd.css'))
        .pipe(gulp.dest('dist'))
}

gulp.task('default', gulp.series(compTsx, compLess));

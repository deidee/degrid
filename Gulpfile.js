'use strict';

const gulp = require('gulp');
const pipeline = require('readable-stream').pipeline;
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});


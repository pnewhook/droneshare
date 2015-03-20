"use strict";

var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function () {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest("wwwroot/lib"));
    
});

gulp.task('default', function () {
    
});
"use strict";

var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var gulpDebug = require('gulp-debug');


gulp.task('bower', function () {
    return bower();
})

gulp.task('vendor', ['bower'], function () {
    return gulp.src(['spin.js/spin.js',
            'ladda-bootstrap/dist/ladda.js',
            '../Scripts/custom/atmosphere.js',
            'jquery/jquery.js',
            'flot/jquery.flot.js',
            'flot/jquery.flot.time.js',
            'ng-file-upload/angular-file-upload-shim.js',
            'angular/angular.js',
            '../Scripts/libs/mapbox.js',
            'ngprogress-lite/ngprogress-lite.js',
            'angular-animate/angular-animate.min.js',
            'angular-route/angular-route.js',
            '../Scripts/custom/angular-leaflet-directive.js',
            '../Scripts/custom/angular-atmosphere.js',
            'angulartics/dist/angulartics.js',
            'angulartics/angulartics-ga.min.js',
            '..Scripts/libs/ui-bootstrap-tpls-0.11.0.min.js',
            'angular-flot/angular-flot.js',
            'angular-social/angular-social.js',
            'ng-file-upload/angular-file-upload.min.js',
            'nginfinitescroll/build/ng-infinite-scroll.js',
            'ng-ladda-bootstrap/ng-ladda-bootstrap.js',
            'highcharts-ng/dist/highcharts-ng.js'])
        .pipe(gulpDebug({ title: 'Vendor Debug' }))
        .pipe(gulpConcat('vendor.js'))
        .pipe(gulp.dest("wwwroot/js"));
});

gulp.task('app', function () {
    return gulp.src()
        .pipe(gulpConcat('app.js'))
        .pipe(gulp.dest('wwwroot/js/'));
});

gulp.task('default', ['vendor', 'app'], function () {

});
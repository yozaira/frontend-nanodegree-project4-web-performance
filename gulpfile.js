// include gulp
var gulp = require('gulp');
// debug plug-ins
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
// general plug-ings
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// js plug-ins
var uglify = require('gulp-uglify');
// css plug-ins
var minifyCSS = require('gulp-minify-css');
// img plug-ins
var imagemin = require('gulp-imagemin');

var watch = require('gulp-watch');

/*
npm install gulp-watch gulp-uglify gulp-rename gulp-concat gulp-strip-debug gulp-minify-html gulp-image-optimization --save-dev
*/

// this one works
// https://www.npmjs.com/package/gulp-image-optimization
// npm install --save-dev gulp-image-optimization
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['images/*.{png,jpg,jpeg}'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('production-version/build/images'))
    .on('end', cb).on('error', cb);
});


// JS hint task
gulp.task('jshint', function() {
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



// JS strip debugging and minify vendor scripts files
gulp.task('js-mobile', function() {
    gulp.src('js/mobile/*.js')
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('production-version/build/js/'));
})

// JS concat, strip debugging and minify mobile scripts
gulp.task('scripts', function() {
    gulp.src('js/mobile/*.js')
    // .pipe(concat('scripts.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('production-version/build/js/'));
});


// concatenate the necessary libs downloaded with bower,
// in this case jquery and knockoutjs.
gulp.task('style-main', function() {
  return gulp.src(['css/libs/*.css',
                   'css/style-main.css'
                  ])
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
     // add a suffix to avoid confusion
    .pipe(rename({suffix: '.min'}))
     // the destination of new uncssed file
    .pipe(gulp.dest('production-version/build/css/'));
});


// concatenate the necessary libs downloaded with bower,
// in this case jquery and knockoutjs.
gulp.task('style-mobile', function() {
  return gulp.src(['css/libs/bootstrap-grid.css',
                   'css/style-mobile.css'
                  ])
    .pipe(concat('mobile.css'))
    .pipe(minifyCSS())
     // add a suffix to avoid confusion
    .pipe(rename({suffix: '.min'}))
     // the destination of new uncssed file
    .pipe(gulp.dest('production-version/build/css/'));
});


// Minify html with minimize.
// https://www.npmjs.com/package/gulp-minify-html
// npm install --save-dev gulp-minify-html
var minifyHTML = require('gulp-minify-html');

gulp.task('html-main', function() {
    var opts = {
       comments:true,
       spare:true
    };
   gulp.src('index.html')
    .pipe(minifyHTML(opts))
    //.pipe(rename('index.html'))
    .pipe(gulp.dest('production-version/'))
});


// Minify html with minimize.
var minifyHTML = require('gulp-minify-html');

gulp.task('html-mobile', function() {
    var opts = {
       comments:true,
       spare:true
    };
   gulp.src('./pizza.html')
    .pipe(minifyHTML(opts))
    // .pipe(rename('pizza2.html'))
    .pipe(gulp.dest('production-version/'))
});


// Minify html with minimize.
var minifyHTML = require('gulp-minify-html');

gulp.task('html-project', function() {
    var opts = {
       comments:true,
       spare:true
    };
   gulp.src('project-2048.html')
    .pipe(minifyHTML(opts))
    // .pipe(rename('project-2048-2.html'))
    .pipe(gulp.dest('production-version/'))
});


// add a watch task that will automatically run specific
// tasks when specific files change.when gulp watch
// run in the command line, it will update files within the
// src directory when a file change is made
gulp.task('watch', function() {

    // watch for JS changes
    gulp.watch('js/*.js', ['jshint']);
    gulp.watch('js/*.js', ['scripts']);

    // watch for CSS changes
    gulp.watch('css/*.css', ['style-main']);
    gulp.watch('css/*.css', ['style-mobile']);

    // watch for HTML changes
    gulp.watch('./*.html', ['html-main']);
    gulp.watch('./*.html', ['minify-mobile']);
    gulp.watch('./*.html', ['minify-project']);

    // watch for Images files changes
    gulp.watch('images/**/*', ['images']);

});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['js-mobile', 'style-main', 'style-mobile','images', 'html-main', 'html-mobile', 'watch']);
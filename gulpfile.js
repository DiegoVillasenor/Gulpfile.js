// var JSPATH = '../themes/edaa-theme/js/',
// 	  MAINCSS = '../themes/edaa-theme/style.css';

var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); //sass sourcemaps
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('hello', function() {
  console.log(gulp.src);
});

gulp.task('sass', function(){
  return gulp.src('test/scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dest'))
    // .pipe(browserSync.reload({ stream: true }))
});


/**
 * To copy files from one place to another.
 *
 * @src http://ilikekillnerds.com/2014/07/copying-files-from-one-folder-to-another-in-gulp-js/
 * @param  {[type]} ) {              gulp.src('./bower_components/font-awesome/fonts*.{ttf,woff,eof,svg}')   .pipe(gulp.dest('./fonts'));} [description]
 * @return {[type]}   [description]
 */
gulp.task('copyfonts', function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./fonts'));
});
 
// gulp.task('scripts', function() {
//   gulp.src([JSPATH+'swiper.jquery.min.js', JSPATH+'functions.js'])
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./themes/edaa-theme/js/'))
//     .pipe(browserSync.reload({ stream: true}))
// });

// gulp.task('stream', function () {
//     return gulp.src(MAINCSS)
//         .pipe(watch(MAINCSS))
//         .pipe(gulp.dest(MAINCSS));
// });
 
// gulp.task('callback', function (cb) {
//     watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(watch('css/**/*.css'))
//             .on('end', cb);
//     });
// });

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('test/scss/**/*.scss', ['sass']); 
  // gulp.watch('*.js', ['scripts']); 

});

gulp.task('browser-sync', function() {
  browserSync.init(['dest/*.css'],{ //files to inject
     host: "localhost",
            port: 8888
  });
});

gulp.task('default', ['browser-sync']);
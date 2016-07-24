// var JSPATH = '../themes/edaa-theme/js/',
// 	  MAINCSS = '../themes/edaa-theme/style.css';
/**
 * Required modules
 * @type {[]}
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gutil = require("gulp-util");

//Sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var watch = require('gulp-watch');

//JS
var babel = require("gulp-babel");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');
var concat = require('gulp-concat');

//sass and js sourcemaps
var sourcemaps = require('gulp-sourcemaps'); 

/**
 * Config options
 * @type {}
 */
var sassdocOptions = {
  dest: './public/sassdoc',
  package: {
    title: 'Mazorca',
    name: 'Mazorca',
    version: '0.0.3',
    license: 'GNU',
    homepage: 'github.com/el-cultivo/mazoroca',
    description: 'Scss Framework'
  }
};



gulp.task('hello', function() {
  console.log(gulp.src);
});

gulp.task('sass', function(){
  return gulp.src('test/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('../sourcemaps/scss/'))
    .pipe(gulp.dest('dest'))
    .pipe(browserSync.stream());
});



gulp.task('sassdoc', function () {
  return gulp
    .src('test/scss/style.scss')
    .pipe(sassdoc(sassdocOptions))
    .resume();
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
 
gulp.task("scripts", function () {
  return gulp.src("test/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("../sourcemaps/scss/"))
    .pipe(gulp.dest("dest"));
});


gulp.task('webpack', function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: {
                warnings: false
            }
          })
  ];

  // run webpack
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }));
    callback();
  });
});

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

gulp.task('watch', ['browser-sync', 'sass', 'webpack'], function() {
  gulp.watch('test/scss/**/*.scss', ['sass']); 
  gulp.watch('test/js/**/*.js', ['webpack']); 
  gulp.watch('dest/*.js', browserSync.reload); 

  // browserSync.reload("**/*.css");

});

gulp.task('browser-sync', function() {
  browserSync.init(['dest/*.css'],{ //files to inject
     proxy: "localhost:8888"
  });
});

gulp.task('default', ['browser-sync']);









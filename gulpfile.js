var JSPATH = '../themes/edaa-theme/js/',
	  MAINCSS = '../themes/edaa-theme/style.css';

var gulp = require('gulp');
// var concat = require('gulp-concat');
// var browserSync = require('browser-sync');

	//watch = require('gulp-watch');

//gulp.task('default', ['scripts']);
gulp.task('default', function() { console.log(JSPATH)});

 
gulp.task('scripts', function() {
  gulp.src([JSPATH+'swiper.jquery.min.js', JSPATH+'functions.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./themes/edaa-theme/js/'))
    .pipe(browserSync.reload({ stream: true}))
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
// 
// gulp.task('watch', ['browserSync', 'scripts'], function() {
//   //gulp.watch(MAINCSS, ['sass']); 
//   gulp.watch(JSPATH+'*.js', ['scripts']); 

// });

// gulp.task('browserSync', function() {
//   browserSync({
//     proxy: 'localhost:8888'
//   });
// });
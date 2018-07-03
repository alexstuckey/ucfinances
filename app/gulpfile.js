var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass')
const concat = require('gulp-concat')

gulp.task('sass', function () {
 return gulp.src(['./src/sass/**/*.scss',
  'node_modules/bootstrap/scss/bootstrap.scss',
  'node_modules/select2/dist/css/select2.min.css',
  'node_modules/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css'])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./static/css'))
})

// CSS
gulp.task('css', function() {
   gulp.src([

    ])
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('./static/css'))
})

// Move JS Files to ./static/js
gulp.task('js', function() {
  return gulp.src([
    './src/js/**/*.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/tether/dist/js/tether.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/select2/dist/js/select2.min.js',
    'node_modules/gijgo/js/core.js',
    'node_modules/gijgo/js/datepicker.js',
    ])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./static/js"))
})

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./static/fonts'))
})

gulp.task('images', function() {
  return gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('./static/images'))
})

gulp.task('default', ['sass', 'css', 'js', 'fonts', 'images'])

// Watches project resouce directory for changes
gulp.task('serve', ['sass', 'css', 'js', 'fonts'], function() {

  gulp.watch('./src/sass/**/*.scss', ['sass'])
  gulp.watch('./src/js/**/*.js', ['js'])
  gulp.watch('./src/fonts/**/*', ['fonts'])
  gulp.watch('./src/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images'])
})

var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('samples', function(){
  gulp.src(['src/*.py',  '!src/config.py'])
    .pipe(replace(/^import config\n/, ''))
    .pipe(replace('config.server_address', ''))
    .pipe(gulp.dest('./samples'));
});
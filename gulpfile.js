var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: '.',
        open: true,
        port: 8080,
        ui: false
    });

    gulp.watch(['./*.html'], browserSync.reload);
});
const gulpif = require("gulp-if")

const img = () => {                        
    return $.gulp.src($.path.img.src)
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title:"img",
            message: error.message
        }))
    }))
    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gp.webp())
    .pipe($.gulp.dest($.path.img.dest))   
    .pipe($.gulp.src($.path.img.src))
    .pipe($.gp.newer($.path.img.dest))
    .pipe(gulpif($.app.isProd, $.gp.imagemin($.app.imagemin)))
    .pipe($.gulp.dest($.path.img.dest));   
                     
}
module.exports = img;
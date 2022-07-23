const webpack = require("webpack-stream")

const js = () => {                        
    return $.gulp.src($.path.js.src, {sourcemaps: $.app.isDev})  // ** все файлы  вне зависимости от вложенности // массивы ["./src/{css,html}/*.{html, css}", "!(исключение)./src/{css,html}/*.{html, css}"] // * все файлы  //   {css, html} выборочно 
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title:"js",
            message: error.message
        }))
    }))
    .pipe($.gp.babel())
    .pipe(webpack($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.app.isDev}))      
                     
}
module.exports = js;
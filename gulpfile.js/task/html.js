const {src, dest, watch, series, parallel} = require("gulp"); 


// конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

const fileInclude = require('gulp-file-include');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');


// const html = () => {
//     return src(path.html.src)  // ** все файлы  вне зависимости от вложенности // массивы ["./src/{css,html}/*.{html, css}", "!(исключение)./src/{css,html}/*.{html, css}"] // * все файлы  //   {css, html} выборочно
//     .pipe(plumber({
//         errorHandler: notify.onError(error => ({
//             title:"HTML",
//             message: error.message
//         }))
//     }))
//     .pipe(fileInclude())
//     .pipe(webpHtml())
//     .pipe(size({ title: "До сжатия"}))
//     .pipe(htmlmin(app.htmlmin))
//     .pipe(size({ title: "После сжатия"}))
//     .pipe(dest(path.html.dest))
// }

const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title:"Html",
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ title: "До сжатия"}))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: "После сжатия"}))
        .pipe(dest(path.html.dest))
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.browserSync.stream());

}
module.exports = html;
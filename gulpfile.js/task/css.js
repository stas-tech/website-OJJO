const {src, dest} = require("gulp"); // ?    const gulp = require("gulp")

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');

// конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

const css = () => {                        
    return src(path.css.src, {sourcemaps: true})  // ** все файлы  вне зависимости от вложенности // массивы ["./src/{css,html}/*.{html, css}", "!(исключение)./src/{css,html}/*.{html, css}"] // * все файлы  //   {css, html} выборочно 
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title:"CSS",
            message: error.message
        }))
    }))
    .pipe(concat("main.css")) 
    .pipe(cssimport()) 
    .pipe(autoprefixer()) 
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size( { title: "main.css" }))
    .pipe(dest(path.css.dest, {sourcemaps: true})) 
    .pipe(rename({ suffix: ".min"})) 
    .pipe(csso()) 
    .pipe(size( { title: "main.min.css" }))
    .pipe(dest(path.css.dest, {sourcemaps: true}))      
                     
}
module.exports = css;